import express from 'express';
import llmService from '../services/llmService.js';

const router = express.Router();

// Simple in-memory conversation store (in production, use Redis or database)
const conversations = new Map();

// Generate conversation ID
function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

router.post('/message', async (req, res) => {
  try {
    const { message, conversationId } = req.body;

    // Validate input
    if (!message || typeof message !== 'string') {
      return res.status(400).json({ error: 'Message is required' });
    }

    if (message.length > 2000) {
      return res.status(400).json({ error: 'Message too long (max 2000 characters)' });
    }

    // Get or create conversation
    let convId = conversationId || generateId();
    let history = conversations.get(convId) || [];

    // Add user message to history
    history.push({ role: 'user', content: message });

    // Generate response
    const result = await llmService.generateResponse(message, history);

    if (!result.success) {
      return res.status(500).json({ 
        error: result.error,
        message: result.message 
      });
    }

    // Add AI response to history
    history.push({ role: 'assistant', content: result.response });
    conversations.set(convId, history);

    // Limit history size (last 10 messages)
    if (history.length > 10) {
      history = history.slice(-10);
      conversations.set(convId, history);
    }

    res.json({
      conversationId: convId,
      response: result.response,
      sources: result.sources
    });

  } catch (error) {
    console.error('Chat route error:', error);
    res.status(500).json({ error: 'Failed to process message' });
  }
});

router.post('/clear', (req, res) => {
  try {
    const { conversationId } = req.body;
    if (conversationId) {
      conversations.delete(conversationId);
    }
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: 'Failed to clear conversation' });
  }
});

export default router;
