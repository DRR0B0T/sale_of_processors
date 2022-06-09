import React from 'react';
import facebook from '../../assets/svg/Facebook.svg'
import vkontakte from '../../assets/svg/Vk.svg'
import instagram from '../../assets/svg/Inst.svg'
import google from '../../assets/img/google.png'
import appStore from '../../assets/img/appStore.png'
import styles from './Footer.module.scss'
import {Link} from "react-router-dom";

const Footer = () => {
  return (
    <div className={styles.footer}>
       <div className={styles.footer__top}>
       <h1>React</h1>
         <div className={styles.footer__top_join}>
           <h4>Присоединяйтесь к нам</h4>
           <div className={styles.links}>
             <Link to='https://ru-ru.facebook.com/'>
               <img src={facebook} alt="facebook"/>
             </Link>
             <Link to='https://vk.com/'>
               <img src={vkontakte} alt="vkontakte"/>
             </Link>
             <Link to='https://www.instagram.com/'>
               <img src={instagram} alt="instagram"/>
             </Link>
           </div>
         </div>
         <div className={styles.footer__top_install}>
           <h4>
             Устанавливайте приложение
           </h4>
          <div className={styles.links}>
            <Link to="https://play.google.com/store/games?hl=ru&gl=US">
              <img src={google} alt="Google Play"/>
            </Link>
            <Link to="https://www.apple.com/ru/app-store/">
              <img src={appStore} alt="App Store"/>
            </Link>
          </div>
         </div>
         <div className={styles.footer__bottom}>
        <span>
          © Sionic
        </span>

           <Link to='#'>
          <span>
            Правовая информация
          </span>
           </Link>
           <Link to='#'>
          <span>
            Политика конфиденциальности
          </span>
           </Link>
         </div>
       </div>
    </div>
  );
};

export default Footer;
