import { Button } from "@nextui-org/react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-10">
      <div className="text-4xl">
        Welcome
      </div>
      <div>
        <Link href={"/login"}>
          <Button>Login</Button>
        </Link>
      </div>
    </div>
  );
}
