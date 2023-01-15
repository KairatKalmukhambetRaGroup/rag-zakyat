import React from "react";
import { buttonClicked } from "../actions";
import '../styles/Footer.scss';

const Footer = () => {
    return (
        <footer>
            <div className="content">
                <div className="logo">
                    <i></i>
                </div>
                <div className="text">© RAG ZAKYAT Investment 2022</div>
                <div className="contacts">
                    <a href="" target="_blank" className="icon whatsapp" data-name="footer_whatsapp" onClick={buttonClicked}><i></i></a>
                    <a href="mailto:" className="icon mail" data-name="footer_email" onClick={buttonClicked}><i></i></a>
                </div>
            </div>
        </footer>
    )
}
export default Footer;