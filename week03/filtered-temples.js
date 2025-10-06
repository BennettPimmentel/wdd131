document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('copyright-year');
  const lmEl = document.getElementById('last-modified');
  const now = new Date();
  yearEl.textContent = now.getFullYear();
  lmEl.textContent = document.lastModified;

  const menuBtn = document.getElementById('menu-btn');
  const nav = document.getElementById('main-nav');
  const icon = menuBtn.querySelector('.icon');

  menuBtn.addEventListener('click', () => {
    nav.classList.toggle('open');
    const isOpen = nav.classList.contains('open');
    menuBtn.setAttribute('aria-expanded', String(isOpen));
    icon.textContent = isOpen ? '✕' : '≡';
  });

  const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },

    {
      templeName: "Salt Lake",
      location: "Salt Lake City, Utah, United States",
      dedicated: "1893, April, 6",
      area: 253015,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake/400x250/salt-lake-temple-37761-wallpaper.jpg"
    },
    {
      templeName: "Rome Italy",
      location: "Rome, Italy",
      dedicated: "2019, March, 10",
      area: 41010,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rome-italy/400x250/rome-italy-temple-lds-2590551-wallpaper.jpg"
    },
    {
      templeName: "Tokyo Japan",
      location: "Tokyo, Japan",
      dedicated: "1980, October, 27",
      area: 52590,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/tokyo-japan/400x250/tokyo-japan-temple-lds-1020342-wallpaper.jpg"
    }
  ];

  const gallery = document.querySelector('.gallery');

  function renderTemples(list) {
    gallery.innerHTML = '';
    list.forEach(t => {
      const figure = document.createElement('figure');
      figure.innerHTML = `
        <img src="${t.imageUrl}" alt="${t.templeName}" loading="lazy">
        <figcaption>
          <strong>${t.templeName}</strong><br>
          Location: ${t.location}<br>
          Dedicated: ${t.dedicated}<br>
          Area: ${t.area.toLocaleString()} sq ft
        </figcaption>
      `;
      gallery.appendChild(figure);
    });
  }

  function filterTemples(type) {
    let filtered = temples;
    switch(type) {
      case 'old':
        filtered = temples.filter(t => parseInt(t.dedicated.split(',')[0]) < 1900);
        break;
      case 'new':
        filtered = temples.filter(t => parseInt(t.dedicated.split(',')[0]) > 2000);
        break;
      case 'large':
        filtered = temples.filter(t => t.area > 90000);
        break;
      case 'small':
        filtered = temples.filter(t => t.area < 10000);
        break;
      default:
        filtered = temples;
    }
    renderTemples(filtered);
  }

  nav.addEventListener('click', e => {
    if(e.target.matches('a[data-filter]')) {
      e.preventDefault();
      const filter = e.target.dataset.filter;
      filterTemples(filter);
    }
  });

  renderTemples(temples);
});
