import React from 'react';

/*components*/ 

import Post from './post';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

import $ from 'jquery';

function Content() {
    $('.sidebar_toggler').click(function(){
        $('.sidebar').addClass('sidebar_active');
    });

    return (
        <div className="main_content">
            <div className="container">
              <button className="sidebar_toggler"><FontAwesomeIcon icon={faChevronRight} /></button>
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    );
}

export default Content;