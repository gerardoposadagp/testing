import "./globals.css";
import Navbar from "@/app/components/navbars/navbar/Navbar";
import Footer from "@/app/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div style={{ display: "flex", padding: "5px 5px 5px 5px" }}>
          <div>
            <main>{children}</main>
          </div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
