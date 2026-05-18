export function normalizeText(value: string): string {
  return value.trim().toLowerCase()
}

export function filterByQuery<T>(items: T[], query: string, accessor: (item: T) => string): T[] {
  const normalizedQuery = normalizeText(query)

  if (normalizedQuery.length === 0) {
    return items
  }

  return items.filter((item) => normalizeText(accessor(item)).includes(normalizedQuery))
}
