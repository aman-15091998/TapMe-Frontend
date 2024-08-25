import { useEffect } from "react";
import { PowerComponent } from "../../Components/PowerComponent";
import { ScoreComponent } from "../../Components/ScoreComponent";
import { TapComponent } from "../../Components/TapComponent";
import styles from "./home.module.css";
import { useMutation, useQuery } from "@apollo/client";
import { useDispatch, useSelector } from "react-redux";
import { userActions, userSelector } from "../../redux/userSlice";
import { GET_USER, UPDATE_USER } from "../../Configs/apolloClient.config";
import { useParams } from 'react-router-dom';

export const Home=()=>{
    const dispatch=useDispatch();
    const params=useParams();//for reading url params
    const {id, balance, power, level, level_target}=useSelector(userSelector);//reading data from the store
    const { loading, error, data, refetch } = useQuery(GET_USER, {//query
        variables: { id: params.id || '123', username: params.username || "user" },
        skip: false, 
    });
    useEffect(() => {
        if (window.Telegram && window.Telegram.WebApp) {
          window.Telegram.WebApp.expand();  // Expands the Web App to full screen
        }
      }, []);
    //Side effect to update the user state in the store whenever new data is fetched
    useEffect(() => {
        refetch({ id: params.id || '123', username: params.username || "user" });
        if(data){
            dispatch(userActions.setUser(data.user)); 
        }
    }, [data]);

    const [updateUser] = useMutation(UPDATE_USER);//mutation query
    //Side effect to update the user properties in the database whenever user's balance state changes in the store
    useEffect(()=>{
        if(id!=null){
            updateUser({
                variables: {
                  id,
                  balance,
                  power,
                  level,
                  level_target
                },
              })
              .then(response => {
                console.log('User updated:');
              })
              .catch(err => {
                console.error('Error updating user:', err.message);
              });
        }

        
    }, [balance]);
    
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
    
    return (
        <div className={styles.homeDiv}>
            <div className={styles.scoreComponent}>
                <ScoreComponent/>
            </div>
            <div className={styles.tapComponent}>
                <TapComponent/>
            </div>
            <div className={styles.powerComponent}>
                <PowerComponent/>
            </div>
        </div>
    )
}
