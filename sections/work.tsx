import React from "react";
import { subtitle, title } from "@/components/primitives";
import { Image } from "@nextui-org/image";

export default function WorkPage() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 my-6 md:py-10">
      <div className="inline-block max-w-lg text-center justify-center">
        <h1 className={title({ class: "font-semibold" })}>Como Funciona?</h1>
        <h5 className={subtitle({ class: "uppercase text-primary" })}>
          Nuestro Servicio
        </h5>
      </div>
      <div className="grid grid-cols-3 gap-5 w-full itmes-center justify-center text-center mt-10">
        <div className="flex flex-col items-center justify-center border border-primary/30 rounded-lg p-5">
          <Image
            width={300}
            height={200}
            sizes="(max-width: 768px) 100vw, 400px"
            isBlurred
            loading="lazy"
            id="wrok-ilustration"
            src="/work/register.svg"
            alt="Register"
          />
          <h3
            className={subtitle({
              class: "uppercase font-bold text-primary",
            })}
          >
            Recepción y Registro del Envío
          </h3>
          <div className="flex flex-col items-center justify-center border border-primary/30 rounded-lg p-5 bg-primary/15">
            <p className="text-left font-medium">
              Solicita tu envío en unos minutos, obtén un código de seguimiento
              para monitorear el proceso.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center border border-primary/30 rounded-lg p-5">
          <Image
            width={400}
            height={200}
            sizes="(max-width: 768px) 100vw, 400px"
            isBlurred
            loading="lazy"
            src="/work/transport.svg"
            alt="Transport"
          />
          <h3
            className={subtitle({ class: "uppercase font-bold text-primary" })}
          >
            Clasificación y Transporte
          </h3>
          <div className="flex flex-col items-center justify-center border border-primary/30 rounded-lg p-5 bg-primary/15">
            <p className="text-left font-medium">
              Tus paquetes viajan con la mayor seguritad que asegura la
              eficiencia en cada etapa de la entrega.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center border border-primary/30 rounded-lg p-5">
          <Image
            isBlurred
            width={400}
            height={200}
            sizes="(max-width: 768px) 100vw, 400px"
            loading="lazy"
            src="/work/delivery.svg"
            alt="Delivery"
            className="drop-shadow-lg w-full"
          />
          <h3
            className={subtitle({ class: "uppercase font-bold text-primary" })}
          >
            Entrega Final y Confirmación
          </h3>
          <div className="flex flex-col items-center justify-center border border-primary/30 rounded-lg p-5 bg-primary/15">
            <p className="text-left font-medium">
              Entrega puntual y notificación para mantenerte informado en todo
              momento del proceso de entrega.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
