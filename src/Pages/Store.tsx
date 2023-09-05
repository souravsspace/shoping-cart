import {
  Typography,
  Card,
  Button,
  ButtonGroup,
  Badge,
} from "@material-tailwind/react";
import StoreData from "../Data/StoreData.json";
import CardItems from "../Components/CardItems";

const Store = () => {
  const quantity: number = 0;
  return (
    <main className="lg:px-[6rem] md:px-[2rem] px-[1rem] py-6 bg-gray-100 grid place-content-center w-full">
      <section>
        <Typography variant="h1">Store</Typography>
      </section>
      <section className="my-10 grid grid-cols-2 md:grid-cols-3 gap-[1.5rem]">
        {StoreData.map((item, index) => {
          return (
            <Card key={index} className="mt-6 w-96">
              <CardItems {...item} />
              {quantity === 0 ? (
                <Button>+ Add to Cart</Button>
              ) : (
                <div>
                  <ButtonGroup
                    variant="text"
                    ripple={false}
                    size="lg"
                    fullWidth
                  >
                    <Button className="text-red-500">-</Button>
                    <Button>1 in cart</Button>
                    <Button className="text-green-500">+</Button>
                  </ButtonGroup>
                </div>
              )}
            </Card>
          );
        })}
      </section>
    </main>
  );
};

export default Store;
