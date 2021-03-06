import fetch from "isomorphic-fetch";

const url = "http://localhost:3030/api/bookreactions/";

const headers = {
    accept: 'application/json',
    'content-type': 'application/json'
};


export const fetchAllBooks = () => {
    return fetch(url + 'Books').then((response) => {
        return response.json();
    });
}

export const addBook = (book) => {
    return fetch(url + 'Books', {
        method: 'post',
        mode: 'cors',
        headers: headers,
        body: JSON.stringify(book)
    }).then(function (response) {
        return response.json();
    });
}



