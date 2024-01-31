import Header from "@/components/Header";
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
        {children}
      </body>
    </html>
  );
}
