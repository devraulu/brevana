import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";
import { ChevronRightIcon } from "lucide-react";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    {
      name: "Nosotros",
      href: "#about",
    },
    {
      name: "Galería",
      href: "#gallery",
    },
    {
      name: "Habitaciones",
      href: "#rooms",
    },
    {
      name: "Experiencias",
      href: "#experiences",
    },
    {
      name: "Cómo llegar",
      href: "#getting-here",
    },
  ];

  return (
    <nav className="sticky top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b">
      <div className="max-w-[1440px] p-8 md:p-10 w-full relative flex items-center justify-center mx-auto">
        {/* Mobile Menu */}
        <div className="absolute left-0 md:hidden">
          <Drawer open={isOpen} onOpenChange={setIsOpen} direction="left">
            <DrawerTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </DrawerTrigger>
            <DrawerContent className="w-[300px] sm:w-[400px]">
              <DrawerHeader className="p-6">
                <DrawerTitle className="font-logo text-2xl tracking-wider">
                  BREVANA
                </DrawerTitle>
              </DrawerHeader>
              <div className="flex flex-col space-y-6 mt-8 px-6 pb-6">
                {navItems.map(({ href, name }) => (
                  <a
                    key={name}
                    href={href}
                    className="text-lg text-neutral-700 hover:text-neutral-900 transition-colors uppercase tracking-wider"
                    onClick={() => setIsOpen(false)}
                  >
                    {name}
                  </a>
                ))}
                <div className="border-t pt-6 mt-6 px-0">
                  <div className="flex items-center space-x-2 text-sm text-neutral-600 mb-4">
                    <Phone className="h-4 w-4" />
                    <span>+1 (829) 357-9841</span>
                  </div>
                  <Button className="w-full uppercase px-6 py-3">
                    Reservar
                  </Button>
                </div>
              </div>
            </DrawerContent>
          </Drawer>
        </div>

        {/* Logo - Centered */}
        <a
          href="#home"
          className="font-logo text-neutral-900 text-3xl md:text-4xl tracking-wider"
        >
          BREVANA
        </a>

        {/* Phone + Reservar Button - Desktop */}
        <div className="absolute right-0 hidden md:flex items-center space-x-4">
          <div className="flex items-center space-x-2 text-sm text-neutral-600">
            <Phone className="h-4 w-4" />
            <span>+1 (829) 357-9841</span>
          </div>
          <Button className="uppercase px-6 py-2">Reservar</Button>
        </div>
      </div>
      <div className="border-t border-b border-neutral-200">
        <div className="max-w-[1024px] hidden md:flex px-8 py-3 mx-auto justify-between items-center space-x-4">
          <div className="flex items-center space-x-16">
            <div className="flex items-center space-x-2">
              <a
                href="#home"
                className="text-neutral-900 tracking-wider leading-tight text-lg font-logo"
              >
                BREVANA&nbsp;MICHES
              </a>
              <ChevronRightIcon className="size-3.5" />
            </div>
            <div className="flex items-center space-x-20 text-neutral-700 text-sm uppercase tracking-wider">
              {navItems.map(({ href, name }) => (
                <a
                  key={name}
                  href={href}
                  className="hover:text-neutral-900 transition-colors whitespace-nowrap"
                >
                  {name}
                </a>
              ))}
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
