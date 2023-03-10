import './navbarblog.css';

export const NavBarBlog = () => {
    return (
        <header>
        <div id="sticker" className="header-area">
          <div className="container1">
            <div className="row">
  <nav className="banner">
  <a className="navbar-logo" href="#">
            <h1 className="title-first"><span>F</span>resh <span>S</span>mile <span>C</span>mills</h1>
          </a>
          <div className="nav-bar">
        <ul className='header'>
          <Link to="/"><li>Inicio</li></Link>
          <Link to="/"><li>Nosotros</li></Link>
          <Link to="/"><li>Procedimientos</li></Link>
          <Link to="/"><li>Clinica</li></Link>
          <Link to="/"><li>Promociones</li></Link>
          <Link to="/Blog"><li>Blog</li></Link>
          <Link to="/"><li>Contacto</li></Link>
          </ul>
          </div>
        </nav>
        </div>
        </div>
      </div>
    </header>
    )
}