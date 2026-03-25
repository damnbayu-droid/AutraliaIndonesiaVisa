
import { Metadata } from 'next';
import LocationPageTemplate from '@/components/LocationPageTemplate';

export const metadata: Metadata = {
  title: "Bali Visa for Australians | Fast e-VOA & Extensions",
  description: "Official Bali visa services for Australians. Fast e-VOA, Digital Nomad, and Tourist visa support for your Bali holiday.",
  alternates: {
    canonical: "https://australiaindonesiavisa.online/visa-bali",
  },
  other: {
    "geo.region": "AU",
    "geo.placename": "Australia",
  }
};

const data = {
  title: "Bali Visa for Australians",
  description: "The #1 gateway for Aussie surfers, families, and nomads heading to the Island of the Gods. Skip the queues with our fast e-VOA.",
  heroImage: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1600&q=80",
  locationName: "Bali"
};

export default function Page() {
  return <LocationPageTemplate data={data} />;
}
