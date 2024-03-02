import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Calendar from "@/components/Calendar";
import Footer from "@/components/Footer";
import BlogPreview from "@/components/blogPreview"
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
        <BlogPreview />
        <Calendar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
