/**
 * projects.js
 * All project data in one place.
 * Update this file to add, remove, or reorder portfolio projects.
 */

/** @type {Project[]} */
export const PROJECTS = [
  {
    id:          'cryptosix',
    name:        'CryptoSix — Live Crypto Market Dashboard',
    description:
      'A real-time cryptocurrency market dashboard and portfolio tracker powered by the CoinGecko API. Features live price tickers, 7-day sparkline trend charts, instant asset search, and personal holding calculations.',
    image:       '/images/projects/cryptosix.jpg',
    alt:         'CryptoSix live crypto market dashboard interface',
    tags:        ['Next.js', 'TypeScript', 'CoinGecko API', 'Tailwind CSS'],
    repoUrl:     'https://github.com/cadsix/cryptosix',
    liveUrl:     'https://cryptosix-henna.vercel.app/',
    featured:    true,
  },
  {
    id:          'driveease',
    name:        'DriveEase — Car Rental & Booking',
    description:
      'A responsive car rental web app with real-time vehicle filtering, pricing estimation, dynamic availability lookup, and a multi-step booking checkout flow.',
    image:       '/images/projects/driveease.jpg',
    alt:         'DriveEase car rental platform interface',
    tags:        ['React', 'SCSS', 'JavaScript'],
    repoUrl:     'https://github.com/cadsix/car-rental-website',
    liveUrl:     'https://collins-car-rentals.netlify.app/',
    featured:    true,
  },
  {
    id:          'triathlon',
    name:        'Perform — Triathlon Coaching',
    description:
      'A modern triathlon coaching website built for endurance athletes, featuring structured training packages, interactive pricing tiers, and clean responsive layouts.',
    image:       '/images/projects/perform.jpg',
    alt:         'Perform triathlon coaching website interface',
    tags:        ['Next.js', 'CSS Modules', 'Responsive UI'],
    repoUrl:     'https://github.com/cadsix/triathlon',
    liveUrl:     'https://triathlon-zeta.vercel.app/',
    featured:    true,
  },
  {
    id:          'ecommerce',
    name:        'SNEAKERS — Footwear E-Commerce',
    description:
      'A responsive streetwear footwear e-commerce experience featuring an interactive product gallery with multi-angle lightbox preview, real-time quantity management, and an instant slide-out cart drawer.',
    image:       '/images/projects/sneakers.jpg',
    alt:         'SNEAKERS streetwear footwear e-commerce interface',
    tags:        ['React', 'State Management', 'CSS'],
    repoUrl:     'https://github.com/cadsix/basic-eCommerce/',
    liveUrl:     'https://collinsecommerce.netlify.app/',
    featured:    false,
  },
  {
    id:          'food-ecommerce',
    name:        'Tomato — Food Ordering App',
    description:
      'A food ordering web application with categorized menu browsing, real-time cart state calculation, dish customization, and a mobile-first checkout experience.',
    image:       '/images/projects/tomato.jpg',
    alt:         'Tomato food ordering web app interface',
    tags:        ['React', 'JavaScript', 'CSS'],
    repoUrl:     'https://github.com/cadsix/food-ecommerce',
    liveUrl:     'https://food-ecommerce-ia3d.vercel.app/',
    featured:    false,
  },
]

/** All unique tags across every project — used by ProjectFilters */
export const ALL_TAGS = ['All', ...new Set(PROJECTS.flatMap((p) => p.tags))]
