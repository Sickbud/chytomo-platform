export function enqueue(op) {
  const queue = load();
  queue.push({ ...op, ts: Date.now() });
  save(queue);
}
export async function flush(api) {
  for (const chunk of chunks(load(), 50)) { await api.sendBatch(chunk); }
  clear();
}
