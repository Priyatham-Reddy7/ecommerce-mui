import Navbar from "../components/Navbar"
import Banner from "../components/Banner"
import SingleProduct from "../components/SingleProduct"
import GridProducts from "../components/GridProducts"
import Footer from "../components/Footer"

const Home = () => {
  return (
    <>
        <Navbar />
        <Banner />
        <SingleProduct />
        <GridProducts />
        <Footer />
    </>
  )
}

export default Home