export function enqueue(op) {
  const queue = load();
  queue.push({ ...op, ts: Date.now() });
  save(queue);
}
export async function flush(api) {
  for (const op of load()) { await api.send(op); }
  clear();
}
