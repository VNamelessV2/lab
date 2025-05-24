import "./article.css";
import {Routes, Route} from "react-router-dom";
import {News} from "../../../head/artcomps/news/news";
import {Contacts} from "../../../head/artcomps/contacts/contacts";
import {About} from "../../../head/artcomps/about/about";
import {Er404} from "../../../head/artcomps/er404/er404";

export default function Article() {
    return (
        <div className="article">
            <Routes>
                <Route path="/" element={<News/>}/>
                <Route path="/contacts" element={<Contacts/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="*" element={<Er404/>}/>
            </Routes>
        </div>
    );
}
