import React from "react";
import '../styles/About.scss';
import { buttonClicked } from "../actions";
import { useTranslation } from "react-i18next";

const About = () => {
    const {t, i18n} = useTranslation();

    return (
        <div id="about">
            <div className="subtitle">{t('about.subtitle')}</div>
            <div className="info">
                <div className="text">
                    <div className="title">{t('about.title')}</div>
                    <div className="description">{t('about.description')}</div>
                    <div className="bottom">{t('about.bottom')}</div>
                </div>
                <div className="illustration">
                    <i></i>
                </div>
            </div>
            <div className="button" data-name="about_more" onClick={buttonClicked}>
                {t('about.more')}
                <div>
                    <i></i>
                </div>
            </div>
        </div>
    )
}
export default About;