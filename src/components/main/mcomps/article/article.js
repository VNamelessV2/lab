import "./article.css";
import {Routes, Route} from "react-router-dom";
import {Mainb} from "../../../head/artcomps/maimm/page/mainb";
import {Pizza} from "../../../head/artcomps/maimm/page/pizza";
import {Drink} from "../../../head/artcomps/maimm/page/drink";
import {Desert} from "../../../head/artcomps/maimm/page/desert";
import {Maimm} from "../../../head/artcomps/maimm/maimm";
import {News} from "../../../head/artcomps/news/news";
import {New} from "../../../head/artcomps/new/new";
import {Contacts} from "../../../head/artcomps/contacts/contacts";
import {About} from "../../../head/artcomps/about/about";
import {Er404} from "../../../head/artcomps/er404/er404";

export default function Article() {
    return (
        <div className="article">
            <Routes>
                <Route path="/" element={<News/>}/>
                <Route path="/new" element={<New/>}/>
                <Route path="/maimm" element={<Maimm/>}/>
                <Route path="/contacts" element={<Contacts/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="*" element={<Er404/>}/>
                <Route path="mainb" element={<Mainb/>}/>
                <Route path="pizza" element={<Pizza/>}/>
                <Route path="drink" element={<Drink/>}/>
                <Route path="desert" element={<Desert/>}/>
            </Routes>
        </div>
    );
}
