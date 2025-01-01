async function search(query) {
  const response = await fetch('database.json');
  const data = await response.json();
  return data.filter(item =>
      item.title.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query) ||
      item.keywords.some(keyword => keyword.toLowerCase().includes(query))
  );
}

document.getElementById('searchForm').addEventListener('submit', async (event) => {
  event.preventDefault();
  const query = document.getElementById('query').value.toLowerCase();

  document.body.style.filter = "blur(5px)";
  document.querySelector('.search-container').style.opacity = "0.5";

  const results = await search(query);

  const resultsContainer = document.getElementById('results');
  resultsContainer.innerHTML = '';

  if (results.length === 0) {
      resultsContainer.innerHTML = '<p>No results found.</p>';
  } else {
      results.forEach(item => {
          const resultElement = document.createElement('div');
          resultElement.className = 'result';
          resultElement.innerHTML = `
              <h3><a href="${item.url}" target="_blank">${item.title}</a></h3>
              <p>${item.description}</p>
              <p class="url">${item.url}</p>
          `;
          resultsContainer.appendChild(resultElement);
      });
  }

  document.body.style.filter = "none";
  document.querySelector('.search-container').style.opacity = "1";
});