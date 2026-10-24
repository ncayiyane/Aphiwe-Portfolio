import { useState, useEffect, useRef, useCallback } from 'react';
import { Send, X, Loader2, MessageSquare } from 'lucide-react';
import { sendMessage, checkHealth, ChatMessage } from '@/utils/api';
import { projects } from '@/data/portfolio';

const SUGGESTED_QUESTIONS = [
  'Tell me about Aphiwe',
  'Show me his AI projects',
  'What is his tech stack?',
  'Tell me about his software experience',
  'What projects use React?',
  'Why should a recruiter consider Aphiwe?',
];

export default function ChatAgent({ className = '' }: { className?: string }) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isOnline, setIsOnline] = useState(false);
  const [conversationId, setConversationId] = useState('');
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  useEffect(() => {
    checkHealth().then(setIsOnline);
  }, []);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      role: 'user',
      content: input.trim(),
      timestamp: new Date().toISOString(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setError(null);
    setIsLoading(true);

    try {
      const { response, conversationId: newConvId } = await sendMessage(
        userMessage.content,
        conversationId
      );

      if (response.success && response.response) {
        const assistantMessage: ChatMessage = {
          role: 'assistant',
          content: response.response,
          timestamp: new Date().toISOString(),
        };
        setMessages((prev) => [...prev, assistantMessage]);
        setConversationId(newConvId);
      } else {
        setError(response.error || 'Failed to get response');
      }
    } catch (err) {
      setError('AI assistant temporarily unavailable. Please explore the portfolio directly.');
      console.error('Chat error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleClear = () => {
    setMessages([]);
    setConversationId('');
    setError(null);
    setInput('');
  };

  const handleSuggestedQuestion = (question: string) => {
    setInput(question);
    setTimeout(() => handleSend(), 100);
  };

  const renderMessageContent = (content: string) => {
    const lines = content.split('\n');
    return lines.map((line, index) => {
      if (line.startsWith('•') || line.startsWith('-')) {
        return (
          <li key={index} className="ml-4 list-disc text-gray-300">
            {line.replace(/^[•-]\s*/, '')}
          </li>
        );
      }
      if (line.trim() === '') {
        return <br key={index} />;
      }

      const projectMention = projects.find((p) =>
        line.toLowerCase().includes(p.name.toLowerCase())
      );

      if (projectMention) {
        const parts = line.split(new RegExp(projectMention.name, 'gi'));
        return (
          <p key={index} className="text-gray-300 mb-2">
            {parts.map((part, i) =>
              i === parts.length - 1 ? (
                part
              ) : (
                <>
                  {part}
                  <a
                    href={projectMention.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-terminal-glow hover:text-terminal-cyan underline underline-offset-2 decoration-terminal-glow/30 hover:decoration-terminal-cyan/50 transition-colors"
                  >
                    {projectMention.name}
                  </a>
                </>
              )
            )}
          </p>
        );
      }

      return (
        <p key={index} className="text-gray-300 mb-2">
          {line}
        </p>
      );
    });
  };

  return (
    <section id="chatagent" className={`relative py-24 sm:py-32 grid-bg ${className}`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="section-label mb-3">// MODULE 05</div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            AI PORTFOLIO AGENT
          </h2>
          <div className="w-20 h-px bg-terminal-glow/30 mx-auto" />
          <p className="mt-6 text-gray-400 text-sm sm:text-base max-w-xl mx-auto">
            Ask me anything about my work, skills, projects, experience, or career.
          </p>
        </div>

        {/* Status indicator */}
        <div className="mb-8 flex items-center justify-center gap-3">
          <span
            className={`w-2 h-2 rounded-full ${
              isOnline ? 'bg-terminal-glow animate-glow-pulse' : 'bg-terminal-amber'
            }`}
          />
          <span className="font-mono text-xs text-gray-400 tracking-wider">
            STATUS: {isOnline ? '● ONLINE' : '○ OFFLINE'}
          </span>
        </div>

        {/* Chat interface */}
        <div className="glass-panel rounded-lg overflow-hidden">
          {/* Messages area */}
          <div className="h-[500px] sm:h-[600px] overflow-y-auto p-4 sm:p-6 space-y-4 bg-terminal-bg/50">
            {messages.length === 0 && !isLoading && (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <MessageSquare className="w-12 h-12 text-terminal-glow/60 mb-4" />
                <p className="text-gray-400 text-sm mb-6">
                  Start a conversation about Aphiwe's portfolio
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {SUGGESTED_QUESTIONS.slice(0, 3).map((question) => (
                    <button
                      key={question}
                      onClick={() => handleSuggestedQuestion(question)}
                      className="px-3 py-1.5 text-xs font-mono text-terminal-glow border border-terminal-glow/30 rounded hover:bg-terminal-glow/10 hover:border-terminal-glow/50 transition-colors"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] sm:max-w-[75%] rounded-lg p-3 sm:p-4 ${
                    msg.role === 'user'
                      ? 'bg-terminal-glow/10 border border-terminal-glow/30'
                      : 'bg-terminal-surface/60 border border-terminal-cyan/20'
                  }`}
                >
                  <div className="font-mono text-[10px] text-gray-500 mb-1">
                    {msg.role === 'user' ? 'VISITOR' : 'APH1WE.AI'}
                  </div>
                  <div className="text-sm sm:text-base leading-relaxed">
                    {renderMessageContent(msg.content)}
                  </div>
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-terminal-surface/60 border border-terminal-cyan/20 rounded-lg p-4">
                  <div className="font-mono text-[10px] text-gray-500 mb-2">
                    APH1WE.AI
                  </div>
                  <div className="flex items-center gap-2">
                    <Loader2 className="w-4 h-4 text-terminal-glow animate-spin" />
                    <span className="text-sm text-gray-400">Thinking...</span>
                  </div>
                </div>
              </div>
            )}

            {error && (
              <div className="flex justify-start">
                <div className="bg-terminal-amber/10 border border-terminal-amber/30 rounded-lg p-4">
                  <div className="font-mono text-[10px] text-terminal-amber mb-2">
                    ERROR
                  </div>
                  <p className="text-sm text-terminal-amber">{error}</p>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input area */}
          <div className="border-t border-terminal-glow/20 p-4 bg-terminal-surface/40">
            {/* Suggested questions */}
            {messages.length === 0 && !isLoading && (
              <div className="mb-4 flex flex-wrap gap-2">
                {SUGGESTED_QUESTIONS.map((question) => (
                  <button
                    key={question}
                    onClick={() => handleSuggestedQuestion(question)}
                    className="px-3 py-1.5 text-xs font-mono text-gray-400 border border-gray-700 rounded hover:text-terminal-glow hover:border-terminal-glow/50 transition-colors"
                  >
                    {question}
                  </button>
                ))}
              </div>
            )}

            <div className="flex gap-2">
              <textarea
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Ask a question about Aphiwe..."
                rows={1}
                className="flex-1 bg-terminal-bg/50 border border-terminal-glow/20 rounded-lg px-4 py-3 text-sm text-gray-300 placeholder-gray-600 focus:outline-none focus:border-terminal-glow/50 resize-none font-mono"
                disabled={isLoading || !isOnline}
              />
              <button
                onClick={handleSend}
                disabled={!input.trim() || isLoading || !isOnline}
                className="px-4 py-3 bg-terminal-glow/10 border border-terminal-glow/30 rounded-lg text-terminal-glow hover:bg-terminal-glow/20 hover:border-terminal-glow/50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {isLoading ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <Send className="w-5 h-5" />
                )}
              </button>
              {messages.length > 0 && (
                <button
                  onClick={handleClear}
                  className="px-4 py-3 bg-terminal-surface/50 border border-gray-700 rounded-lg text-gray-400 hover:text-terminal-amber hover:border-terminal-amber/50 transition-colors"
                  title="Clear conversation"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>
            <div className="mt-2 text-[10px] text-gray-600 font-mono">
              Press Enter to send, Shift+Enter for new line
            </div>
          </div>
        </div>

        {/* Architecture note */}
        <div className="mt-10 glass-panel corner-decor rounded-lg p-6">
          <div className="flex items-center gap-3 mb-3">
            <MessageSquare className="w-4 h-4 text-terminal-glow/60" />
            <h3 className="font-mono text-xs text-terminal-glow/60 uppercase tracking-wider">
              About This Agent
            </h3>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            This AI assistant answers questions using only verified information from Aphiwe's portfolio
            — projects, skills, experience, and education. It uses a Retrieval-Augmented Generation
            (RAG) architecture to ground responses in real portfolio data rather than generating
            fabricated information.
          </p>
        </div>
      </div>
    </section>
  );
}
