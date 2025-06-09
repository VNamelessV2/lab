import "../page/pizza.css";
import chiss from "../ico/chiss.png"
import marg from "../ico/marg.jpg";
import pul from "../ico/pul.jpg";
import {Link} from "react-router-dom";
export function Pizza() {
    return (
        <div className="Pizza">
            <table class="feedback-table">
        <thead>
            <tr>
                <th>Пицца</th>
                
            </tr>
        </thead>
        <tbody>
            <tr>
                <td className="city">
                    <img src={marg}
                            height="200px"
                            width="200px"
                            title="Маргарита"
                            Alt="Маргарита"/>
                            </td>
                <td><spawn className="wr"><u>Маргарита</u></spawn><br />
               <spawn className="wr1"> <i>Сыр моцарелла, спелые томаты, итальянские травы, томатный соус.</i></spawn></td>
            </tr>
            <tr>
                <td className="city">
                    <img src={chiss}
                            height="200px"
                            width="200px"
                            title="Пицца 4 сыра"
                            Alt="Пицца 4 сыра"/>
                            </td>
                <td><spawn className="wr"><u>Пицца 4 сыра</u></spawn><br />
                <spawn className="wr1"><i>Горгонзола, пармезан, эмменталь, мацарелла, томатный соус.</i></spawn></td>
            </tr>
            <tr>
                <td className="city">
                    <img src={pul}
                            height="200px"
                            width="200px"
                            title="Пульезе"
                            Alt="Пульезе"/>
                </td>
                <td><spawn className="wr"><u>Пульезе</u></spawn><br />
                <spawn className="wr1"><i>Лук репчатый, томатный соус, мацарелла, оливки, спелые томаты, каперсы.</i></spawn></td>
            </tr>
        </tbody>
    </table>
    <Link to="/maimm"><p className="Backtomenu">Вернуться в меню</p></Link>
        </div>
    )
}