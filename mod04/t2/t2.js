'use srtict';

document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault();

  const query = document.getElementById('query').value;
  const url = `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`;

  fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.log('Search result:', data);
    });
});