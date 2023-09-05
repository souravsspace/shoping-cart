import { Typography, Card } from "@material-tailwind/react";
import StoreData from "../Data/StoreData.json";
import CardItems from "../Components/StoreItems";

const Store = () => {
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
            </Card>
          );
        })}
      </section>
    </main>
  );
};

export default Store;
