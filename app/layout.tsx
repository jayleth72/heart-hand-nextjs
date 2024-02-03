import Header from "@/components/Header";
import Hero from "@/components/Hero";
import "./globals.css";

export const metadata = {
  title: "Heart & Hand",
  description: "Homeschooling information",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
        <Header />
        <Hero />
        {children}
      </body>
    </html>
  );
}
