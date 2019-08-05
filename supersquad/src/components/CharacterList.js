import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { addCharacterById } from '../actions';

class CharacterList extends Component {
    render() {
        return(
            <div>
                <h4>Characters</h4>
                <ul className='list-group'>
                    {
                        this.props.characters.map(character => {
                            return(
                                <li className='list-group-item' key={character.id}>
                                    <div className='list-item'>
                                        {character.name}
                                    </div>
                                    <div className='list-item right-button' 
                                        onClick = {() => this.props.addCharacterById(character.id)}>
                                        +
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        characters: state.characters
    }
}

// function matchDispatchToProps(dispatch) {
//     return bindActionCreators({ addCharacterById }, dispatch);
// }

// export default connect(mapStateToProps, matchDispatchToProps)(CharacterList);
export default connect(mapStateToProps, { addCharacterById })(CharacterList);

// connect takes two arguments, one to map state attirbutes to props, and another to 
// map dispatches or action functions to props
// instead of the second function we can directly use a shortcut