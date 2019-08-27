
import React from 'react';
import GoogleMapReact from 'google-map-react'
import Marker from '../Marker/Marker'
import styles from './Map.module.css'
const Map = (props) => (
    <div className={styles.map}>  
        <GoogleMapReact
                    bootstrapURLKeys={{ key: process.env.GOOGLE_MAPS_API}}
                    center={props.center}
                    zoom={13}
                >
            {props.trucks.map((truck) => {
                return <Marker
                    key={truck.objectid}
                    lat={truck.latitude}
                    lng={truck.longitude}
                    text={truck.applicant}
                    selected={truck === props.selectedTruck}
                ></Marker>
            })}
        </GoogleMapReact>
    </div>  
    )

Map.defaultProps = {
    center: {
        lat:37.7430,
        lng:-122.4366
    },
    trucks: []
  };

  export default Map