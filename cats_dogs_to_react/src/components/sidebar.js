import React from 'react';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

import $ from 'jquery';

function Sidebar () {
  $('.sb_close').click(function(){
    $('.sidebar').removeClass('sidebar_active');
  });

    return (
        <div className="sidebar">
          <button className="sb_close"><FontAwesomeIcon icon={faChevronLeft} /></button>
            <a href="#">Рубрика: Ищу дом</a>
            <a href="#">Рубрика: Найден питомец</a>
            <a href="#">Рубрика: Пропал питомец</a>
            <p>
              <a className="btn btn-outline-warning" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                Фильтры:
              </a>
            </p>
            <div className="collapse" id="collapseExample">
              <div className="card card-body">
                <span>Город:</span>
                <input className="form-control mr-sm-1" type="search" placeholder="Введите запрос..." aria-label="Search"></input>
                <span>Вид:</span>
                <input className="form-control mr-sm-1" type="search" placeholder="Введите запрос..." aria-label="Search"></input>
                <span>Порода:</span>
                <input className="form-control mr-sm-1" type="search" placeholder="Введите запрос..." aria-label="Search"></input>
              
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"></input>
                  <label className="form-check-label" for="inlineCheckbox1">Прививки</label>
                </div>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"></input>
                  <label className="form-check-label" for="inlineCheckbox2">Документы</label>
                </div>
                <button className="btn btn-warning my-2 my-sm-0" type="submit">Применить</button>
              </div>
            </div>
            <p>
              <a className="btn btn-outline-warning" type="button" data-toggle="collapse" data-target="#collapseExample1" aria-expanded="false" aria-controls="collapseExample1">
                Полезные контакты:
              </a>
            </p>
            <div className="collapse" id="collapseExample1">
              <div className="card card-body">
                <strong>Приют для животных "Сириус"</strong>
                <span>Тел.:+38 093 193 40 69 <br></br>
                  с 9:00 до 19:00. 
                </span>
                <span><a href="https://dogcat.com.ua/ru">Сайт приюта</a></span>
                <br></br>
              </div>
            </div>
        </div>
    );
}

export default Sidebar;