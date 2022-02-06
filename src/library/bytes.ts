const sizes: string[] = [
  'B',
  'KB',
  'MB',
  'GB',
  'TB'
]


export function bytesToString (bytes: number, currentSize: string = sizes[0]): string {
  if (bytes < 0) {
    return '0'
  }
  return bytes < 1024 ? `${bytes.toFixed(2)} ${currentSize}` : bytesToString(bytes / 1024, sizes[sizes.indexOf(currentSize) + 1])
}
