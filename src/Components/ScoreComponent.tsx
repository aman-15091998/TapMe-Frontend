import { useSelector } from "react-redux";
import styles from "./component.module.css";
import { userSelector } from "../redux/userSlice";
import { useEffect } from "react";

export const ScoreComponent=()=>{
    const {balance, level_target, level, tap_value}=useSelector(userSelector); //reading states from the store

    useEffect(()=>{

    }, [balance]);
    return (
        <div className={styles.scoreDiv}>
                <div className={styles.targetDiv}>
                    <div className={styles.balanceDiv}><img src="/starSmall.png" width="40px" height="40px"/><p>{balance}/{level_target}</p></div>
                    <input type="range" min={0} max={level_target} step={tap_value} value={balance} readOnly/>
                </div>
                <p className={styles.levelPara}>Level {level}</p>
        </div>
    )
}