import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Millian Hotel",
    short_name: "Millian Hotel",
    description:
      "Hotel familiar na Av. Nove de Julho, em Jundiaí-SP, com décadas de tradição em hospitalidade.",
    start_url: "/",
    display: "standalone",
    background_color: "#14172a",
    theme_color: "#14172a",
    icons: [
      {
        src: "/icons/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
