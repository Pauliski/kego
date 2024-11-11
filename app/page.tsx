import Image from "next/image";
import { Button } from "./components/button";
import Link from "next/link";


export default function Home() {
  return (
    <div className="p-5">
      <Link href={"/signup"}>
      <Button >Sign Up</Button>
      </Link>
      

    </div>
    
  );
}
