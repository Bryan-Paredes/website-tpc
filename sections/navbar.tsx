import {
  Navbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";

import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import NextLink from "next/link";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { InstagramIcon, FaceBookIcon, ContactIcon } from "@/components/icons";
import DropdownComponent from "@/components/dropdown";

export const NavbarComponent = () => {
  return (
    <>
      <Navbar
        className="py-4"
        maxWidth="lg"
        position="sticky"
        isBlurred
        isBordered
      >
        <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
          <NavbarBrand as="li" className="gap-3 max-w-fit">
            <NextLink
              className="flex justify-start items-center gap-1"
              href="/"
            >
              <img
                alt="Logo"
                className="w-10 h-10"
                loading="lazy"
                src="/LOGO-TPC.webp"
              />
            </NextLink>
          </NavbarBrand>
          <NavbarItem className="hidden lg:flex gap-4 justify-start ml-2">
            <a
              className="font-semibold text-lg hover:text-primary"
              color="foreground"
              href={siteConfig.navItems[0].href}
            >
              {siteConfig.navItems[0].label}
            </a>
          </NavbarItem>
          <NavbarContent className="hidden lg:flex gap-4 justify-start ml-2">
            <DropdownComponent />
          </NavbarContent>
        </NavbarContent>

        <NavbarContent
          className="hidden sm:flex basis-1/5 sm:basis-full"
          justify="end"
        >
          <NavbarItem className="hidden sm:flex gap-2">
            <Link
              as={Link}
              isExternal
              aria-label="Instagram"
              href={siteConfig.links.instagram}
            >
              <InstagramIcon className="text-default-700 hover:text-primary" />
            </Link>
            <Link
              as={Link}
              isExternal
              aria-label="FaceBook"
              href={siteConfig.links.facebook}
            >
              <FaceBookIcon className="text-default-700 hover:text-primary" />
            </Link>
            <ThemeSwitch />
          </NavbarItem>
          <NavbarItem className="hidden md:flex">
            <Button
              as={Link}
              className="text-lg"
              color="primary"
              href="/contact"
              radius="lg"
              startContent={<ContactIcon size={20} />}
              variant="ghost"
            >
              Contacto
            </Button>
          </NavbarItem>
        </NavbarContent>

        <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
          <Link
            as={Link}
            isExternal
            aria-label="Instagram"
            href={siteConfig.links.instagram}
          >
            <InstagramIcon className="text-default-500" />
          </Link>
          <Link
            as={Link}
            isExternal
            aria-label="FaceBook"
            href={siteConfig.links.facebook}
          >
            <FaceBookIcon className="text-default-500" />
          </Link>
          <ThemeSwitch />
          <NavbarMenuToggle />
        </NavbarContent>

        <NavbarMenu>
          <div className="mx-auto mt-8 flex flex-col gap-2 items-center justify-center h-fit">
            <NavbarMenuItem>
              <a
                className="font-bold text-lg hover:text-primary"
                color="foreground"
                href={siteConfig.navItems[0].href}
              >
                {siteConfig.navItems[0].label}
              </a>
            </NavbarMenuItem>
            <DropdownComponent />
            <NavbarMenuItem>
              <Button
                as={"a"}
                className="text-lg"
                color="primary"
                href="/contact"
                radius="lg"
                startContent={<ContactIcon size={20} />}
                variant="bordered"
              >
                Contacto
              </Button>
            </NavbarMenuItem>
          </div>
        </NavbarMenu>
      </Navbar>
    </>
  );
};
