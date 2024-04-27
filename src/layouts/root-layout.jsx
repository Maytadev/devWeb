//import React from 'react';
// Componentes
import Header from '../components/header/header';
import ScrollToTop from '../components/scroll-to-top/scroll-to-top';
import Footer from '../components/footer/footer';

export default function RootLayout({ children }) {
  return (
    // <html suppressHydrationWarning lang="es">
    // </html>
    <div className="bg-[#FCFCFC] dark:bg-black ">
      <Header />
      {children}
      <ScrollToTop />
      <Footer />
    </div>
  );
}
