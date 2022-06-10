import React from 'react';
import facebook from '../../assets/svg/Facebook.svg'
import vkontakte from '../../assets/svg/Vk.svg'
import instagram from '../../assets/svg/Inst.svg'
import google from '../../assets/img/google.png'
import appStore from '../../assets/img/appStore.png'
import styles from './Footer.module.scss'


const Footer = () => {
  return (
    <div className={styles.footer}>
       <div className={styles.footer__top}>
       <h1>React</h1>
         <div className={styles.footer__top_join}>
           <h4>Присоединяйтесь к нам</h4>
           <div className={styles.links}>
             <a href='https://ru-ru.facebook.com/'  target="_blank" rel="noopener noreferrer">
               <img src={facebook} alt="facebook"/>
             </a>
             <a href='https://vk.com/' target="_blank" rel="noopener noreferrer">
               <img src={vkontakte} alt="vkontakte" />
             </a>
             <a href='https://www.instagram.com/' target="_blank" rel="noopener noreferrer">
               <img src={instagram} alt="instagram" />
             </a>
           </div>
         </div>
         <div className={styles.footer__top_install}>
           <h4>
             Устанавливайте приложение
           </h4>
          <div className={styles.links}>
            <a href="https://play.google.com/store/games?hl=ru&gl=US"  target="_blank" rel="noopener noreferrer">
              <img src={google} alt="Google Play"/>
            </a>
            <a href="https://www.apple.com/ru/app-store/" target="_blank" rel="noopener noreferrer">
              <img src={appStore} alt="App Store"/>
            </a>
          </div>
         </div>
         <div className={styles.footer__bottom}>
        <span>
          © Sionic
        </span>

           <a href='/' target="_blank" rel="noopener noreferrer">
          <span>
            Правовая информация
          </span>
           </a>
           <a href='/' target="_blank" rel="noopener noreferrer">
          <span>
            Политика конфиденциальности
          </span>
           </a>
         </div>
       </div>
    </div>
  );
};

export default Footer;
