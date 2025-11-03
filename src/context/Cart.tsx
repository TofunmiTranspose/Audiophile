import { createContext, useState, type ReactNode } from "react";
export interface CartType {
  image: string;
  name: string;
  price: string | undefined;
  quantity: number;
}

export interface CartContextType {
  cart: CartType[] | null;
  setCart: (cart: CartType[] | null) => void;
}

export const CartContext = createContext<CartContextType>({
  cart: null,
  setCart: () => {},
});

const Cart = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartType[] | null>(null);
  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default Cart;
