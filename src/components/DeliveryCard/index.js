import styles from './DeliveryCard.module.css'
import bannerHaitek from '../../assets/bannerHaitek.png'

function DeliveryCard ({ delivery }) {
  // const { Nombre, Telefono } = delivery

  return (
    <article className={styles.card}>
      <img src={bannerHaitek} alt='imagen del logo de haitek' />
      <div>
        <h3>Haitek Delivery</h3>
        <p>9878003462</p>
      </div>
    </article>
  )
}

export default DeliveryCard
