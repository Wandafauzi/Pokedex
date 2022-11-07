import React from "react";
import "./Navbar.css";
import Logo from "../asset/pokemon.png";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-success bg-success w-100">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Pokesiiuuuuuuu
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="offcanvas offcanvas-end text-bg-success" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
                Pokesiiuuuuu
              </h5>
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li>
                  <img src={Logo} alt="" className="img-fluid" style={{ maxWidth: "80%" }} />
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Pokemon Aja
                  </a>
                  <ul className="dropdown-menu dropdown-menu-dark">
                    <li>
                      <a className="dropdown-item" href="#">
                        Semua Pokemon
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Kategori
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              <form className="d-flex mt-3" role="search">
                <input
                  className="form-control me-2"
                  // type="search"
                  // placeholder="Cari Dong"
                  // aria-label="Search"
                  // onChange={(event) => {
                  //   setSearch(`https://pokeapi.co/api/v2/pokemon/${event.target.value}`);
                  // }}
                />
                <button
                  className="btn btn-success"
                  // type="submit"
                  // onClick={() => {
                  //   setSearchUrl(search);
                  //   setSearchPokemon("render");
                  // }}
                >
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
