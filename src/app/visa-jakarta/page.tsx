
import { Metadata } from 'next';
import LocationPageTemplate from '@/components/LocationPageTemplate';

export const metadata: Metadata = {
  title: "Jakarta Visa for Australians | Business & Corporate Support",
  description: "Fast-track business and corporate visa solutions for Australians in Jakarta. Official agency support for PT PMA and KITAS.",
  alternates: {
    canonical: "https://australiaindonesiavisa.online/visa-jakarta",
  },
  other: {
    "geo.region": "AU",
    "geo.placename": "Australia",
  }
};

const data = {
  title: "Jakarta Visa for Australians",
  description: "Fast-track business and corporate visa solutions for the capital city. Empowering Aussie businesses in Indonesia.",
  heroImage: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=1600&q=80",
  locationName: "Jakarta"
};

export default function Page() {
  return <LocationPageTemplate data={data} />;
}
