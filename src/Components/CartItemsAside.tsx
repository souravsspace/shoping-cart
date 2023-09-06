import { Button, Card, CardBody, Typography } from "@material-tailwind/react";
import { useShopingCart } from "../Context/ShopingCartContext";
import StoreData from "../Data/StoreData.json";
import formatCurrency from "../Utilities/formatCurrency";

type CartItemsAsideProps = {
  id: number;
  quantity: number;
};

export default function CartItemsAside({ id, quantity }: CartItemsAsideProps) {
  const { removeFromCart } = useShopingCart();
  const items = StoreData.find((item) => item.id === id);
  if (items == null) return null;
  return (
    <Card>
      <CardBody className="flex justify-between flex-row items-center">
        <div className="flex items-center gap-x-4">
          <img
            className="w-14 h-14 object-cover rounded-lg"
            src={items.src}
            alt={items.name}
          />
          <div className="flex flex-col justify-between">
            <Typography variant="h4" className="text-lg font-semibold">
              {items.name}
            </Typography>
            <Typography variant="h5" className="text-sm text-gray-500">
              {`${formatCurrency(items.price)} x ${quantity}`}
            </Typography>
          </div>
        </div>
        <Typography className="text-lg font-semibold">
          {formatCurrency(items.price * quantity)}
        </Typography>
        <Button
          onClickCapture={() => removeFromCart(id)}
          variant="outlined"
          onClick={() => removeFromCart(id)}
          className="text-red-500 font-semibold"
        >
          Del
        </Button>
      </CardBody>
    </Card>
  );
}
