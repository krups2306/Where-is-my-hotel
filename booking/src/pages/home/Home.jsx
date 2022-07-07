import "./Home.css"
import Navbar from "../../components/navbar/Navbar"
import Header from "../../components/navbar/header/Header"
import Featured from "../../components/featured/Featured"

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Header/>
        <div className="homeContainer">
          <Featured/>
        </div>
    </div>
  )
}

export default Home