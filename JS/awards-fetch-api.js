fetch('../JSON/awards.json')
  .then(response => response.json())
  .then(data => {
    const hobbies = document.querySelector('main');
    data.forEach(item => {
      let h2 = document.createElement('h2');
      let p = document.createElement('p');
      h2.textContent = item.h2;
      p.innerHTML = item.p;

      let section = document.createElement('section');
      section.appendChild(h2);
      section.appendChild(p);

      hobbies.appendChild(section);
    });
  })