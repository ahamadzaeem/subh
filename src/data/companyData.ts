export interface Venture {
  id: string;
  name: string;
  badge: string;
  tagline: string;
  description: string;
  logoText: string;
  themeColor: string;
  buttonText: string;
  buttonBg: string;
  image: string;
  features: {
    iconName: string;
    label: string;
  }[];
}

export interface Product {
  id: string;
  category: string;
  title: string;
  description: string;
  items: string[];
  image: string;
}

export interface NewsItem {
  id: string;
  date: string;
  title: string;
  image: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  location: string;
  image: string;
}

export interface Milestone {
  id: string;
  yearLabel: string;
  title: string;
  description: string;
  badge: string;
}

export const COMPANY_INFO = {
  name: "Subhashini Industries Pvt. Ltd.",
  tradeName: "SUBHASHINI ENTERPRISES",
  eyebrow: "GLOBAL REACH | FRESH PRODUCE | SUSTAINABLE GROWTH",
  heroTitle: "SUBHASHINI INDUSTRIES PVT. LTD.",
  heroSubheading: "Connecting Freshness to the World",
  heroDescription:
    "A diversified business group focused on global agri exports, modern retail, commercial spaces and sustainable growth.",
  experienceYears: "25+",
  location: {
    address: "St. Joseph Building",
    city: "Vaikom",
    district: "Alappuzha",
    state: "Kerala",
    country: "India",
    fullAddress: "St. Joseph Building, Vaikom, Alappuzha, Kerala, India",
  },
  contact: {
    email: "info@subhashiniindustries.com",
    emailExport: "export@subhashiniindustries.com",
    phone: "+91 12345 67890",
    mobile: "+91 94471 23456",
    whatsapp: "+911234567890",
    workingHours: "Mon - Sat: 8:00 AM - 7:00 PM IST",
  },
  stats: [
    { number: "25+", label: "Years of Experience" },
    { number: "50+", label: "Global Customers" },
    { number: "100+", label: "Products Exported" },
    { number: "10+", label: "Countries Served" },
  ],
};

export const TRUST_STRIP_ITEMS = [
  {
    icon: "Leaf",
    title: "Quality Produce",
    subtitle: "Premium quality agricultural products from India",
  },
  {
    icon: "Globe",
    title: "Global Markets",
    subtitle: "Exporting to international destinations",
  },
  {
    icon: "Handshake",
    title: "Trusted Partnerships",
    subtitle: "Long-term relationships built on trust",
  },
  {
    icon: "Sprout",
    title: "Sustainable Future",
    subtitle: "Responsible practices for a better tomorrow",
  },
];

export const VENTURES_DATA: Venture[] = [
  {
    id: "subh-greenz",
    name: "Subh Greenz Hypermarket",
    badge: "HYPERMARKET & RETAIL",
    tagline: "Fresh Choices for a Better Everyday",
    description:
      "A modern hypermarket offering fresh groceries, household essentials and a wide range of quality products for your family.",
    logoText: "subh Greenz HYPER MARKET",
    themeColor: "from-[#0b3322] to-[#155c3d]",
    buttonText: "Visit Subha Greenz",
    buttonBg: "bg-[#0b3322] hover:bg-[#155c3d]",
    image: "/images/subh-greenz-banner.jpg",
    features: [
      { iconName: "ShoppingCart", label: "Wide Range" },
      { iconName: "Leaf", label: "Fresh Products" },
      { iconName: "Users", label: "Great Value" },
      { iconName: "MapPin", label: "Multiple Branches" },
    ],
  },
  {
    id: "shiva-exporting",
    name: "Shiva Exporting",
    badge: "EXPORT DIVISION",
    tagline: "Bringing Nature's Best to the World",
    description:
      "Exporting premium quality fruits, vegetables and agricultural products to global markets with a commitment to quality and trust.",
    logoText: "Shiva EXPORTING",
    themeColor: "from-[#991b1b] to-[#dc2626]",
    buttonText: "Visit Shiva Exporting",
    buttonBg: "bg-[#b91c1c] hover:bg-[#991b1b]",
    image: "/images/shiva-exporting-banner.jpg",
    features: [
      { iconName: "Globe", label: "Global Export" },
      { iconName: "ShieldCheck", label: "Premium Quality" },
      { iconName: "Container", label: "Reliable Supply" },
      { iconName: "BarChart", label: "Growing Markets" },
    ],
  },
  {
    id: "subhashini-tower",
    name: "Subhashini Tower",
    badge: "REAL ESTATE & COMMERCIAL",
    tagline: "A Landmark for Business & Lifestyle",
    description:
      "A modern multi-complex with premium shopping spaces, offices and lifestyle destinations in one location.",
    logoText: "Subhashini TOWER",
    themeColor: "from-[#0f2942] to-[#1e3a5f]",
    buttonText: "Visit Subhashini Tower",
    buttonBg: "bg-[#0f2942] hover:bg-[#1e3a5f]",
    image: "/images/subhashini-tower-banner.jpg",
    features: [
      { iconName: "ShoppingBag", label: "Shopping Spaces" },
      { iconName: "Building", label: "Office Spaces" },
      { iconName: "MapPin", label: "Prime Location" },
      { iconName: "Users", label: "Modern Facilities" },
    ],
  },
];

export const PRODUCTS_DATA: Product[] = [
  {
    id: "fresh-vegetables",
    category: "Fresh Vegetables",
    title: "Fresh Vegetables",
    description:
      "Wide range of farm-fresh vegetables including okra, bitter gourd, drumstick, brinjal, pumpkin, and green chilies.",
    items: ["Okra", "Bitter Gourd", "Drumstick", "Brinjal", "Pumpkin", "Green Chilies"],
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "fresh-fruits",
    category: "Fresh Fruits",
    title: "Fresh Fruits",
    description:
      "Sun-ripened tropical fruits including Nendran bananas, Malabar pineapple, mangoes, papaya, and jackfruit.",
    items: ["Nendran Banana", "Malabar Pineapple", "Ripe Mangoes", "Fresh Papaya", "Jackfruit"],
    image: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "coconut",
    category: "Coconut & By-products",
    title: "Coconut & By-products",
    description:
      "Fresh tender green coconuts, fully husked coconuts, dried copra, and coconut shell products.",
    items: ["Tender Green Coconut", "Husked Coconut", "Semi-Husked Coconut", "Dried Copra"],
    image: "https://images.unsplash.com/photo-1543362906-acfc16c67564?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "spices",
    category: "Spices & Condiments",
    title: "Spices & Condiments",
    description:
      "Authentic Western Ghats spices including green cardamom, black pepper, nutmeg, clove, and turmeric.",
    items: ["Green Cardamom", "Black Pepper", "Nutmeg", "Clove", "Turmeric"],
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "other-agri",
    category: "Other Agricultural Products",
    title: "Other Agricultural Products",
    description:
      "Nutrient-dense leafy greens, curry leaves, tapioca root, elephant foot yam, and ginger.",
    items: ["Curry Leaves", "Tapioca Root", "Yam", "Ginger", "Fresh Herbs"],
    image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?q=80&w=1200&auto=format&fit=crop",
  },
];

export const NEWS_ITEMS: NewsItem[] = [
  {
    id: "1",
    date: "15 Aug 2024",
    title: "Expanding Our Export Reach to New Markets",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "2",
    date: "28 Jun 2024",
    title: "Subha Greenz Launches a New Branch",
    image: "/images/subh-greenz-banner.jpg",
  },
  {
    id: "3",
    date: "10 Apr 2024",
    title: "Strengthening Sustainable Supply Chains",
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=800&auto=format&fit=crop",
  },
];

export const GALLERY_IMAGES: GalleryItem[] = [
  {
    id: "1",
    title: "Kerala Agricultural Harvest",
    category: "Farming",
    location: "Alappuzha, Kerala",
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "2",
    title: "Container Cargo Export Ship",
    category: "Logistics",
    location: "Cochin Port / Maldives Route",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "3",
    title: "Subh Greenz Hypermarket Produce Aisle",
    category: "Retail",
    location: "Vaikom, Kerala",
    image: "/images/subh-greenz-banner.jpg",
  },
  {
    id: "4",
    title: "Subhashini Tower Commercial Complex",
    category: "Landmark",
    location: "Vaikom, Kerala",
    image: "/images/subhashini-tower-banner.jpg",
  },
];

export const PROCESS_STAGES = [
  {
    number: "01",
    title: "SOURCE",
    headline: "Partnering with Local Growers",
    description:
      "We partner directly with trusted agricultural farms across Kerala and South India.",
    icon: "Sprout",
  },
  {
    number: "02",
    title: "SELECT",
    headline: "Rigorous Quality Inspection",
    description:
      "Every batch undergoes multi-point inspection for size, skin texture, and freshness.",
    icon: "CheckCircle2",
  },
  {
    number: "03",
    title: "PACK",
    headline: "Protective Export Packaging",
    description:
      "Produce is packed in ventilated export boxes engineered for transit stability.",
    icon: "Box",
  },
  {
    number: "04",
    title: "EXPORT",
    headline: "Rapid Sea Logistics",
    description:
      "Cold-chain distribution connecting Kerala ports to international destinations in Maldives.",
    icon: "Ship",
  },
];

export const WHY_US_PILLARS = [
  {
    number: "01",
    title: "25+ Years of Experience",
    description:
      "Deep industry knowledge in perishable logistics and international export regulations.",
  },
  {
    number: "02",
    title: "Quality-Focused Sourcing",
    description:
      "Strict fresh-harvest protocols ensuring produce arrives crisp and nutrient-dense.",
  },
  {
    number: "03",
    title: "Reliable Supply Chain",
    description:
      "Dedicated cold transport facilities preventing transit delay or temperature fluctuation.",
  },
  {
    number: "04",
    title: "International Market Experience",
    description:
      "Decades of expertise satisfying international resort chains and distributors in Maldives.",
  },
  {
    number: "05",
    title: "Strong Supplier Relationships",
    description:
      "Direct contracts with Kerala farming communities providing year-round produce.",
  },
  {
    number: "06",
    title: "Fresh Produce Expertise",
    description:
      "Specialized handling procedures tailored for sensitive fruits, vegetables, and coconuts.",
  },
];

export const TIMELINE_MILESTONES: Milestone[] = [
  {
    id: "foundation",
    yearLabel: "FOUNDATION",
    badge: "Heritage",
    title: "Regional Trade Establishment",
    description:
      "Subhashini Enterprises began its story in Vaikom, Alappuzha, establishing a regional trading setup focused on sourcing high-quality fresh produce.",
  },
  {
    id: "export-launch",
    yearLabel: "EXPANSION",
    badge: "Export Era",
    title: "Pioneering Export to Maldives",
    description:
      "Initiated direct maritime export routes from Kerala ports to Male, Maldives under foundational leadership.",
  },
  {
    id: "today",
    yearLabel: "TODAY",
    badge: "Modernization",
    title: "Group Ventures & Logistics",
    description:
      "Operating Subh Greenz Hypermarket, Shiva Exporting, and Subhashini Tower alongside global produce export.",
  },
];
