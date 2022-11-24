import React from 'react';
import Header from '../components/navbar/Header';
import téléchargement from '../assets/téléchargement.jpg';
import immo from '../assets/immo.jpg';
import tech from '../assets/tech.jpg';
import '../css/home.css';
import Caption from '../components/caption/caption';
import Equipe from '../components/equipe/Equipe';
import Footer from '../components/footer/Footer';

const Home = () => {
    return (
        <div>
            <Header/>
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img src={téléchargement} className="d-block w-100 img" alt="..."/>
                </div>
                <div className="carousel-item">
                <img src={immo} className="d-block w-100 img" alt="..."/>
                </div>
                <div className="carousel-item">
                <img src={tech} className="d-block w-100 img" alt="..."/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            </div>
            <Caption/>
            <Equipe/>
            <Footer/>
        </div>
    );
};

export default Home;