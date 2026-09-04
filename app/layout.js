import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext';

export const metadata = {
  title: 'Universal Orphanage & Old Age Home | Compassionate Geriatric Care in Hyderabad',
  description: '100% Free non-profit old age home and orphanage facility in Kukatpally, Hyderabad. 24/7 nursing, doctor visits, organic meals, physiotherapy, and dementia care.',
  keywords: 'Old Age Home Hyderabad, Free Senior Care Kukatpally, Geriatric Care, Nursing Home, Dementia Care, Universal Home',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;0,800;1,400&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
