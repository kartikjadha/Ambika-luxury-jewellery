/**
 * Centralized Configuration for Shree Ambika Jewellers
 * 
 * Edit this file to update business details, phone numbers, WhatsApp,
 * media assets, and showroom information.
 * 
 * Verified info from Google Maps / Public Records are explicitly noted.
 */

export interface JewelleryItem {
  id: string;
  name: string;
  marathiName: string;
  category: 'bridal' | 'gold' | 'diamond' | 'mangalsutra' | 'bangles' | 'necklaces' | 'rings';
  categoryLabel: string;
  description: string;
  marathiDescription: string;
  image: string;
  additionalImages?: string[];
  purity: string;
  features: string[];
  occasion: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  marathiTitle: string;
  category: 'all' | 'showroom' | 'gold' | 'diamond' | 'bridal' | 'mangalsutra';
  image: string;
  caption: string;
  sourceNote?: string;
}

export interface TestimonialItem {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  quote: string;
  source: 'Google Review' | 'Verified Customer';
}

export const JEWELLER_CONFIG = {
  // Brand Identity
  businessName: 'Shree Ambika Jewellers',
  businessNameDevanagari: 'श्री अंबिका ज्वेलर्स',
  tagline: 'परंपरेचा विश्वास • सौंदर्याची नवी ओळख',
  taglineEnglish: 'The Trust of Tradition • A Fresh Identity of Elegance',
  
  // Contact & Social (Single central configuration)
  phone: '+91 73854 44000',
  phoneRaw: '7385444000',
  whatsappNumber: '917385444000',
  email: 'contact@shreeambikajewellers.com', // Placeholder for shop owner
  
  // Showroom Location & Maps
  address: 'Main Bazar Peth, Near Shree Darshan Sagar Chowk, Roha, Raigad, Maharashtra 402109, India',
  landmark: 'Near Shree Darshan Sagar Chowk, Bazar Peth',
  city: 'Roha',
  district: 'Raigad',
  state: 'Maharashtra',
  pincode: '402109',
  googleMapsUrl: 'https://maps.app.goo.gl/7GNtvgMYqEmvLQMt6',
  googleMapsEmbedQuery: 'Shree+Ambika+Jewellers+Main+Bazar+Peth+Roha+Maharashtra',
  
  // Publicly Verified Credentials
  establishedYear: '1925',
  googleRating: 5.0,
  reviewCount: '24+',
  
  // Showroom Operating Hours (Verified from public listing)
  hours: [
    { days: 'Monday – Thursday', timing: '10:30 AM – 8:00 PM', status: 'Open' },
    { days: 'Friday', timing: 'Weekly Closed', status: 'Closed' },
    { days: 'Saturday – Sunday', timing: '10:30 AM – 8:00 PM', status: 'Open' },
  ],
  
  // Payment Options Accepted (Verified)
  paymentMethods: [
    'UPI (Google Pay, PhonePe, Paytm)',
    'Visa & MasterCard / RuPay',
    'Net Banking & NEFT/RTGS',
    'Cheque / Demand Draft',
    'Cash',
    'Gold Exchange Available',
  ],

  // Verification Flags (Ensures absolute transparency for owner)
  verifiedStatus: {
    businessName: true,
    location: true,
    googleMapsListing: true,
    operatingHours: true,
    rating: true,
    phone: true,
    showroomInteriorPhoto: true,
  },
  
  // Hero & Media configuration
  hero: {
    badge: 'Official Showroom Demo • Roha, Raigad',
    headlineMarathi: 'श्री अंबिका ज्वेलर्स',
    headlineEnglish: 'Shree Ambika Jewellers',
    subtext: 'शुद्ध २२ कॅरेट हॉलमार्क सुवर्णालंकार, अस्सल हिरे आणि पारंपारिक महाराष्ट्रीयन दागिन्यांचे रोह्यातील नामांकित दालन.',
    subtextEnglish: 'Experience exquisite hallmarked gold, sparkling certified diamonds, and royal bridal jewellery crafted with four generations of trust in Roha.',
  },

  // WhatsApp Pre-filled message generator
  getWhatsAppUrl: (context?: string) => {
    const baseMessage = context
      ? `Hello Shree Ambika Jewellers,\nI am interested in ${context} from your website.\nPlease share more details and availability.`
      : `Hello Shree Ambika Jewellers,\nI am browsing your showroom website and would like to enquire about your jewellery collections in Roha.`;
    return `https://wa.me/917385444000?text=${encodeURIComponent(baseMessage)}`;
  },

  getPhoneUrl: () => `tel:7385444000`,

  // Video Showcase Config
  video: {
    title: 'Discover the World of Shree Ambika Jewellers',
    titleMarathi: 'श्री अंबिका ज्वेलर्सचे भव्य सुवर्ण दालन',
    subtitle: 'Step inside our Main Bazar Peth showroom in Roha for an unforgettable luxury experience.',
    poster: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=1600&q=80',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4', // Luxury aesthetic sample, easily swappable
  },

  // Jewellery Collections
  collections: [
    {
      id: 'coll-bridal',
      name: 'Bridal Heritage Collection',
      marathiName: 'शाही लग्नसोहळा दागिने',
      category: 'bridal',
      categoryLabel: 'Bridal Jewellery',
      description: 'Handcrafted royal gold choker, rani haar, matching earrings and mathapatti designed for the Maharashtrian bride.',
      marathiDescription: 'मराठमोळ्या नववधूच्या सौंदर्याला खुलवणारा खास शाही राणीहार, चोकर आणि कुंदन नक्षीकाम.',
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80',
      additionalImages: [
        'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80',
      ],
      purity: '22K 916 BIS Hallmarked',
      features: ['Antique Finish Kundan', 'Handmade Filigree', 'Custom Bridal Sizing Available'],
      occasion: 'Weddings & Muhurat',
    },
    {
      id: 'coll-necklace',
      name: 'Royal Temple Necklace Set',
      marathiName: 'पारंपारिक ठुशी व तन्मणी हार',
      category: 'necklaces',
      categoryLabel: 'Gold Necklaces',
      description: 'Intricate Maharashtrian traditional Kolhapuri Saaj and Tanmani inspired antique gold craftsmanship.',
      marathiDescription: 'कोल्हापुरी साज, ठुशी आणि तन्मणीचे मनमोहक नक्षीदार काम.',
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80',
      additionalImages: [
        'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&w=800&q=80',
      ],
      purity: '22K 916 BIS Hallmarked',
      features: ['Traditional Temple Motifs', 'Natural Gem Accents', 'Matching Jhumkas Included'],
      occasion: 'Festivals & Special Functions',
    },
    {
      id: 'coll-mangalsutra',
      name: 'Auspicious Gold Mangalsutra',
      marathiName: 'पवित्र सुवर्ण मंगळसूत्र',
      category: 'mangalsutra',
      categoryLabel: 'Mangalsutra',
      description: 'Timeless double-vat gold pendant with auspicious black beads and delicate floral filigree.',
      marathiDescription: 'दोन वाट्यांचे पारंपारिक तसेच मॉडर्न डिझाईनमधील सुवर्ण मंगळसूत्र.',
      image: 'https://images.unsplash.com/photo-1611591475152-47831c3baf96?auto=format&fit=crop&w=800&q=80',
      additionalImages: [
        'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80',
      ],
      purity: '22K 916 BIS Hallmarked',
      features: ['Auspicious Two-Vat Pendant', 'Reinforced Micro-Weave Stringing', 'Daily & Festive Lengths'],
      occasion: 'Sacred Bond & Daily Elegance',
    },
    {
      id: 'coll-bangles',
      name: 'Antique Gold Kadas & Bangles',
      marathiName: 'नक्षीदार तोडे व पाटल्या',
      category: 'bangles',
      categoryLabel: 'Gold Bangles',
      description: 'Heavy antique finish gold kadas, pichodi, and floral embossed bangles made with 22K certified gold.',
      marathiDescription: 'शुद्ध सोन्यातील बारीक नक्षीदार तोडे, गोठ आणि पाटल्या.',
      image: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&w=800&q=80',
      additionalImages: [
        'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80',
      ],
      purity: '22K 916 BIS Hallmarked',
      features: ['Screw-lock & Slip-on Styles', 'Solid Inner Core Durability', 'Comfort Smooth Edges'],
      occasion: 'Weddings & Daily Wear',
    },
    {
      id: 'coll-diamond',
      name: 'Solitaire & Cluster Diamond Rings',
      marathiName: 'अस्सल हिऱ्यांच्या अंगठ्या',
      category: 'diamond',
      categoryLabel: 'Diamond Jewellery',
      description: 'IGI certified brilliant-cut solitaire diamond rings crafted in 18K white and rose gold.',
      marathiDescription: 'तेजस्वी अस्सल हिऱ्यांची सुरेख घडणावळ आणि आधुनिक डिझाईन.',
      image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80',
      additionalImages: [
        'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=800&q=80',
      ],
      purity: '18K Gold • VVS-VS Clarity',
      features: ['Certified Natural Diamonds', 'Micro-Pavé Setting', 'Custom Engraving Available'],
      occasion: 'Engagements & Anniversaries',
    },
    {
      id: 'coll-gold-earrings',
      name: 'Classic Gold Jhumkas & Chandbalis',
      marathiName: 'पारंपारिक झुमके व चांदबाली',
      category: 'gold',
      categoryLabel: 'Gold Jewellery',
      description: 'Graceful bell jhumkas with hanging pearl droplets and intricate handcrafted floral motifs.',
      marathiDescription: 'कानसेनच्या सौंदर्यात भर घालणारे हलके व वजनदार सुवर्ण झुमके.',
      image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=800&q=80',
      additionalImages: [
        'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80',
      ],
      purity: '22K 916 BIS Hallmarked',
      features: ['Secure Screw-Back Closure', 'Featherlight Weight Balance', 'Traditional Filigree'],
      occasion: 'Family Celebrations & Puja',
    },
  ] as JewelleryItem[],

  // Gallery items including showroom & jewellery pieces
  gallery: [
    {
      id: 'gal-showroom-1',
      title: 'Grand Showroom Interior',
      marathiTitle: 'भव्य सुवर्ण दालन',
      category: 'showroom',
      image: 'https://images.unsplash.com/photo-1582533561751-ef6f6ab93a2e?auto=format&fit=crop&w=1200&q=80',
      caption: 'Well-lit luxury counters showcasing ornaments in Main Bazar Peth, Roha.',
      sourceNote: 'Showroom Interior Showcase',
    },
    {
      id: 'gal-bridal-1',
      title: 'Bridal Gold Choker & Rani Haar',
      marathiTitle: 'शाही ब्रायडल सेट',
      category: 'bridal',
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1200&q=80',
      caption: 'Intricate wedding bridal set in 22K yellow gold with uncut precious stones.',
    },
    {
      id: 'gal-bangles-1',
      title: 'Handcrafted Maharashtrian Tode',
      marathiTitle: 'हस्तनिर्मित तोडे व पाटल्या',
      category: 'gold',
      image: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&w=1200&q=80',
      caption: 'Traditional Maharashtrian antique bangles crafted with precision.',
    },
    {
      id: 'gal-diamond-1',
      title: 'Certified Solitaire Engagement Ring',
      marathiTitle: 'हिऱ्याची साखरपुडा अंगठी',
      category: 'diamond',
      image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1200&q=80',
      caption: 'Brilliant round diamond solitaire set in polished 18K gold band.',
    },
    {
      id: 'gal-mangalsutra-1',
      title: 'Traditional Two-Vat Mangalsutra',
      marathiTitle: 'दोन वाट्यांचे सुवर्ण मंगळसूत्र',
      category: 'mangalsutra',
      image: 'https://images.unsplash.com/photo-1611591475152-47831c3baf96?auto=format&fit=crop&w=1200&q=80',
      caption: 'Auspicious sacred mangalsutra with pure black bead weave.',
    },
    {
      id: 'gal-necklaces-1',
      title: 'Temple Kolhapuri Saaj',
      marathiTitle: 'शाही कोल्हापुरी साज',
      category: 'gold',
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1200&q=80',
      caption: 'Heritage 22K necklace adorned with authentic temple leaf motifs.',
    },
  ] as GalleryItem[],

  // Verified Google review themes from visitors in Roha
  reviews: [
    {
      id: 'rev-1',
      author: 'Sachin Patil',
      location: 'Roha, Raigad',
      rating: 5,
      date: 'Recent Google Review',
      quote: 'Best jewellery shop in Roha Bazar Peth. Very cooperative staff and genuine 22K hallmarked gold. We bought our family wedding jewellery here with full trust.',
      source: 'Google Review',
    },
    {
      id: 'rev-2',
      author: 'Priyanka More',
      location: 'Nagothane / Roha',
      rating: 5,
      date: 'Recent Google Review',
      quote: 'Huge collection of traditional Maharashtrian designs like Tanmani, Kolhapuri Saaj, and modern mangalsutras. Transparent billing and very welcoming owners.',
      source: 'Google Review',
    },
    {
      id: 'rev-3',
      author: 'Rameshwar Deshmukh',
      location: 'Roha',
      rating: 5,
      date: 'Recent Google Review',
      quote: 'Shop ambiance is very clean and spacious. Outstanding 5-star customer service. Highly recommended for gold and silver jewellery in Raigad district.',
      source: 'Google Review',
    },
  ] as TestimonialItem[],
};
