import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import DeliveryCard from '../components/DeliveryCard'
import Animation from '../components/Animation'

import deliverAnimation from '../assets/51053-delivery.json'
import pizzaBanner from '../assets/pizza-banner.png'
import styles from '../styles/Home.module.css'
import { getDeliverys } from '../services/deliverys'

const Home = () => {
  const [deliverys, setDeliverys] = useState([])

  useEffect(async () => {
    getDeliverys(setDeliverys)
  }, [])

  return (
    <>
      <Navbar />
      <header className={styles.banner}>
        <section className={styles.text}>
          <h1>Haitek Delivery</h1>
          <p>La comida que quieres, cuando quieres.</p>
        </section>
        <div>
          <img src={pizzaBanner} alt='pizza' />
          <a href='https://pngtree.com/so/food-clipart'>food clipart png from pngtree.com</a>
        </div>
      </header>
      <main className={styles.application}>
        <Animation lotti={deliverAnimation} width={350} height={350} />
        <div>
          <h2>Descarga nuestra aplicación</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod, deserunt?</p>
        </div>
      </main>
      <div className={styles.deliverys}>
        <h1>Deliverys</h1>
        <section>
          {
            deliverys.map(del => <DeliveryCard key={del.id} delivery={del} />)
          }
        </section>
        <button onClick={() => getDeliverys(setDeliverys)}>Test</button>
      </div>
    </>
  )
}

export default Home
