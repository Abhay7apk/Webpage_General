import "./globals.css";
import { Inter } from "next/font/google";
import "aos/dist/aos.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Density.Exchange-Ahead App",
  description: "Generated by create next app by (Abhay Tiwari)",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="text-black">{children}</body>
    </html>
  );
}
