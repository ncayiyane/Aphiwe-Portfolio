import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { sendMessage, checkHealth } from './api';

// Mock fetch
global.fetch = vi.fn();

describe('API Utils', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe('sendMessage', () => {
    it('should send a message successfully', async () => {
      const mockResponse = {
        success: true,
        response: 'Test response',
        conversationId: 'test-conv-123',
      };

      (global.fetch as any).mockResolvedValueOnce({
        ok: true,
        json: async () => mockResponse,
      });

      const result = await sendMessage('Test message');

      expect(global.fetch).toHaveBeenCalledWith(
        'http://localhost:3001/api/chat/message',
        expect.objectContaining({
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ message: 'Test message', conversationId: undefined }),
        })
      );

      expect(result).toEqual({
        response: mockResponse,
        conversationId: 'test-conv-123',
      });
    });

    it('should handle API errors', async () => {
      (global.fetch as any).mockResolvedValueOnce({
        ok: false,
        status: 500,
        json: async () => ({ error: 'Internal server error' }),
      });

      await expect(sendMessage('Test message')).rejects.toThrow();
    });

    it('should handle network errors', async () => {
      (global.fetch as any).mockRejectedValueOnce(new Error('Network error'));

      await expect(sendMessage('Test message')).rejects.toThrow('Network error');
    });

    it('should pass conversationId when provided', async () => {
      const mockResponse = {
        success: true,
        response: 'Test response',
        conversationId: 'existing-conv-456',
      };

      (global.fetch as any).mockResolvedValueOnce({
        ok: true,
        json: async () => mockResponse,
      });

      await sendMessage('Test message', 'existing-conv-456');

      expect(global.fetch).toHaveBeenCalledWith(
        'http://localhost:3001/api/chat/message',
        expect.objectContaining({
          body: JSON.stringify({ message: 'Test message', conversationId: 'existing-conv-456' }),
        })
      );
    });
  });

  describe('checkHealth', () => {
    it('should return true when health check succeeds', async () => {
      (global.fetch as any).mockResolvedValueOnce({
        ok: true,
      });

      const result = await checkHealth();

      expect(result).toBe(true);
      expect(global.fetch).toHaveBeenCalledWith('http://localhost:3001/health');
    });

    it('should return false when health check fails', async () => {
      (global.fetch as any).mockResolvedValueOnce({
        ok: false,
      });

      const result = await checkHealth();

      expect(result).toBe(false);
    });

    it('should return false on network error', async () => {
      (global.fetch as any).mockRejectedValueOnce(new Error('Network error'));

      const result = await checkHealth();

      expect(result).toBe(false);
    });
  });
});
