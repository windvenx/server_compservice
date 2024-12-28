import Header from '../../../components/Layout/Header';
import Footer from '../../../components/Layout/Footer';
import '../';

export default function ConfigurationLayout({ children }) {
  return (
    <>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  );
}