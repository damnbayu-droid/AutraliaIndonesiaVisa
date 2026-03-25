
import { Metadata } from 'next';
import LocationPageTemplate from '@/components/LocationPageTemplate';

export const metadata: Metadata = {
  title: "Lombok Visa for Australians | Travel & Surf Support",
  description: "Explore Lombok with ease. Fast visa processing for Australians heading to Kuta Lombok and beyond.",
  alternates: {
    canonical: "https://australiaindonesiavisa.online/visa-lombok",
  },
  other: {
    "geo.region": "AU",
    "geo.placename": "Australia",
  }
};

const data = {
  title: "Lombok Visa for Australians",
  description: "Explore the untouched beauty of Lombok with our seamless visa processing. From trekking Rinjani to surfing Kuta.",
  heroImage: "https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?auto=format&fit=crop&w=1600&q=80",
  locationName: "Lombok"
};

export default function Page() {
  return <LocationPageTemplate data={data} />;
}
