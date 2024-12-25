"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
      <Menu setActive={setActive}>
        
        {/* Home */}
        <Link className="text-colo" href={"/"}>
          <MenuItem setActive={setActive} active={active} item="Home" />
        </Link>

        {/* About */}
        <Link href={"/about"}>
          <MenuItem setActive={setActive} active={active} item="About" />
        </Link>
        
        {/* Experience */}
        <Link href={"/experience"}>
          <MenuItem setActive={setActive} active={active} item="Experience" />
        </Link>

        {/* Menu */}
        <MenuItem setActive={setActive} active={active} item="Projects">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/projects/webdev">Web Development</HoveredLink>
            <HoveredLink href="/projects/ml">Machine Learning</HoveredLink>
          </div>
        </MenuItem>

        {/* Services */}
        <Link href={"/services"}>
          <MenuItem setActive={setActive} active={active} item="Services" />
        </Link>

        {/* Contact Us */}
        <Link href={"/contact"}>
          <MenuItem setActive={setActive} active={active} item="Contact" />
        </Link>

       
        
      </Menu>
    </div>
  );
}

export default Navbar;