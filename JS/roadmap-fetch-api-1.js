fetch('../JSON/roadmap-completed.json')
  .then(response => response.json())
  .then(data => {
    const roadmap = document.querySelector('.roadmap');
    data.forEach(item => {
      let h2 = document.createElement('h2');
      let p = document.createElement('p');
      h2.textContent = item.h2;
      p.innerHTML = item.p;

      let div = document.createElement('div');
      div.classList.add('milestone');
      div.classList.add('completed');
      div.appendChild(h2);
      div.appendChild(p);

      roadmap.appendChild(div);
    });
})

function linker(src) {
  var script = document.createElement('script');
  script.src = src;
  document.head.appendChild(script);
}

linker("../JS/roadmap-fetch-api-2.js")