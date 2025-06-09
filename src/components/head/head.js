import "./head.css";
import logo from "./logo.png";
import {Link} from "react-router-dom";
export default function Head() {
    return (
        <div className="head">
            <Link to="/" className="head-link"><img src={logo}
            height="24px"
            width="120px"
            title="LINO"
            Alt="LINO"/></Link>
            <Link to="/new" className="head-link">Новости</Link>
            <Link to="/maimm" className="head-link">Меню</Link>
            <Link to="/about" className="head-link">О заведении</Link>
            <Link to="/contacts" className="head-link">Обратная свзяь</Link>
            
        </div>
    );
}