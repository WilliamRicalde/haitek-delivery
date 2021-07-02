import { FaUserCheck, FaCartPlus, FaBox } from 'react-icons/fa'
import Navbar from '../components/Navigation'
import Footer from '../components/Footer'
import BannerSvg from '../components/BannerSvg'

import styles from '../styles/Home.module.css'

const Home = () => {
  return (
    <div>
      <Navbar />
      <main className={styles.banner}>
        <header>
          <h1>La comida que quieres, cuando quieras</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora eos odit non laboriosam temporibus, mollitia deleniti.</p>
        </header>
        <div>
          <BannerSvg />
        </div>
      </main>
      <section className={styles.instructions}>
        <h1>Es facil y rapido</h1>
        <div className={styles.container}>
          <div>
            <FaUserCheck />
            <h2>1. Elige tu delivery</h2>
          </div>
          <div>
            <FaCartPlus />
            <h2>2. Realiza tu pedido</h2>
          </div>
          <div>
            <FaBox />
            <h2>3. Recibe tu orden</h2>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Home
