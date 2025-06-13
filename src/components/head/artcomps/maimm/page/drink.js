import "../page/drink.css";
import coffe from "../ico/coffe.jpg"
import limonade from "../ico/limonade.jpg";
import matcha from "../ico/matcha.jpg";
import {Link} from "react-router-dom";
export function Drink() {
    return (
        <div className="Drink">
            <table class="feedback-table">
        <thead>
            <tr>
                <th>Напитки</th>
                
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <img src={limonade}
                            height="200px"
                            width="200px"
                            title="Лемоната кон Мелоне"
                            Alt="Лемоната кон Мелоне"/>
                            </td>
                <td><spawn className="wr"><u>Лемоната кон Мелоне</u></spawn><br />
               <spawn className="wr1"> <i>Лимон, дыня, лимонная содовая, лаймовый сироп, лёд.</i></spawn></td>
            </tr>
            <tr>
                <td>
                    <img src={coffe}
                            height="200px"
                            width="200px"
                            title="Овсяный латте со льдом и карамелю"
                            Alt="Овсяный латте со льдом и карамелю"/>
                            </td>
                <td><spawn className="wr"><u>Овсяный латте со льдом и карамелю</u></spawn><br />
                <spawn className="wr1"><i>Овсяный напиток подаётся с карамельным печеньем, кофе и льдом.</i></spawn></td>
            </tr>
            <tr>
                <td>
                    <img src={matcha}
                            height="200px"
                            width="200px"
                            title="Летный Матча со льдом"
                            Alt="Летный Матча со льдом"/>
                </td>
                <td><spawn className="wr"><u>Летный Матча со льдом</u></spawn><br />
                <spawn className="wr1"><i>Посыпан ванилью в центре, украшен ирландским кремом с ванилью и розовой шоколадной стружкой.
                    Пожалуйста, обращайте внимание, что пенка содержит сою, а шпреслет молоко.</i></spawn></td>
            </tr>
        </tbody>
    </table>
    <Link to="/maimm"><p className="Backtomenu">Вернуться в меню</p></Link>
        </div>
    )
}