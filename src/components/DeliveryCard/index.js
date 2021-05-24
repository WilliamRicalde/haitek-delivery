import styles from './DeliveryCard.module.css'

function DeliveryCard ({ delivery }) {
  const { Nombre, Telefono } = delivery

  return (
    <article className={styles.card}>
      <div>
        <h2>{Nombre}</h2>
        <p>{Telefono}</p>
      </div>
    </article>
  )
}

export default DeliveryCard
