import Navbar from '@/components/Navbar/Navbar';
import Hero from '@/components/Hero/Hero';
import TrendyPlants from '@/components/TrendyPlants/TrendyPlants';
import TopSelling from '@/components/TopSelling/TopSelling';
import CustomerReviews from '@/components/CustomerReviews/CustomerReviews';
import BestO2 from '@/components/BestO2/BestO2';
import Footer from '@/components/Footer/Footer';

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TrendyPlants />
      <TopSelling />
      <CustomerReviews />
      <BestO2 />
      <Footer />
    </main>
  );
}
