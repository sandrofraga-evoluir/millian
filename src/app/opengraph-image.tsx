import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { hotel, avaliacoes } from "@/lib/content";

export const alt = "Hotel Millian — Hospedagem em Jundiaí, SP";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const logoBuffer = await readFile(join(process.cwd(), "public/logo.png"));
  const logoSrc = `data:image/png;base64,${logoBuffer.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #14172a 0%, #1c2038 60%, #14172a 100%)",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -160,
            right: -160,
            width: 520,
            height: 520,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(201,160,99,0.35) 0%, rgba(201,160,99,0) 70%)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -180,
            left: -140,
            width: 480,
            height: 480,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(201,160,99,0.2) 0%, rgba(201,160,99,0) 70%)",
            display: "flex",
          }}
        />
        <img src={logoSrc} width={420} height={203} alt="" style={{ objectFit: "contain" }} />
        <div
          style={{
            marginTop: 28,
            display: "flex",
            alignItems: "center",
            gap: 14,
            fontSize: 26,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#E7E2D6",
          }}
        >
          <span>Jundiaí</span>
          <span style={{ color: "#C9A063" }}>·</span>
          <span>São Paulo</span>
        </div>
        <div
          style={{
            marginTop: 40,
            display: "flex",
            alignItems: "center",
            gap: 12,
            padding: "12px 28px",
            borderRadius: 999,
            background: "rgba(231,226,214,0.08)",
            border: "1px solid rgba(201,160,99,0.4)",
            fontSize: 24,
            color: "#E7E2D6",
          }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="#C9A063">
            <path d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.7 7-6.3-3.8L5.7 21l1.7-7-5.4-4.7 7.1-.6z" />
          </svg>
          <span>{avaliacoes.notaGeral.toFixed(1)} no {avaliacoes.fonte}</span>
          <span style={{ color: "rgba(231,226,214,0.5)" }}>·</span>
          <span>{avaliacoes.totalAvaliacoes}+ avaliações</span>
        </div>
        <div
          style={{
            marginTop: 36,
            fontSize: 22,
            color: "rgba(231,226,214,0.6)",
          }}
        >
          {hotel.slogan}
        </div>
      </div>
    ),
    { ...size }
  );
}
