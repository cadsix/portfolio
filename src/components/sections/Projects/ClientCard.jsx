/**
 * ClientCard.jsx
 *
 * Premium showcase card for client work.
 * Features:
 *  - Interactive browser frame with URL address bar and traffic lights
 *  - Real-time "Live Production Platform" glowing status indicator
 *  - Clear client industry badge, narrative description, and tech stack pills
 *  - Prominent "Launch Live Platform" CTA button
 */

import { FaExternalLinkAlt, FaLock, FaGlobe } from 'react-icons/fa'

const ClientCard = ({
  client,
  industry,
  title,
  description,
  tags,
  image,
  alt,
  liveUrl,
  confidential,
  reverse = false,
}) => {
  // Extract clean domain name from liveUrl for browser address bar mockup
  const domain = liveUrl ? liveUrl.replace(/^https?:\/\//, '').replace(/\/$/, '') : 'confidential.internal'

  return (
    <div className="group relative rounded-2xl border border-black/[0.08] dark:border-white/[0.08] bg-white/70 dark:bg-[#181818]/80 backdrop-blur-md p-6 sm:p-8 transition-all duration-300 hover:shadow-2xl hover:border-black/20 dark:hover:border-white/20 hover:-translate-y-1">
      
      <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${reverse ? 'lg:flex-row-reverse' : ''}`}>
        
        {/* ── Left Column: Browser Mockup Frame (7 cols) ── */}
        <div className={`lg:col-span-7 ${reverse ? 'lg:order-2' : 'lg:order-1'}`}>
          <div className="rounded-xl overflow-hidden border border-black/10 dark:border-white/10 shadow-lg bg-neutral-100 dark:bg-[#111111] transition-transform duration-500 group-hover:scale-[1.01]">
            
            {/* Browser Header Bar */}
            <div className="flex items-center justify-between px-4 py-2.5 bg-neutral-200/80 dark:bg-[#202020] border-b border-black/5 dark:border-white/5">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
              </div>

              {/* Browser Address URL Bar */}
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/80 dark:bg-[#141414] border border-black/5 dark:border-white/5 text-[11px] font-mono text-neutral-600 dark:text-neutral-400 max-w-[240px] truncate">
                <FaGlobe size={10} className="text-neutral-400 flex-shrink-0" />
                <span className="truncate">{domain}</span>
              </div>

              <div className="w-10" />
            </div>

            {/* Screenshot */}
            <a
              href={liveUrl || undefined}
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={-1}
              className="block overflow-hidden relative aspect-[16/10] bg-neutral-900"
            >
              <img
                src={image}
                alt={alt}
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </a>

          </div>
        </div>

        {/* ── Right Column: Narrative & Meta (5 cols) ── */}
        <div className={`lg:col-span-5 flex flex-col gap-4 ${reverse ? 'lg:order-1' : 'lg:order-2'}`}>
          
          {/* Header Row: Live Badge + Industry */}
          <div className="flex flex-wrap items-center gap-2">
            {!confidential && liveUrl && (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/60">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Live Platform
              </span>
            )}
            <span className="text-[11px] font-mono font-semibold tracking-wider uppercase text-neutral-500 dark:text-neutral-400">
              {industry}
            </span>
          </div>

          {/* Title */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-neutral-100 tracking-tight leading-snug">
              {title}
            </h3>
            <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400">Client: {client}</span>
          </div>

          {/* Description */}
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
            {description}
          </p>

          {/* Tech Stack Tags */}
          <div className="flex flex-wrap gap-2 pt-1">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 text-xs font-mono font-medium rounded-lg bg-neutral-100 dark:bg-[#252525] text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700/60"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* CTA Action */}
          <div className="pt-2">
            {confidential ? (
              <span className="inline-flex items-center gap-2 text-xs font-mono text-neutral-500 dark:text-neutral-400 py-2">
                <FaLock size={12} />
                NDA Protected — Details available upon request
              </span>
            ) : liveUrl ? (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#1a6ef5] hover:bg-[#1559cc] dark:bg-[#4a8ff7] dark:hover:bg-[#6aaafb] text-white font-medium text-sm transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
                aria-label={`Visit ${title} live website`}
              >
                <span>Launch Live Site</span>
                <FaExternalLinkAlt size={12} className="transition-transform duration-200 group-hover:translate-x-0.5" />
              </a>
            ) : null}
          </div>

        </div>

      </div>

    </div>
  )
}

export default ClientCard
