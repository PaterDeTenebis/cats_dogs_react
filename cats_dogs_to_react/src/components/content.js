import React from 'react';

/*components*/ 

import Post from './post';

function Content() {
    return (
        <div className="main_content">
            <div className="container">
              <button className="sidebar_toggler"><i className="fas fa-chevron-right"></i></button>
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    );
}

export default Content;