import { BOT_RESPONSES } from '@/constants';

export function generateBotResponse(): string {
  return BOT_RESPONSES[Math.floor(Math.random() * BOT_RESPONSES.length)];
}
