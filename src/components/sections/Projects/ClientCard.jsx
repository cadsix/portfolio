/**
 * ClientCard.jsx
 *
 * Clean 2-column editorial showcase for client work.
 * Matches the open, breathable design of personal projects while
 * highlighting live production status, client industry, and tech stack.
 */

import { FaExternalLinkAlt, FaLock } from 'react-icons/fa'

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
}) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">

    {/* ── Screenshot ── */}
    <div
      className={`overflow-hidden rounded-2xl border border-black/10 dark:border-white/10 shadow-lg bg-neutral-100 dark:bg-[#161616] group ${
        reverse ? 'md:order-2' : 'md:order-1'
      }`}
    >
      <a
        href={liveUrl || undefined}
        target="_blank"
        rel="noopener noreferrer"
        tabIndex={-1}
        aria-label={`View ${title} live`}
        className="block overflow-hidden relative aspect-[16/10]"
      >
        <img
          src={image}
          alt={alt}
          className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />
      </a>
    </div>

    {/* ── Info ── */}
    <div className={`flex flex-col gap-4 ${reverse ? 'md:order-1' : 'md:order-2'}`}>

      {/* Meta Row: Live Status + Client & Industry */}
      <div className="flex flex-wrap items-center gap-2.5">
        {!confidential && liveUrl && (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Live Platform
          </span>
        )}
        <span className="text-xs font-mono font-semibold tracking-wider uppercase text-neutral-500 dark:text-neutral-400">
          {client} · {industry}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
        {title}
      </h3>

      {/* Narrative Description */}
      <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
        {description}
      </p>

      {/* Tech Stack Pills */}
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-2.5 py-0.5 text-xs font-mono font-medium rounded-full bg-neutral-100 dark:bg-[#202020] text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700/60"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Action CTA */}
      <div className="flex flex-wrap gap-3 pt-2">
        {confidential ? (
          <span className="inline-flex items-center gap-2 text-xs font-mono text-neutral-500 dark:text-neutral-400 py-2">
            <FaLock size={12} />
            NDA Protected — Details available upon request
          </span>
        ) : liveUrl ? (
          <a
            href={liveUrl}
            className="inline-flex items-center gap-2 text-sm font-medium text-white px-4 py-2 rounded-xl bg-[#1a6ef5] hover:bg-[#1559cc] dark:bg-[#4a8ff7] dark:hover:bg-[#6aaafb] shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit ${title} live website`}
          >
            <span>Visit Live Site</span>
            <FaExternalLinkAlt size={13} aria-hidden="true" />
          </a>
        ) : null}
      </div>

    </div>

  </div>
)

export default ClientCard
