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
  show: boolean;
  setShow: (i: boolean) => void;
}

export const CartContext = createContext<CartContextType>({
  cart: null,
  setCart: () => {},
  show: false,
  setShow: () => {},
});

const Cart = ({ children }: { children: ReactNode }) => {
  const [show, setShow] = useState(false);
  const [cart, setCart] = useState<CartType[] | null>(null);
  return (
    <CartContext.Provider value={{ cart, setCart, show, setShow }}>
      {children}
    </CartContext.Provider>
  );
};

export default Cart;
