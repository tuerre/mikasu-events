const menuFlotanteCard = document.getElementById('menuFlotanteCard');
const closeMenuBtn = document.getElementById('closeMenuBtn');
const menuContentBento = document.getElementById('menuContentBento');

const bocinaMenuOpenIMG = document.getElementById('bocinaMenuOpenIMG');

const wsrPorTVMenuOpenIMG = document.getElementById('wsrPorTVMenuOpenIMG');

const mothersDayMenuOpenIMG = document.getElementById('mothersDayMenuOpenIMG');

const estadoCivilMenuOpenIMG = document.getElementById('estadoCivilMenuOpenIMG');

const btnSupport = document.getElementById('btnSupport'); 

function getScrollbarWidth() {
  return window.innerWidth - document.documentElement.clientWidth;
}

bocinaMenuOpenIMG.addEventListener('click', () => {
  menuFlotanteCard.style.display = 'flex';
  // document.body.style.overflowY = 'hidden';
  const scrollWidth = getScrollbarWidth();
  document.body.style.overflowY = 'hidden';
  document.body.style.paddingRight = `${scrollWidth}px`;

  menuContentBento.innerHTML = `
  <div class="grid">
                        <div class="item1">
                            <img src="/src/bocina1.webp" alt="Imagen de una Bocina">
                        </div>
                        <div class="item2">
                            <img src="/src/bocina2.webp" alt="Imagen de una Bocina">
                        </div>
                        <div class="item3">
                            <img src="/src/bocina3.webp" alt="Imagen de una Bocina">
                        </div>
                        <div class="item4">
                            <img src="/src/bocina4.webp" alt="Imagen de una Bocina">
                        </div>
                    </div>
`;

});

wsrPorTVMenuOpenIMG.addEventListener('click', () => {
  menuFlotanteCard.style.display = 'flex';
  const scrollWidth = getScrollbarWidth();
  document.body.style.overflowY = 'hidden';
  document.body.style.paddingRight = `${scrollWidth}px`;

  menuContentBento.innerHTML = `
                        <div class="iframeYoutube">
            <iframe id="wstPorTVVideoVideo"
            style="border-radius: 10px;"
            src="https://www.youtube.com/embed/uCoBv85xeVE?si=rAsq2DWaqAqYd1NI" 
            title="Wilson Soto Roa por Televisión" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" 
            allowfullscreen></iframe>
                    </div>
`;

  const wstPorTVVideoVideo = document.getElementById('wstPorTVVideoVideo');
  if (wstPorTVVideoVideo) {
    wstPorTVVideoVideo.pause();
  }

});

mothersDayMenuOpenIMG.addEventListener('click', () => {
  menuFlotanteCard.style.display = 'flex';
  const scrollWidth = getScrollbarWidth();
  document.body.style.overflowY = 'hidden';
  document.body.style.paddingRight = `${scrollWidth}px`;

  menuContentBento.innerHTML = `
  <div class="mothersDayVideo">
            <video id="motherDayVideoVideo" src="/src/diaDeLasMadresMARIACHIPUROMEXICORD.mp4" autoplay controls style="border-radius: 10px;">
        </div>
`;

});

estadoCivilMenuOpenIMG.addEventListener('click', () => {
  menuFlotanteCard.style.display = 'flex';
  const scrollWidth = getScrollbarWidth();
  document.body.style.overflowY = 'hidden';
  document.body.style.paddingRight = `${scrollWidth}px`;

  menuContentBento.innerHTML = `
                        <div class="iframeYoutube">
            <iframe
            style="border-radius: 10px;"
            width="960px" 
            height="700px" 
            src="https://www.youtube.com/embed/pll56P4Xxpk?si=qUTW9uzaG6GaqBh1" 
            title="Estado civil - by MPM" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" 
            allowfullscreen></iframe>
                    </div>
`;

});

closeMenuBtn.addEventListener('click', () => {
  menuFlotanteCard.style.display = 'none';
  document.body.style.overflowY = 'scroll';
  document.body.style.paddingRight = '';

  // Pausar el video si está presente en el DOM
  const motherDayVideoVideo = document.getElementById('motherDayVideoVideo');
  if (motherDayVideoVideo) {
    motherDayVideoVideo.pause();
  }

  // Detener el iframe de YouTube si está presente en el DOM
  const iframeYoutube = document.querySelector('.iframeYoutube iframe');
  if (iframeYoutube) {
    const iframeSrc = iframeYoutube.src;
    iframeYoutube.src = '';
    iframeYoutube.src = iframeSrc;
  }
});

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    closeMenuBtn.click();
  }
});

// clock section

const targetDate = new Date();
targetDate.setHours(targetDate.getHours() + 5);

function getTimeSegmentElements(segmentElement) {
  const segmentDisplay = segmentElement.querySelector(
    '.segment-display'
  );
  const segmentDisplayTop = segmentDisplay.querySelector(
    '.segment-display__top'
  );
  const segmentDisplayBottom = segmentDisplay.querySelector(
    '.segment-display__bottom'
  );

  const segmentOverlay = segmentDisplay.querySelector(
    '.segment-overlay'
  );
  const segmentOverlayTop = segmentOverlay.querySelector(
    '.segment-overlay__top'
  );
  const segmentOverlayBottom = segmentOverlay.querySelector(
    '.segment-overlay__bottom'
  );

  return {
    segmentDisplayTop,
    segmentDisplayBottom,
    segmentOverlay,
    segmentOverlayTop,
    segmentOverlayBottom,
  };
}

function updateSegmentValues(
  displayElement,
  overlayElement,
  value
) {
  displayElement.textContent = value;
  overlayElement.textContent = value;
}

function updateTimeSegment(segmentElement, timeValue) {
  const segmentElements =
    getTimeSegmentElements(segmentElement);

  if (
    parseInt(
      segmentElements.segmentDisplayTop.textContent,
      10
    ) === timeValue
  ) {
    return;
  }

  segmentElements.segmentOverlay.classList.add('flip');

  updateSegmentValues(
    segmentElements.segmentDisplayTop,
    segmentElements.segmentOverlayBottom,
    timeValue
  );

  function finishAnimation() {
    segmentElements.segmentOverlay.classList.remove('flip');
    updateSegmentValues(
      segmentElements.segmentDisplayBottom,
      segmentElements.segmentOverlayTop,
      timeValue
    );

    this.removeEventListener(
      'animationend',
      finishAnimation
    );
  }

  segmentElements.segmentOverlay.addEventListener(
    'animationend',
    finishAnimation
  );
}

function updateTimeSection(sectionID, timeValue) {
  const firstNumber = Math.floor(timeValue / 10) || 0;
  const secondNumber = timeValue % 10 || 0;
  const sectionElement = document.getElementById(sectionID);
  const timeSegments =
    sectionElement.querySelectorAll('.time-segment');

  updateTimeSegment(timeSegments[0], firstNumber);
  updateTimeSegment(timeSegments[1], secondNumber);
}

function getTimeRemaining(targetDateTime) {
  const nowTime = Date.now();
  const complete = nowTime >= targetDateTime;

  if (complete) {
    return {
      complete,
      seconds: 0,
      minutes: 0,
      hours: 0,
    };
  }

  const secondsRemaining = Math.floor(
    (targetDateTime - nowTime) / 1000
  );
  const hours = Math.floor(secondsRemaining / 60 / 60);
  const minutes =
    Math.floor(secondsRemaining / 60) - hours * 60;
  const seconds = secondsRemaining % 60;

  return {
    complete,
    seconds,
    minutes,
    hours,
  };
}

function updateAllSegments() {
  const timeRemainingBits = getTimeRemaining(
    new Date(targetDate).getTime()
  );

  updateTimeSection('seconds', timeRemainingBits.seconds);
  updateTimeSection('minutes', timeRemainingBits.minutes);
  updateTimeSection('hours', timeRemainingBits.hours);

  return timeRemainingBits.complete;
}

const countdownTimer = setInterval(() => {
  const isComplete = updateAllSegments();

  if (isComplete) {
    clearInterval(countdownTimer);
  }
}, 1000);

updateAllSegments();


document.addEventListener('DOMContentLoaded', function () {
  // Datos de los testimonios
  const testimonials = [
  {
    text: '"Loco, lo de Mikasu fue otra liga. Ese mariachi con Wilson alante fue una maldita movie, hasta el vecino bajó a grabar."',
    name: 'Carlos Rodríguez',
    position: 'Diseñador Web'
  },
  {
    text: '"Yo no sé qué brujería usan, pero Mikasu prendió el coro. Las bocinas, el mariachi... to’ el mundo gozando heavy."',
    name: 'Ana Castillo',
    position: 'Community Manager'
  },
  {
    text: '"Muchacho, cuando Wilson empezó a cantar con ese mariachi fue pa’ llorar. Mikasu se la comió en mi cumpleaños."',
    name: 'Pedro Mejía',
    position: 'Analista de Datos'
  },
  {
    text: '"Mikasu llegó, montó sus bocinas, afinó su vaina y ya tú sabes... Wilson soltó una ranchera y la doña casi se desmaya."',
    name: 'Laura Peña',
    position: 'Especialista en UX'
  },
  {
    text: '"Yo dije: “Esto va a estar jevi”, pero Mikasu me dejó con la boca abierta. Ese show fue una vaina fuera de serie."',
    name: 'Luis García',
    position: 'Encargado de Sistemas'
  },
  {
    text: '"Tú no has vivido na’ si no has tenido a Mikasu en tu party. Los mariachis, el sonido y Wilson... una bomba."',
    name: 'Laura Sánchez',
    position: 'Diseñadora UX/UI'
  },
  {
    text: '"Oye, eso fue fuego puro. Mikasu montó su equipo y Wilson salió cantando como si fuera Vicente Fernández. El coro encendío."',
    name: 'Manuel Jiménez',
    position: 'Ingeniero de Software'
  },
  {
    text: '"Yo reservé a Mikasu pa’ una sorpresa y terminamos armando una fiesta. El mariachi se robó el show, literal."',
    name: 'Ana Martínez',
    position: 'Gerente de Proyectos'
  },
  {
    text: '"Mikasu tiene ese toque que uno busca: flow, puntualidad y un show que no se olvida. Wilson canta con el alma, de verdad."',
    name: 'Yesenia Rosario',
    position: 'Asistente de Marketing'
  },
  {
    text: '"Esa gente no juega. Llegaron, montaron to’ en un dos por tres y cuando sonó el primer acorde, to’ el mundo en para."',
    name: 'Elena Torres',
    position: 'CEO'
  }
];


  const sliderElement = document.getElementById('testimonialSlider');
  const prevButton = document.querySelector('.prev-button');
  const nextButton = document.querySelector('.next-button');

  // Función para crear una tarjeta de testimonio
  function createTestimonialCard(testimonial) {
    const card = document.createElement('div');
    card.className = 'testimonial-card';

    const stars = document.createElement('div');
    stars.className = 'stars';
    stars.innerHTML = '★★★★★';

    const text = document.createElement('p');
    text.className = 'testimonial-text';
    text.textContent = testimonial.text;

    const author = document.createElement('div');
    author.className = 'testimonial-author';

    const avatar = document.createElement('div');
    avatar.className = 'author-avatar';
    avatar.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" fill="white"/><path d="M12.0002 14.5C6.99016 14.5 2.91016 17.86 2.91016 22C2.91016 22.28 3.13016 22.5 3.41016 22.5H20.5902C20.8702 22.5 21.0902 22.28 21.0902 22C21.0902 17.86 17.0102 14.5 12.0002 14.5Z" fill="white"/></svg>';

    const info = document.createElement('div');
    info.className = 'author-info';

    const name = document.createElement('span');
    name.className = 'author-name';
    name.textContent = testimonial.name;

    const position = document.createElement('span');
    position.className = 'author-position';
    position.textContent = testimonial.position;

    info.appendChild(name);
    info.appendChild(position);

    author.appendChild(avatar);
    author.appendChild(info);

    card.appendChild(stars);
    card.appendChild(text);
    card.appendChild(author);

    return card;
  }

  // Inicializar el slider
  function initSlider() {
    // Limpiar el slider
    sliderElement.innerHTML = '';

    // Crear copias adicionales para el efecto infinito
    const allTestimonials = [...testimonials, ...testimonials, ...testimonials];

    // Agregar todas las tarjetas al slider
    allTestimonials.forEach(testimonial => {
      sliderElement.appendChild(createTestimonialCard(testimonial));
    });

    // Posicionar el slider en el segundo conjunto de tarjetas
    const cardWidth = document.querySelector('.testimonial-card').offsetWidth + 20; // Ancho + margen
    const offset = testimonials.length * cardWidth;
    sliderElement.style.transform = `translateX(-${offset}px)`;
  }

  // Variables para el control del slider
  let currentIndex = testimonials.length; // Comenzamos en el segundo conjunto
  let isTransitioning = false;

  // Función para mover el slider
  function moveSlider(direction) {
    if (isTransitioning) return;

    isTransitioning = true;
    const cardWidth = document.querySelector('.testimonial-card').offsetWidth + 20; // Ancho + margen

    if (direction === 'next') {
      currentIndex++;
    } else {
      currentIndex--;
    }

    // Aplicar la transición
    sliderElement.style.transition = 'transform 0.5s ease';
    sliderElement.style.transform = `translateX(-${currentIndex * cardWidth}px)`;

    // Verificar si necesitamos resetear la posición (efecto infinito)
    setTimeout(() => {
      if (currentIndex >= testimonials.length * 2) {
        // Si llegamos al final del segundo conjunto, volvemos al inicio del segundo conjunto
        currentIndex = testimonials.length;
        sliderElement.style.transition = 'none';
        sliderElement.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
      } else if (currentIndex <= 0) {
        // Si llegamos al inicio del primer conjunto, vamos al final del primer conjunto
        currentIndex = testimonials.length;
        sliderElement.style.transition = 'none';
        sliderElement.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
      }

      isTransitioning = false;
    }, 500);
  }

  // Event listeners para los botones
  prevButton.addEventListener('click', () => moveSlider('prev'));
  nextButton.addEventListener('click', () => moveSlider('next'));

  // Inicializar el slider
  initSlider();

  // Ajustar el slider cuando cambia el tamaño de la ventana
  window.addEventListener('resize', initSlider);
});

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contactForm');
  const inputs = form.querySelectorAll('input, textarea, select');

  // Validate on submit
  form.addEventListener('submit', function (e) {
    let isValid = true;

    inputs.forEach(input => {
      if (!input.value.trim()) {
        e.preventDefault();
        showError(input);
        isValid = false;
      } else {
        hideError(input);
      }
    });

    if (isValid) {
      alert('Formulario enviado correctamente!');
      form.reset();
    }
  });

  // Validate on blur
  inputs.forEach(input => {
    input.addEventListener('blur', function () {
      if (!this.value.trim()) {
        showError(this);
      } else {
        hideError(this);
      }
    });

    input.addEventListener('input', function () {
      if (this.value.trim()) {
        hideError(this);
      }
    });
  });

  function showError(input) {
    input.classList.add('error');
    const errorMessage = input.nextElementSibling;
    if (errorMessage && errorMessage.classList.contains('error-message')) {
      errorMessage.style.display = 'block';
    }
  }

  function hideError(input) {
    input.classList.remove('error');
    const errorMessage = input.nextElementSibling;
    if (errorMessage && errorMessage.classList.contains('error-message')) {
      errorMessage.style.display = 'none';
    }
  }
});

btnSupport.addEventListener('click', () => {
  alert('Para recibir ayuda escribenos al (+1 809-857-7000)');
});