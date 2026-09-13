/**
 * projects.js
 * All project data in one place.
 * Update this file to add, remove, or reorder portfolio projects.
 */

/** @type {Project[]} */
export const PROJECTS = [
  {
    id:          'cryptosix',
    name:        'CryptoSix — Real-Time Crypto Spot Terminal',
    description:
      'A live cryptocurrency market tracker built with Next.js and TypeScript. Streams real-time spot prices, 24h market shifts, and 7-day sparklines for 50+ coins via CoinGecko, featuring an interactive in-line calculator where you can type your holdings and watch your portfolio balance calculate on the fly.',
    image:       '/images/projects/cryptosix.webp',
    alt:         'CryptoSix live crypto market dashboard interface',
    tags:        ['Next.js', 'TypeScript', 'CoinGecko API', 'Tailwind CSS'],
    repoUrl:     'https://github.com/cadsix/cryptosix',
    liveUrl:     'https://cryptosix-henna.vercel.app/',
    featured:    true,
  },
  {
    id:          'driveease',
    name:        'DriveEase — Car Rental & Reservation Flow',
    description:
      'A responsive car rental web app designed to make browsing and reserving vehicles effortless. Features instant vehicle category filtering, live daily price estimations, date-range selection, and a guided multi-step checkout experience.',
    image:       '/images/projects/driveease.webp',
    alt:         'DriveEase car rental platform interface',
    tags:        ['React', 'SCSS', 'JavaScript'],
    repoUrl:     'https://github.com/cadsix/car-rental-website',
    liveUrl:     'https://collins-car-rentals.netlify.app/',
    featured:    true,
  },
  {
    id:          'triathlon',
    name:        'Perform — Endurance Coaching Platform',
    description:
      'A sleek, editorial-style coaching landing page built for endurance athletes. Features interactive training tiers, athlete case studies, customized training roadmaps, and smooth micro-interactions that look great on any screen.',
    image:       '/images/projects/perform.webp',
    alt:         'Perform triathlon coaching website interface',
    tags:        ['Next.js', 'CSS Modules', 'Responsive UI'],
    repoUrl:     'https://github.com/cadsix/triathlon',
    liveUrl:     'https://triathlon-zeta.vercel.app/',
    featured:    true,
  },
  {
    id:          'ecommerce',
    name:        'SNEAKERS — Streetwear Product Showcase',
    description:
      'A focused streetwear product page with an interactive lightbox gallery, thumbnail carousel, real-time quantity selectors, and a slide-out cart drawer with live state persistence.',
    image:       '/images/projects/sneakers.webp',
    alt:         'SNEAKERS streetwear footwear e-commerce interface',
    tags:        ['React', 'State Management', 'CSS'],
    repoUrl:     'https://github.com/cadsix/basic-eCommerce/',
    liveUrl:     'https://collinsecommerce.netlify.app/',
    featured:    false,
  },
  {
    id:          'food-ecommerce',
    name:        'Tomato — Local Food Ordering Experience',
    description:
      'A fast, mobile-first food delivery web app tailored for Accra foodies. Features categorized menu filtering, add-on dish customization, instant cart subtotal calculations, and a smooth checkout flow.',
    image:       '/images/projects/tomato.webp',
    alt:         'Tomato food ordering web app interface',
    tags:        ['React', 'JavaScript', 'CSS'],
    repoUrl:     'https://github.com/cadsix/food-ecommerce',
    liveUrl:     'https://food-ecommerce-ia3d.vercel.app/',
    featured:    false,
  },
]

/** All unique tags across every project — used by ProjectFilters */
export const ALL_TAGS = ['All', ...new Set(PROJECTS.flatMap((p) => p.tags))]
