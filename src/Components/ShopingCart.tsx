import {
  Collapse,
  Button,
  Card,
  Typography,
  CardBody
} from "@material-tailwind/react";

import { useShopingCart } from "../Context/ShopingCartContext";
import CartItemsAside from "./CartItemsAside";
import formatCurrency from "../Utilities/formatCurrency";
import StoreData from "../Data/StoreData.json";

type ShopingCartProps = {
  isOpen: boolean;
};

export function ShopingCart({ isOpen }: ShopingCartProps) {
  const { closeCart, cartItems } = useShopingCart();
  return (
    <Collapse
      className="fixed top-0 z-50 backdrop-blur-sm flex justify-end"
      open={isOpen}
    >
      <Card className="w-5/12 h-screen py-[1%]">
        <CardBody className="flex flex-col gap-y-8">
          <div className="flex justify-between items-center">
            <Typography variant="h3">Your cart</Typography>
            <Button
              onClick={closeCart}
              variant="text"
              className="flex items-center gap-2"
            >
              Back{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </Button>
          </div>
          <div className="grid gap-y-6">
            {cartItems.map((item) => (
                <CartItemsAside key={item.id} {...item} />
            ))}
            <div>
              <Typography variant="h3" className="font-semibold text-right">
                Total{" "}
                {formatCurrency(cartItems.reduce((total, cartItem)=> {
                  const item = StoreData.find((item) => item.id === cartItem.id);
                  return total + (item?.price || 0) * cartItem.quantity 
                }, 0)
                )}
              </Typography>
            </div>
          </div>
        </CardBody>
      </Card>
    </Collapse>
  );
}
