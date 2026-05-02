import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Providers from "@/components/Providers";
import dns from "node:dns/promises";
dns.setServers(["1.1.1.1", "8.8.8.8"]);
export const metadata = {
  title: "SkillSphere",
  description: "Online Learning Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}