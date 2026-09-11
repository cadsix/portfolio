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
    industry:     'Healthtech & Clinical AI',
    title:        'Afya — Hypertension Screening & Care',
    description:  'A WhatsApp-native platform that takes blood pressure readings and turns them into structured care journeys — routing patients to the right level of attention, keeping health workers informed, and giving programme leads the data they actually need.',
    tags:         ['React', 'JavaScript', 'REST APIs', 'Data Viz'],
    image:        '/images/client/afiyai.jpg',
    alt:          'Afya hypertension screening platform interface',
    liveUrl:      'https://useafiyai.com',
    confidential: false,
  },
  {
    id:           'lafyai',
    client:       'LafyAI',
    industry:     'Public Health & Healthtech',
    title:        'LafyAI — Child Immunization Platform',
    description:  'A platform built to reduce vaccine drop-offs across Ghana. Parents get timely reminders via WhatsApp and SMS, clinic staff get a clear view of who needs follow-up, and health leaders get coverage metrics that drive real decisions.',
    tags:         ['Next.js', 'React', 'Node.js', 'REST APIs'],
    image:        '/images/client/lafyai.jpg',
    alt:          'LafyAI child immunization platform interface',
    liveUrl:      'https://lafyai.com',
    confidential: false,
  },
  {
    id:           'streetsidemart',
    client:       'Streetside Mart',
    industry:     'E-Commerce & Retail',
    title:        'Streetside Mart — Retail Storefront',
    description:  'An online store for everyday essentials in Ghana, built with the local shopper in mind. MTN MoMo and Telecel Cash at checkout, flash deals on the homepage, fast search, and a backend the store team can actually manage themselves.',
    tags:         ['Next.js', 'React', 'Mobile Money API', 'Tailwind CSS'],
    image:        '/images/client/streetsidemart.jpg',
    alt:          'Streetside Mart online store interface',
    liveUrl:      'https://streetside-mart.vercel.app',
    confidential: false,
  },
]
