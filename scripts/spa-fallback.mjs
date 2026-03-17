import { copyFileSync, existsSync } from 'node:fs'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(fileURLToPath(new URL('..', import.meta.url)))
const dist = join(root, 'dist')
const index = join(dist, 'index.html')
const notFound = join(dist, '404.html')

if (existsSync(index)) {
  copyFileSync(index, notFound)
  console.log('[spa-fallback] dist/404.html criado (útil para GitHub Pages e alguns hosts).')
}
