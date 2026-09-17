/**
 * clients.js
 * Client work data — lean shape for the tab view inside Projects.
 * Update this file to add, remove, or reorder entries.
 *
 * Set liveUrl to null to hide the "View Site" button.
 * Set confidential to true to replace the button with "NDA — details on request".
 */

/** @type {ClientProject[]} */
export const CLIENTS = [
  {
    id:           'afiyai',
    client:       'Afya',
    industry:     'Digital Health & WhatsApp Workflows',
    title:        'Afya — Community Hypertension Screening',
    description:  'A WhatsApp-native health platform built to keep high-risk hypertension patients from falling through the cracks. Field workers record BP readings on-site, participants receive clear, jargon-free health updates on WhatsApp, and public health leads track triage trends across communities in real time.',
    tags:         ['React', 'JavaScript', 'REST APIs', 'Data Viz'],
    image:        '/images/client/afiyai.webp',
    alt:          'Afya hypertension screening platform interface',
    liveUrl:      'https://useafiyai.com',
    confidential: false,
  },
  {
    id:           'lafyai',
    client:       'LafyAI',
    industry:     'Public Health & Care Adherence',
    title:        'LafyAI — Childhood Immunization Tracking',
    description:  'A low-friction adherence tool tackling childhood vaccine drop-offs across Ghana. Clinic staff can register caregivers in under a minute, the system sends automated behavioral nudges via WhatsApp and SMS in local languages, and health facilities get an actionable follow-up queue so no infant misses a dose.',
    tags:         ['Next.js', 'React', 'Node.js', 'REST APIs'],
    image:        '/images/client/lafyai.webp',
    alt:          'LafyAI child immunization platform interface',
    liveUrl:      'https://lafyai.com',
    confidential: false,
  },
  {
    id:           'streetsidemart',
    client:       'Streetside Mart',
    industry:     'E-Commerce & Local Retail',
    title:        'Streetside Mart — Essentials Storefront',
    description:  'An online storefront for everyday household and baby essentials, tailored specifically for Ghanaian shoppers. Features instant product search, curated starter bundles, seamless MTN MoMo and Telecel Cash checkout, and a lightweight admin dashboard for inventory management.',
    tags:         ['Next.js', 'React', 'Mobile Money API', 'Tailwind CSS'],
    image:        '/images/client/streetsidemart.webp',
    alt:          'Streetside Mart online store interface',
    liveUrl:      'https://streetside-mart.vercel.app',
    confidential: false,
  },
  {
    id:           'ges-ho',
    client:       'GES-Ho',
    industry:     'Public Sector & Educational Portals',
    title:        'GES-Ho — Municipal Directorate Portal',
    description:  'A centralized web portal and administrative directory built for the Ghana Education Service Municipal Directorate in Ho. Enables educators, administrators, and the public to access regional school registries, official circulars, departmental rosters, and educational resources in real time.',
    tags:         ['React', 'JavaScript', 'Tailwind CSS', 'Vite'],
    image:        '/images/client/ges-ho.webp',
    alt:          'Ghana Education Service Ho Municipal Directorate platform interface',
    liveUrl:      'https://ges-ho-dir.vercel.app/',
    confidential: false,
  },
]
