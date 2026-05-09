import Footer from '@/components/footer';
import Navbar from '@/components/navbar';

export default ({ children }: { children: React.ReactNode }) => (
  <>
    <Navbar />
    <main id="public-main-content">{children}</main>
    <Footer />
  </>
);
