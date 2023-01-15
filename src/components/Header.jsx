import axios from "axios";
import moment from "moment/moment";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addVisitor, buttonClicked } from "../actions";
import '../styles/Header.scss';

const Header = () => {
    const dispatch = useDispatch();
    const visitor = JSON.parse(localStorage.getItem('visitor'));
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

    return (
        <header>
            <div className="content">
                <a className="logo" href=".">
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
            </div>
        </header>
    )
};

export default Header;