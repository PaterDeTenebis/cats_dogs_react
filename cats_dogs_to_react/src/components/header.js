import React from 'react';

/*Illustrations*/ 

import logo from '../img/logo.png';

function Header () {
    return (
        <section className="header">
        <div className="container-fluid">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#"><img className="logo" src={logo} alt="Logo"></img></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
              
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                      <a className="nav-link" href="#">Контакты</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Помощь</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">F.A.Q</a>
                      </li>
                    
                  </ul>
                  <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-1" type="search" placeholder="Введите запрос..." aria-label="Search"></input>
                    <button className="btn btn-outline-warning my-2 my-sm-0 mr-sm-2" type="submit">Поиск</button>
                    <button className="btn btn_reg my-2 my-sm-0" type="submit">Регистрация/Войти</button>
                  </form>
                </div>
              </nav>
          </div>
      </section>
    );
}

export default Header;