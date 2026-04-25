import SectionWrapper from "@/components/ui/SectionWrapper";
import { products } from "@/data/products";
import Image from "next/image";
import { getWhatsAppLink } from "@/lib/whatsapp";

export default function Products() {
  const waLink = getWhatsAppLink("Olá! Tenho interesse em um produto da loja do Mundo Animal.");

  return (
    <SectionWrapper id="produtos" className="bg-ivory">
      <div className="container mx-auto px-6">

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-teal text-sm font-semibold uppercase tracking-widest">Loja</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-ink mt-3">
              Produtos em destaque
            </h2>
          </div>
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-teal hover:text-tealDark transition-colors whitespace-nowrap"
          >
            Ver todos pelo WhatsApp →
          </a>
        </div>

        {/* Scroll horizontal mobile / grid desktop */}
        <div className="flex gap-5 overflow-x-auto pb-4 md:grid md:grid-cols-4 md:overflow-visible">
          {products.map((product) => (
            <div
              key={product.id}
              className="min-w-[220px] md:min-w-0 bg-white rounded-3xl border border-border overflow-hidden flex flex-col hover:shadow-md transition-shadow"
            >
              <div className="relative h-48 bg-tealLight">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
                {product.badge && (
                  <span className="absolute top-3 left-3 bg-teal text-white text-xs font-bold px-3 py-1 rounded-full">
                    {product.badge}
                  </span>
                )}
              </div>
              <div className="p-5 flex flex-col gap-2 flex-1">
                <h3 className="font-semibold text-ink text-sm leading-snug">{product.name}</h3>
                <p className="font-bold text-teal text-lg mt-auto">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
