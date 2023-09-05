interface typeItem {
  id: number;
  name: string;
  price: number;
  src: string;
}
import {
  Typography,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  ButtonGroup,
} from "@material-tailwind/react";
import formatCurrency from "../Utilities/formatCurrency";
import { useShopingCart } from "../Context/ShopingCartContext";

export default function CardItems({ id, name, price, src }: typeItem) {
  const { getItemQuantity, increaseItemQuantity, decreaseItemQuantity } =
    useShopingCart();
  const quantity = getItemQuantity(id);
  return (
    <>
      <CardHeader color="blue-gray" className="relative h-56">
        <img src={src} alt={name} />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {name}
        </Typography>
        <Typography variant="h6">{formatCurrency(price)}</Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button variant="outlined">Read More</Button>
      </CardFooter>
      {quantity === 0 ? (
        <Button onClick={()=> increaseItemQuantity(id)}>+ Add to Cart</Button>
      ) : (
        <div>
          <ButtonGroup variant="text" ripple={false} size="md" fullWidth>
            <Button onClick={()=> decreaseItemQuantity(id)} className="text-red-500">-</Button>
            <Button>{quantity} in cart</Button>
            <Button onClick={()=> increaseItemQuantity(id)} className="text-green-500">+</Button>
          </ButtonGroup>
        </div>
      )}
    </>
  );
}
