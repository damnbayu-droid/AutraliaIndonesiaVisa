
import { Metadata } from 'next';
import LocationPageTemplate from '@/components/LocationPageTemplate';

export const metadata: Metadata = {
  title: "Surabaya Visa for Australians | Business & Industry Support",
  description: "Official visa services for Australians in Surabaya. Business, Industrial, and Technical visa support for East Java.",
  alternates: {
    canonical: "https://australiaindonesiavisa.online/visa-surabaya",
  },
  other: {
    "geo.region": "AU",
    "geo.placename": "Australia",
  }
};

const data = {
  title: "Surabaya Visa for Australians",
  description: "Business and industrial visa support for the heart of East Java. Reliable processing for corporate travelers.",
  heroImage: "https://images.unsplash.com/photo-1605342412850-8404a377045c?auto=format&fit=crop&w=1600&q=80",
  locationName: "Surabaya"
};

export default function Page() {
  return <LocationPageTemplate data={data} />;
}
