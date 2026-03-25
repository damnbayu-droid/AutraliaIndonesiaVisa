
import { Metadata } from 'next';
import LocationPageTemplate from '@/components/LocationPageTemplate';

export const metadata: Metadata = {
  title: "Visa Indonesia for Australians | Travel & Business Support",
  description: "Official visa services for Australians visiting Indonesia. Fast e-VOA, Digital Nomad, and Business visa support for your Indonesian adventure.",
  alternates: {
    canonical: "https://australiaindonesiavisa.online/visa-indonesia",
  },
  other: {
    "geo.region": "AU",
    "geo.placename": "Australia",
  }
};

const data = {
  title: "Visa Indonesia for Australians",
  description: "Complete visa solutions for Aussie travelers across the entire Indonesian archipelago. From Sabang to Merauke, we've got you covered.",
  heroImage: "https://images.unsplash.com/photo-1555400038-63f5ba517a47?auto=format&fit=crop&w=1600&q=80",
  locationName: "Indonesia"
};

export default function Page() {
  return <LocationPageTemplate data={data} />;
}
