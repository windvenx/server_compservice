import localFont from "next/font/local";
import "./globals.css";
import Header from '..//../components/Layout/';
import Footer from '../components/Layout/Footer';



export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
          {children}
        <Footer />
      </body>
      </html>
  );
}
