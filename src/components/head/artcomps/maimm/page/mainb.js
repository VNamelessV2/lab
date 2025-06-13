import "../page/mainb.css";
import laz from "../ico/laz.jpg"
import kapreze from "../ico/kapreze.jpg";
import pastak from "../ico/pastak.jpg";
import {Link} from "react-router-dom";
export function Mainb() {
    return (
        <div className="mainb">
            <table class="feedback-table">
        <thead>
            <tr>
                <th>Основные блюда</th>
                
            </tr>
        </thead>
        <tbody>
            <tr>
                <td className="city">
                    <img src={laz}
                            height="190px"
                            width="190px"
                            title="Лазанья"
                            Alt="Лазанья"/>
                            </td>
                <td><spawn className="wr"><u>Лазанья</u></spawn><br />
               <spawn className="wr1"> <i>Листы лазаньи, фарш, томатная паста, сухое красное вино, итальянские травы, мускатный орех, пармезан.</i></spawn></td>
            </tr>
            <tr>
                <td className="city">
                    <img src={pastak}
                            height="190px"
                            width="190px"
                            title="Паста Карбанара"
                            Alt="Паста Карбанара"/>
                            </td>
                <td><spawn className="wr"><u>Паста Корбонара</u></spawn><br />
                <spawn className="wr1"><i>Спагети, беконили паначетта, сливки пармезан.</i></spawn></td>
            </tr>
            <tr>
                <td className="city">
                    <img src={kapreze}
                            height="190px"
                            width="190px"
                            title="Капрезе"
                            Alt="Капрезе"/>
                </td>
                <td><spawn className="wr"><u>Капрезе</u></spawn><br />
                <spawn className="wr1"><i>Помидоры, сыр, моцарелла, базелик, оливковое масло.</i></spawn></td>
            </tr>
        </tbody>
    </table>
    <Link to="/maimm"><p className="Backtomenu">Вернуться в меню</p></Link>
        </div>
    )
}