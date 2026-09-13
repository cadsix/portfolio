import fs from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const IMAGES_DIR = path.resolve('public/images')

async function optimizeDirectory(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true })

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)

    if (entry.isDirectory()) {
      await optimizeDirectory(fullPath)
    } else if (/\.(png|jpe?g)$/i.test(entry.name)) {
      const ext = path.extname(entry.name)
      const baseName = path.basename(entry.name, ext)
      const outWebpPath = path.join(dir, `${baseName}.webp`)

      const isStanding = entry.name.toLowerCase().includes('standing')
      const maxWidth = isStanding ? 840 : 1280

      try {
        const metadata = await sharp(fullPath).metadata()
        const width = metadata.width && metadata.width > maxWidth ? maxWidth : undefined

        let pipeline = sharp(fullPath)
        if (width) {
          pipeline = pipeline.resize({ width, withoutEnlargement: true })
        }

        // Generate high quality WebP
        await pipeline
          .webp({ quality: 85, effort: 6 })
          .toFile(outWebpPath)

        const origStat = await fs.stat(fullPath)
        const newStat = await fs.stat(outWebpPath)
        const savings = (((origStat.size - newStat.size) / origStat.size) * 100).toFixed(1)

        console.log(`✓ ${path.relative(IMAGES_DIR, outWebpPath)}: ${(origStat.size/1024).toFixed(0)}KB -> ${(newStat.size/1024).toFixed(0)}KB (${savings}% savings)`)
      } catch (err) {
        console.error(`Error optimizing ${entry.name}:`, err.message)
      }
    }
  }
}

console.log('Optimizing portfolio images...')
optimizeDirectory(IMAGES_DIR).then(() => console.log('Image optimization complete!'))
