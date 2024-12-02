// src/components/MainPage/MainPage.jsx
import Header from '../Header/Header';
import Menu from '../Nav/Menu';
import ImageCarousel from '../Main/ImageCarousel';
import Section from '../Section/Section';
import Section2 from '../Section2/Section2';
import Section3 from '../Section3/Section3';
import Section4 from '../Section4/Section4';
import Section5 from '../Section5/Section5';
import Section6 from '../Section6/Section6';
import Section7 from '../Section7/Section7';
import Section8 from '../Section8/Section8';
import SubirTopButton from '../BotonSubir/Subir';
import Footer from '../Footer/Footer';

const MainPage = () => {
  const images = [
    '/imgCarousel/Banner+Web-v05.png',
    '/imgCarousel/bicentenario.jpg',
    '/imgCarousel/ofertabatman.jpg',
    '/imgCarousel/ofertaelectrodomesticos.jpg',
    '/imgCarousel/ofertaescritorio.jpg',
    '/imgCarousel/ofertaimpresora.jpg',
    '/imgCarousel/ofertamonster.jpg',
    '/imgCarousel/ofertatablets.jpg'
  ];
  const titleImage = '/imgTitulo/juguetes.png';
  const sectionImages = [
    '/imgjuguetes/casadehielo.jpg',
    '/imgjuguetes/casademuñecas.jpg',
    '/imgjuguetes/casafamiliar.jpg'
  ];
  const titleImage2 = '/imgTitulo/tech.png';
  const section2Images = ['/imgTech/consola.png'];
  const titleImage3 = '/imgTitulo/electrohogar.png';
  const section3Images = ['/imgelectro/Cocinagas.jpg', '/imgelectro/Terma.jpg', '/imgelectro/Rapiducha.jpg'];
  const titleImage4 = '/imgTitulo/arte.png';
  const section4Images = ['/imgArte/acrilico.jpg', '/imgArte/iniciacion.jpg', '/imgArte/tempera.jpg'];
  const titleImage5 = '/imgTitulo/bebe.png';
  const section5Images = ['/imgBebe/cuna.jpg', '/imgBebe/silla.jpg', '/imgBebe/scooter.jpg'];
  const titleImage6 = '/imgTitulo/muebles.png';
  const section6Images = ['/imgMuebles/ropero.jpg', '/imgMuebles/camabox.jpg', '/imgMuebles/ropero.jpg'];
  const titleImage7 = '/imgTitulo/cuidado.png';
  const section7Images = ['/imgCuidado/trotadora.jpg'];
  const titleImage8 = '/imgTitulo/promociones.png';
  const section8Images = ['/imgCuidado/trotadora.jpg'];

  return (
    <div>
      <Header />
      <Menu />
      <ImageCarousel images={images} />
      <Section titleImage={titleImage} images={sectionImages} />
      <Section2 titleImage={titleImage2} images={section2Images} />
      <Section3 titleImage={titleImage3} images={section3Images} />
      <Section4 titleImage={titleImage4} images={section4Images} />
      <Section5 titleImage={titleImage5} images={section5Images} />
      <Section6 titleImage={titleImage6} images={section6Images} />
      <Section7 titleImage={titleImage7} images={section7Images} />
      <Section8 titleImage={titleImage8} images={section8Images} />
      <SubirTopButton />
      <Footer />
    </div>
  );
};

export default MainPage;

