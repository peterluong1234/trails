import tokenService from './tokenService';

const BASE_URL = '/api/trails';

export function create(trail) {
    return fetch(BASE_URL, {
        method: 'POST',
        body: trail,
        headers: {
            'Authorization': 'Bearer ' + tokenService.getToken()
        }
    }).then(res => {
        if(res.ok) return res.json();
        throw new Error('Bad Credentials! Check server terminal!')
    })
}

export function getAll() {
    return fetch(BASE_URL, {
        headers: {
            'Authorization': 'Bearer ' + tokenService.getToken()
        }
    })
    .then(res => {
        if(res.ok) return res.json();
        throw new Error('Bad Credentials! Check the Server Terminal!');
    })
}

export function deleteTrail(trailId){
    return fetch(`${BASE_URL}/${trailId}`, {
        method: 'DELETE',
        headers: {
            'Authorization': 'Bearer ' + tokenService.getToken()
        }
    }).then(res => {
		if(res.ok) return res.json()
		throw new Error('Not logged In! Check Express terminal')
	})
}