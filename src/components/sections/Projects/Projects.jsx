/**
 * Projects.jsx
 *
 * Two-tab section: "Personal" shows alternating project cards,
 * "Client Work" shows the upgraded browser-mockup showcase cards.
 *
 * Data sources:
 *   Personal  → assets/constants/projects.js
 *   Client    → assets/constants/clients.js
 */

import { useState } from 'react'

import Section      from '../../common/Section'
import ScrollReveal from '../../ui/ScrollReveal'
import ProjectCard  from './ProjectCard'
import ClientCard   from './ClientCard'
import { PROJECTS } from '../../../assets/constants/projects'
import { CLIENTS }  from '../../../assets/constants/clients'

const TABS = ['Personal', 'Client Work']

const Projects = () => {
  const [activeTab, setActiveTab] = useState('Personal')

  return (
    <Section id="projects" alternate>

      {/* ── Section header ── */}
      <ScrollReveal>
        <div className="text-center mb-10">
          <span className="label">Projects</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 mt-2">
            Featured work &amp; client projects.
          </h2>
        </div>
      </ScrollReveal>

      {/* ── Tab toggle ── */}
      <ScrollReveal>
        <div
          className="flex justify-center p-1.5 mb-12 bg-neutral-200/80 dark:bg-[#202020] border border-black/5 dark:border-white/10 rounded-full w-fit mx-auto shadow-inner"
          role="tablist"
          aria-label="Portfolio type"
        >
          {TABS.map((tab) => {
            const isActive = activeTab === tab
            return (
              <button
                key={tab}
                role="tab"
                aria-selected={isActive}
                className={`text-sm font-semibold px-6 py-2 rounded-full transition-all duration-200 ${
                  isActive
                    ? 'bg-white dark:bg-[#111111] text-neutral-950 dark:text-white shadow-md'
                    : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200'
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            )
          })}
        </div>
      </ScrollReveal>

      {/* ── Personal tab ── */}
      {activeTab === 'Personal' && (
        <div className="flex flex-col gap-16 md:gap-20">
          {PROJECTS.map((project, index) => (
            <ScrollReveal key={project.id} style={{ transitionDelay: `${index * 0.08}s` }}>
              <ProjectCard {...project} reverse={index % 2 !== 0} />
            </ScrollReveal>
          ))}
        </div>
      )}

      {/* ── Client Work tab ── */}
      {activeTab === 'Client Work' && (
        <div className="flex flex-col gap-12 sm:gap-14">
          {CLIENTS.map((client, index) => (
            <ScrollReveal key={client.id} style={{ transitionDelay: `${index * 0.08}s` }}>
              <ClientCard {...client} reverse={index % 2 !== 0} />
            </ScrollReveal>
          ))}
        </div>
      )}

    </Section>
  )
}

export default Projects
