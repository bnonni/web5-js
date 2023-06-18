import type { Web5Crypto } from '../../types-key-manager.js';

import { EllipticCurveAlgorithm } from './base.js';

export abstract class EdDsaAlgorithm extends EllipticCurveAlgorithm {

  public readonly name: string = 'EdDSA';

  public keyUsages: Web5Crypto.KeyPairUsage = {
    privateKey : ['sign'],
    publicKey  : ['verify'],
  };

  public checkAlgorithmOptions(algorithm: Web5Crypto.EdDsaOptions) {
    this.checkAlgorithmName(algorithm.name);
  }

  public abstract sign(options: { algorithm: Web5Crypto.EdDsaOptions; key: Web5Crypto.CryptoKey; data: BufferSource; }): Promise<ArrayBuffer>;

  public abstract verify(options: { algorithm: Web5Crypto.EdDsaOptions; key: Web5Crypto.CryptoKey; signature: ArrayBuffer; data: BufferSource; }): Promise<boolean>;
}