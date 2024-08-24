import { useDispatch, useSelector } from "react-redux";
import styles from "./component.module.css";
import { userActions, userSelector } from "../redux/userSlice";
import { useEffect, useRef, useState } from "react";

interface ClickData {
    id: number;
    x: number;
    y: number;
  }

export const TapComponent=()=>{
    const {power, tap_value}=useSelector(userSelector); //reading states from store
    const [transformOrigin, setTransformOrigin] = useState({x:'50%', y:'50%'}); //for storing x,y position
    const [clicks, setClicks]=useState<ClickData[]>([]);                      //for cstoring the click with positions
    const dispatch=useDispatch();

    const handleClick=(e:any)=>{
        const img = e.target;
        const rect = img.getBoundingClientRect();

        const offsetX = e.clientX - rect.left; //X coordinate relative to the image
        const offsetY = e.clientY - rect.top;  //Y coordinate relative to the image

        const originX = (offsetX / rect.width) * 100;
        const originY = (offsetY / rect.height) * 100;

        //Updating the transform origin
        setTransformOrigin({x:String(originX), y:String(originY)});
        if(power>0){
            const newClick = {
                id: Date.now(),
                x: offsetX-30,
                y: offsetY,
            };
            setClicks((prev) => [...prev, newClick]);
        
            //Removing the clicks after the animation ends
            setTimeout(() => {
                setClicks((prev) => prev.filter((click) => click.id !== newClick.id));
            }, 1000);
        }
        dispatch(userActions.updateBalance());
    }
    return (
        <div className={styles.tapDiv}> 
                <div className={styles.coinDiv}>
                    <img onClick={handleClick} style={{transformOrigin: `${transformOrigin.x}% ${transformOrigin.y}%`}} width="370px" src="/star.png"></img>
                    {clicks.map((click) => (
                        <span className={styles.tap}
                        key={click.id}
                        style={{ top: `${click.y}px`, left: `${click.x}px` }}
                        >
                        +{tap_value}
                        </span>
                    ))}
                </div>
                
        </div>
    )
}