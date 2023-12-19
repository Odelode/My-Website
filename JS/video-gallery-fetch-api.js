fetch('../JSON/video-gallery.json')
  .then(response => response.json())
  .then(data => {
    const gallery = document.querySelector('main');
    data.forEach(item => {
      let iframe = document.createElement('iframe');
      iframe.setAttribute('frameborder', '0')
      iframe.setAttribute('allowfullscreen', 'true')
      iframe.src = item.url;
      iframe.alt = item.alt;

      let div = document.createElement('div');
      div.classList.add('video-container');
      div.appendChild(iframe);

      gallery.appendChild(div);
    });
  })
  .catch(error => console.error('Error:', error));