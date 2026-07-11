import { hotel, avaliacoes, comodidadesQuarto, servicosHotel, faq } from "@/lib/content";

export const SITE_URL = "https://millianhotel.com.br";
export const SITE_NAME = "Millian Hotel";

export function getHotelJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Hotel",
    name: hotel.nomeFantasia,
    description:
      "Hotel familiar na Av. Nove de Julho, Jundiaí-SP, a 400m do Jundiaí Shopping. Quartos Standard e Suíte, café da manhã farto e estrutura para eventos corporativos.",
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    image: [
      `${SITE_URL}/images/recepcao/recepcao-hotel.jpg`,
      `${SITE_URL}/images/recepcao/recepcao-fachada.jpg`,
    ],
    telephone: "+55 11 3395-4493",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Av. Nove de Julho, 2681, Anhangabaú",
      addressLocality: "Jundiaí",
      addressRegion: "SP",
      postalCode: "13208-056",
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: hotel.geo.latitude,
      longitude: hotel.geo.longitude,
    },
    hasMap: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(hotel.endereco.mapsQuery)}`,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: avaliacoes.notaGeral,
      reviewCount: avaliacoes.totalAvaliacoes,
      bestRating: 5,
    },
    amenityFeature: [...comodidadesQuarto, ...servicosHotel].map((nome) => ({
      "@type": "LocationFeatureSpecification",
      name: nome,
      value: true,
    })),
    petsAllowed: true,
    sameAs: [hotel.bookingUrl],
  };
}

export function getFaqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.pergunta,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.resposta,
      },
    })),
  };
}
