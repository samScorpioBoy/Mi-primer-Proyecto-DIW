import React from 'react';
import '../assets/css/Carne.css';
import imagenCarne from '../assets/carnet-jove.png';
import { abrirCarnetJove } from '../utils/links';

const Carne = () => {
  const ventajas = [
    { title: 'Cines', desc: 'Obtén entre un 15% y 25% en tus funciones favoritas.', icon: '🍿' },
    { title: 'Restaurantes', desc: 'Descuentos y menús especiales en locales.', icon: '🍽️' },
    { title: 'Deportes', desc: 'Cuotas reducidas en gimnasios y pistas.', icon: '🏃' },
    { title: 'Transporte Mobilis 30', desc: 'Bono mensual a 14,90 € en la mobilis30.', icon: '🚌' },
    { title: 'Tecnología', desc: 'Ofertas en reparaciones y tiendas locales.', icon: '💡' },
    { title: 'Museos', desc: 'Hasta un 50% de descuento en la entrada.', icon: '🏛️' },
  ];

  return (
    <div className="carne-page">
      <div className="filter-buttons">
        <button className="btn-filter active">BURJASSOT</button>
        <button className="btn-filter blue">COMUNIDAD VALENCIANA</button>
        <button className="btn-filter yellow">UNIÓN EUROPEA</button>
      </div>

      <div className="main-layout">
        <aside className="sidebar-info">
          <h2 className="title-blue">CARNET JOVEN</h2>
          
          <div className="carnet-img-container">
            <img src={imagenCarne} alt="Carnet Jove" className="carnet-main-image" />
          </div>

          <button className="btn-solicitar" onClick={abrirCarnetJove}>SOLICITAR CARNET</button>
          <p className="small-text">
            ACCEDE A CIENTOS DE DESCUENTOS EN TIENDAS, TRANSPORTE, CINES Y MUCHO MÁS. 
            TU CARNET ES VÁLIDO EN BURJASSOT, EN LA COMUNITAT Y POR TODA EUROPA. 
            SI TIENES ENTRE 14 Y 30 AÑOS, ¡ES PARA TI!
          </p>
        </aside>

        <section className="content-ventajas">
          <h2 className="title-blue">VENTAJAS</h2>
          <p className="subtitle">Más planes, menos gasto. Accede a ventajas exclusivas para ti.</p>
          
          <div className="ventajas-grid">
            {ventajas.map((v, index) => (
              <div key={index} className="card-ventaja">
                <span className="icon-ventaja">{v.icon}</span>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Carne;