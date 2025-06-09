import "./contacts.css"
export function Contacts() {
    return (
        <div className="contacts">
               <table class="feedback-table">
        <thead>
            <tr>
                <th>Контакты</th>
                <th>Часы работы</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td className="city">
                г. Сочи<br />+7 987 546-35-68<br /><br />
                г. Москва<br />+7 981 675-49-51<br /><br />
                г. Ростов-на-Дону<br />+7 948 543-72-22<br /><br />
                г. Таганрог<br />+7 967 847-55-69<br /><br />
                г. Краснодар<br />+7 969 352-77-33</td>
                <td><u>Воскресенье</u><br />10:00 - 00:00<br /><br />
                <u>Понедельник</u><br />10:00 - 22:00<br /><br />
                <u>Вторник</u><br />10:00 - 22:00<br /><br />
                <u>Среда</u><br />10:00 - 22:00<br /><br />
                <u>Четверг</u><br />10:00 - 22:00<br /><br />
                <u>Пятница</u><br />10:00 - 22:00<br /><br />
                <u>Суббота</u><br />10:00 - 00:00</td>
            </tr>
        </tbody>
    </table>
        </div>
    )
}