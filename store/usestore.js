import create from 'zustand';
import { products } from '../app/products';
const useStore = create((set) => ({
  products: products,
  
filterproduct: (value) => set(products.filter((pro)=>pro.name === value)),
}));

export default useStore;