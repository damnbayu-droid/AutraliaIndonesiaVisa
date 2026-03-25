
import { 
  Navigation, 
  Globe, 
  Briefcase, 
  Star, 
  User, 
  FileText, 
  CreditCard,
  ArrowRight
} from 'lucide-react';

export const POPULAR_VISAS = [
  {
    id: "b1-evoa",
    title: "B1 e-Visa on Arrival",
    subtitle: "30-60 Days Stay",
    description: "The most popular choice for Aussie tourists. 100% online, 30 days initial stay + 30 days extension. Perfect for Bali holidays.",
    icon: Navigation,
    link: "https://indonesianvisas.com/services/B1",
    tag: "Most Popular"
  },
  {
    id: "c1-tourist",
    title: "C1 Tourist Visa",
    subtitle: "60 Days Stay",
    description: "Need more than a month? The C1 (B211A) offers 60 days upfront and is extendable for those long summer breaks in Indonesia.",
    icon: Globe,
    link: "https://indonesianvisas.com/services/C1",
  },
  {
    id: "c2-business",
    title: "C2 Business Visa",
    subtitle: "Corporate Meetings",
    description: "For Aussie entrepreneurs attending meetings, conferences, or scouting for business opportunities in Jakarta or Surabaya.",
    icon: Briefcase,
    link: "https://indonesianvisas.com/services/C2",
  },
  {
    id: "d12-preinvestment",
    title: "D12 Pre-Investment",
    subtitle: "Business Setup",
    description: "The golden gate for investors looking to start a PT PMA or subsidiary. Valid for 1-2 years multiple entry.",
    icon: Star,
    link: "https://indonesianvisas.com/services/D12",
    tag: "Investor Choice"
  },
  {
    id: "e33g-nomad",
    title: "E33G Remote Worker",
    subtitle: "Digital Nomad Visa",
    description: "Live the Bali dream while working for your Aussie company. 1 year multiple entry for remote professionals with $60k income.",
    icon: User,
    link: "https://indonesianvisas.com/services/E33G",
    tag: "Nomad Life"
  },
  {
    id: "e28a-investor",
    title: "E28A Investor KITAS",
    subtitle: "2-Year Residence",
    description: "Long-term stay permit for significant investors. Includes residency benefits and local bank account setup.",
    icon: CreditCard,
    link: "https://indonesianvisas.com/services/E28A",
  },
  {
    id: "kitas-family",
    title: "Family / Social KITAS",
    subtitle: "Stay with Loved Ones",
    description: "Reunite or stay long-term with your Indonesian family. We handle the entire sponsorship and immigration paperwork.",
    icon: FileText,
    link: "https://indonesianvisas.com/services",
  },
  {
    id: "corporate-solutions",
    title: "Corporate Solutions",
    subtitle: "PT PMA / CV Setup",
    description: "Full-service company formation and operational support for Australians looking to expand into the Indonesian market.",
    icon: Briefcase,
    link: "https://indonesianvisas.com/services",
  }
];

export default function VisaGrid({ locationName }: { locationName: string }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {POPULAR_VISAS.map((visa) => (
        <div key={visa.id} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full group">
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-slate-50 rounded-xl group-hover:bg-purple-100 transition-colors">
              <visa.icon className="w-8 h-8 text-slate-800 group-hover:text-purple-900" />
            </div>
            {visa.tag && (
              <span className="text-[10px] font-black uppercase tracking-widest px-2 py-1 bg-amber-400 rounded-full text-slate-900 shadow-sm">
                {visa.tag}
              </span>
            )}
          </div>
          <h3 className="text-xl font-black text-slate-800 mb-1 leading-tight">{visa.title}</h3>
          <p className="text-xs font-bold text-purple-900 uppercase tracking-wide mb-4">{visa.subtitle}</p>
          <p className="text-sm text-slate-600 mb-8 flex-grow leading-relaxed">
            {visa.description.replace('Indonesia', locationName)}
          </p>
          <a
            href={visa.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-slate-800 text-white text-center py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-amber-400 hover:text-slate-900 transition-all shadow-md group-hover:shadow-lg"
          >
            Apply for {locationName} Visa <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      ))}
    </div>
  );
}
