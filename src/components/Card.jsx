import React from 'react';
import styles from './Card.css'

function Card({id, logo, company, description}) {
    
    let imageSource = ""
    if(logo) {imageSource = logo.url}

    {return (
        <div key = {id}> 
            <img src = {imageSource}/>            
            {company}
            {description}
        </div>
    );}
    
}

export default Card;