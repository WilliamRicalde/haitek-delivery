import { Link } from 'react-router-dom'

import style from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.company}>
        <strong>Haitek Delivery</strong>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident dolorem iusto autem voluptates!</p>
      </div>
      <div className={style.about}>
        <strong>Empresa</strong>
        <ul>
          <li><Link to='/feed'>Contaco</Link></li>
          <li>Nosotros</li>
          <li>Terminos y condiciones</li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
