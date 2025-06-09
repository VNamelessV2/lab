import "./neww.css";
import {Link} from "react-router-dom";
export function New() {
    return (
        <div className="new">
            <p className="nw"><b>В меню нашего заведения появилось два новых напитка:</b><br /><br />
            - <Link to="/drink" className="head-link"><u> Летний матча со льдом</u></Link><br />
            - <Link to="/drink" className="head-link"><u> Овсяный латте со льдом и карамелью</u></Link><br /><br /><br /><br /><br />
            <b>Открыт новый филиал в Ростове-на-Дону, ул.Береговая,д.56<br /><br /><br /><br /></b>
            <b>С 10 до 12 десерты из нашего меню подаются со скидкой 10%.</b><br /><br /><br /><br />
            <b>Ресторан LINO предоставляет скидку 25% имининникам!</b><br /><br /><br /><br />
            <b>Наш новый изысканный десерт - Поссет завершит Ваш итальянский ужин.</b></p><br /><br />
            
         


        </div>
    )
}