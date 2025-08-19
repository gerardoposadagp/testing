import "./globals.css";
import Navbar from "@/app/components/navbars/Navbar";
import PageLayout from "@/app/components/layouts/PageLayout";
import Footer from "@/app/footer";
import SidebarsLayout from "@/app/components/layouts/SidebarsLayout";

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <SidebarsLayout>
          <PageLayout>
                  {children}
          </PageLayout>
        </SidebarsLayout>
        <Footer />
      </body>
    </html>
  );
}
