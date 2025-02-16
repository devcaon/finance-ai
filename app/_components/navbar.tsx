"use client";

import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="flex items-center justify-between border-b border-solid px-8 py-4">
      {/* left side */}
      <div className="flex items-center gap-10">
        <Link href="/">
          <Image src="/logo.svg" alt="Finance AI" width={173} height={39} />
        </Link>
        <Link
          href="/"
          className={
            pathname === "/"
              ? "font-bold text-primary"
              : "text-muted-foreground: hover:text-primary"
          }
        >
          Dashboard
        </Link>
        <Link
          href="/transactions"
          className={
            pathname === "/transactions"
              ? "font-bold text-primary"
              : "text-muted-foreground: hover:text-primary"
          }
        >
          Transações
        </Link>
        <Link
          href="/subscription"
          className={
            pathname === "/subscription"
              ? "font-bold text-primary"
              : "text-muted-foreground: hover:text-primary"
          }
        >
          Assinatura
        </Link>
      </div>

      {/* right side */}
      <UserButton showName />
    </div>
  );
};

export default Navbar;
