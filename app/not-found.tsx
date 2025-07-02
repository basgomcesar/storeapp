"use client";
import { APP_NAME } from "@/lib/constants";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
        <Image
            src="/images/logo.png"
            alt={`${APP_NAME} Logo`}
            width={48}
            height={48}
            className="mb-4 "
        />
      <div className="p-6 w-1/3 rounded-lg shadow-md text-center">
        <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="text-destructive text-lg mb-6">
          The page you are looking for does not exist or has been moved.
        </p>
        <Button variant="outline" className="mt-4 mb-2" >
            <Link href="/" >
                Go to Home
            </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFoundPage;
