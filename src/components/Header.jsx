import axios from "axios";
import moment from "moment/moment";
import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addVisitor, buttonClicked } from "../actions";
import '../styles/Header.scss';

const Header = () => {
    const dispatch = useDispatch();
    const visitor = JSON.parse(localStorage.getItem('visitor'));
    const [showMenu, setShowMenu] = useState(false);


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
                        <a href="#about">About us</a>
                    </li>
                    <li>
                        <a href="#values">Our values</a>
                    </li>
                    <li>
                        <a href="#manager">General Manager</a>
                    </li>
                
                </nav>
                <div className="buttons">
                    <a href="#contact" className="button" data-name="header_contacts" onClick={buttonClicked} >Contacts</a>
                </div>
                <div className={`hamburger ${showMenu ? 'active' : ''}`} onClick={toggleMenu}>
                    <i></i>
                </div>
            </div>
            <div className={`menu ${showMenu ? 'active' : ''}`}>
                <nav>
                    <li>
                        <a href="#about" onClick={toggleMenu}>About us</a>
                    </li>
                    <li>
                        <a href="#values" onClick={toggleMenu}>Our values</a>
                    </li>
                    <li>
                        <a href="#manager" onClick={toggleMenu}>General Manager</a>
                    </li>            
                </nav>
                <div className="buttons">
                    <a href="#contact" className="button" data-name="header_contacts" onClick={(e)=>{toggleMenu(e); buttonClicked(e);}} >Contacts</a>
                </div>
            </div>
        </header>
    )
};

export default Header;