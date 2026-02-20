import React from 'react';
import { useLang } from '../context/LangContext';
import '../assets/css/Carne.css';
import imagenCarne from '../assets/carnet-jove.png';
import { abrirCarnetJove } from '../utils/links';

const Carne = () => {
  const { t } = useLang();

  const ventajas = [
    { titleKey: 'carne.v1Title', descKey: 'carne.v1Desc', icon: '🍿' },
    { titleKey: 'carne.v2Title', descKey: 'carne.v2Desc', icon: '🍽️' },
    { titleKey: 'carne.v3Title', descKey: 'carne.v3Desc', icon: '🏃' },
    { titleKey: 'carne.v4Title', descKey: 'carne.v4Desc', icon: '🚌' },
    { titleKey: 'carne.v5Title', descKey: 'carne.v5Desc', icon: '💡' },
    { titleKey: 'carne.v6Title', descKey: 'carne.v6Desc', icon: '🏛️' },
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
          <h2 className="title-blue">{t('carne.titulo')}</h2>
          <div className="carnet-img-container">
            <img src={imagenCarne} alt="Carnet Jove" className="carnet-main-image" />
          </div>
          <button className="btn-solicitar" onClick={abrirCarnetJove}>{t('carne.solicitar')}</button>
          <p className="small-text">{t('carne.smallText')}</p>
        </aside>

        <section className="content-ventajas">
          <h2 className="title-blue">{t('carne.ventajas')}</h2>
          <p className="subtitle">{t('carne.subtitle')}</p>
          <div className="ventajas-grid">
            {ventajas.map((v, index) => (
              <div key={index} className="card-ventaja">
                <span className="icon-ventaja">{v.icon}</span>
                <h3>{t(v.titleKey)}</h3>
                <p>{t(v.descKey)}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Carne;