import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";

export const metadata: Metadata = {
  metadataBase: new URL("https://novasparkdigitalmarketingagency.com"),
  title: {
    default: "Digital Marketing company in Bhubaneswar | Nova Spark",
    template: "%s | Nova Spark"
  },
  description: "Discover top-notch digital marketing company in Bhubaneswar. From SEO to social media, we help you connect with your audience and increase sales!",
  keywords: [
    "Digital Marketing company in Bhubaneswar",
    "Digital Marketing Services",
    "Online marketing Services",
    "Digital Marketing Agency",
    "Digital Marketing Solutions",
    "Best Digital Marketing Agency in Bhubaneswar",
    "SEO",
    "Performance Marketing",
    "Social Media Marketing",
    "Bhubaneswar"
  ],
  authors: [{ name: "Nova Spark" }],
  openGraph: {
    title: "Digital Marketing company in Bhubaneswar | Nova Spark",
    description: "Discover top-notch digital marketing company in Bhubaneswar. From SEO to social media, we help you connect with your audience and increase sales!",
    url: "https://novasparkdigitalmarketingagency.com/",
    siteName: "Nova Spark Digital Marketing Agency",
    type: "website",
    images: [
      {
        url: "https://novasparkdigitalmarketingagency.com/wp-content/uploads/2025/12/Nova-Spark-wo-bg-Logo.png",
        width: 1200,
        height: 630,
        alt: "Nova Spark Digital Marketing Agency"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing company in Bhubaneswar | Nova Spark",
    description: "Discover top-notch digital marketing company in Bhubaneswar. From SEO to social media, we help you connect with your audience and increase sales!",
    images: ["https://novasparkdigitalmarketingagency.com/wp-content/uploads/2025/12/Nova-Spark-wo-bg-Logo.png"]
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/images/logo.png', type: 'image/png' },
      { url: '/favicon.png', type: 'image/png' }
    ],
    shortcut: ['/images/logo.png'],
    apple: [
      { url: '/images/logo.png', sizes: '180x180', type: 'image/png' },
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ]
  }
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Nova Spark Digital Marketing Agency",
  "image": "https://novasparkdigitalmarketingagency.com/wp-content/uploads/2025/12/Nova-Spark-wo-bg-Logo.png",
  "@id": "",
  "url": "https://novasparkdigitalmarketingagency.com/",
  "telephone": "+91 82807 88689",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Growth Lab: Mallick Complex, Unit 3, Kharvela Nagar,",
    "addressLocality": "Bhubaneswar",
    "postalCode": "751001",
    "addressCountry": "IN"
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "opens": "09:30",
    "closes": "18:30"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/logo.png" type="image/png" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/images/logo.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <MobileBottomBar />
      </body>
    </html>
  );
}
