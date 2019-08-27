import React from "react"
import styles from "./Marker.module.css"
class Marker extends React.Component{
    render(){
        let classes=styles.marker;
        if(this.props.selected){
            classes=styles.selected;
        }
        return <div className={classes}>{this.props.text}</div>
    }
}
export default Marker;