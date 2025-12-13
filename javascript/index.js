// Translations
const translations = {
  es: {
        nav: {
          home: "Inicio",
          about: "Acerca de",
          experience: "Experiencia",
          projects: "Proyectos",
          contact: "Contacto"
        },
        hero: {
          title: "Desarrollador Fullstack",
          description: "Hola, Soy Pablo - Desarrollador Fullstack desarrollo de tecnologías web y mobile modernas.",
          viewProjects: "Ver Proyectos",
          downloadCV: "Descargar CV"
        },
        about: {
          title: "Acerca de Mí",
          description: "Desarrollador FullStack con mas de 9 años de experiencia profesional como desarrollador de software, trabaje en una variedad de proyectos y tecnologias tanto en el backend, frontend y mobile adaptandome a diferentes retos y arquitecturas.",
          skillsTitle: "Habilidades"
        },
        experience: {
          title: "Experiencia",
          q4tech: "Q4Tech",
          q4techRole: "Analista de programación • Sep 2015 – Mar 2025 (9 años 7 meses)",
          q4techDesc: "Desarrollo de software con Microsoft .NET (Visual Studio 2010, SQL Server 2008). Desarrollo mobile con Android y React Native. Desarrollo de WebApps utilizando AngularJS.",
          qsolutions: "QSolutions S.A",
          qsolutionsRole: "Programador • Mayo 2014 – Julio 2014 (3 meses)",
          qsolutionsDesc: "Desarrollo de aplicaciones web y móviles.",
          accenture: "Accenture",
          accentureRole: "Programmer • Oct 2013 – Abr 2014 (7 meses)",
          accentureDesc: "Desarrollo de aplicaciones web para clientes corporativos en Buenos Aires.",
          tenaris: "Tenaris (Proyecto CCR)",
          tenariRole: "Programador",
          tenarisDesc: "Desarrollo con ASP MVC 4, MVVM (Knockout.js) y Microsoft Dynamics.",
          publishing: "Proyecto Publishing 2.0 / CIO Content Apps",
          publishingRole: "Programmer • Oct 2011 – Oct 2013 (2 años 1 mes)",
          publishingDesc: "Creación y mantenimiento de sitios web con SharePoint 2007."
        },
        projects: {
          title: "Proyectos",
          viewGallery: "Ver Galería",
          dotnet: "Soluciones empresariales robustas usando .NET Framework con enfoque en escalabilidad y rendimiento.",
          web: "Creacion de aplicaciones web responsivas e interactivas con frameworks modernos con implementacion de diseño ui/ux",
          react: "Creacion de aplicaciones web de alto rendimiento construidas con react.js y gestion de estados moderno, asi tambien utilizacion de react native para el desarrollo de apps mobile.",
          angular: "Creacion de aplicaciones empresariales construidas con el framework Angular y TypeScript, utilizo varias versiones de angular desde angular.js hasta angular20+",
          python: "Creacion de servicios backend y scripts de automatizacion construidos con python, utilizando entre otros frameworks como : FastApi, Django, Flask",
          go: "Microservicios de alto rendimiento construidos con el lenguaje Go.",
          flutter: "Creacion de aplicaciones moviles multiplataforma construidas con el framework Flutter. Utilizando patrones de diseño y arquitecturas limpias.",
          node: "Creacion de aplicaciones backend utilizando el framework Express.js + mongoDB, asi como creacion de CLI en node."
        },
        projectGit: {
          titleLink: "Explore el codigo fuente, la documentacion y la estructura del proyecto."
        },
        contact: {
          title: "Contactarme",
          name: "Nombre",
          email: "Correo Electrónico",
          message: "Mensaje",
          send: "Enviar Mensaje"
        },
        footer: "© 2025 Pablo Taddei — Desarrollador Fullstack"
  },
  en: {
        nav: {
          home: "Home",
          about: "About",
          experience: "Experience",
          projects: "Projects",
          contact: "Contact"
        },
        hero: {
          title: "Fullstack Developer",
          description: "Hello, I'm Pablo - Fullstack Developer specializing in modern web and mobile technologies.",
          viewProjects: "View Projects",
          downloadCV: "Download CV"
        },
        about: {
          title: "About Me",
          description: "Full Stack Developer with over 9 years of professional experience as a software developer, I have worked on a variety of projects and technologies in backend, frontend and mobile, adapting to different challenges and architectures.",
          skillsTitle: "Skills"
        },
        experience: {
          title: "Experience",
          q4tech: "Q4Tech",
          q4techRole: "Analista de programación • Sep 2015 – Mar 2025 (9 years 7 months)",
          q4techDesc: "Software development with Microsoft .NET (Visual Studio 2010, SQL Server 2008).<br>Mobile development with Android and React Native.<br>WebApps development using AngularJS.",
          qsolutions: "QSolutions S.A",
          qsolutionsRole: "Programmer • May 2014 – July 2014 (3 months)",
          qsolutionsDesc: "Web and mobile application development.",
          accenture: "Accenture",
          accentureRole: "Programmer • Oct 2013 – Apr 2014 (7 months)",
          accentureDesc: "Web application development for corporate clients in Buenos Aires.",
          tenaris: "Tenaris (CCR Project)",
          tenariRole: "Programmer",
          tenarisDesc: "Development with ASP MVC 4, MVVM (Knockout.js) and Microsoft Dynamics.",
          publishing: "Publishing 2.0 Project / CIO Content Apps",
          publishingRole: "Programmer • Oct 2011 – Oct 2013 (2 years 1 month)",
          publishingDesc: "Creation and maintenance of websites with SharePoint 2007."
        },
        projects: {
          title: "Projects",
          viewGallery: "View Gallery",
          dotnet: "Robust enterprise solutions using the .NET Framework with a focus on scalability and performance.",
          web: "Creation of responsive and interactive web applications with modern frameworks and UI/UX design implementation.",
          react: "Creation of high-performance web applications built with React.js and modern state management, as well as the use of React Native for mobile app development.",
          angular: "Creation of enterprise applications built with the Angular framework and TypeScript. I use various versions of Angular, from Angular.js to Angular 20+.",
          python: "Creation of backend services and automation scripts built with Python, using frameworks such as FastApi, Django, and Flask.",
          go: "High-performance microservices built with the Go language.",
          flutter: "Creation of cross-platform mobile applications built with the Flutter framework. Using clean design patterns and architectures.",
          node: "Creation of backend applications using the Express.js framework and MongoDB as well as CLI creation in Node."
        },
        projectGit: {
          titleLink: "Explore the source code, documentation, and project structure."
        },
        contact: {
          title: "Contact Me",
          name: "Name",
          email: "Email",
          message: "Message",
          send: "Send Message"
        },
        footer: "© 2025 Pablo Taddei — Fullstack Developer"
  }
};

let currentLang = localStorage.getItem('language') || 'es';

function t(key) {
  const keys = key.split('.');
  let value = translations[currentLang];
  for (let k of keys) {
    value = value[k];
  }
  return value;
}

function updatePageLanguage() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    el.textContent = t(key);
  });

  // Update hero section
  document.querySelector('h2').textContent = t('hero.title');
  document.querySelectorAll('.hero-desc')[0].textContent = t('hero.description');
  document.querySelectorAll('[href="#projects"]')[0].textContent = t('hero.viewProjects');
  document.querySelectorAll('[href="/files/Pablo Taddei.pdf"]')[0].textContent = t('hero.downloadCV');

  // Update about section
  document.querySelectorAll('h3')[0].textContent = t('about.title');
  document.querySelectorAll('.about-desc')[0].textContent = t('about.description');
  document.querySelectorAll('h4')[0].textContent = t('about.skillsTitle');

  // Update experience section
  document.querySelectorAll('h3')[1].textContent = t('experience.title');

  // Update contact section
  document.querySelectorAll('h3')[2].textContent = t('contact.title');
  document.querySelectorAll('input[placeholder]')[0].placeholder = t('contact.name');
  document.querySelectorAll('input[placeholder]')[1].placeholder = t('contact.email');
  document.querySelectorAll('textarea')[0].placeholder = t('contact.message');
  document.querySelectorAll('button')[document.querySelectorAll('button').length - 1].textContent = t('contact.send');

  // Update footer
  document.querySelector('footer').textContent = t('footer.message');

  localStorage.setItem('language', currentLang);
}

document.getElementById('langEs').addEventListener('click', () => {
  currentLang = 'es';
  document.getElementById('langEs').classList.add('bg-blue-600', 'text-white');
  document.getElementById('langEs').classList.remove('text-gray-600', 'border', 'border-gray-300');
  document.getElementById('langEn').classList.remove('bg-blue-600', 'text-white');
  document.getElementById('langEn').classList.add('text-gray-600', 'border', 'border-gray-300');
  updatePageLanguage();
});

document.getElementById('langEn').addEventListener('click', () => {
  currentLang = 'en';
  document.getElementById('langEn').classList.add('bg-blue-600', 'text-white');
  document.getElementById('langEn').classList.remove('text-gray-600', 'border', 'border-gray-300');
  document.getElementById('langEs').classList.remove('bg-blue-600', 'text-white');
  document.getElementById('langEs').classList.add('text-gray-600', 'border', 'border-gray-300');
  updatePageLanguage();
});

document.addEventListener('DOMContentLoaded', () => {
  if (currentLang === 'en') {
    document.getElementById('langEn').click();
  } else {
    document.getElementById('langEs').click();
  }
  updatePageLanguage();
});

function smoothScroll(target, duration = 1000) {
  const startPosition = window.pageYOffset;
  const element = document.querySelector(target);
  if (!element) return;
      
  const endPosition = element.offsetTop - 80;
  const distance = endPosition - startPosition;
  let start = null;

  window.requestAnimationFrame(function step(timestamp) {
    if (!start) start = timestamp;
    const progress = (timestamp - start) / duration;

    if (progress < 1) {
      window.scrollTo(0, startPosition + distance * easeInOutQuad(progress));
      window.requestAnimationFrame(step);
    } else {
      window.scrollTo(0, endPosition);
    }
  });
}

function easeInOutQuad(t) {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}

document.addEventListener('DOMContentLoaded', function() {
  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      smoothScroll(this.getAttribute('href'));
    });
  });

  // Modal functionality
  const modal = document.getElementById('imageModal');
  const closeBtn = document.querySelector('.close-btn');
  const modalImage = document.getElementById('modalImage');
  const modalTitle = document.getElementById('modalTitle');
  let currentGallery = [];
  let currentIndex = 0;

  document.querySelectorAll('.view-project').forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      const imagesJson = this.getAttribute('data-images');
          
      if (imagesJson) {
        currentGallery = JSON.parse(imagesJson);
        currentIndex = 0;
        openModal(currentIndex);
      }
    });
  });

  function openModal(index) {
    currentIndex = index;
    const item = currentGallery[currentIndex];
    modalImage.src = item.image;
    modalTitle.textContent = item.title;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
  }

  closeBtn.addEventListener('click', closeModal);

  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      closeModal();
    }
  });

  document.querySelector('.modal-nav.prev').addEventListener('click', function() {
    currentIndex = (currentIndex - 1 + currentGallery.length) % currentGallery.length;
    openModal(currentIndex);
  });

  document.querySelector('.modal-nav.next').addEventListener('click', function() {
    currentIndex = (currentIndex + 1) % currentGallery.length;
    openModal(currentIndex);
  });

  document.addEventListener('keydown', function(e) {
    if (modal.classList.contains('active')) {
      if (e.key === 'ArrowLeft') currentIndex = (currentIndex - 1 + currentGallery.length) % currentGallery.length;
      if (e.key === 'ArrowRight') currentIndex = (currentIndex + 1) % currentGallery.length;
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') openModal(currentIndex);
    }
  });
});