"use client";

import NavItem from "./NavItem";
import { useRouter, usePathname } from "next/navigation";

const navItems = ["Products", "Experiences", "Community"];

export default function NavList({
  onProductsOpen,
  isProductsOpen,
}: {
  onProductsOpen: () => void;
  isProductsOpen: boolean;
}) {
  const router = useRouter();
  const pathname = usePathname();

  console.log({ pathname, isProductsOpen });

  return (
    <nav className="hidden md:flex gap-10">
      {navItems.map((item) => {
        const lower = item.toLowerCase();

        const isActive =
          item === "Products"
            ? isProductsOpen
            : pathname === `/${lower}`;

        return (
          <NavItem
            key={item}
            label={item}
            isActive={isActive}
            onClick={() => {
              if (item === "Products") onProductsOpen();
              else router.push(`/${lower}`);
            }}
          />
        );
      })}
    </nav>
  );
}
