import { createSlice } from "@reduxjs/toolkit";

const userSlice=createSlice({
    name:"User",
    initialState:{id:null, username:"", balance:0, level:0, power:0, power_capacity:0, tap_value:0, level_target:0},
    reducers:{
        setUser:(state, action)=>{
            state.id=action.payload.id;
            state.username=action.payload.username;
            state.balance=action.payload.balance;
            state.power=action.payload.power;
            state.power_capacity=action.payload.power_capacity
            state.level=action.payload.level;
            state.level_target=action.payload.level_target;
            state.tap_value=action.payload.tap_value;
        },
        updateBalance:(state)=>{
            if(state.power>0){
                state.power-=state.tap_value;
                state.balance+=state.tap_value;
                if(state.balance>=state.level_target){
                    state.level++;
                    state.level_target*=2;
                }
            }
        }, 
        incrementPower:(state)=>{
            if(state.power<state.power_capacity){
                state.power+=1;
            }
        }
    }
})

export const userReducer=userSlice.reducer;
export const userActions=userSlice.actions;
export const userSelector=(state)=>state.userReducer;