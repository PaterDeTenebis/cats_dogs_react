import React from 'react';

/*Illustrations*/ 

import Image from '../img/dog.jpg'

function Post() {
    return(
        <div className="post">
            <div className="post_top">
                <img  src={Image} alt=""></img>
            </div>
            <div className="post_bot">
                <div className="post_bot_heading">
                <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo sequi quod minus exercitationem, eaque cupiditate?</span>
                </div>
                <div className="post_bot_description">
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, voluptatem iste odio nam ipsa hic, fuga voluptatum iure dolores dolorem sed distinctio molestiae harum unde id quisquam, quidem sit explicabo quis est magnam. Quidem, eius. Est recusandae quibusdam quas nemo incidunt voluptates nam veritatis repudiandae magni laborum dignissimos, tenetur autem!</span>
                </div>
                <hr></hr>
                <div className="post_bot_common">
                <div className="post_bot_common_item">
                    <span>Имя:</span>
                    <strong>Буч</strong>
                </div>
                <div className="post_bot_common_item">
                    <span>Порода:</span>
                    <strong>Терьер</strong>
                </div>
                <div className="post_bot_common_item">
                    <span>Прививки:</span>
                    <strong>Привит</strong>
                </div>
                <div className="post_bot_common_item">
                    <span>Возраст:</span>
                    <strong>3 года</strong>
                </div>
                <div className="post_bot_common_item">
                    <span>Документы:</span>
                    <strong>Без документов</strong>
                </div>
                <div className="post_bot_common_item">
                    <span>Город:</span>
                    <strong>Киев</strong>
                </div>
                <div className="post_bot_common_item">
                    <span>Контакты:</span>
                    <strong>+380993403605</strong>
                </div>
                </div>
                <div className="post_bot_btnholder">
                <button className="btn btn-outline-warning my-2 my-sm-0" type="submit">открыть объявление</button>
                </div>
            </div>
        </div>
    );
}

export default Post;