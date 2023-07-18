import { CacheKey, CacheNode, CacheNodeOption } from './CacheNode';

// LRU Cache
class ClientSideCache {
  private max;

  private cache = new Map<CacheKey, CacheNode>();

  private head = new CacheNode({ key: 'HEAD', value: null });

  private tail = new CacheNode({ key: 'TAIL', value: null });

  constructor({ max = 50 }: { max?: number } = {}) {
    this.max = max + 2;
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  get<T>(key: CacheKey) {
    const node = this.cache.get(key);

    if (!node) {
      return undefined;
    }

    if (node.isExpired()) {
      this.delete(node.key);
      return undefined;
    }

    return node.value as T;
  }

  set({ key, value, expireTime }: CacheNodeOption) {
    if (this.cache.has(key)) {
      this.delete(key);
      this.insert({ key, value, expireTime });
      return;
    }

    if (this.cache.size === this.max && this.tail.prev) {
      this.delete(this.tail.prev.key);
    }

    this.insert({ key, value, expireTime });
  }

  delete(key: CacheKey) {
    const node = this.cache.get(key);

    if (!node) {
      return;
    }

    if (node.prev) {
      node.prev.next = node.next;
    }

    if (node.next) {
      node.next.prev = node.prev;
    }

    this.cache.delete(key);
  }

  private insert({ key, value, expireTime }: CacheNodeOption) {
    const node = new CacheNode({ key, value, expireTime });

    node.prev = this.head;
    node.next = this.head.next;

    if (this.head.next) {
      this.head.next.prev = node;
    }

    this.head.next = node;
    this.cache.set(key, node);
  }
}

export default ClientSideCache;
