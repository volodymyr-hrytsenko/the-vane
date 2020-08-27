import React from 'react';

import './landing-page.css';

const LandingPage = () => {
    return(
        // <div className="landing__page">
        //     <div className="scrol__wrap">
        //         <div className="get__part">
        //             <button>Приєднатися до нас</button>
        //         </div>
        //         <div className="services">
        //             <label>Послуги</label>
        //             <p>Тут ви можете ознайомитись з переліком наших послуг</p>
        //             <div className="service__item">
        //                 <div className="service__item__text">
        //                     <label>Девайс</label>
        //                     <p>Короткий привабливий опис послуги</p>
        //                 </div>
        //                     <button>Замовити</button>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <main class="landing__page">
            <div class="advertising">
                <div class="adver_text">
                <label>Find <span>your</span> wind</label>
                <div class="wrapper">
                    <p>this system will <span>help</span> you to choose the optimal size windmills for your area</p>
                    <p>Our platform is capable of <span>saving</span> your time and <span>money</span></p>
                    <p>The best wind monitoring</p>
                </div>
                <div className="join__button">
                    <a class="btnflip" href="#!">
                        <span class="btnflip-item btnflip__front">Приєднатися</span>
                        <span class="btnflip-item btnflip__center"></span>
                        <span class="btnflip-item btnflip__back">Натисніть тут</span>
                    </a>
                </div>
                </div>
            </div>
        </main>
    );
}

export default LandingPage;