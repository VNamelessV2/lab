import "./section.css";
import one from "./one.jpg";
import two from "./two.jpg";
export default function Section() {
    return (
        <div className="section">
         <img src={one}
            height="450px"
            width="400px"
            title="LINO"
            Alt="LINO"/>
             <img src={two}
            height="420px"
            width="400px"
            title="LINO"
            Alt="LINO"/>
            
        </div>
    );
}