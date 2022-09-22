export interface StyledCartItem {
  isWide?: boolean;
  isLast?: boolean;
}

export interface CartProductsProps {
  [index: number]: {
    id: string;
    name: string;
    image: string;
    price: string;
    quantity: number;
  };
}
