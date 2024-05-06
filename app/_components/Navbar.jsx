import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <div>
        <Image src="/logo/logo.png" alt="logo" width={120} height={60} />
        <div>
          <h2>Home</h2>
          <h2>History</h2>
          <h2>Help</h2>
        </div>
      </div>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default Navbar;
