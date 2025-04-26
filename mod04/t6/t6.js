'use strict';

window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('searchForm');
  const results = document.getElementById('results');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const query = document.getElementById('query').value.trim();
    const url = 'https://api.chucknorris.io/jokes/search?query=' + encodeURIComponent(query);

    fetch(url)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        results.innerHTML = '';

        for (let i = 0; i < data.result.length; i++) {
          const joke = data.result[i];

          const article = document.createElement('article');
          const p = document.createElement('p');
          p.textContent = joke.value;

          article.appendChild(p);
          results.appendChild(article);
        }
      })
      .catch(function(error) {
        console.log('Error:', error.message);
      });
  });
});
