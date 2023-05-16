import 'react-multi-carousel/lib/styles.css';
import Navbar from '../../components/navbar/navabout'
import Banner from '../../components/banner/bnabout'
import Teks from '../../components/teks/teksabout'
import Teks1 from '../../components/teks/teksabout1'
import Card from '../../components/card/cardabout'
import Teks3 from '../../components/teks3/teksabout'
import Founding from '../../components/founding/founding'
import Footer from '../../components/footer/footabout'


const about = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <Teks />
            <Teks1 />
            <Card />
            <Teks3 />
            <Founding />
            <Footer />
        </div>

    )
}

export default about