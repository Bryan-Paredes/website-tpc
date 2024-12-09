import { siteConfig } from "@/config/site";
import { Button } from "@nextui-org/button";
import { AddressIcon, MailIcon, PhoneIcon } from "../components/icons";
import { Divider } from "@nextui-org/divider";
import { subtitle, title } from "../components/primitives";

export default function Footer() {
  let year = new Date().getFullYear();
  const copyright = `Copyright © ${year} All rights reserved`;

  return (
    <footer className="max-w-5xl mx-auto">
      <main className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 py-8 my-6 md:py-10">
        <section className="flex tems-center justify-center">
          <div className="flex items-center justify-center gap-2">
            <h1 className="text-2xl font-semibold tracking-wider">
              TPC <span className="text-primary">Express</span>
            </h1>
            <img
              src="/LOGO-TPC.webp"
              alt="Logo"
              className="w-6 h-6 object-cover object-center rounded-lg"
            />
          </div>
        </section>
        <section className="flex items-center justify-center">
          <div>
            <p className="text-small text-left">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Dignissimos nisi eveniet quaerat soluta molestias illum voluptatem
            </p>
          </div>
        </section>
        <section className="flex flex-col gap-1 items-center justify-center">
          <h3 className="text-center font-medium text-lg">Navegación</h3>
          <div>
            {siteConfig.navItems.map(({ label, href }) => {
              return (
                <li key={label} className="list-none hover:text-primary">
                  <a href={href}>{label}</a>
                </li>
              );
            })}
            {/* <DropdownComponent /> */}
          </div>
        </section>
        <section className="flex flex-col gap-1 items-center justify-start">
          <h3 className="text-center font-medium text-lg">Servicios</h3>
          <div>
            <ul>
              <li className="hover:text-primary">
                <a href="/estandar">Estandar</a>
              </li>

              <li className="hover:text-primary">
                <a href="/cod">COD</a>
              </li>
            </ul>
          </div>
        </section>
      </main>
      <section>
        <div className="flex gap-10 w-full justify-center items-center">
          <span className="flex items-center justify-center gap-3">
            <AddressIcon size={20} className="text-primary" />
            {siteConfig.companyInfo.address}
          </span>
          <span className="flex items-center justify-center gap-3">
            <PhoneIcon size={20} className="text-primary" />
            {siteConfig.companyInfo.phone}
          </span>
          <span className="flex items-center justify-center gap-3">
            <MailIcon size={20} className="text-primary" />
            {siteConfig.companyInfo.email}
          </span>
        </div>
      </section>
      <Divider className="my-6" />
      <section className="flex items-center justify-center my-5">
        <p>{copyright}</p>
      </section>
    </footer>
  );
}
