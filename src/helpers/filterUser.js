export function filterUser(data) {
  const title = data.title || {};
  const name = title.rendered || '';

  return {
    name
  }
}
