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
        {/* className="mb-2 flex h-20 items-end justify-start rounded-md bg-blue-300 p-4 md:h-14" */}
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
