import { Adoption } from '../components/Adoption';
import { Bars } from '../components/Bars';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';
import { Options } from '../components/Header';
import { GetInvolved } from '../components/GetInvolved';
import { ContactUs } from '../components/ContactUs';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Options />
      <Bars />
      <Adoption />
      <GetInvolved />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Home;
