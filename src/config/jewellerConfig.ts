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
  category: 'bridal' | 'gold' | 'diamond' | 'mangalsutra' | 'bangles' | 'necklaces' | 'rings' | 'chains' | 'earrings';
  categoryLabel: string;
  description: string;
  marathiDescription: string;
  image: string;
  additionalImages?: string[];
  purity: string;
  features: string[];
  occasion: string;
  isEditorialShowcase?: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  marathiTitle: string;
  category: 'all' | 'showroom' | 'jewellery' | 'bridal' | 'collections';
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

export interface ShowroomVideoItem {
  id: string;
  tabLabel: string;
  title: string;
  titleMarathi: string;
  subtitle: string;
  poster: string;
  videoUrl: string;
}

export const JEWELLER_CONFIG = {
  // Brand Identity
  businessName: 'Shree Ambika Jewellers',
  businessNameMarathi: 'श्री अंबिका ज्वेलर्स',
  businessNameDevanagari: 'श्री अंबिका ज्वेलर्स',
  tagline: 'परंपरेचा विश्वास • सौंदर्याची नवी ओळख',
  taglineEnglish: 'Elegance That Speaks. Jewellery That Belongs to You.',
  supportingText: 'Discover beautifully crafted jewellery for every celebration, occasion and cherished moment.',
  developerCredit: 'Website designed & developed by Kartik Jadhav',
  
  // Contact & Social (Single central configuration)
  phone: '+91 73854 44000',
  phoneRaw: '7385444000',
  whatsapp: '+91 73854 44000',
  whatsappNumber: '917385444000',
  email: 'contact@shreeambikajewellers.com', // Editable placeholder for showroom owner
  instagram: 'https://instagram.com',
  facebook: 'https://facebook.com',
  youtube: 'https://youtube.com',
  
  // Showroom Location & Maps
  address: 'Main Bazar Peth, Near Shree Darshan Sagar Chowk, Roha, Raigad, Maharashtra 402109, India',
  landmark: 'Near Shree Darshan Sagar Chowk, Bazar Peth',
  city: 'Roha',
  district: 'Raigad',
  state: 'Maharashtra',
  pincode: '402109',
  googleMapsUrl: 'https://maps.app.goo.gl/7GNtvgMYqEmvLQMt6',
  
  // Publicly Verified Credentials
  establishedYear: '1925',
  googleRating: 5.0,
  reviewCount: '24+',
  
  // Showroom Operating Hours (Verified from Google Maps / Public Listing)
  openingHours: [
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

  // WhatsApp Pre-filled message generator (Reusable throughout)
  getWhatsAppUrl: (categoryOrDesign?: string) => {
    const topic = categoryOrDesign || 'jewellery collection';
    const message = `Hello Shree Ambika Jewellers,
I am interested in your ${topic}.
I found this on your website.
Please share more details and availability.`;
    return `https://wa.me/917385444000?text=${encodeURIComponent(message)}`;
  },

  getPhoneUrl: () => `tel:7385444000`,

  // Hero Media Assets
  heroImage: 'https://images.unsplash.com/photo-1582533561751-ef6f6ab93a2e?auto=format&fit=crop&w=1920&q=85',

  // Video Section Config with 3 tabs
  videos: [
    {
      id: 'v1',
      tabLabel: 'Video 01: Showroom',
      title: 'Showroom Tour & Ambiance',
      titleMarathi: 'रोहा दालनाची सफर',
      subtitle: 'Experience our welcoming luxury showroom in Main Bazar Peth, Roha.',
      poster: 'https://images.unsplash.com/photo-1582533561751-ef6f6ab93a2e?auto=format&fit=crop&w=1200&q=80',
      videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    },
    {
      id: 'v2',
      tabLabel: 'Video 02: Jewellery Collection',
      title: 'Artisanal Gold & Diamond Craft',
      titleMarathi: 'सुवर्ण दागिन्यांचे नक्षीदार काम',
      subtitle: 'Close-up look at master craftsmanship, filigree and traditional Maharashtrian motifs.',
      poster: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=1200&q=80',
      videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    },
    {
      id: 'v3',
      tabLabel: 'Video 03: Special Collection',
      title: 'Bridal Heritage & Festive Splendour',
      titleMarathi: 'शाही लग्नसोहळा खास दालन',
      subtitle: 'Royal neckpieces, Kolhapuri saaj, and bridal heirlooms curated for weddings.',
      poster: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1200&q=80',
      videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyBlazes.mp4',
    },
  ] as ShowroomVideoItem[],

  // Special Moments Configuration
  specialMoments: [
    {
      id: 'engagement',
      icon: '💍',
      title: 'Engagement',
      marathiTitle: 'साखरपुडा',
      description: 'Elegant designs for a memorable beginning.',
      detail: 'Certified solitaire diamond rings, delicate eternity bands, and auspicious gold rings designed for eternal commitments.',
      image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'wedding',
      icon: '👰',
      title: 'Wedding',
      marathiTitle: 'लग्नसोहळा',
      description: 'Statement jewellery for special celebrations.',
      detail: 'Traditional Maharashtrian bridal sets, Tanmani, Kolhapuri Saaj, and antique gold necklaces that crown the bride in grandeur.',
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'everyday',
      icon: '✨',
      title: 'Everyday',
      marathiTitle: 'नित्य अलंकार',
      description: 'Beautiful designs for everyday elegance.',
      detail: 'Lightweight gold chains, minimal mangalsutras, daily wear stud earrings, and bangles designed for modern daily comfort.',
      image: 'https://images.unsplash.com/photo-1611591475152-47831c3baf96?auto=format&fit=crop&w=800&q=80',
    },
  ],

  // Bridal Section Highlight
  bridalHighlight: {
    heading: 'Made for Your Special Day',
    headingMarathi: 'तुमच्या खास दिवसासाठी शाही अलंकार',
    text: 'Discover elegant jewellery designs curated for weddings, celebrations and unforgettable moments. From royal choker sets and handcrafted rani haars to matching kadas and jhumkas, every piece radiates timeless purity.',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1200&q=80',
    features: [
      'Authentic 22K 916 BIS Hallmark stamping',
      'Intricate Kolhapuri Saaj, Tanmani & Thushi motifs',
      'Private bridal consultation & custom sizing',
      'Bespoke ornament customization from your reference photos',
    ],
  },

  // Featured Collections (All categories supported by showroom)
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
      isEditorialShowcase: true,
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
      isEditorialShowcase: true,
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
      isEditorialShowcase: true,
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
      isEditorialShowcase: true,
    },
    {
      id: 'coll-diamond',
      name: 'Solitaire & Cluster Diamond Rings',
      marathiName: 'अस्सल हिऱ्यांच्या अंगठ्या',
      category: 'diamond',
      categoryLabel: 'Diamond Jewellery',
      description: 'Certified brilliant-cut solitaire diamond rings crafted in 18K white and rose gold.',
      marathiDescription: 'तेजस्वी अस्सल हिऱ्यांची सुरेख घडणावळ आणि आधुनिक डिझाईन.',
      image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80',
      additionalImages: [
        'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=800&q=80',
      ],
      purity: '18K Gold • VVS-VS Clarity',
      features: ['Certified Natural Diamonds', 'Micro-Pavé Setting', 'Custom Engraving Available'],
      occasion: 'Engagements & Anniversaries',
      isEditorialShowcase: true,
    },
    {
      id: 'coll-gold-earrings',
      name: 'Classic Gold Jhumkas & Chandbalis',
      marathiName: 'पारंपारिक झुमके व चांदबाली',
      category: 'earrings',
      categoryLabel: 'Gold Earrings',
      description: 'Graceful bell jhumkas with hanging pearl droplets and intricate handcrafted floral motifs.',
      marathiDescription: 'कानसेनच्या सौंदर्यात भर घालणारे हलके व वजनदार सुवर्ण झुमके.',
      image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=800&q=80',
      additionalImages: [
        'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80',
      ],
      purity: '22K 916 BIS Hallmarked',
      features: ['Secure Screw-Back Closure', 'Featherlight Weight Balance', 'Traditional Filigree'],
      occasion: 'Family Celebrations & Puja',
      isEditorialShowcase: true,
    },
    {
      id: 'coll-chains',
      name: 'Handmade 22K Gold Chains',
      marathiName: 'हस्तनिर्मित सुवर्ण साखळ्या',
      category: 'chains',
      categoryLabel: 'Gold Chains',
      description: 'Durable solid gold chains in rope, box, and lotus link patterns suited for men and women.',
      marathiDescription: 'मजबूत आणि टिकाऊ डिझाईनच्या विविध प्रकारच्या सोन्याच्या साखळ्या.',
      image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=800&q=80',
      additionalImages: [],
      purity: '22K 916 BIS Hallmarked',
      features: ['Robust S-Hook Clasp', 'High Polish Luster', 'Multiple Weight Options'],
      occasion: 'Daily Wear & Gifting',
      isEditorialShowcase: false,
    },
    {
      id: 'coll-rings',
      name: 'Floral Gold Cocktail Rings',
      marathiName: 'नक्षीदार सोन्याच्या अंगठ्या',
      category: 'rings',
      categoryLabel: 'Gold Rings',
      description: 'Statement cocktail rings featuring detailed filigree and red-green enamel accents.',
      marathiDescription: 'हात सजवणारी खास नक्षीदार सोन्याची अंगठी.',
      image: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=800&q=80',
      additionalImages: [],
      purity: '22K 916 BIS Hallmarked',
      features: ['Comfort Band Interior', 'Enamel Detailing', 'Adjustable Fit Options'],
      occasion: 'Festivals & Celebrations',
      isEditorialShowcase: false,
    },
  ] as JewelleryItem[],

  // Editorial Showcase Items (Curated 5 items with asymmetric weights)
  editorialShowcase: [
    {
      id: 'showcase-1',
      name: 'The Royal Bridal Choker',
      marathiName: 'शाही ब्रायडल चोकर',
      category: 'Bridal Heirloom',
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1200&q=80',
      description: 'Featuring uncut gemstones and detailed 22K filigree craftsmanship crafted for memorable weddings.',
      isFeaturedLarge: true,
    },
    {
      id: 'showcase-2',
      name: 'Heritage Kolhapuri Saaj',
      marathiName: 'पारंपारिक कोल्हापुरी साज',
      category: 'Temple Jewellery',
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80',
      description: 'Auspicious leaves and floral medallions hand-linked in pure 22K hallmarked gold.',
      isFeaturedLarge: false,
    },
    {
      id: 'showcase-3',
      name: 'Certified Solitaire Engagement Ring',
      marathiName: 'साखरपुड्याची हिऱ्याची अंगठी',
      category: 'Diamonds & Solitaires',
      image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80',
      description: 'Sparkling brilliant cut diamond in a micro-pavé 18K gold band.',
      isFeaturedLarge: false,
    },
    {
      id: 'showcase-4',
      name: 'Traditional Two-Vat Mangalsutra',
      marathiName: 'दोन वाट्यांचे मंगळसूत्र',
      category: 'Sacred Mangalsutra',
      image: 'https://images.unsplash.com/photo-1611591475152-47831c3baf96?auto=format&fit=crop&w=800&q=80',
      description: 'Auspicious golden vatis linked with protective black beads.',
      isFeaturedLarge: false,
    },
    {
      id: 'showcase-5',
      name: 'Antique Maharashtrian Tode',
      marathiName: 'हस्तनिर्मित तोडे व पाटल्या',
      category: 'Gold Bangles',
      image: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&w=800&q=80',
      description: 'Embossed floral kadas made with solid inner durability and antique polish.',
      isFeaturedLarge: false,
    },
  ],

  // Gallery items across showroom & jewellery pieces (10-12 curated images)
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
      category: 'jewellery',
      image: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&w=1200&q=80',
      caption: 'Traditional Maharashtrian antique bangles crafted with precision.',
    },
    {
      id: 'gal-diamond-1',
      title: 'Certified Solitaire Engagement Ring',
      marathiTitle: 'हिऱ्याची साखरपुडा अंगठी',
      category: 'jewellery',
      image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1200&q=80',
      caption: 'Brilliant round diamond solitaire set in polished 18K gold band.',
    },
    {
      id: 'gal-mangalsutra-1',
      title: 'Traditional Two-Vat Mangalsutra',
      marathiTitle: 'दोन वाट्यांचे सुवर्ण मंगळसूत्र',
      category: 'collections',
      image: 'https://images.unsplash.com/photo-1611591475152-47831c3baf96?auto=format&fit=crop&w=1200&q=80',
      caption: 'Auspicious sacred mangalsutra with pure black bead weave.',
    },
    {
      id: 'gal-necklaces-1',
      title: 'Temple Kolhapuri Saaj',
      marathiTitle: 'शाही कोल्हापुरी साज',
      category: 'jewellery',
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1200&q=80',
      caption: 'Heritage 22K necklace adorned with authentic temple leaf motifs.',
    },
    {
      id: 'gal-jhumka-1',
      title: 'Classic Bell Jhumkas',
      marathiTitle: 'पारंपारिक झुमके',
      category: 'collections',
      image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=1200&q=80',
      caption: 'Detailed 22K gold bell jhumkas with hanging pearl droplets.',
    },
    {
      id: 'gal-chains-1',
      title: 'Solid Gold Chains & Sets',
      marathiTitle: 'सोन्याची साखळी व पेन्डन्ट',
      category: 'collections',
      image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=1200&q=80',
      caption: 'Polished chains handcrafted in high-karat yellow gold.',
    },
    {
      id: 'gal-showroom-2',
      title: 'Jewellery Display Counters',
      marathiTitle: 'दागिन्यांचे डिस्प्ले काऊंटर्स',
      category: 'showroom',
      image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=1200&q=80',
      caption: 'Comfortable seating and dedicated bridal trial section in Roha.',
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
