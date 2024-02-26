  fetch('../JSON/hobbies-1.json')
  .then(response => response.json())
  .then(data => {
    const hobbies = document.querySelector('.links-1');
    data.forEach(item => {
      let a = document.createElement('a');
      a.setAttribute('target', '_blank')
      a.href = item.url;
      a.textContent = item.alt;

      let li = document.createElement('li');
      li.appendChild(a);

      hobbies.appendChild(li);
    });
  })


  fetch('../JSON/hobbies-2.json')
  .then(response => response.json())
  .then(data => {
    const hobbies = document.querySelector('.links-2');
    data.forEach(item => {
      let a = document.createElement('a');
      a.setAttribute('target', '_blank')
      a.href = item.url;
      a.textContent = item.alt;

      let li = document.createElement('li');
      li.appendChild(a);

      hobbies.appendChild(li);
    });
  })

  fetch('../JSON/hobbies-3.json')
  .then(response => response.json())
  .then(data => {
    const hobbies = document.querySelector('.links-3');
    data.forEach(item => {
      let a = document.createElement('a');
      a.setAttribute('target', '_blank')
      a.href = item.url;
      a.textContent = item.alt;

      let li = document.createElement('li');
      li.appendChild(a);

      hobbies.appendChild(li);
    });
  })

  fetch('../JSON/hobbies-4.json')
  .then(response => response.json())
  .then(data => {
    const hobbies = document.querySelector('.links-4');
    data.forEach(item => {
      let a = document.createElement('a');
      a.setAttribute('target', '_blank')
      a.href = item.url;
      a.textContent = item.alt;

      let li = document.createElement('li');
      li.appendChild(a);

      hobbies.appendChild(li);
    });
  })

  fetch('../JSON/hobbies-5.json')
  .then(response => response.json())
  .then(data => {
    const hobbies = document.querySelector('.links-5');
    data.forEach(item => {
      let a = document.createElement('a');
      a.setAttribute('target', '_blank')
      a.href = item.url;
      a.textContent = item.alt;

      let li = document.createElement('li');
      li.appendChild(a);

      hobbies.appendChild(li);
    });
  })