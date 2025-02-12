fetch('posts.json')
  .then(response => response.json())
  .then(data => {
    const postContainer = document.querySelector('main');
    data.forEach(post => {
      const postHTML = `
        <div class="post">
          <h2>${post.title}</h2>
          <p>${post.content}</p>
          <p>Posted on ${post.date}</p>
        </div>
      `;
      postContainer.insertAdjacentHTML('beforeend', postHTML);
    });
  })
  .catch(error => console.error('Error loading post data:', error));