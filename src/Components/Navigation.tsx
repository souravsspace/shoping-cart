import { FC } from "react";
import {
  Navbar,
  Typography,
  IconButton,
  Badge,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Navigation: FC = () => {
  return (
    <Navbar className="sticky container mx-auto top-0 z-10 h-max max-w-full items-center justify-between rounded-none flex text-black">
      <Typography
        as="h2"
        href="#"
        className="mr-4 cursor-pointer py-1.5 font-medium"
      >
        <strong>Sourav Ukil</strong>
      </Typography>
      <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-normal"
        >
          <Link to="/">Home</Link>
        </Typography>
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-normal"
        >
          <Link to="/store">Store</Link>
        </Typography>
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-normal"
        >
          <Link to="/about">About</Link>
        </Typography>
        <Badge content='5' overlap="circular" placement="bottom-end" withBorder>
          <IconButton className="rounded-full text-lg" variant="outlined">
            <i className="fa-solid fa-store" />
          </IconButton>
        </Badge>
      </ul>
    </Navbar>
  );
};

export default Navigation;
