/**
 * @file connector.ts
 * @description Takrifan antara muka penyambung API AI modular (BYO-AI) bagi B-Bot.
 * Membolehkan pengguna menghubungkan mana-mana pembantu pintar dengan kulit watak 3D RON.
 */

import { EmoLangEmotionToken } from './emolang';

export type SupportedModality = 'teks' | 'imej' | 'audio' | 'dokumen_fail';

export interface UserAIConfig {
  providerId: 'openai' | 'anthropic' | 'gemini' | 'ollama' | 'tersuai';
  endpointUrl?: string;
  apiKey?: string;
  modelIdentifier: string;
  temperature?: number;
  maxTokens?: number;
}

export interface PromptPayload {
  promptText: string;
  attachments?: {
    mimeType: string;
    fileBufferBase64?: string;
    filePath?: string;
  }[];
  conversationHistory?: {
    role: 'pengguna' | 'pembantu' | 'sistem';
    content: string;
  }[];
}

export interface StreamPacket {
  packetId: string;
  textChunk?: string;
  emotion?: EmoLangEmotionToken;
  isCompleted: boolean;
  systemActionTrigger?: {
    actionType: 'buka_pintasan_apple' | 'tukar_format_fail' | 'hantar_airdrop';
    parameterPayload: Record<string, unknown>;
  };
}

export interface IAIConnectorBridge {
  readonly config: UserAIConfig;
  
  /**
   * Mengesahkan ketersambungan dan kesahan kelayakan API penyedia AI.
   */
  validateConnection(): Promise<boolean>;

  /**
   * Menstrim data respons secara masa nyata termasuk bait teks dan teg emosi EmoLang.
   */
  streamInteraction(payload: PromptPayload): AsyncIterable<StreamPacket>;

  /**
   * Mengembalikan modaliti yang disokong oleh penyedia semasa.
   */
  getSupportedModalities(): SupportedModality[];
}
