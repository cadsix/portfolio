/**
 * ContactInfo.jsx
 *
 * Left column of the Contact section: location, email, and phone tiles.
 */

import { HiLocationMarker, HiMail, HiPhone } from 'react-icons/hi'

const INFO_ITEMS = [
  {
    icon:    <HiLocationMarker size={22} />,
    heading: 'Location',
    content: 'Ho, Ghana',
    href:    null,
  },
  {
    icon:    <HiMail size={22} />,
    heading: 'Email',
    content: 'agbocollins15@gmail.com',
    href:    'mailto:agbocollins15@gmail.com',
  },
  {
    icon:    <HiPhone size={22} />,
    heading: 'Phone',
    content: '0559 438 418 / 0552 914 296',
    href:    'tel:+233559438418',
  },
]

const ContactInfo = () => (
  <div className="flex flex-col gap-4">
    {INFO_ITEMS.map(({ icon, heading, content, href }) => (
      <div
        key={heading}
        className="flex items-center gap-4 p-5 rounded-2xl border border-black/[0.08] dark:border-white/[0.08] bg-white/70 dark:bg-[#181818]/80 backdrop-blur-md shadow-sm transition-all duration-200 hover:shadow-md hover:border-black/15 dark:hover:border-white/15 hover:-translate-y-0.5"
      >
        <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/50 text-[#1a6ef5] dark:text-[#4a8ff7] flex items-center justify-center flex-shrink-0 border border-blue-100 dark:border-blue-900/50" aria-hidden="true">
          {icon}
        </div>

        <div className="flex flex-col min-w-0 flex-1">
          <span className="text-[11px] font-mono font-semibold tracking-widest uppercase text-neutral-500 dark:text-neutral-400">
            {heading}
          </span>
          {href ? (
            <a
              href={href}
              className="text-sm sm:text-base font-semibold text-neutral-900 dark:text-neutral-100 hover:text-[#1a6ef5] dark:hover:text-[#4a8ff7] transition-colors mt-0.5 break-words"
            >
              {content}
            </a>
          ) : (
            <p className="text-sm sm:text-base font-semibold text-neutral-900 dark:text-neutral-100 mt-0.5 break-words">
              {content}
            </p>
          )}
        </div>
      </div>
    ))}
  </div>
)

export default ContactInfo
