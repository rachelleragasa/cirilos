import localFont from "next/font/local";

const semplicitaPro = localFont({
  src: [
    {
      path: "../../src/assets/fonts/SemplicitaProLight.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../src/assets/fonts/SemplicitaProLightItalic.woff2",
      weight: "300",
      style: "italic",
    },
    {
      path: "../../src/assets/fonts/SemplicitaProMedium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../src/assets/fonts/SemplicitaProMediumItalic.woff2",
      weight: "500",
      style: "italic",
    },
    {
      path: "../../src/assets/fonts/SemplicitaProRegular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../src/assets/fonts/SemplicitaProSemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../src/assets/fonts/SemplicitaProSemiBoldItalic.woff2",
      weight: "600",
      style: "italic",
    },
    {
      path: "../../src/assets/fonts/SemplicitaProBold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../src/assets/fonts/SemplicitaProBoldItalic.woff2",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-semplicita",
  display: "swap",
});

export { semplicitaPro };
