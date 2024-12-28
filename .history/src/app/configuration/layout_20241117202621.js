import Header from '../../../';
import Footer from '../../components/Layout/Footer';
import '../../styles/globals.css';

export default function ConfigurationLayout({ children }) {
  return (
    <>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  );
}