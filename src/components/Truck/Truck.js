import React from 'react'
import styles from './Truck.module.css'

class Truck extends React.Component{

    constructor(props){
        super(props)
        this.handleclick = this.handleclick.bind(this)
    }
    handleclick =() => {
        console.log(this.props.truck, "in Truck component")
        this.props.handleClick(this.props.truck)
    };
    render(){
        const title= this.props.truck.applicant;
        // const style={
        //     backgroundImage:"url('"+ this.props.stadium.imageUrl +"')"
        // }
        return(
            <div className={styles.truck} onClick={this.handleclick}>
                <div className={styles.truckPicture}></div>
                <div className={styles.title}>
                    {title}
                </div>
            </div>
        );
    }
}
export default Truck;