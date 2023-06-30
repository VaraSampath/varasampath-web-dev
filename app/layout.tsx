import { Footer, Navbar } from "@/components";
import "./globals.css";

export const metadata = {
  title: "Varasampath | Web Dev",
  description: "My Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="scroll-smooth"
    >
      <body className="">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
