import React, { Component } from 'react';
import { Form, FormControl, FormLabel, FormGroup, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { setRecipes } from '../actions';

class SearchRecipes extends Component {

    constructor() {
        super();

        this.state = {
            ingredients: '',
            dish: ''
        }
    }


    search() {
        let { ingredients, dish } = this.state;
        const proxy = 'https://cors-anywhere.herokuapp.com/';
        const url = `${proxy}http://www.recipepuppy.com/api/?i=${ingredients}&q=${dish}`;
        // const url = `/api/?i=${ingredients}&q=${dish}`;
        // ?i=(ingredients)
        // ?q = (query for dishes)

        fetch(url, {
            method: 'GET',
            'Access-Control-Allow-Origin': '*'
        })
        .then(response => response.json())
        .then(json => {
            this.props.setRecipes(json.results);
        });
    }


    render() {
        return(
            <Form inline>
                <FormGroup>
                    <FormLabel>Ingredients</FormLabel>
                    {' '}
                    <FormControl type="text" 
                    placeholder="garlic, chicken" 
                    onChange={event => this.setState({ ingredients: event.target.value })}
                    />
                </FormGroup>
                {' '}
                <FormGroup>
                    <FormLabel>Dish</FormLabel>
                    {' '}
                    <FormControl type="text" 
                        placeholder="adobo" 
                        onChange={event => this.setState({ dish: event.target.value })}    
                    />
                </FormGroup>
                {' '}
                <Button onClick={() => this.search()}>Submit</Button>
            </Form>
        );
    }
}

export default connect(null, { setRecipes })(SearchRecipes);