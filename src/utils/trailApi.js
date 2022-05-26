import tokenService from './tokenService';

const BASE_URL = '/api/trails';

export function create(trail) {
    return fetch(BASE_URL, {
        method: 'POST',
        body: postMessage,
        headers: {
            'Authorization': 'Bearer ' + tokenService.getToken()
        }
    }).then(res => {
        if(res.ok) return res.json();
        throw new Error('Bad Credentials! Check server terminal!')
    })
}