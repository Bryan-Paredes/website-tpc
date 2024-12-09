"use client";

import { Button } from "@nextui-org/button";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import { CarretDownIcon, CashIcon, WalletIcon } from "./icons";

export default function DropdownComponent() {
  return (
    <Dropdown backdrop="blur">
      <DropdownTrigger>
        <Button
          disableRipple
          className="p-0 bg-transparent font-semibold text-lg data-[hover=true]:bg-transparent data-[hover=true]:text-primary flex items-center justify-center gap-1"
          color="default"
          endContent={<CarretDownIcon size={24} />}
          radius="lg"
          size="lg"
        >
          Servicios
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="TPC Express Services"
        className="w-[340px]"
        itemClasses={{
          base: "gap-4",
        }}
      >
        <DropdownItem
          key="Estandar"
          description="Servicio ofrecido para unicamente entregar el paquete a la direccion de destino."
          href="/estandar"
          textValue="Estandar"
          startContent={<WalletIcon size={40} />}
        >
          <span className="text-xl font-semibold">Estandar</span>
        </DropdownItem>
        <DropdownItem
          key="COD"
          description="Servicio ofrecido para cobrar el precio de el paquete al momento de realzar la entrega."
          href="/cod"
          textValue="COD"
          startContent={<CashIcon size={40} />}
        >
          <span className="text-xl font-semibold">COD</span>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
