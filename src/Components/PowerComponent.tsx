import { useEffect, useState } from "react";
import styles from "./component.module.css";
import { useDispatch, useSelector } from "react-redux";
import { userActions, userSelector } from "../redux/userSlice";
export const PowerComponent=()=>{
    const {id, power, balance, power_capacity}=useSelector(userSelector); //reading states from the store
    const dispatch=useDispatch();

    //Side effect to increment the power state every second (it will not increment when user is tapping)
    useEffect(()=>{
        let interval=setInterval(()=>{
            dispatch(userActions.incrementPower());
        }, 1000);

        function clear(){
            clearInterval(interval)
        }
        
        return clear;
    }, [id, balance]);

    return (
        <div className={styles.powerDiv}>
                <div className={styles.energyDiv}>
                    <img src="/thunderSmall.png" height="40px" width="40px" />
                    <p>{power}/{power_capacity}</p>
                </div>
        </div>
    )
}