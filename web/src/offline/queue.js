export function enqueue(op) {
  const queue = load();
  queue.push({ id: crypto.randomUUID(), ...op, ts: Date.now() });
  save(queue);
}
export async function flush(api) {
  for (const op of load()) { await api.send(op, { key: op.id }); }
  clear();
}
