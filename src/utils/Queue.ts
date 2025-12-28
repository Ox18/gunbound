export class Queue<T> {
  private items: T[] = [];

  enqueue(item: T) {
    this.items.push(item);
  }

  dequeue(): T | undefined {
    return this.items.shift();
  }

  peek(): T | undefined {
    return this.items[0];
  }

  get length() {
    return this.items.length;
  }

  get Count() {
    return this.items.length;
  }

  isEmpty() {
    return this.items.length === 0;
  }

  Dequeue(): T {
    return this.items.shift() as T;
  }
}
