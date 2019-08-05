import React, { Component } from 'react';
import RecipeItem from './RecipeItem';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class FavoriteRecipeList extends Component{
    render() {
        return (
            <div>
                <h4 className='link'><Link to='/'>Home</Link></h4>
                <h2>Favorite Recipes</h2>
                {
                    this.props.favoriteRecipes.map((recipe, index) => {
                        return (
                            <RecipeItem key={index} recipe={recipe} favoriteButton={false} />
                        )
                    })
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        favoriteRecipes: state.favoriteRecipes
    }
}

export default connect(mapStateToProps, null)(FavoriteRecipeList);