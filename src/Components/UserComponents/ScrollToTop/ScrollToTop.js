import React from 'react';
import './ScrollToTop.css'

const ScrollToTop = () => {

    return (
        <div>
            <a href='#'>
            <div class='scrolldown'>
                <div class="chevrons">
                    <div class='chevrondown'></div>
                    <div class='chevrondown'></div>
                </div>
            </div>
            </a>
        </div>
    );
};

export default ScrollToTop;