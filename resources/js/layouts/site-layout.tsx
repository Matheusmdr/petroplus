import Footer from '@/components/footer';
import Navbar from '@/components/navbar';

export default ({ children }: { children: React.ReactNode }) => (
  <>
    <Navbar />
    {children}
    <Footer />
  </>
);
