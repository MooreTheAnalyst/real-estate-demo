import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeaturedListings from '@/components/FeaturedListings';
import About from '@/components/About';
import WhyChooseUs from '@/components/WhyChooseUs';
import PropertyCategories from '@/components/PropertyCategories';
import Testimonials from '@/components/Testimonials';
import Neighborhoods from '@/components/Neighborhoods';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <FeaturedListings />
      <About />
      <WhyChooseUs />
      <PropertyCategories />
      <Testimonials />
      <Neighborhoods />
      <Contact />
      <Footer />
    </main>
  );
}
