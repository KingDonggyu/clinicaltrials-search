export type CacheKey = string;

export interface CacheNodeOption {
  key: CacheKey;
  value: unknown;
  expireTime?: number;
}

export class CacheNode {
  key: string;

  value: unknown;

  next: CacheNode | null = null;

  prev: CacheNode | null = null;

  private expireTime: number;

  private createdAt: number;

  constructor({ key, value, expireTime = 60 * 1000 }: CacheNodeOption) {
    this.key = key;
    this.value = value;
    this.expireTime = expireTime;
    this.createdAt = Date.now();
  }

  isExpired() {
    return Date.now() > this.createdAt + this.expireTime;
  }
}
