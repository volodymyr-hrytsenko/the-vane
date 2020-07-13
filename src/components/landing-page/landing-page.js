import React from 'react';

import './landing-page.css';

const LandingPage = () => {
    return(
        <div className="landing__page">
            <div className="scrol__wrap">
                <div className="get__part">
                    <button>Приєднатися до нас</button>
                </div>
                <div className="services">
                    <label>Послуги</label>
                    <p>Тут ви можете ознайомитись з переліком наших послуг</p>
                    <div className="service__item">
                        <div className="service__item__text">
                            <label>Девайс</label>
                            <p>Короткий привабливий опис послуги</p>
                        </div>
                            <button>Замовити</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;