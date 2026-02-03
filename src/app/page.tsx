
import { Metadata } from 'next';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import {
  Globe,
  RefreshCw,
  MessageCircle,
  CheckCircle2,
  Send,
  FileText,
  CreditCard,
  Star,
  Navigation,
  Briefcase,
  User,
  Clock,
  HeadphonesIcon as Headphones,
  ArrowRight,
  MapPin,
  Mail,
} from 'lucide-react';

export const metadata: Metadata = {
  title: "Indonesian Visas for Australians | Fast e-VOA & Digital Nomad Support",
  description: "Official Indonesia visa agency for Aussie travelers. 24/7 support for Bali e-VOA, B1 extensions, and E33G Remote Worker visas. Fast, 100% online processing.",
  keywords: ["Bali visa for Australians", "Indonesia e-VOA Australia", "E33G visa Bali", "Australia Indonesia visa extension", "Bali digital nomad visa"],
  alternates: {
    canonical: "https://indonesianvisas.com",
  },
  openGraph: {
    title: "Indonesian Visas for Australians | Fast e-VOA & Digital Nomad Support",
    description: "Expert visa services for Aussies visiting Indonesia. Apply for e-VOA, extensions, and Digital Nomad visas online.",
    url: "https://indonesianvisas.com",
    siteName: "Indonesian Visas",
    locale: "en_AU",
    type: "website",
  }
};

const VISA_SERVICES = [
  {
    title: "B1 VOA / Extension",
    description: "30-day visa on arrival with extension options. Perfect for short visits and tourism.",
    link: "https://indonesianvisas.com/services/B1",
    icon: "Navigation",
  },
  {
    title: "C1 Visit Visa",
    description: "Single entry visit visa for tourism purposes. Valid for 60 days with flexible dates.",
    link: "https://indonesianvisas.com/services/C1",
    icon: "Globe",
  },
  {
    title: "C2 Business Visa",
    description: "Business visa for meetings and conferences. Includes multiple entry options.",
    link: "https://indonesianvisas.com/services/C2",
    icon: "Briefcase",
  },
  {
    title: "C12 Pre-Investment Visa",
    description: "Pre-investment visa for business setup. Ideal for entrepreneurs and investors.",
    link: "https://indonesianvisas.com/services/C12",
    icon: "Star",
  },
  {
    title: "D1 Tourist Visa",
    description: "60-day tourist visa (B211A) with extensions up to 180 days total stay.",
    link: "https://indonesianvisas.com/services/D1",
    icon: "User",
  },
  {
    title: "D2 Business Visa",
    description: "Multiple entry business visa for professionals. Valid up to 12 months.",
    link: "https://indonesianvisas.com/services/D2",
    icon: "FileText",
  },
  {
    title: "D12 Pre Investment",
    description: "Pre-investment visa for business setup. Ideal for entrepreneurs and investors.",
    link: "https://indonesianvisas.com/services/D12",
    icon: "Star",
  },
  {
    title: "E33G Digital Nomad",
    description: "5-year digital nomad visa for remote workers. Live and work in Indonesia long-term.",
    link: "https://indonesianvisas.com/services/E33G",
    icon: "Globe",
  },
  {
    title: "E28A Investment Kitas",
    description: "Investment-based residence permit. Long-term stay for investors.",
    link: "https://indonesianvisas.com/services/E28A",
    icon: "CreditCard",
  },
  {
    title: "Custom Visa",
    description: "Tailored visa solutions for unique cases. We handle special requirements.",
    link: "https://indonesianvisas.com/services",
    icon: "FileText",
  },
] as const;

const BENEFITS = [
  {
    title: "Fast Processing",
    description: "Express service available with same-day processing options for urgent applications",
    icon: "Clock",
  },
  {
    title: "99% Success Rate",
    description: "Proven track record with 10,000+ visas processed successfully worldwide",
    icon: "CheckCircle2",
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock WhatsApp support for your peace of mind anytime, anywhere",
    icon: "Headphones",
  },
  {
    title: "97 Countries",
    description: "We serve applicants from 97 countries worldwide with local expertise",
    icon: "Globe",
  },
] as const;

const SOCIAL_LINKS = [
  { name: "Telegram", url: "https://t.me/IndonesianVisas", color: "bg-slate-800" },
  { name: "Instagram", url: "https://instagram.com/balihelp.id", gradient: "bg-gradient-to-br from-orange-500 via-pink-500 to-purple-600" },
  { name: "TikTok", url: "https://www.tiktok.com/@balihelp.id", color: "bg-black" },
  { name: "Facebook", url: "https://facebook.com/BaliHelp", color: "bg-blue-600" },
  { name: "Twitter", url: "https://twitter.com/IndonesianVisas", color: "bg-sky-500" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/bayu-damopolii-887ab883/", color: "bg-blue-700" },
  { name: "YouTube", url: "https://youtube.com/@balihelp", color: "bg-red-600" },
] as const;

const PROCESS_STEPS = [
  { step: 1, title: "Select Country", desc: "Choose your nationality from 97 supported countries." },
  { step: 2, title: "Visa & Personal Details", desc: "Select visa type and provide personal information." },
  { step: 3, title: "Upload Documents", desc: "Upload passport and selfie (optional, can skip)." },
  { step: 4, title: "Payment & Submit", desc: "Complete payment and submit your application." },
] as const;

const ICON_MAP = {
  Navigation,
  Globe,
  Briefcase,
  Star,
  User,
  FileText,
  CreditCard,
  Clock,
  CheckCircle2,
  Headphones,
} as const;

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Indonesian Visa Services for Australians",
    "description": "Fast and reliable Indonesian visa processing for Australian citizens, including e-VOA, B211A, and Digital Nomad visas.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Indonesian Visas Agency",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Bali",
        "addressCountry": "ID"
      }
    },
    "areaServed": "AU",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Visa Types",
      "itemListElement": VISA_SERVICES.map((s, i) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": s.title
        }
      }))
    }
  };

  return (
    <main className="min-h-screen flex flex-col bg-slate-50 w-full overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 md:mb-6 leading-tight text-slate-800">
              Australia Indonesia <span className="text-purple-800">Visa Gold</span>
            </h1>
            <p className="text-sm md:text-base lg:text-lg text-slate-600 mb-8 md:mb-10 uppercase tracking-widest font-bold">
              Gateway to Indonesian Visas with Aussie Support
            </p>
            <p className="text-base md:text-xl lg:text-2xl mb-8 md:mb-10 leading-relaxed text-slate-700">
              Fast, reliable, and professional visa services for your Bali or Jakarta adventure. We offer 24/7 dedicated customer service from our local team.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-10 md:mb-12">
              <div className="p-5 md:p-6 rounded-2xl bg-white border-2 border-slate-200 shadow-sm">
                <div className="text-3xl md:text-4xl font-black mb-2 text-purple-900">16+</div>
                <div className="text-xs md:text-sm font-bold text-slate-600">Years Experience</div>
              </div>
              <div className="p-5 md:p-6 rounded-2xl bg-white border-2 border-slate-200 shadow-sm">
                <div className="text-3xl md:text-4xl font-black mb-2 text-purple-900">10,000+</div>
                <div className="text-xs md:text-sm font-bold text-slate-600">Visas Processed</div>
              </div>
              <div className="p-5 md:p-6 rounded-2xl bg-white border-2 border-slate-200 shadow-sm">
                <div className="text-3xl md:text-4xl font-black mb-2 text-purple-900">99%</div>
                <div className="text-xs md:text-sm font-bold text-slate-600">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Process Steps */}
          <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10 shadow-lg max-w-6xl mx-auto border border-slate-100">
            <h2 className="text-xl md:text-2xl font-bold text-center mb-6 md:mb-8 text-slate-800">
              Simple 4-Step Application Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {PROCESS_STEPS.map((item) => (
                <div key={item.step} className="flex flex-col items-center text-center p-4 md:p-6 rounded-2xl bg-slate-50 border-2 border-transparent hover:border-purple-900 hover:bg-white hover:shadow-md transition-all duration-300">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-purple-900 to-purple-700 text-white flex items-center justify-center font-black text-xl md:text-2xl mb-4 shadow-lg">
                    {item.step}
                  </div>
                  <h3 className="text-base md:text-lg font-bold mb-2 text-slate-800">{item.title}</h3>
                  <p className="text-xs md:text-sm text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-12 md:py-16 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-md border border-slate-100 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="flex justify-center mb-4 md:mb-6">
                <Send className="w-16 md:w-20 h-16 md:h-20 text-slate-800" aria-hidden="true" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 text-slate-800">Apply for a Visa</h3>
              <p className="text-base md:text-lg mb-5 md:mb-6 text-slate-600">
                Get your Indonesian visa quickly and hassle-free. Professional support from start to finish. Start your application today and receive approval within 24-48 hours.
              </p>
              <a
                href="https://indonesianvisas.com/apply"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-sm md:text-base hover:bg-amber-400 hover:text-slate-800 transition-all duration-300 inline-flex items-center gap-2"
              >
                Apply Now <ArrowRight className="w-4 h-4 md:w-5 md:h-5" aria-hidden="true" />
              </a>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-md border border-slate-100 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="flex justify-center mb-4 md:mb-6">
                <RefreshCw className="w-16 md:w-20 h-16 md:h-20 text-slate-800" aria-hidden="true" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 text-slate-800">Extend Your Visa</h3>
              <p className="text-base md:text-lg mb-5 md:mb-6 text-slate-600">
                Need more time in Indonesia? Extend your visa without leaving the country. Simple process with guaranteed approval. Stay up to 180 days.
              </p>
              <a
                href="https://indonesianvisas.com/extend"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-slate-800 border-2 border-slate-800 px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-sm md:text-base hover:bg-amber-400 hover:border-amber-400 hover:text-slate-800 transition-all duration-300 inline-flex items-center gap-2"
              >
                Extend Now <ArrowRight className="w-4 h-4 md:w-5 md:h-5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Visa Services */}
      <section className="py-16 md:py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 md:mb-6 text-slate-800">Our Visa Services</h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
              Choose the right visa type for your needs - from tourist to business and investment visas. Expert guidance for every visa category.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-10 md:mb-12">
            {VISA_SERVICES.map((service, index) => {
              const IconComponent = ICON_MAP[service.icon as keyof typeof ICON_MAP];
              return (
                <div key={index} className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="text-slate-800 mb-4">{IconComponent && <IconComponent className="w-16 h-16" aria-hidden="true" />}</div>
                  <h3 className="text-lg md:text-xl font-bold mb-3 text-slate-800">{service.title}</h3>
                  <p className="text-sm md:text-base text-slate-600 mb-6">{service.description}</p>
                  <a
                    href={service.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm md:text-base font-semibold text-slate-800 hover:text-purple-900 transition-colors"
                  >
                    Learn More <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </a>
                </div>
              );
            })}
          </div>
          <div className="text-center">
            <a
              href="https://indonesianvisas.com/services"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-800 text-white px-8 md:px-10 py-4 rounded-full font-bold text-base md:text-lg hover:bg-amber-400 hover:text-slate-800 transition-all duration-300 inline-flex items-center gap-2"
            >
              View All Visa Types <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      {/* Australian Visa Guide Section */}
      <section className="py-16 md:py-20 px-4 bg-white border-t border-slate-100" id="australia-guide">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-black mb-6 text-slate-800 leading-tight">
                Indonesian Visa Guide for <span className="text-purple-800">Australian Travelers</span>
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-white font-bold">1</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-slate-800">B1 e-Visa on Arrival (e-VOA)</h3>
                    <p className="text-slate-600">Perfect for Aussie tourists heading to Bali or Jakarta. Valid for 30 days, easily extendable online for another 30 days ($50 fee approx).</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-white font-bold">2</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-slate-800">Fast & 100% Online</h3>
                    <p className="text-slate-600">Skip the queues at Ngurah Rai Airport. Apply through our portal 48 hours before your flight and get your PDF visa instantly.</p>
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <a href="https://indonesianvisas.com/apply" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-slate-800 text-white px-8 py-4 rounded-full font-bold hover:bg-amber-400 hover:text-slate-800 transition-all shadow-lg hover:shadow-xl">
                  Apply for e-VOA Today <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] lg:aspect-auto h-[400px]">
              <Image
                src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80"
                alt="Beautiful Bali Beach for Australian Travelers"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent flex items-end p-8">
                <p className="text-white font-bold text-lg md:text-xl">Join 1.2M+ Aussies visiting Indonesia every year.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Nomad Section */}
      <section className="py-16 md:py-20 px-4 bg-slate-50" id="digital-nomad">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-4 text-slate-800">Bali Digital Nomad Life</h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">The E33G Remote Worker Visa is the ultimate solution for Australian professionals working abroad.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                <Globe className="text-purple-900 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-800">1-Year Stay</h3>
              <p className="text-slate-600">Multiple entry permit valid for 12 months. Live in Bali while keeping your Aussie salary.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                <CreditCard className="text-purple-900 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-800">Financial Ease</h3>
              <p className="text-slate-600">Eligible to open local bank accounts and lease long-term luxury villas.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                <Briefcase className="text-purple-900 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-800">Simple Setup</h3>
              <p className="text-slate-600">No local company sponsorship needed. We handle the E33G processing from start to finish.</p>
            </div>
          </div>
          <div className="mt-12 text-center">
            <a href="https://indonesianvisas.com/services/E33G" target="_blank" rel="noopener noreferrer" className="bg-purple-900 text-white px-8 py-4 rounded-full font-bold hover:bg-purple-800 transition-colors inline-flex items-center gap-2">
              Explore E33G Visa <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Australia-Indonesia Connection Section */}
      <section className="py-16 md:py-20 px-4 bg-white" id="australia-indonesia-bond">
        <div className="max-w-7xl mx-auto">
          <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden shadow-2xl">
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-5xl font-black mb-6 text-white leading-tight">
                  Bridging the Gap: <br className="hidden md:block" />Australia & Indonesia
                </h2>
                <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                  Under the IA-CEPA framework, we are committed to strengthening the bond between our two nations. As an agency with Australian roots, we provide local support for Aussie travelers.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 text-white font-medium flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-400" aria-hidden="true"></span>
                    Local Support (+61 423)
                  </div>
                  <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 text-white font-medium flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-400" aria-hidden="true"></span>
                    IA-CEPA Compliant
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 p-6 rounded-2xl border border-white/10 text-center backdrop-blur-sm shadow-inner">
                  <div className="text-3xl font-bold text-white mb-1">1.2M+</div>
                  <div className="text-xs text-slate-400 uppercase tracking-widest font-bold">Aussie Visitors / Year</div>
                </div>
                <div className="bg-white/5 p-6 rounded-2xl border border-white/10 text-center backdrop-blur-sm shadow-inner">
                  <div className="text-3xl font-bold text-white mb-1">24h</div>
                  <div className="text-xs text-slate-400 uppercase tracking-widest font-bold">Aussie Timezone Support</div>
                </div>
              </div>
            </div>
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/20 blur-[120px] rounded-full -mr-48 -mt-48" aria-hidden="true"></div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-20 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 md:mb-6 text-slate-800">Why Choose Indonesian Visas?</h2>
            <p className="text-lg md:text-xl text-slate-600">Your trusted partner for seamless Indonesian visa processing</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {BENEFITS.map((benefit, index) => {
              const IconComponent = ICON_MAP[benefit.icon as keyof typeof ICON_MAP];
              return (
                <div key={index} className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="text-slate-800 mb-4 flex justify-center">
                    {IconComponent && <IconComponent className="w-20 h-20" aria-hidden="true" />}
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-3 text-slate-800">{benefit.title}</h3>
                  <p className="text-sm md:text-base text-slate-600">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ & About */}
      <section className="py-16 md:py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-md border border-slate-100 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="flex justify-center mb-4 md:mb-6">
                <Globe className="w-20 md:w-24 h-20 md:h-24 text-slate-800" aria-hidden="true" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-slate-800">Frequently Asked Questions</h3>
              <p className="text-base md:text-lg mb-6 text-slate-600">
                Find answers to common visa questions and requirements for Australian citizens. Learn about processing times and more.
              </p>
              <a
                href="https://indonesianvisas.com/faq"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-sm md:text-base hover:bg-amber-400 hover:text-slate-800 transition-all duration-300 inline-flex items-center gap-2"
              >
                View FAQ <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-md border border-slate-100 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="flex justify-center mb-4 md:mb-6">
                <Send className="w-20 md:w-24 h-20 md:h-24 text-slate-800" aria-hidden="true" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-slate-800">About Us</h3>
              <p className="text-base md:text-lg mb-6 text-slate-600">
                Learn more about our team, mission, and commitment to providing exceptional visa services for Australia-Indonesia travel.
              </p>
              <a
                href="https://indonesianvisas.com/about"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-sm md:text-base hover:bg-amber-400 hover:text-slate-800 transition-all duration-300 inline-flex items-center gap-2"
              >
                Learn More <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-20 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl md:rounded-3xl p-8 md:p-12 shadow-lg border border-slate-100">
            <h2 className="text-3xl md:text-4xl font-black mb-8 text-center text-slate-800">Contact Official Support</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <a
                href="https://wa.me/61423854701"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-50 p-6 rounded-xl border-2 border-slate-200 hover:border-purple-900 hover:shadow-md transition-all duration-300 group"
              >
                <MessageCircle className="w-10 h-10 mb-4 text-slate-800 group-hover:text-purple-900 transition-colors" aria-hidden="true" />
                <h3 className="text-lg font-bold mb-2 text-slate-800">Aussie WhatsApp</h3>
                <p className="text-sm text-slate-600 font-medium">+61 423 854 701</p>
              </a>
              <a
                href="mailto:info@indonesianvisas.agency"
                className="bg-slate-50 p-6 rounded-xl border-2 border-slate-200 hover:border-purple-900 hover:shadow-md transition-all duration-300 group"
              >
                <Mail className="w-10 h-10 mb-4 text-slate-800 group-hover:text-purple-900 transition-colors" aria-hidden="true" />
                <h3 className="text-lg font-bold mb-2 text-slate-800">Professional Email</h3>
                <p className="text-sm text-slate-600 font-medium">info@indonesianvisas.agency</p>
              </a>
            </div>
            <div className="mt-6 bg-slate-50 p-6 rounded-xl border-2 border-slate-200">
              <MapPin className="w-10 h-10 mb-4 text-slate-800" aria-hidden="true" />
              <h3 className="text-lg font-bold mb-2 text-slate-800">Headquarters</h3>
              <p className="text-sm text-slate-600">Jl. Tibungsari No.11C, Kuta Utara, Bali, Indonesia</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto bg-slate-900 text-slate-300">
        <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-12">
            <div className="md:col-span-2">
              <h2 className="text-2xl md:text-3xl font-black mb-4 text-white">Indonesian Visas Agency</h2>
              <p className="text-base md:text-lg mb-6 leading-relaxed">
                Professional visa services for Australians. 16+ years experience. Fast, reliable, and trusted by thousands of Aussie travelers every year.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 text-white uppercase tracking-wider text-sm">Quick Links</h3>
              <ul className="space-y-3">
                <li><a href="https://indonesianvisas.com/apply" className="hover:text-white hover:pl-2 transition-all">Apply Now</a></li>
                <li><a href="https://indonesianvisas.com/extend" className="hover:text-white hover:pl-2 transition-all">Extend Visa</a></li>
                <li><a href="https://indonesianvisas.com/services" className="hover:text-white hover:pl-2 transition-all">All Services</a></li>
                <li><a href="https://indonesianvisas.com/faq" className="hover:text-white hover:pl-2 transition-all">Travel FAQ</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 text-white uppercase tracking-wider text-sm">Legal Policies</h3>
              <ul className="space-y-3">
                <li><a href="https://indonesianvisas.com/privacy" className="hover:text-white hover:pl-2 transition-all">Privacy Policy</a></li>
                <li><a href="https://indonesianvisas.com/terms" className="hover:text-white hover:pl-2 transition-all">Terms of Service</a></li>
                <li><a href="https://indonesianvisas.com/refund" className="hover:text-white hover:pl-2 transition-all">Refund Policy</a></li>
                <li><a href="https://indonesianvisas.com/disclaimer" className="hover:text-white hover:pl-2 transition-all">Disclaimer</a></li>
              </ul>
            </div>
          </div>

          {/* Social Links */}
          <div className="border-t border-slate-800 pt-8 mb-8">
            <div className="flex flex-wrap justify-center items-center gap-4">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${'color' in social ? social.color : social.gradient} w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-white font-bold text-xs md:text-sm hover:scale-110 shadow-lg transition-transform`}
                  aria-label={`Follow us on ${social.name}`}
                >
                  {social.name.charAt(0)}
                </a>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-slate-800 pt-8 pb-4 text-center">
            <p className="text-white text-sm md:text-base mb-2 font-bold uppercase tracking-widest">© 2026 Indonesian Visas™</p>
            <p className="text-xs md:text-sm mb-4">Operated by PT Indonesian Visas Agency Indonesia. All Rights Reserved.</p>
            <div className="flex flex-wrap justify-center items-center gap-4 text-xs md:text-sm font-medium">
              <a href="https://bali.enterprises" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">bali.enterprises</a>
              <span className="text-slate-700">•</span>
              <a href="https://visas.agency" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">visas.agency</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
