import { username, password } from './secrets';

export const RECEIVE_MEMES = 'RECEIVE_MEMES';
export const NEW_MEME = 'NEW_MEME';


function receiveMemes(json) {
    const { memes } = json.data;

    return ({
        type: RECEIVE_MEMES,
        memes
    })
}

function fetchMemesJson() {
    return fetch('https://api.imgflip.com/get_memes')
        .then(response => {
            return response.json();
        })
}

// For Async functions
// Dispatches the function when the inner async function returns
export function fetchMemes() {
    return function(dispatch){
        return fetchMemesJson()
            .then(json => dispatch(receiveMemes(json)))
    }
}

// Calls a function
// Then dispatches another function, waits for its reply, 
// finally dispatches the end result.

function newMeme(meme) {
    return ({
        type: NEW_MEME,
        meme
    })
}


function postMemeJson(params) {
    params['username'] = username;
    params['password'] = password;

    const bodyParams = Object.keys(params).map(key => {
        return encodeURIComponent(key) + '=' + encodeURIComponent(params[key])
    }).join('&');

    console.log('bodyParams', bodyParams);

    return fetch('https://api.imgflip.com/caption_image', 
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: bodyParams
    }).then(response => response.json());
}

export function createMeme(new_meme_obj) {
    return function(dispatch) {
        return postMemeJson(new_meme_obj)
            .then(new_meme => dispatch(newMeme(new_meme)))
    }
}