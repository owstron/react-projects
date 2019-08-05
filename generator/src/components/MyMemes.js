import React, { Component } from 'react';
import { connect } from 'react-redux';

class MyMemes extends Component {
    render()
    {
        console.log(this.props.myMemes);
        return(
            <div>
                {
                    this.props.myMemes.map((meme, index) => {
                        return (
                                <img 
                                    key={index}
                                    src={meme.data.url} 
                                    className='my-meme-img'
                                    alt='My Meme'
                                />
                        )
                    })
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        myMemes: state.myMemes
    }
}

export default connect(mapStateToProps, null)(MyMemes);