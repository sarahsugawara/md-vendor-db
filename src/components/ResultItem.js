import React from 'react';

class ResultItem extends React.Component {
    
    render() {
        // const { address, contact, email, name, phone, specialty, work } = this.props.item;
        return (

            <ul className="results-list">
                <li><h3>{this.props.item.name}</h3></li>
                <li><b>Contact:</b> {this.props.item.contact}</li>
                <li><b>Email Address:</b> <a href="mailto:{this.props.item.email}">{this.props.item.email}</a></li>
                <li><b>Phone Number:</b> {this.props.item.phone}</li>
                <li><b>Specialties:</b> {this.props.item.specialty}</li>
                <li><b>Address:</b> {this.props.item.address}</li>
                <li><b>Have we worked with them before?</b> {this.props.item.worked}</li>
            </ul>
            
        );
    }
}

export default ResultItem;