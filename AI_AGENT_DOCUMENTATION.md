# AI Portfolio Agent - Module 05

## Overview

The AI Portfolio Agent is a real conversational AI assistant that answers questions about Aphiwe's portfolio using only verified information from the portfolio data. It uses a Retrieval-Augmented Generation (RAG) architecture to ground responses in real portfolio data rather than generating fabricated information.

## Architecture

```
Visitor
  ↓
Chat UI (React Component)
  ↓
Backend API (Express.js)
  ↓
Question Processing
  ↓
Portfolio Retrieval (portfolioService.js)
  ↓
Relevant Context Selection
  ↓
LLM Provider (OpenAI/Groq/etc.)
  ↓
Grounded Response
  ↓
Chat UI
```

### Components

#### Frontend
- **ChatAgent.tsx**: Main chat interface component with:
  - Message display with user/AI distinction
  - Typing/loading indicator
  - Auto-scroll to latest message
  - Suggested questions
  - Project link rendering
  - Conversation memory
  - Clear conversation functionality
  - Keyboard navigation (Enter to send, Shift+Enter for multiline)
  - Mobile responsive design
  - Matrix/cyberpunk styling

- **api.ts**: API client utility for:
  - Sending messages to backend
  - Health checks
  - Error handling

#### Backend
- **server.js**: Express server with:
  - CORS configuration
  - Request size limiting
  - Chat routes
  - Portfolio routes
  - Error handling
  - Health check endpoint

- **llmService.js**: LLM integration with:
  - Provider abstraction (OpenAI, Groq, etc.)
  - Context retrieval logic
  - System prompt with anti-hallucination rules
  - Response generation
  - Source identification

- **portfolioService.js**: Portfolio data management with:
  - TypeScript data parsing
  - Profile, experience, education, projects, skills retrieval
  - Project search functionality
  - Context formatting

## Environment Variables

### Frontend (.env)
```bash
VITE_API_URL=http://localhost:3001
```

### Backend (server/.env)
```bash
# Backend Configuration
PORT=3001
NODE_ENV=development
FRONTEND_URL=http://localhost:5173

# LLM Provider Configuration
LLM_PROVIDER=openai
LLM_API_KEY=your_api_key_here
LLM_MODEL=gpt-3.5-turbo
LLM_BASE_URL=https://api.openai.com/v1

# For Groq (example):
# LLM_PROVIDER=groq
# LLM_API_KEY=your_groq_api_key
# LLM_MODEL=llama3-70b-8192
# LLM_BASE_URL=https://api.groq.com/openai/v1

# GitHub Configuration (for future GitHub integration)
GITHUB_TOKEN=your_github_token_here
GITHUB_USERNAME=ncayiyane
```

## Setup Instructions

### 1. Install Dependencies

**Frontend:**
```bash
npm install
```

**Backend:**
```bash
cd server
npm install
```

### 2. Configure Environment Variables

**Frontend:**
Copy `.env.example` to `.env` and configure:
```bash
cp .env.example .env
```

**Backend:**
Copy `server/.env.example` to `server/.env` and configure:
```bash
cp server/.env.example server/.env
```

Add your LLM API key to `server/.env`.

### 3. Start the Backend

```bash
cd server
npm run dev
```

The backend will start on `http://localhost:3001`.

### 4. Start the Frontend

```bash
npm run dev
```

The frontend will start on `http://localhost:5173`.

## How It Works

### 1. Context Retrieval

When a user asks a question, the system retrieves relevant portfolio context:

- **Profile questions**: Returns profile information
- **Experience questions**: Returns work experience
- **Project questions**: Searches and returns relevant projects
- **Skills questions**: Returns skills by category
- **Education questions**: Returns education history
- **AI/ML questions**: Returns AI-focused projects

### 2. LLM Integration

The retrieved context is passed to the LLM with a strict system prompt that:

- Instructs the AI to answer ONLY using provided context
- Requires the AI to say "I don't have that information" when data is missing
- Prevents fabrication of jobs, companies, degrees, technologies
- Enforces concise, professional responses
- Maintains anti-hallucination rules

### 3. Response Generation

The LLM generates a response grounded in the retrieved context. The system:

- Identifies sources used in the response
- Renders project links when projects are mentioned
- Maintains conversation history for follow-up questions
- Handles errors gracefully

## Anti-Hallucination Measures

The system includes multiple safeguards:

1. **System Prompt**: Explicit instructions to use only provided context
2. **Context Limitation**: Only relevant data is sent to the LLM
3. **Unknown Response**: Standard phrase for missing information
4. **Source Tracking**: Identifies which portfolio data was used
5. **No Seniority Exaggeration**: Prevents inflating experience levels

## Testing

### Frontend Tests
```bash
npm test
```

### Backend Tests
```bash
cd server
npm test
```

### Test Coverage

Tests cover:
- API client (send message, health check)
- Error handling
- Network failures
- LLM service integration
- Portfolio data parsing
- Context retrieval

## Adding New Projects

To add a new project to the portfolio:

1. Edit `src/data/portfolio.ts`
2. Add the project to the `projects` array with the following structure:

```typescript
{
  name: 'Project Name',
  description: 'Brief description',
  language: 'TypeScript',
  url: 'https://github.com/ncayiyane/project',
  homepage: 'https://project-url.com',
  updatedAt: '2026-01-01',
  stars: 0,
  categories: ['AI/ML', 'WEB'],
  technologies: ['React', 'TypeScript', 'Node.js'],
  featured: true,
  status: 'ACTIVE DEVELOPMENT',
  detailedDescription: 'Full description...',
  problem: 'What problem does it solve?',
  howItWorks: ['Step 1', 'Step 2'],
  architecture: 'Architecture description',
  whatIBuilt: ['Feature 1', 'Feature 2'],
  techStack: {
    frontend: ['React', 'TypeScript'],
    backend: ['Node.js', 'Express'],
    database: ['PostgreSQL'],
  },
  engineeringChallenges: 'Challenges faced',
  currentStatus: 'Current state',
  limitations: 'Known limitations',
  whatILearned: ['Skill 1', 'Skill 2'],
}
```

3. Restart the backend to reload portfolio data

## Changing LLM Provider

To switch LLM providers:

1. Edit `server/.env`
2. Change `LLM_PROVIDER`, `LLM_API_KEY`, `LLM_MODEL`, and `LLM_BASE_URL`
3. Restart the backend

Example for Groq:
```bash
LLM_PROVIDER=groq
LLM_API_KEY=gsk_...
LLM_MODEL=llama3-70b-8192
LLM_BASE_URL=https://api.groq.com/openai/v1
```

## GitHub Integration (Future)

The architecture supports future GitHub integration:

- GitHub service abstraction is ready
- Configuration for `GITHUB_TOKEN` and `GITHUB_USERNAME` exists
- Can retrieve live repository data
- Will cache GitHub data for performance

## Performance

- Async backend operations
- Reasonable LLM timeouts
- Context retrieval limits
- Session-level conversation memory (no database required for MVP)
- Efficient data parsing

## Security

- API keys never exposed to frontend
- Request size limiting (10kb)
- Input validation
- Error message sanitization (no stack traces to visitors)
- No arbitrary code execution
- Prompt injection defense in system prompt

## Accessibility

- Keyboard navigation support
- Screen reader compatible
- Proper labels and focus states
- Sufficient contrast
- Mobile responsive
- Reduced motion support

## Troubleshooting

### Backend won't start
- Check that Node.js is installed
- Verify dependencies are installed: `cd server && npm install`
- Check that port 3001 is not in use

### Frontend can't connect to backend
- Verify backend is running on `http://localhost:3001`
- Check `VITE_API_URL` in `.env`
- Check CORS configuration in `server/server.js`

### AI responses are generic or incorrect
- Verify `LLM_API_KEY` is correct in `server/.env`
- Check that portfolio data is being parsed correctly
- Review system prompt in `server/services/llmService.js`
- Check console for LLM API errors

### Portfolio data not loading
- Verify `src/data/portfolio.ts` exists
- Check parsing logic in `server/services/portfolioService.js`
- Restart the backend after modifying portfolio data

## Future Enhancements

Potential improvements:

1. **Streaming Responses**: Implement streaming for faster perceived response time
2. **GitHub Integration**: Live repository data retrieval
3. **Database**: Persistent conversation storage
4. **Advanced RAG**: Vector database for semantic search
5. **Multi-turn Memory**: Better conversation context handling
6. **Analytics**: Track questions and response quality
7. **Rate Limiting**: Prevent abuse
8. **Caching**: Cache LLM responses for common questions

## Support

For issues or questions:
- Check the troubleshooting section
- Review backend logs for errors
- Verify environment variables are set correctly
- Test API endpoints directly (e.g., `/health`, `/api/portfolio/profile`)
