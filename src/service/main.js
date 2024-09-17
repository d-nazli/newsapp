import {BASE_URL} from './Url';
import {APIKEY} from '@env'

const get = urlOption => {
  return fetch(BASE_URL + urlOption, {
    headers: {
      'Content-type': 'application/json',
     
     'Authorization': `${APIKEY}`,
    },
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .catch(error => {
      console.error('Error:', error);
      throw error;
    });
};

const post = (urlOption, body) => {
  return fetch(BASE_URL + urlOption, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
     
       'Authorization': `${APIKEY}`,
    },
    body: JSON.stringify(body),
  })
    .then(response => {
      return response.json();
    })
    .catch(error => {
      console.error('Error:', error);
      throw error;
    });
};

export {get, post};
