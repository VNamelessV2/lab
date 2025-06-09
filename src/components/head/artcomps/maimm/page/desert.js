import "../page/desert.css";
import pana from "../ico/pana.jpg"
import tiram from "../ico/tiram.jpg";
import posset from "../ico/posset.jpg";
import {Link} from "react-router-dom";
export function Desert() {
    return (
        <div className="desert">
            <table class="feedback-table">
        <thead>
            <tr>
                <th>Десерты</th>
                
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <img src={posset}
                            height="200px"
                            width="200px"
                            title="Поссет"
                            Alt="Поссет"/>
                            </td>
                <td><spawn className="wr"><u>Поссет</u></spawn><br />
               <spawn className="wr1"> <i>Лимоны, сливки, сахарная пудра, ванильный эстракт, лимонный сок, ягоды/орехи.</i></spawn></td>
            </tr>
            <tr>
                <td>
                    <img src={pana}
                            height="200px"
                            width="200px"
                            title="Панна Котта"
                            Alt="Панна Котта"/>
                            </td>
                <td><spawn className="wr"><u>Панна Котта</u></spawn><br />
                <spawn className="wr1"><i>Сливки, сахар, желатин, ванильный эстрак, лимонный сок.</i></spawn></td>
            </tr>
            <tr>
                <td>
                    <img src={tiram}
                            height="200px"
                            width="200px"
                            title="Тирамису"
                            Alt="Тирамису"/>
                </td>
                <td><spawn className="wr"><u>Тирамису</u></spawn><br />
                <spawn className="wr1"><i>Печенье савоярди, сливочный сыр, маскарпоне, кофе, экспрессо, како-порошок.</i></spawn></td>
            </tr>
        </tbody>
    </table>
    <Link to="/maimm"><p className="Backtomenu">Вернуться в меню</p></Link>
        </div>
    )
}