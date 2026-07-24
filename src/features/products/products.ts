export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  rating: number;
  isNew: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Lentes Black Premium",
    category: "Lentes",
    price: 79.9,
    image: "🕶️",
    rating: 5,
    isNew: true,
  },
  {
    id: 2,
    name: "Collar Elegance",
    category: "Collares",
    price: 49.9,
    image: "🦩",
    rating: 5,
    isNew: false,
  },
  {
    id: 3,
    name: "Polo Oversize",
    category: "Polos",
    price: 69.9,
    image: "👕",
    rating: 4,
    isNew: true,
  },
  {
    id: 4,
    name: "Reloj Classic",
    category: "Accesorios",
    price: 129.9,
    image: "⌚",
    rating: 5,
    isNew: false,
  },
  {
    id: 5,
    name: "Lentes Urban",
    category: "Lentes",
    price: 89.9,
    image: "🕶️",
    rating: 5,
    isNew: true,
  },
  {
    id: 6,
    name: "Polo Minimal",
    category: "Polos",
    price: 59.9,
    image: "👕",
    rating: 4,
    isNew: false,
  },
];