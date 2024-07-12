import type { Web5PlatformAgent } from './agent.js';

export interface SyncEngine {
  agent: Web5PlatformAgent;
  registerIdentity(params: { did: string }): Promise<void>;
  startSync(params: { interval: string }): Promise<void>;
  stopSync(): void;
  sync(params: { syncDirection: string }): Promise<void>;
  push(): Promise<void>;
  pull(): Promise<void>;
}