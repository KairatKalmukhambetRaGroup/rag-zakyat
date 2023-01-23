import axios from "axios";
import moment from "moment/moment";
import React, { useEffect } from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { addVisitor, buttonClicked } from "../actions";
import '../styles/Header.scss';

const Header = () => {
    const dispatch = useDispatch();
    const visitor = JSON.parse(localStorage.getItem('visitor'));
    const [showMenu, setShowMenu] = useState(false);

    
    const {t, i18n} = useTranslation();
    const [lang, setLang] = useState(i18n.language)

    const saveVisitor = async () => {
        const res = await axios.get('https://geolocation-db.com/json/');
        const ip = res.data.IPv4;
        const date = new Date(new Date().setUTCHours(0,0,0,0));

        const oneDay = (1000 * 60 * 60 * 24);
        const dayOfWeek = date.getDay() === 0 ? 7 : date.getDay();
        const month = moment(date).format('MMMM');

        const weekStart = new Date(date.valueOf() + oneDay * (1-dayOfWeek));
        const weekEnd = new Date(date.valueOf() + oneDay * (7-dayOfWeek));

        const week = moment(weekStart).format('DD/MM/YYYY') + " - " + moment(weekEnd).format('DD/MM/YYYY');



        dispatch(addVisitor({ip, date: moment(date).format('DD/MM/YYYY'), week, month}));
    }
    const compareVisitors = async (visitor) => {
        const res = await axios.get('https://geolocation-db.com/json/');
        const ip = res.data.IPv4;
        const date = new Date(new Date().setUTCHours(0,0,0,0));
    

        if(visitor.ip !== ip || new Date(visitor.data).setUTCHours(0,0,0,0) !== date){
            saveVisitor();
        }
    }
    useEffect(()=>{
        if(visitor && visitor.ip && visitor.date){
            compareVisitors(visitor);
        }else{
            saveVisitor();
        }
    }, [dispatch])

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }

    useEffect(()=>{
        if (showMenu) {
            document.body.style.overflow = 'hidden';
        }else{
            document.body.style.overflow = '';
        }
    }, [showMenu])


    const changeLanguage = (e) => {
        const l = e.currentTarget.dataset.lang;
        setLang(l);
        i18n.changeLanguage(l);
    }

    return (
        <header>
            <div className="content">
                <a className="logo" onClick={() => {
                    setShowMenu(false);
                    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
                }}>
                    <i></i>
                </a>
                <nav>
                    <li>
                        <a href="#about">{t('header.about')}</a>
                    </li>
                    <li>
                        <a href="#values">{t('header.values')}</a>
                    </li>
                    <li>
                        <a href="#manager">{t('header.manager')}</a>
                    </li>
                
                </nav>
                <div className="buttons">
                    <a href="#contact" className="button" data-name="header_contacts" onClick={buttonClicked} >{t('header.contacts')}</a>
                    <div className="lang" onClick={changeLanguage} data-lang={lang==='en' ? 'ru' : 'en'}>{lang==='en' ? 'EN' : 'RU'}</div>
                </div>
                <div className={`hamburger ${showMenu ? 'active' : ''}`} onClick={toggleMenu}>
                    <i></i>
                </div>
            </div>
            <div className={`menu ${showMenu ? 'active' : ''}`}>
                <nav>
                    <li>
                        <a href="#about" onClick={toggleMenu}>{t('header.about')}</a>
                    </li>
                    <li>
                        <a href="#values" onClick={toggleMenu}>{t('header.values')}</a>
                    </li>
                    <li>
                        <a href="#manager" onClick={toggleMenu}>{t('header.manager')}</a>
                    </li>            
                </nav>
                <div className="buttons">
                    <a href="#contact" className="button" data-name="header_contacts" onClick={(e)=>{toggleMenu(e); buttonClicked(e);}} >{t('header.contacts')}</a>
                </div>
            </div>
        </header>
    )
};

export default Header;