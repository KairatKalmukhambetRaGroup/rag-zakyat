import React from "react";
import '../styles/Main.scss';
import { buttonClicked } from "../actions";
import { useTranslation } from "react-i18next";


const Main = () => {
    const {t, i18n} = useTranslation();
    return (
        <div id="main">
            <div id="illustrations">
                <i className="tl"></i>                
                <i className="tr"></i>                
                <i className="bl"></i>                
                <i className="br"></i>                
            </div>

            <div className="content">
                <div className="text">
                    <div className="title">
                        {t('main.title')}
                    </div>
                    <div className="description">
                        {t('main.description')}
                    </div>
                </div>
                <a href="#contact" className="contact" data-name="main_contactus" onClick={buttonClicked}>
                    {t('main.contact')}
                     <i></i>
                </a>
            </div>
        </div>
    );
}

export default Main;