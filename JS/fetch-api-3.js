fetch('../JSON/gallery-3.json')
  .then(response => response.json())
  .then(data => {
    const gallery = document.querySelector('.gallery-3');
    data.forEach(item => {
      let img = document.createElement('img');
      img.src = item.url;
      img.alt = item.alt;

      let div = document.createElement('div');
      div.classList.add('gallery-item');
      div.appendChild(img);

      gallery.appendChild(div);
    });
  })
  .catch(error => console.error('Error:', error));