export interface ServiceItem {
  id: string;
  number: string;
  category: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  features: string[];
  duration?: string;
  pricingNote?: string;
}

export interface BridalOffering {
  id: string;
  number: string;
  title: string;
  description: string;
  badge: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Bridal' | 'Makeup' | 'Hair' | 'Skin' | 'Salon';
  image: string;
  aspectClass: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  quote: string;
  avatar: string;
  rating: number;
}

export const BUSINESS_CONFIG = {
  brandName: "SHE NEEDS BEAUTY PARLOUR",
  shortName: "SHE NEEDS",
  eyebrow: "WHERE CARE MEETS CONFIDENCE",
  hero: {
    line1: "Feel Cared For.",
    line2: "Look Effortless.",
    line3: "Glow with Confidence.",
    supporting: "Discover a more personal kind of beauty experience.",
    primaryCta: "BOOK AN APPOINTMENT",
    secondaryCta: "DISCOVER OUR WORLD"
  },
  
  about: {
    eyebrow: "ABOUT SHE NEEDS",
    headingLine1: "Beauty Is Not Just a Look.",
    headingLine2: "It Is a Feeling.",
    supporting: "A space dedicated to beauty, self-care, and the confidence that comes from feeling your best.",
    narrative:
      "We believe every woman deserves to feel confident, cared for, and beautifully herself. At She Needs Beauty Parlour, we combine contemporary luxury with authentic care, creating an intimate sanctuary where every ritual is thoughtfully tailored to celebrate your natural grace.",
    values: [
      {
        title: "Personalised Attention",
        description: "Bespoke beauty consultations tailored to your unique skin type, hair texture, and style."
      },
      {
        title: "Professional Care",
        description: "Certified artists adhering to the highest standards of hygiene and refined artistry."
      },
      {
        title: "Beauty With Confidence",
        description: "Natural, timeless enhancements designed to empower you every single day."
      }
    ]
  },

  servicesHeading: {
    eyebrow: "OUR SERVICES",
    title: "Discover Your Signature Glow.",
    subtitle: "From everyday rituals to bespoke transformations, explore treatments art-directed for elegance."
  },

  services: [
    {
      id: "hair-styling",
      number: "01",
      category: "Hair",
      title: "Hair Styling",
      subtitle: "Bespoke Cuts, Color & Spa",
      description: "From precision hair artistry to revitalizing scalp therapies and luminous balayage, we shape styles that complement your facial contour and persona.",
      image: "/images/hair-styling.jpg",
      pricingNote: "Enquire for consultation",
      duration: "45 – 90 mins",
      features: [
        "Precision Editorial Haircut & Blowdry",
        "Deep Hydration Keratin Ritual",
        "Balayage, Highlights & Global Color",
        "Anti-Frizz Smoothening Infusion",
        "Traditional & Festive Updos"
      ]
    },
    {
      id: "skin-care",
      number: "02",
      category: "Skin",
      title: "Skin Care & Facials",
      subtitle: "Botanical Radiance & Hydra-Infusion",
      description: "Nourish and rejuvenate your complexion with curated botanical cleansers, Hydra-glow therapies, and firming collagen elixirs.",
      image: "/images/skincare-facial.jpg",
      pricingNote: "Enquire for consultation",
      duration: "60 – 90 mins",
      features: [
        "Hydra-Infusion Glow Therapy",
        "Gold & Pearl Radiance Facial",
        "Skin Brightening & Anti-Tan Cleanse",
        "Collagen Firming Treatment",
        "Gentle Deep-Pore Purification"
      ]
    },
    {
      id: "bridal-makeup",
      number: "03",
      category: "Bridal",
      title: "Bridal Makeup",
      subtitle: "Timeless Wedding Artistry",
      description: "Unforgettable bridal styling crafted to glow effortlessly in person and under cinematic photography, celebrating your heritage with modern poise.",
      image: "/images/bridal-service.jpg",
      pricingNote: "Enquire for packages",
      duration: "120 – 180 mins",
      features: [
        "HD & Airbrush Bridal Master Finish",
        "Traditional Saree & Dupatta Draping",
        "Mogra Gajra & Architectural Hair Styling",
        "Tear-Proof & Long-Wear Cosmetics",
        "Personalized Pre-Wedding Consultation"
      ]
    },
    {
      id: "waxing-grooming",
      number: "04",
      category: "Grooming",
      title: "Waxing & Grooming",
      subtitle: "Gentle Care & Body Polishing",
      description: "Hygienic, gentle hair removal rituals, flawless eyebrow sculpting, and soothing post-treatment botanical elixirs in private suites.",
      image: "/images/waxing-grooming.jpg",
      pricingNote: "Enquire for consultation",
      duration: "30 – 60 mins",
      features: [
        "Painless Rica Waxing for Sensitive Skin",
        "Precision Eyebrow & Face Threading",
        "Full Body Exfoliating Glow Polish",
        "Hygienic Single-Use Applicators",
        "Cooling Aloe Vera Aftercare"
      ]
    },
    {
      id: "nail-care",
      number: "05",
      category: "Nails",
      title: "Nail Care & Art",
      subtitle: "Spa Manicure & Gel Polish",
      description: "Relaxing rose-petal spa manicures, restorative pedicures, and understated gel nail artistry that elevate every gesture.",
      image: "/images/nail-care.jpg",
      pricingNote: "Enquire for consultation",
      duration: "45 – 75 mins",
      features: [
        "Rose Petal Aromatherapy Pedicure",
        "Gel Extensions & Chrome Artistry",
        "Nail Strengthening Spa Treatment",
        "Long-Lasting High-Gloss Finish",
        "Nourishing Cuticle Oil Massage"
      ]
    },
    {
      id: "beauty-packages",
      number: "06",
      category: "Packages",
      title: "Personalised Beauty Packages",
      subtitle: "Curated Head-to-Toe Rituals",
      description: "All-in-one pampering journeys curated for festive seasons, pre-bridal preparation, or tranquil restorative weekends.",
      image: "/images/appointment-spa.jpg",
      pricingNote: "Enquire for custom packages",
      duration: "120 – 240 mins",
      features: [
        "Full Day Luxury Spa Rejuvenation",
        "Bride & Bridesmaid Party Bundles",
        "Festival Glow Reset (Skin + Hair + Nails)",
        "Pre-Bridal 30-Day Transformation Plan",
        "Customizable Gift Vouchers"
      ]
    }
  ] as ServiceItem[],

  bridal: {
    eyebrow: "BRIDAL CAMPAIGN",
    headingLine1: "Every Detail.",
    headingLine2: "A Little More Extraordinary.",
    supporting: "Thoughtful beauty services for your most memorable moments.",
    narrative:
      "Your wedding day is a once-in-a-lifetime milestone. We approach bridal styling with quiet luxury, meticulous color matching, and respectful reverence for traditional heritage.",
    cta: "DISCOVER BRIDAL SERVICES",
    offerings: [
      {
        id: "b1",
        number: "01",
        title: "Bridal Makeup",
        description: "HD & Airbrush artistry curated to look flawless under camera flashes and sacred firelight.",
        badge: "Signature"
      },
      {
        id: "b2",
        number: "02",
        title: "Engagement Makeup",
        description: "Luminous, romantic glam designed for ring exchange ceremonies and festive cocktail evenings.",
        badge: "Celebration"
      },
      {
        id: "b3",
        number: "03",
        title: "Reception Looks",
        description: "Sophisticated, high-fashion evening transformations featuring sculpted eyes and contemporary elegance.",
        badge: "Glamour"
      },
      {
        id: "b4",
        number: "04",
        title: "Pre-Bridal Care",
        description: "A 4-week tailored beauty routine encompassing bespoke facials, hair nourishment, and body polishing.",
        badge: "Rejuvenation"
      }
    ] as BridalOffering[]
  },

  gallery: {
    eyebrow: "PORTFOLIO",
    heading: "Curated Beauty Moments",
    supporting: "An editorial collection of our transformations, salon ambiance, and detail craftsmanship.",
    categories: ["All", "Bridal", "Makeup", "Hair", "Skin", "Salon"] as const
  },

  galleryItems: [
    {
      id: "g1",
      title: "Royal Crimson Bridal Look",
      category: "Bridal",
      image: "/images/bridal-campaign.jpg",
      aspectClass: "col-span-12 md:col-span-8 aspect-[16/10]"
    },
    {
      id: "g2",
      title: "Traditional Mogra Gajra Hair Styling",
      category: "Hair",
      image: "/images/bridal-hair-gajra.jpg",
      aspectClass: "col-span-12 md:col-span-4 aspect-[4/5]"
    },
    {
      id: "g3",
      title: "Arched Salon Interior & Mirrors",
      category: "Salon",
      image: "/images/salon-interior.jpg",
      aspectClass: "col-span-12 md:col-span-5 aspect-[4/3]"
    },
    {
      id: "g4",
      title: "Flawless Cheekbone Highlighting",
      category: "Makeup",
      image: "/images/makeup-glow.jpg",
      aspectClass: "col-span-12 md:col-span-7 aspect-[16/10]"
    },
    {
      id: "g5",
      title: "Voluminous Glossy Waves",
      category: "Hair",
      image: "/images/hair-styling.jpg",
      aspectClass: "col-span-12 md:col-span-4 aspect-[4/5]"
    },
    {
      id: "g6",
      title: "Botanical Clay Facial & Glow Mask",
      category: "Skin",
      image: "/images/skincare-facial.jpg",
      aspectClass: "col-span-12 md:col-span-4 aspect-[4/5]"
    },
    {
      id: "g7",
      title: "Minimalist Blush Manicure with Rings",
      category: "Makeup",
      image: "/images/nail-care.jpg",
      aspectClass: "col-span-12 md:col-span-4 aspect-[4/5]"
    }
  ] as GalleryItem[],

  testimonials: [
    {
      id: "t1",
      name: "Priya S.",
      role: "Bridal Client",
      quote: "The bridal makeup was absolutely stunning. I felt poised, radiant, and completely myself on my big day. The team listened to every detail with gentle patience.",
      avatar: "/images/client-priya.jpg",
      rating: 5
    },
    {
      id: "t2",
      name: "Sneha R.",
      role: "Regular Client",
      quote: "Very professional and hygienic atmosphere. The staff recommended the perfect skincare routine for my sensitive skin. The salon is my favorite weekend retreat.",
      avatar: "/images/client-sneha.jpg",
      rating: 5
    },
    {
      id: "t3",
      name: "Anjali M.",
      role: "Happy Client",
      quote: "Outstanding experience! The ambiance is soothing, the products feel extraordinarily luxurious, and the hair styling was truly magazine-worthy.",
      avatar: "/images/client-priya.jpg",
      rating: 5
    }
  ] as TestimonialItem[],

  appointment: {
    eyebrow: "RESERVATIONS",
    headline: "Your Moment of Beauty Awaits.",
    supporting: "Get in touch to discover our services and arrange your next beauty appointment."
  },

  contact: {
    phone: "+91 98765 43210",
    whatsappNumber: "919876543210",
    email: "enquiries@sheneedsbeauty.com",
    address: "Road No. 36, Jubilee Hills, Hyderabad, Telangana - 500033",
    shortAddress: "Hyderabad, Telangana",
    hours: "Mon – Sun: 9:00 AM – 8:00 PM",
    instagramHandle: "@sheneeds_beautyparlour",
    instagramUrl: "https://instagram.com",
    facebookUrl: "https://facebook.com",
    youtubeUrl: "https://youtube.com"
  }
};
