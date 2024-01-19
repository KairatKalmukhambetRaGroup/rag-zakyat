import React, { useState } from "react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import '../styles/Manager.scss';


const Manager = () => {
    const [active, setActive] = useState(null);
    const {t, i18n} = useTranslation();
    const activate = (e) => {
        e.preventDefault();
        const name = e.currentTarget.dataset.name;
        if(name === active)
            setActive(null)
        else    
            setActive(name);
    }
    
    // useEffect(()=>{
    //     const containerEl = document.getElementById('cards');
    //     const height = window.getComputedStyle(containerEl).height;
    //     const wrapper = document.getElementById('wrapper');
    //     wrapper.style.height = height;
    // })

    return (
        <div id="manager">
            <div className="cell general-manager">
                <div className="subtitle">{t('manager.subtitle')}</div>
                <div className="info">
                    <div className="text">
                        <div className="title">{t('manager.title')}</div>
                        <div className="description">{t('manager.description')}</div>
                    </div>
                    <div className="illustration">
                        <i></i>
                    </div>
                </div>
            </div>
            <div className="cell experience">  
                <div className="subtitle">{t('experience.subtitle')}</div>
                <div className="tabs">
                    <div className="tab">
                        <div className="title">{t('experience.first.title')}</div>
                        <div className="description">{t('experience.first.description')}</div>
                    </div>
                    <div className="tab">
                        <div className="title">{t('experience.second.title')}</div>
                    </div>
                    <div className="tab">
                        <div className="title">{t('experience.third.title')}</div>
                        <div className="description">{t('experience.third.description')}</div>
                    </div>
                </div>
                <div className="description">{t('experience.description')}</div>
            </div>
            <div className="cell team-and-projects">
                <div className="subtitle">{t('projects.subtitle')}</div>
                <div className="items">
                    <div className="item">
                        <div className="number">24</div>
                        <div className="text">{t('projects.people_in_team')}</div>
                    </div>
                    <div className="item">
                        <div className="number">10</div>
                        <div className="text">{t('projects.closed_projects')}</div>
                    </div>
                </div>
            </div>
            <div className="partners">
                <div className="title">{t('partners.title')}</div>
                <div className="wrapper" id="wrapper">
                    <div className="scroller">
                        <div className="cards" id="cards">
                            <a className={`card rag-mirsot`} target="_blank" href="https://ragmirsot.com/">
                                <i></i>
                                <div className="text">
                                    <div className="title">{t('partners.rag_mirsot.title')}</div>
                                    <div className="description">{t('partners.rag_mirsot.description')}</div>
                                </div>
                            </a>
                            <a className={`card ra-group`}  target="_blank" href="https://ragroup.org/">
                                <i></i>
                                <div className="text">
                                    <div className="title">{t('partners.ra_group.title')}</div>
                                    <div className="description">{t('partners.ra_group.description')}</div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Manager;