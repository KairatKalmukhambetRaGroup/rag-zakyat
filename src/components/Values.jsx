import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import '../styles/Values.scss';

const Values = () => {
    const [show, setShow] = useState({first: false, second: false});
    const {t, i18n} = useTranslation();
    const showHiddenDescription = (e) => {
        e.preventDefault();
        const num = e.currentTarget.dataset.number;
        setShow({...show, [num]: !show[num]});
    }

    return (
        <div id="values">
            <div className="cell">
                <div className="subtitle">{t('values.subtitle')}</div>
                <div className="text">
                    <div className="title">{t('values.first.title')}</div>
                    <div className="description">{t('values.first.description')}</div>
                    {show.first && 
                        <div className="hidden-description">{t('values.first.hidden')}</div>
                    }
                </div>
                <div className={`button ${show.first ? 'up' : ''}`} data-number="first" onClick={showHiddenDescription}>
                    {show.first ? t('values.hide') : t('values.more')}
                    <div>
                        <i></i>
                    </div>
                </div>
            </div>
            <div className="cell second">
                <div className="subtitle">{t('values.subtitle')}</div>
                <div className="text">
                    <div className="title">{t('values.second.title')}</div>
                    <div className="info">
                        <div className="descriptions">
                            <div className="description">{t('values.second.description')}</div>
                            {show.second && 
                                <div className="hidden-description">{t('values.second.hidden')}</div>
                            }
                        </div>
                        <div className={`illustration ${show.second ? '' : 'cropped'}`}>
                            <i></i>
                        </div>
                    </div>
                </div>
                <div className={`button ${show.second ? 'up' : ''}`} data-number="second" onClick={showHiddenDescription}>
                    {show.second ? t('values.hide') : t('values.more')}
                    <div>
                        <i></i>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Values;