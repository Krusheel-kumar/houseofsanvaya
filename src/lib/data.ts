export interface Product {
  id: string;
  name: string;
  category: string;
  categorySlug: 'sarees' | 'kurtis' | 'dresses' | 'coord' | 'accessories';
  originalPrice: number;
  currentPrice: number;
  rating: number;
  reviews: number;
  image: string;
  description?: string;
  fabric?: string;
  color?: string;
}

export const products: Product[] = [
  // SAREES
  { 
    id: "1", 
    name: "Organza Floral Saree", 
    category: "Sarees", 
    categorySlug: "sarees",
    originalPrice: 3499, 
    currentPrice: 2499, 
    rating: 4.4, 
    reviews: 128,
    image: "/assets/Blush Floral Saree in Bloom.png",
    fabric: "Pure Organza Silk",
    color: "Blush Pink",
    description: "Delicate handcrafted floral prints with scalloped cutwork border and matching unstitched blouse piece."
  },
  { 
    id: "5", 
    name: "Luxurious Maroon Bridal Saree", 
    category: "Sarees", 
    categorySlug: "sarees",
    originalPrice: 4499, 
    currentPrice: 3499, 
    rating: 4.5, 
    reviews: 172,
    image: "/assets/Luxurious Maroon Saree Display.png",
    fabric: "Heritage Banarasi Silk",
    color: "Royal Maroon",
    description: "Heavy antique gold zari weave with intricate royal pallu motifs, perfect for wedding and puja evenings."
  },
  { 
    id: "6", 
    name: "Banarasi Silk Saree", 
    category: "Sarees", 
    categorySlug: "sarees",
    originalPrice: 5999, 
    currentPrice: 4299, 
    rating: 4.4, 
    reviews: 142,
    image: "/assets/sarees.png",
    fabric: "Katan Silk",
    color: "Emerald Gold",
    description: "Classic woven Banarasi with kadwa zari technique and opulent border."
  },

  // KURTIS & ANARKALIS
  { 
    id: "2", 
    name: "Embroidered Kurti Set", 
    category: "Kurtis", 
    categorySlug: "kurtis",
    originalPrice: 2499, 
    currentPrice: 1899, 
    rating: 4.5, 
    reviews: 94,
    image: "/assets/Embroidered Pastel Ensemble in Arched Studio.png",
    fabric: "Chanderi Silk & Mulmul",
    color: "Pastel Peach",
    description: "Intricately embroidered straight kurti paired with trousers and sheer organza dupatta."
  },
  { 
    id: "3", 
    name: "Emerald Gold Anarkali Set", 
    category: "Kurtis", 
    categorySlug: "kurtis",
    originalPrice: 3999, 
    currentPrice: 2999, 
    rating: 4.3, 
    reviews: 215,
    image: "/assets/Emerald Gold Anarkali in Arched Atelier.png",
    fabric: "Georgette Silk",
    color: "Emerald Green",
    description: "Flared 32-kali festive Anarkali with golden sequin handwork and heavy border dupatta."
  },
  { 
    id: "7", 
    name: "Royal Festive Kurta Set", 
    category: "Kurtis", 
    categorySlug: "kurtis",
    originalPrice: 3299, 
    currentPrice: 2399, 
    rating: 4.2, 
    reviews: 87,
    image: "/assets/kurtasets.png",
    fabric: "Raw Silk",
    color: "Ivory Gold",
    description: "Traditional yoke thread embroidery with comfortable silhouette and scalloped hem."
  },

  // DRESSES
  { 
    id: "8", 
    name: "Festive Tiered Maxi Dress", 
    category: "Dresses", 
    categorySlug: "dresses",
    originalPrice: 2999, 
    currentPrice: 2199, 
    rating: 4.4, 
    reviews: 112,
    image: "/assets/dresses.png",
    fabric: "Georgette Chiffon",
    color: "Dusty Rose",
    description: "Flowy contemporary ethnic dress with smocked waistline and subtle gold foil accents."
  },
  { 
    id: "9", 
    name: "Lehenga Style Ethnic Dress", 
    category: "Dresses", 
    categorySlug: "dresses",
    originalPrice: 4299, 
    currentPrice: 3199, 
    rating: 4.5, 
    reviews: 98,
    image: "/assets/lehangaset.png",
    fabric: "Organza Crepe",
    color: "Ruby Red",
    description: "Modernized Indo-western flared dress inspired by royal Indian silhouette drapery."
  },

  // CO-ORD SETS
  { 
    id: "4", 
    name: "Floral Palazzo Co-ord Set", 
    category: "Co-ord Sets", 
    categorySlug: "coord",
    originalPrice: 2299, 
    currentPrice: 1799, 
    rating: 4.2, 
    reviews: 68,
    image: "/assets/Floral Palazzo Ensemble in an Arched Studio.png",
    fabric: "Crepe Silk",
    color: "Warm Ivory",
    description: "Chic printed crop top and matching high-waisted wide-leg palazzo with floor-length cape."
  },
  { 
    id: "10", 
    name: "Modern Embroidered Co-ord", 
    category: "Co-ord Sets", 
    categorySlug: "coord",
    originalPrice: 2699, 
    currentPrice: 1999, 
    rating: 4.3, 
    reviews: 79,
    image: "/assets/coord.png",
    fabric: "Modal Satin",
    color: "Sage Mint",
    description: "Tailored blazer-cut silhouette paired with comfortable parallel trousers."
  },

  // ACCESSORIES
  { 
    id: "11", 
    name: "Kundan & Pearl Choker Set", 
    category: "Accessories", 
    categorySlug: "accessories",
    originalPrice: 1999, 
    currentPrice: 1299, 
    rating: 4.5, 
    reviews: 154,
    image: "/assets/accessories.png",
    fabric: "Brass & Semi-precious Stones",
    color: "Antique Gold",
    description: "Handcrafted temple Kundan necklace with matching jhumkas and maang tikka."
  },
  { 
    id: "12", 
    name: "Zardozi Potli Bag", 
    category: "Accessories", 
    categorySlug: "accessories",
    originalPrice: 1499, 
    currentPrice: 999, 
    rating: 4.4, 
    reviews: 83,
    image: "/assets/collection.png",
    fabric: "Velvet with Gold Zari",
    color: "Forest Green",
    description: "Embroidered festive drawstring clutch bag adorned with pearls and silk tassels."
  }
];

export const getDiscount = (o: number, c: number) => Math.round(((o - c) / o) * 100);