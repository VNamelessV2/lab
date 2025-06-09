import "./maimm.css"
import laz from "./ico/laz.jpg";
import matcha from "./ico/matcha.jpg";
import chiss from "./ico/chiss.png";
import pana from "./ico/pana.jpg";
import {Link} from "react-router-dom";
export function Maimm() {
    return (
        <div className="maimm">
            <p className="te">Меню</p>
            <table class="equal-width-table">
        <thead>
            <tr>
                <th><Link to="/mainb" className="head-link">Основные блюда</Link></th>
                <th><Link to="/pizza" className="head-link">Пиццы</Link></th>
                
                
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><img src={laz}
                                            height="200px"
                                            width="200px"
                                            title="Основное блюдо"
                                            Alt="Пицца"/>
                                            </td>
                <td><img src={chiss}
                                            height="200px"
                                            width="200px"
                                            title="Лазанья"
                                            Alt="Лазанья"/>
                                            </td>
            </tr>
        </tbody>
    </table>
        <br /> <br /> <br />
    <table class="equal-width-table">
        <thead>
            <tr>
                <th><Link to="/desert" className="head-link">Десерты</Link></th>
                <th><Link to="/drink" className="head-link">Напитки</Link></th>
                
                
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><img src={pana}
                                            height="200px"
                                            width="200px"
                                            title="Десерт"
                                            Alt="Десерт"/></td>
                <td><img src={matcha}
                                            height="200px"
                                            width="200px"
                                            title="Напитки"
                                            Alt="Напитки"/></td>
            </tr>
        </tbody>
    </table>
        </div>
    )
}