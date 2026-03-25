
import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Sitemap | Indonesian Visas for Australians",
  description: "Explore all visa services and location-based visa guides for Australians visiting Indonesia. Complete sitemap of our platform.",
  alternates: {
    canonical: "https://australiaindonesiavisa.online/visa-sitemap",
  }
};

const NEW_CLUSTER = [
  { name: "Visa Indonesia", href: "/visa-indonesia" },
  { name: "Bali Visa Guide", href: "/visa-bali" },
  { name: "Jakarta Visa Support", href: "/visa-jakarta" },
  { name: "Lombok Visa Info", href: "/visa-lombok" },
  { name: "Surabaya Visa Services", href: "/visa-surabaya" },
  { name: "Jogja Cultural Visas", href: "/visa-jogja" },
];

const MAIN_SERVICES = [
  { name: "e-VOA (B1)", href: "https://indonesianvisas.com/services/B1" },
  { name: "C1 Tourist", href: "https://indonesianvisas.com/services/C1" },
  { name: "Business Visa", href: "https://indonesianvisas.com/services/C2" },
  { name: "Remote Worker (E33G)", href: "https://indonesianvisas.com/services/E33G" },
  { name: "Investor KITAS", href: "https://indonesianvisas.com/services/E28A" },
];

export default function SitemapPage() {
  return (
    <main className="min-h-screen flex flex-col bg-slate-50 w-full">
      <Navbar />
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-black text-slate-800 mb-12 border-b-4 border-amber-400 pb-4">
            Sitemap
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* New Cluster */}
            <div>
              <h2 className="text-2xl font-black text-purple-900 uppercase tracking-widest mb-6">
                New Location Cluster
              </h2>
              <ul className="space-y-4">
                {NEW_CLUSTER.map((item) => (
                  <li key={item.href}>
                    <Link 
                      href={item.href}
                      className="text-lg font-bold text-slate-600 hover:text-amber-500 transition-colors flex items-center gap-2 group"
                    >
                      <span className="w-2 h-2 bg-slate-300 group-hover:bg-amber-400 rounded-full"></span>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Main Services */}
            <div>
              <h2 className="text-2xl font-black text-slate-800 uppercase tracking-widest mb-6">
                Main Services
              </h2>
              <ul className="space-y-4">
                {MAIN_SERVICES.map((item) => (
                  <li key={item.href}>
                    <a 
                      href={item.href}
                      target="_blank"
                      className="text-lg font-bold text-slate-600 hover:text-amber-500 transition-colors flex items-center gap-2 group"
                    >
                      <span className="w-2 h-2 bg-slate-300 group-hover:bg-amber-400 rounded-full"></span>
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* General */}
            <div>
              <h2 className="text-2xl font-black text-slate-800 uppercase tracking-widest mb-6">
                General
              </h2>
              <ul className="space-y-4">
                <li><Link href="/" className="text-lg font-bold text-slate-600 hover:text-amber-500 transition-colors">Home Page</Link></li>
                <li><a href="https://indonesianvisas.com/about" className="text-lg font-bold text-slate-600 hover:text-amber-500 transition-colors">About Us</a></li>
                <li><a href="https://indonesianvisas.com/faq" className="text-lg font-bold text-slate-600 hover:text-amber-500 transition-colors">FAQ</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
