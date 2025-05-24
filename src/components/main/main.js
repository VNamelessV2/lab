import "./main.css";
import Section from "../main/mcomps/section/section";
import Article from "../main/mcomps/article/article";
import Aside from "../main/mcomps/aside/aside";
export default function Main() {
    return (
        <div className="main">
            <Section />
            <Article />
            <Aside />
        </div>
    );
}