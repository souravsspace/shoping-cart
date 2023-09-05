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
} from "@material-tailwind/react";
import formatCurrency from "../Utilities/formatCurrency";

export default function CardItems({ name, price, src }: typeItem) {
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
    </>
  );
}
