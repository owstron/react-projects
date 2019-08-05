import React, { Component } from 'react';
import partyPopper from '../assets/party-popper.jpg';

class AgeStats extends Component {
    timeSince(date) {
        const today = new Date().getTime();
        const other_date = new Date(date).getTime();
        let difference = Math.abs(other_date - today);

        let days = Math.floor(difference / (1000 * 3600 * 24));
        let years = Math.floor(days/365);
        days -= years * 365;
        let months = Math.floor(days/31);
        days -= months * 31

        return `${years} years, ${months} months, ${days} days`;
    }


    render() {
        return(
            <div>
                <h3>{this.props.date}</h3>
                <h4>Congrats on {this.timeSince(this.props.date)}!</h4>
                <img src={partyPopper} alt="party-popper" className="party-popper" />
            </div>
        );
    }
}

export default AgeStats;