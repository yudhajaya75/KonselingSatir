import 'react-multi-carousel/lib/styles.css';
import Navbar from '../../components/navbar/navbar'
import Banner from '../../components/banner/banner'
import Teks from '../../components/teks/teks';
import Card from '../../components/card/card';
import Teks2 from '../../components/teks2/teks';
import Sosmed from '../../components/sosmed/sosmed';
import Teks3 from '../../components/teks3/teks';
import Compslid from '../../components/compslid/compslid';
import Footer from '../../components/footer/footer';


function layanan() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Teks />
      <Card />
      <Teks2 />
      <Sosmed />
      <Teks3 />
      <Compslid />
      <Footer />
    </div>
  );
}

export default layanan;
