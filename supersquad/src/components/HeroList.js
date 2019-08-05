import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteCharacterById, removeAllCharacters } from '../actions';

class HeroList extends Component {
    render() {
        return(
            <div>
                <h4>Your Hero Squad:</h4>
                <ul className="list-group">
                    {
                        this.props.heroes.map(hero => {
                            return(
                                <li key={hero.id} className="list-group-item">
                                    <div className="list-item">
                                        {hero.name}
                                    </div>
                                    <div className="list-item right-button"
                                        onClick={() => this.props.deleteCharacterById(hero.id)}>
                                        -
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
                <div className="list-group-item"
                    onClick={() => this.props.removeAllCharacters()}>
                    Clear Your Squad
                </div>
                
            </div>
        );
    }
}

function mapStatetoProps(state){
    return({
        heroes: state.heroes
    })
}

export default connect(mapStatetoProps, { deleteCharacterById, removeAllCharacters })(HeroList);