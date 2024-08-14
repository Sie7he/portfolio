import { useEffect, useState } from 'react';
import './navbar.css'


export const Navbar = () => {
  let lastScrollTop = 0;
  const [activeIndex, setActiveIndex] = useState(0);

  const [active, setActive] = useState('inicio');

  const handleNavClick = (navItem) => {
    setActive(navItem);
  };

  useEffect(() => {
    const sections = document.querySelectorAll('section'); // Asegúrate de que tus secciones tengan la etiqueta <section>

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          console.log(entry)
          if (entry.isIntersecting) {
            setActive(entry.target.id); // Usa el id de la sección como el texto de navegación activo
          }
        });
      },
      { threshold: 0.7 } // Ajusta el valor del umbral según prefieras
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  const nav = [{id: 1, text:'inicio'}, {id: 2, text:'portafolio'}, {id: 3, text: 'habilidades'}, {id: 4, text: 'contacto'}]

  return (
    <header className='flex justify-center relative' >
      <nav id='navbar' >

        {nav.map( item => (
        <a
        className={`nav-item ${active === item.text ? 'active' : ''}`}
        onClick={() => handleNavClick(item.text)}
        href={`/#${item.text}`}
        key={item.id}
        >
          {item.text}
        </a>
        ))}
       
      </nav>
    </header>
  );
};
