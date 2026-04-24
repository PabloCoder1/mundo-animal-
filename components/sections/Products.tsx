import Image from "next/image";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { products } from "@/data/products";

export default function Products() {
  return (
    <SectionWrapper id="produtos" className="bg-obsidian/40 border-y border-muted/20">
      <div className="container mx-auto px-6">
        
        {/* Cabeçalho da Seção */}
        <div className="mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-cream mb-6">
            Boutique <span className="text-sand italic">Animal</span>
          </h2>
          <p className="text-cream/70 text-lg font-light leading-relaxed max-w-2xl">
            Uma seleção criteriosa dos melhores itens do mercado. Nutrição, higiene e conforto premium que o seu pet merece ter em casa.
          </p>
        </div>

        {/* Container Responsivo: 
          Mobile: Flex com scroll horizontal e snap-x (carrossel nativo)
          Desktop: Grid de 2 a 4 colunas 
        */}
        <div className="flex overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 pb-8 md:pb-0 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="min-w-[280px] w-[85vw] md:w-auto md:min-w-0 flex-none snap-center bg-muted/10 border border-muted/30 rounded-3xl overflow-hidden hover:bg-muted/20 transition-all duration-300 group flex flex-col"
            >
              {/* Área da Imagem */}
              <div className="relative h-64 w-full bg-obsidian overflow-hidden">
                {/* Badge Dinâmica (Lançamento, Oferta, etc) */}
                {product.badge && (
                  <div className="absolute top-4 left-4 z-10 bg-amber text-obsidian text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-widest">
                    {product.badge}
                  </div>
                )}
                
                {/* Imagem com Zoom no Hover */}
                <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
                  <Image
                    src={product.image} // TODO: Adicionar imagens reais em public/images/
                    alt={product.name}
                    fill
                    className="object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                    sizes="(max-width: 768px) 85vw, (max-width: 1200px) 50vw, 25vw"
                  />
                </div>
              </div>

              {/* Conteúdo do Card */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-sans text-xl font-semibold text-cream mb-2 leading-tight">
                  {product.name}
                </h3>
                <p className="text-cream/60 text-sm font-light mb-6 line-clamp-2">
                  {product.description}
                </p>
                
                {/* Preço e Botão */}
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-muted/30">
                  <span className="font-serif text-2xl font-bold text-sand">
                    {product.price}
                  </span>
                  {/* O botão não precisa de ação real por ser landing page, mas passa a ideia de catálogo */}
                  <span className="text-amber text-sm font-medium uppercase tracking-wider group-hover:text-sand transition-colors cursor-pointer">
                    Ver Detalhes
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}