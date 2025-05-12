import { create } from "zustand";

export const useCart = create((set)=>(

    {
        value1:[],
        isloading:false,
        carty:[],
    
        addNew:async()=>{
            const data_new=await fetch("https://fakestoreapi.com/products");
            const dataready=await data_new.json();
                   if (dataready) {
                set({value1:dataready})  
            }
                    else{
                        set({isloading:true})
                    }
        },
        addCart:(item)=>{
            set((state)=>({carty:[...state.carty,item]}))
        }

       

    }

   
))