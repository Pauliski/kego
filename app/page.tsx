import Image from "next/image";
import { Button } from "./components/button";
import Link from "next/link";
import Search from "./components/Search";
import Products from "./components/products/Products";

export default function Home() {
  return (
    <div className="p-5">
      <Search />
      <Products />
    </div>
  );
}
