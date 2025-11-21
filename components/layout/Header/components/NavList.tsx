"use client";

import NavItem from "./NavItem";
import { useRouter } from "next/navigation";

const navItems = ["Products", "Experiences", "Community"];

export default function NavList({
  onProductsOpen,
}: {
  onProductsOpen: () => void;
}) {
  const router = useRouter();

  return (
    <nav className="hidden md:flex gap-10">
      {navItems.map((item) => (
        <NavItem
          key={item}
          label={item}
          onClick={() => {
            if (item === "Products") onProductsOpen();
            else router.push(`/${item.toLowerCase()}`);
          }}
        />
      ))}
    </nav>
  );
}
