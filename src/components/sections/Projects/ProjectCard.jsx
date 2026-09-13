/**
 * ProjectCard.jsx
 *
 * Renders one project in an alternating two-column layout:
 * image on the left for even cards, image on the right for odd cards.
 * Pass `reverse={true}` to flip the column order.
 */

import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const ProjectCard = ({ name, description, image, alt, tags, repoUrl, liveUrl, reverse }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">

    {/* ── Screenshot ── */}
    <div className={`overflow-hidden rounded-2xl border border-black/10 dark:border-white/10 shadow-lg bg-neutral-100 dark:bg-[#161616] group ${reverse ? 'md:order-2' : 'md:order-1'}`}>
      <a
        href={liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        tabIndex={-1}
        aria-label={`View ${name} live`}
        className="block overflow-hidden relative aspect-[16/10]"
      >
        <img
          src={image}
          alt={alt}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
          decoding="async"
          width={600}
          height={375}
        />
      </a>
    </div>

    {/* ── Info ── */}
    <div className={`flex flex-col gap-4 ${reverse ? 'md:order-1' : 'md:order-2'}`}>
      <h3 className="text-xs font-mono font-semibold tracking-widest uppercase text-neutral-900 dark:text-neutral-100">
        {name}
      </h3>

      <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
        {description}
      </p>

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

      <div className="flex flex-wrap gap-3 pt-2">
        <a
          href={repoUrl}
          className="inline-flex items-center gap-2 text-sm font-medium text-neutral-700 dark:text-neutral-200 px-4 py-2.5 rounded-xl border border-neutral-300 dark:border-neutral-700/80 bg-white/70 dark:bg-neutral-800/80 hover:bg-neutral-100 dark:hover:bg-neutral-700 hover:text-neutral-900 dark:hover:text-white transition-all duration-200 hover:-translate-y-0.5"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${name} source code on GitHub`}
        >
          <FaGithub size={16} aria-hidden="true" />
          <span>Code</span>
        </a>

        <a
          href={liveUrl}
          className="inline-flex items-center gap-2 text-sm font-medium !text-white px-4 py-2.5 rounded-xl bg-[#1a6ef5] hover:bg-[#1559cc] dark:bg-[#1a6ef5] dark:hover:bg-[#1559cc] shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:!text-white"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${name} live demo`}
        >
          <span className="!text-white font-medium">Live Demo</span>
          <FaExternalLinkAlt size={12} aria-hidden="true" className="!text-white" />
        </a>
      </div>
    </div>

  </div>
)

export default ProjectCard
