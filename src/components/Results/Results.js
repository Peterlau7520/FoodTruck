import React from 'react'
import styles from './Results.module.css'
import Truck from '../Truck/Truck'
const Results = (props) => (
    <div className={styles.trucks}>
    {props.trucks.map((truck) => {
        return <Truck
            key={truck.objectid}
            truck={truck}
            handleClick={props.handleSelectTruck}
        ></Truck>
    })}
</div>
)

Results.defaultProps = {
    trucks: []
  };

export default Results