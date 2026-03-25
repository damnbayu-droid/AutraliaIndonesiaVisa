
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import VisaGrid from '@/components/VisaGrid';
import { ArrowRight, MessageCircle } from 'lucide-react';

interface LocationData {
  title: string;
  description: string;
  heroImage: string;
  locationName: string;
}

export default function LocationPageTemplate({ data }: { data: LocationData }) {
  return (
    <main className="min-h-screen flex flex-col bg-slate-50 w-full overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[65vh] min-h-[500px] flex items-center justify-center overflow-hidden pt-20">
        <Image 
          src={data.heroImage}
          alt={`${data.title} Background`}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/50 backdrop-blur-[1px]"></div>
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-10">
          <span className="inline-block bg-amber-400 text-slate-900 px-4 py-1 rounded-full text-xs font-black uppercase tracking-[0.2em] mb-6 shadow-lg">
            Australia-Indonesia Partner 🇦🇺🇮🇩
          </span>
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black text-white mb-6 drop-shadow-2xl leading-none">
            {data.title.split(' ').map((word, i) => (
              <span key={i} className={word.toLowerCase() === data.locationName.toLowerCase() ? "text-amber-400" : ""}>{word} </span>
            ))}
          </h1>
          <p className="text-xl md:text-2xl text-white/95 font-bold max-w-2xl mx-auto drop-shadow-lg mb-10 leading-relaxed">
            {data.description}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
             <a 
              href="https://indonesianvisas.com/apply" 
              target="_blank" 
              className="bg-white text-slate-900 px-8 py-4 rounded-xl font-black text-sm uppercase tracking-widest shadow-2xl hover:bg-amber-400 transition-all flex items-center gap-2"
             >
                Apply Online <ArrowRight className="w-5 h-5" />
             </a>
             <a 
              href="https://wa.me/61423854701" 
              className="bg-slate-800/80 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-xl font-black text-sm uppercase tracking-widest shadow-2xl hover:bg-slate-700 transition-all flex items-center gap-2"
             >
                Aussie Support <MessageCircle className="w-5 h-5" />
             </a>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="bg-white py-6 border-b border-slate-100">
         <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center md:justify-between items-center gap-8 text-slate-400 font-bold uppercase tracking-widest text-[10px]">
            <div className="flex items-center gap-2">99% SUCCESS RATE</div>
            <div className="flex items-center gap-2">FAST-TRACK PROCESSING</div>
            <div className="flex items-center gap-2">OFFICIAL AGENCY SUPPORT</div>
            <div className="flex items-center gap-2">24/7 WHATSAPP CARE</div>
         </div>
      </div>

      {/* Visa Selection Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-slate-800 mb-6 tracking-tighter uppercase italic">
              8 Popular <span className="text-purple-900">{data.locationName}</span> Visas
            </h2>
            <div className="w-24 h-2 bg-amber-400 mx-auto mb-8 rounded-full"></div>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto font-medium">
              We've processed over 10,000+ visas for Australians. Whether you're chasing waves in Bali or closing deals in Jakarta, we have the right entry permit for you.
            </p>
          </div>
          
          <VisaGrid locationName={data.locationName} />
        </div>
      </section>

      {/* Global Agency Portal CTA */}
      <section className="py-24 px-4 bg-slate-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/10 blur-[150px] rounded-full -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-400/5 blur-[150px] rounded-full -ml-48 -mb-48"></div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
           <h2 className="text-4xl md:text-6xl font-black text-white mb-10 leading-tight">
              Ready to Secure Your <span className="text-amber-400">{data.locationName}</span> Visa?
           </h2>
           <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto font-medium">
              Don't leave your travel plans to chance. Join thousands of satisfied Aussie travelers who trust Indonesian Visas for their paperwork.
           </p>
           <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              <a 
                href="https://indonesianvisas.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full sm:w-auto bg-amber-400 text-slate-900 px-12 py-6 rounded-2xl font-black text-xl hover:scale-105 active:scale-95 transition-all shadow-2xl flex items-center justify-center gap-4"
              >
                Go to Indonesian Visas <ArrowRight className="w-6 h-6" />
              </a>
              <a 
                href="https://wa.me/61423854701" 
                target="_blank" 
                className="w-full sm:w-auto text-white border-2 border-white/20 px-12 py-6 rounded-2xl font-black text-xl hover:bg-white/5 transition-all flex items-center justify-center gap-4"
              >
                Chat on WhatsApp
              </a>
           </div>
        </div>
      </section>

      {/* FAQ/Content Block */}
      <section className="py-20 px-4 bg-white">
         <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-black text-slate-800 mb-8 border-l-8 border-purple-900 pl-6">Travel Tips for Australians in {data.locationName}</h3>
            <div className="space-y-8 text-lg text-slate-600 leading-relaxed uppercase tracking-tight font-medium">
               <p>• Make sure your passport is valid for at least 6 months from the date of arrival in {data.locationName}.</p>
               <p>• The B1 e-VOA is the fastest way to enter. You can apply through our portal and receive it in your email.</p>
               <p>• If you plan to work remotely in {data.locationName}, the E33G Remote Worker visa is your best legal option.</p>
               <p>• Always keep a digital copy of your visa and return flight ticket on your phone.</p>
            </div>
         </div>
      </section>
    </main>
  );
}
