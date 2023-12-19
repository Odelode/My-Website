fetch('../JSON/music.json')
  .then(response => response.json())
  .then(data => {
    const gallery = document.querySelector('main');
    data.forEach(item => {
      let iframe = document.createElement('iframe');
      iframe.setAttribute('frameborder', '0')
      iframe.setAttribute('loading', 'eager')
      iframe.setAttribute('allowfullscreen', '')
      iframe.setAttribute('allow', 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture')
      iframe.setAttribute('style', 'border-radius : 12px, width: 100%; height: 352;')
      iframe.src = item.url;
      iframe.alt = item.alt;

      let div = document.createElement('div');
      div.classList.add('video-container');
      div.appendChild(iframe);

      gallery.appendChild(div);
    });
  })
  .catch(error => console.error('Error:', error));