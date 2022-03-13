import React, {Component} from "react";
// import {Button} from 'reactstrap';
import './post-status-filter.css';

export default class PostStatusFilter extends Component {
    constructor(props) {
        super(props);
        this.buttons = [
            {name: 'all', label: 'All'},
            {name: 'like', label: 'Liked'},
        ]
    }
    render() {
        const buttons = this.buttons.map(({name, label}) => {
            const {filter, onFilterSelect} = this.props;
            const active = filter === name;
            const btnClassName = active ? 'btn-info' : 'btn-outline-secondary';
            const btnIcons = label !== 'All' ? <i className="fas fa-thumbs-up"></i> : <i className="fab fa-twitter"></i>;
            return (
                <button 
                key={name} 
                className={`btn ${btnClassName}`} 
                type='button'
                onClick={() => onFilterSelect(name)}>{label} {btnIcons}</button>
            )
        });
        return (
            <div className='btn-group'>
                {buttons}
            </div>
        )
    } 
}