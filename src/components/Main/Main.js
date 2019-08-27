
import React from 'react'
import styles from './Main.module.css'
const Main = (props) => (
    <div className={styles.main}>
    {props.children}
    </div>
    )


export default Main