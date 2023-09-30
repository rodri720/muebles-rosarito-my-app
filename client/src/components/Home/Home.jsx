import React, { useEffect, useState } from 'react';
import './Home.css'; // Importa un archivo CSS para los estilos
import hamacaxlImage from '../images/hamacaxl.png'; // Importa la imagen
import cuadrosMacetaImage from '../images/cuadrosMaceta.png';
import reposerasxlImage from '../images/reposerasxl.png';
import sillonesxlImage from '../images/sillonesxl.png';
import camastrosxlImage from '../images/camastrosxl.png';
import hamacaTImage from '../images/hamacaT.png';
import reposeraDImage from '../images/reposeraD.png';
import sillonfullImage from '../images/sillonfull.png';
import { Link } from 'react-router-dom';
function Home() {
  const [photos, setPhotos] = useState([]);
  const [showLandingPage, setShowLandingPage] = useState(false);

  // Supongamos que tienes un array de objetos con URL de fotos y texto
  const photoData = [
    { image: hamacaxlImage, text: 'hamaca para dos personas sin techo peso maximo 300kg con tratamiento para el exterior y cadenas ' },
    { image: cuadrosMacetaImage, text: 'Cuadros Maceta para pared maximo cinco canteros de eucaliptus y con tratamiento para la humedad' },
    { image: reposerasxlImage, text: 'Reposeras XL de eucaliptus largo:1.70 ancho:0.65 son fijas con mesa ratonera de regalo' },
    { image: sillonesxlImage, text: 'Sillones XL de eucaliptus excelente calidad sillon grande:largo:1.80 ancho:0.80 sillon chico:0.80 x 0.80 con mesa de regalo' },
    { image: camastrosxlImage, text: 'Camastros XL de eucaliptus con mesa de regalo largo:1.80 ancho:0.60 dos posisiones ' },
    { image: hamacaTImage, text: 'Hamaca con techo para dos personas largo: 1.80 ancho: 1.50 altura:1.70 canteros al medio y para apoyar vasos al costado' },
    { image: reposeraDImage, text: 'Juego de reposeras con deck de eucaliptus con tratamiento al aceite para la humedad' },
    { image: sillonfullImage, text: 'glorieta de verano la mejor excelente calidad con canteros techo y parrilla para enrredaderas' },
    // Puedes agregar más fotos aquí
  ];

  useEffect(() => {
    // Simulamos una solicitud para cargar las fotos (esto podría ser una solicitud HTTP real)
    setTimeout(() => {
      setPhotos(photoData);
    }, 1000); // Espera 1 segundo antes de cargar los datos (puedes ajustar esto)
  }, []);

  

  return (
    <div className="home-container">
      <h1 className="title">Bienvenidos a Muebles Rosarito</h1>
      
      <Link to='/'>volver a la pagina de inicio</Link>
      <div className="spacer"></div> {/* Espacio entre el h1 y las fotos */}
      <div className="photo-container">
        <div className="left-column margin-left:0">
          {photos.slice(0, 4).map((photoItem, index) => (
            <div key={index} className="photo-item">
              <div className="image-container">
                <img src={photoItem.image} alt={`Foto ${index}`} className="photo" />
              </div>
              <p className="photo-text">{photoItem.text}</p>
            </div>
          ))}
        </div>
        <div className="centered-column">
          {photos.slice(4).map((photoItem, index) => (
            <div key={index} className="photo-item">
              <div className="image-container">
                <img src={photoItem.image} alt={`Foto ${index + 4}`} className="photo" />
              </div>
              <p className="photo-text">{photoItem.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
