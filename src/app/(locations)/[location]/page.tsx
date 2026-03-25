
import { Metadata } from 'next';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import VisaGrid from '@/components/VisaGrid';
import { ArrowRight, MessageCircle } from 'lucide-react';

interface LocationPageProps {
  location: string;
  title: string;
  description: string;
  heroImage: string;
}

export async function generateMetadata({ params }: { params: { location: string } }): Promise<Metadata> {
  const loc = params.location.charAt(0).toUpperCase() + params.location.slice(1);
  return {
    title: `Visa Indonesia for Australians in ${loc} | Indonesian Visas`,
    description: `Official visa services for Australians visiting ${loc}. Fast e-VOA, Digital Nomad, and Business visa support for your ${loc} adventure.`,
    alternates: {
      canonical: `https://australiaindonesiavisa.online/visa-${params.location}`,
    },
    other: {
      "geo.region": "AU",
      "geo.placename": "Australia",
    }
  };
}

const locations = {
  indonesia: {
    title: "Visa Indonesia for Australians",
    description: "Complete visa solutions for Aussie travelers across the entire Indonesian archipelago.",
    heroImage: "https://images.unsplash.com/photo-1555400038-63f5ba517a47?auto=format&fit=crop&w=1600&q=80"
  },
  bali: {
    title: "Bali Visa for Australians",
    description: "The #1 gateway for Aussie surfers, families, and nomads heading to the Island of the Gods.",
    heroImage: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1600&q=80"
  },
  jakarta: {
    title: "Jakarta Visa for Australians",
    description: "Fast-track business and corporate visa solutions for the capital city.",
    heroImage: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=1600&q=80"
  },
  lombok: {
    title: "Lombok Visa for Australians",
    description: "Explore the untouched beauty of Lombok with our seamless visa processing.",
    heroImage: "https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?auto=format&fit=crop&w=1600&q=80"
  },
  surabaya: {
    title: "Surabaya Visa for Australians",
    description: "Business and industrial visa support for the heart of East Java.",
    heroImage: "https://images.unsplash.com/photo-1605342412850-8404a377045c?auto=format&fit=crop&w=1600&q=80"
  },
  jogja: {
    title: "Jogja Visa for Australians",
    description: "Cultural and student visa solutions for Yogyakarta (Jogja).",
    heroImage: "https://images.unsplash.com/photo-1584810359583-96fc3448beaa?auto=format&fit=crop&w=1600&q=80"
  }
};

export default function LocationPage({ params }: { params: { location: string } }) {
  const data = locations[params.location as keyof typeof locations] || locations.indonesia;

  return (
    <main className="min-h-screen flex flex-col bg-slate-50 w-full overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden pt-20">
        <Image 
          src={data.heroImage}
          alt={`${data.title} Background`}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-[2px]"></div>
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-white mb-6 drop-shadow-2xl">
            {data.title}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 font-medium max-w-2xl mx-auto drop-shadow-lg mb-8">
            {data.description}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
             <div className="bg-white px-6 py-3 rounded-full text-slate-900 font-black text-sm uppercase tracking-widest shadow-xl">
                Aussie Support +61
             </div>
             <div className="bg-amber-400 px-6 py-3 rounded-full text-slate-900 font-black text-sm uppercase tracking-widest shadow-xl animate-pulse">
                Instant e-VOA
             </div>
          </div>
        </div>
      </section>

      {/* Visa Selection Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-800 mb-4 tracking-tight">
              8 Most Popular Visas for <span className="text-purple-900 uppercase">{params.location}</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Select the right visa for your needs. All our applications are processed through official Indonesian Visas Agency channels for 99% success rate.
            </p>
          </div>
          
          <VisaGrid locationName={params.location.charAt(0).toUpperCase() + params.location.slice(1)} />
        </div>
      </section>

      {/* Deep Link / Trust Section */}
      <section className="py-20 px-4 bg-slate-900">
        <div className="max-w-5xl mx-auto text-center">
           <h2 className="text-3xl md:text-5xl font-black text-white mb-8">
              Why Australians Trust Us?
           </h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="p-6">
                 <div className="text-amber-400 text-4xl font-black mb-2">16+</div>
                 <div className="text-white font-bold uppercase tracking-widest text-xs">Years Experience</div>
              </div>
              <div className="p-6 border-x border-white/10">
                 <div className="text-amber-400 text-4xl font-black mb-2">10k+</div>
                 <div className="text-white font-bold uppercase tracking-widest text-xs">Aussie Visas</div>
              </div>
              <div className="p-6">
                 <div className="text-amber-400 text-4xl font-black mb-2">24h</div>
                 <div className="text-white font-bold uppercase tracking-widest text-xs">Aussie Timezone</div>
              </div>
           </div>
           <a 
            href="https://indonesianvisas.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-4 bg-white text-slate-900 px-10 py-5 rounded-full font-black text-lg hover:bg-amber-400 transition-all shadow-2xl hover:scale-105 active:scale-95"
           >
             Go to Main Agency Portal <ArrowRight className="w-6 h-6" />
           </a>
        </div>
      </section>

      {/* Location-specific CTA */}
      <section className="py-16 px-4 bg-slate-50 border-t border-slate-200">
         <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-black text-slate-800 mb-6">Need expert advice for {params.location}?</h3>
            <p className="text-slate-600 mb-10">
               Our team specializing in {params.location} travels is ready to assist you on WhatsApp. 
               Get a personalized visa assessment in under 5 minutes.
            </p>
            <a 
              href="https://wa.me/61423854701" 
              className="bg-[#25D366] text-white px-8 py-4 rounded-full font-black inline-flex items-center gap-2 hover:opacity-90 transition-opacity"
            >
               <MessageCircle className="w-6 h-6" /> Talk to Consultant
            </a>
         </div>
      </section>
    </main>
  );
}
