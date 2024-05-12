"use client";

import { useMediaQuery } from "@/hooks/use-media-query";
import Link from "next/link";
import { Drawer, DrawerContent, DrawerTrigger } from "./ui/drawer";
import { MenuIcon } from "lucide-react";
import { Navbar } from "./navbar";

export default function MainMenu() {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  return isDesktop ? <DesktopMainMenu /> : <MobileMainMenu />;
}

function DesktopMainMenu() {
  return <Navbar />;
}

function MobileMainMenu() {
  return (
    <nav
      className={`flex border-b-2 border-lightgray-400 z-10 max-w-full justify-between h-14 px-4 py-2`}
    >
      <Drawer direction="right">
        <DrawerTrigger>
          <MenuIcon />
        </DrawerTrigger>
        <DrawerContent>some drawer content here.</DrawerContent>
      </Drawer>
    </nav>
  );
}
