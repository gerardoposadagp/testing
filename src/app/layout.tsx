import "./globals.css";
import Navbar from "@/app/components/navbars/navbar/navbar";
import Footer from "@/app/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="relative bg-gray-800 text-white p-2">
            Testing
        </div>
        <Navbar />
        <main> {children} </main>
        <Footer />
      </body>
    </html>
  );
}
