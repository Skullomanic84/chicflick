'use strict';

const api_key = "d842fec0c97fd2e8d0e8d9e61bf78fb7";
const imageBaseURL = "https://image.tmdb.org/t/p/";

/*
fetch data from the tmbd server via 'url' and pass the results in a JSON data to a 'callback' function along with an optional parameters
*/ 

const fetchDataFromServer = (URL, callback, optionalParam) => {
    fetch(URL)
    .then(response => response.json())
    .then(data => callback(data, optionalParam));
}


export { imageBaseURL, api_key, fetchDataFromServer };