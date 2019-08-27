import React from 'react';
import styles from './SearchBar.module.css'
class SearchBar extends React.Component{
    constructor(props){
        super(props)
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    handleInputChange(event){
        this.props.handleInputChange(event.target.value)
    }
    render(){
        return (
        <div className={styles.search}>
        <input
            className={styles.search + " " +styles.input}
            type='text'
            placeholder="Search.."
            value={this.props.search}
            onChange={this.handleInputChange}
        />
        </div>
        )   
    }
}
export default SearchBar