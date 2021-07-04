import { FaUserCheck, FaCartPlus, FaBox } from 'react-icons/fa'
import Navbar from '../components/Navigation'
import Footer from '../components/Footer'
import DeliveryCard from '../components/DeliveryCard'
import Animation from '../components/Animation'

import style from '../styles/Home.module.css'

const Home = () => {
  return (
    <div>
      <Navbar />
      <main className={style.banner}>
        <header>
          <h1 className={style.title}>Haitek Delivery</h1>
          <h1>La comida que quieres, cuando quieras</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora eos odit non laboriosam temporibus, mollitia deleniti.</p>
        </header>
        <div>
          <Animation lotti='https://assets3.lottiefiles.com/packages/lf20_ngfmgkrn.json' width={600} height={600} />
        </div>
      </main>
      <section className={style.instructions}>
        <h2>Es facil y rapido</h2>
        <div className={style.container}>
          <div>
            <FaUserCheck />
            <h3>1. Elige tu delivery</h3>
          </div>
          <div>
            <FaCartPlus />
            <h3>2. Realiza tu pedido</h3>
          </div>
          <div>
            <FaBox />
            <h3>3. Recibe tu orden</h3>
          </div>
        </div>
      </section>
      <section className={style.deliverys}>
        <h2>Deliverys</h2>
        <div className={style.deliveryContainer}>
          <DeliveryCard />
          <DeliveryCard />
          <DeliveryCard />
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Home
