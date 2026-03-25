
import { Metadata } from 'next';
import LocationPageTemplate from '@/components/LocationPageTemplate';

export const metadata: Metadata = {
  title: "Jogja Visa for Australians | Cultural & Student Support",
  description: "Official visa services for Australians in Yogyakarta (Jogja). Cultural, Student, and Visit visa support for the heart of Javanese culture.",
  alternates: {
    canonical: "https://australiaindonesiavisa.online/visa-jogja",
  },
  other: {
    "geo.region": "AU",
    "geo.placename": "Australia",
  }
};

const data = {
  title: "Jogja Visa for Australians",
  description: "Cultural and student visa solutions for Yogyakarta (Jogja). Experience the heritage of Indonesia with our expert support.",
  heroImage: "https://images.unsplash.com/photo-1584810359583-96fc3448beaa?auto=format&fit=crop&w=1600&q=80",
  locationName: "Jogja"
};

export default function Page() {
  return <LocationPageTemplate data={data} />;
}
