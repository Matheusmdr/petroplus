import Footer from '@/components/footer';
import Navbar from '@/components/navbar';


interface SiteLayoutProps {
  children: React.ReactNode;
}

export default ({ children }: SiteLayoutProps) => (
  <>
    <Navbar />
    <main id="public-main-content">{children}</main>
    <Footer />
  </>
);
