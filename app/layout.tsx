import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--ff-head",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--ff-body",
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Dental Clinic in Dhanmondi | Osmani Dental Aid — Prof. Dr. Shibbir Osmani",
  description:
    "Osmani Dental Aid — led by Professor Dr. Shibbir Osmani, Ex Vice Principal of Dhaka Dental College. 30+ years of trusted dental care in Dhanmondi. Root canal, implants, cosmetic dentistry & emergency care.",
  keywords:
    "dentist near me, dental clinic Dhanmondi, best dentist Dhanmondi, Professor Dr Shibbir Osmani, dental implants Dhaka, cosmetic dentistry Dhanmondi, root canal Dhanmondi, teeth scaling near me",
  icons: {
    icon: "/teeth_logo.jpeg",
  },
  openGraph: {
    title:
      "Osmani Dental Aid | Prof. Dr. Shibbir Osmani — Best Dentist in Dhanmondi",
    description:
      "30+ years of trusted dental care led by Professor Dr. Shibbir Osmani, Ex Vice Principal Dhaka Dental College.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Dentist",
              name: "Osmani Dental Aid",
              url: "https://osmanidentalaid.com",
              telephone: "+8801819219435",
              description:
                "Trusted dental clinic in Dhanmondi led by Professor Dr. Shibbir Osmani with 30+ years experience. Dental implants, cosmetic dentistry, root canal, and emergency care.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Dhanmondi",
                addressLocality: "Dhaka",
                addressCountry: "BD",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 23.7469,
                longitude: 90.3762,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Saturday",
                    "Sunday",
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                  ],
                  opens: "09:00",
                  closes: "21:00",
                },
              ],
              priceRange: "$$",
              hasMap:
                "https://maps.app.goo.gl/2c8s5e1Lxg1YU9579",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5.0",
                reviewCount: "500",
              },
              areaServed: [
                "Dhanmondi",
                "Green Road",
                "Panthapath",
                "Kolabagan",
                "Hatirpool",
                "Dhaka",
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Dr. Shibbir Osmani",
              jobTitle: "Professor & Ex Vice Principal",
              worksFor: {
                "@type": "Organization",
                name: "Dhaka Dental College",
              },
              alumniOf: "Dhaka Dental College",
              medicalSpecialty: [
                "Cosmetic Dentistry",
                "Dental Implants",
                "Prosthodontics",
              ],
              description:
                "Professor Dr. Shibbir Osmani is a dental specialist dedicated to aesthetic and cosmetic restoration, dental implants, crowns, bridges, veneers and replacement of lost teeth.",
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
