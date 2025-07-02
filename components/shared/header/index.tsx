import { ShoppingCart, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../../ui/button";
import { APP_NAME } from "@/lib/constants";
import ModeToggle from "./mode-toggle";

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex-between">
        <div className="flex-start">
          <Link href="/" className="flex-start">
            <Image
              src="/images/logo.png"
              alt={APP_NAME}
              width={48}
              height={48}
              priority={true}
              className="rounded-full"
            />
            <span className="hidden lg:block font-bold text-2xl ml-3">
              {APP_NAME}
            </span>
          </Link>
        </div>
        <div className="space-x-2">
            <ModeToggle />
          <Button asChild variant={"ghost"}>
            <Link href="/cart">
              <ShoppingCart className="h-6 w-6" /> Cart
            </Link>
          </Button>
          <Button asChild >
            <Link href="/account">
              <User className="h-6 w-6" /> Account
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
