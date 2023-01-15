import React from "react";
import '../styles/Main.scss';
import { buttonClicked } from "../actions";

const title = `It's not just about numbers,\n we know what you need`

const Main = () => {
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
                        {title}
                    </div>
                    <div className="description">
                        RAG ZAKYAT INVESTMENT invests in commercial enterprises
                    </div>
                </div>
                <a href="#contact" className="contact" data-name="main_contactus" onClick={buttonClicked}>
                    Contact <i></i>
                </a>
            </div>
        </div>
    );
}

export default Main;