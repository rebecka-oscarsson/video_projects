import React from 'react';
import styles from './Card.module.css'
import Label from './Label';
import CameraIcon from '../images/camera.svg';
import PinIcon from '../images/pin.svg';
import ClockIcon from '../images/clock.svg';

function Card({id, logo, company, description}) {
    
    let imageSource ="";
    if(logo) {imageSource = logo.url};
    const mockLabels = ["Animation", "Music Video", "Advertisement"]

    return (
        <article key = {id} className={styles.card}> 
            <header className={styles.card_header}><img src = {imageSource} className={styles.image} alt=""/><div className={styles.company_location}>{company}<div><img src={PinIcon} alt="" className={styles.icon} />Plats, Land</div></div></header>                       
            <h2 className={styles.description}>{description}</h2>
            <ul className={styles.labels}>{mockLabels.map((labelText, index)=><Label labelText={labelText} index={index}/>)}
            <hr className={styles.ruler} />
            <footer className={styles.footer}><span><img src={CameraIcon} alt="" className={styles.icon} />3 videos</span><span><img src={ClockIcon} alt="" className={styles.icon} />3 mars</span></footer>
            </ul>
        </article>
    );
    
}

export default Card;