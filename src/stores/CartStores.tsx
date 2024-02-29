import { ProductProps } from "@/utils/data/products";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import * as CartInMemory from "./helpers/CartInMemory";

import AsyncStorage, { useAsyncStorage } from "@react-native-async-storage/async-storage";

export type ProductCartProps = ProductProps & {
    quantity: number;
}

type StateProps = {
    products: ProductCartProps[];
    add: (product: ProductProps) => void;
    remove: (productId: string) => void;
    clear: () => void;
}

export const useCartStore = create(persist<StateProps>((set) => ({
    products: [],
    add: (product: ProductProps) =>
        set((state) => ({
            products: CartInMemory.add(state.products, product),
        })),
    remove: (productId: string) =>
        set((state) => ({
            products: state.products.filter(product => product.id !== productId)
        })),
        
        clear: () => set(() => ({products:[]})),
}), {
    name: "project-nlw:cart",
    storage: createJSONStorage(() => AsyncStorage)
}));
