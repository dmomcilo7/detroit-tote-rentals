import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { HowItWorks } from './components/HowItWorks';
import { Pricing } from './components/Pricing';
import { ServiceArea } from './components/ServiceArea';
import { FAQ } from './components/FAQ';
import { QuoteForm } from './components/QuoteForm';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:shadow"
      >
        Skip to content
      </a>

      <Header />

      <main id="main-content">
        <Hero />
        <HowItWorks />
        <Pricing />
        <ServiceArea />
        <FAQ />
        <QuoteForm />
      </main>

      <Footer />
    </>
  );
}
