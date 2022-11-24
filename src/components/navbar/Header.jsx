import { NavLink } from 'react-router-dom';
import digi from '../../assets/digi.jpeg';

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className='logo'>
                    <img src={digi} alt="" />
                </div>
                <div className="container-fluid">
                    <NavLink className="navbar-brand" ></NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <NavLink className="nav-link active" aria-current="page" to={'/'}>Accueil</NavLink>
                        </li>
                        <li className="nav-item dropdown">
                        <NavLink className="nav-link dropdown-toggle" to={'/filiale'} id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Filieres
                        </NavLink>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><NavLink className="dropdown-item" to={'/'}>Immobilieres</NavLink></li>
                            <li><NavLink className="dropdown-item" to={'/'}>Evenementiel</NavLink></li>
                            
                            <li><NavLink className="dropdown-item" to={'/'}>I-Tech</NavLink></li>
                        </ul>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" to={'/contact'}>Nous contacter</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" to={'/somme'} tabindex="-1" aria-disabled="true">Qui sommes nous</NavLink>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;