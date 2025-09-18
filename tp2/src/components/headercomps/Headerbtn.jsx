import { useState } from "react";
import "./Headerbtn.css"
import { zundamon } from "../../assets/imgexport";

const Headerbtn = () => {
    const [showImage, setShowImage] = useState(false);

    const handleClick = () => {
        setShowImage(true);
    };

    return (
        <div>
            <button onClick={handleClick}>Deploy Bean</button>
            {showImage && (
                <img
                    src={zundamon}
                    alt="Bean Deployed"
                    style={{ width: "100px", height: "100px", marginLeft: "10px" }}
                />
            )}
        </div>
    );
}

export default Headerbtn