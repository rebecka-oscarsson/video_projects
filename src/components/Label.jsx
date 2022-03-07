import React from 'react';
import styles from './Label.module.css'

function Label({labelText, index}) {
    return (
        <li key = {index} className={styles.label}>
        {labelText}
        </li>
    );
}

export default Label;