import { useState, useEffect } from 'react'
import { getDeliverys } from '../services/deliverys'
import { FaUserCheck, FaCartPlus, FaBox } from 'react-icons/fa'
import Navbar from '../components/Navigation'
import DeliveryCard from '../components/DeliveryCard'
import BannerSvg from '../components/BannerSvg'

import styles from '../styles/Home.module.css'

const Home = () => {
  const [deliverys, setDeliverys] = useState([])

  useEffect(async () => {
    getDeliverys(setDeliverys)
  }, [])

  return (
    <>
      <Navbar />
      <main className={styles.banner}>
        <header>
          <h1>La comida que quieres, cuando quieras</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora eos odit non laboriosam temporibus, mollitia deleniti.</p>
          <button>Ordena ahora</button>
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
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis consequatur numquam laborum.</p>
          </div>
          <div>
            <FaCartPlus />
            <h2>2. Realiza tu pedido</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius?</p>
          </div>
          <div>
            <FaBox />
            <h2>3. Recibe tu orden</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, optio?</p>
          </div>
        </div>
      </section>
      <section className={styles.deliverys}>
        <h1>Deliverys</h1>
        <section>
          {
            deliverys.map(del => <DeliveryCard key={del.id} delivery={del} />)
          }
        </section>
        <button onClick={() => getDeliverys(setDeliverys)}>Test</button>
      </section>
    </>
  )
}

export default Home
