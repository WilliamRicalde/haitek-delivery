import styles from '../styles/DeliveryCard.module.css'

function DeliveryCard ({ delivery }) {
  const { Nombre, Telefono } = delivery

  return (
    <div className={styles.card}>
      <img
        src='https://images.unsplash.com/photo-1600728619239-d2a73f7aa541'
        alt='Delivery uno'
      />
      <div>
        <h2>{Nombre}</h2>
        <p>{Telefono}</p>
      </div>
    </div>
  )
}

export default DeliveryCard
