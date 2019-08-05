import { SET_RECIPES, FAVORITE_RECIPE } from '../actions';
import { combineReducers } from 'redux';

function recipes(state=[], action) {
    switch (action.type){
        case SET_RECIPES:
            return action.items
        default:
            return state
    }
}

function favoriteRecipes(state=[] , action) {
    switch (action.type) {
        case FAVORITE_RECIPE:
            return [...state, action.recipe];
        default:
            return state
    }
} 

const rootReducer = combineReducers({ recipes, favoriteRecipes });

export default rootReducer;
