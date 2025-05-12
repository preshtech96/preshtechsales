import React from "react";
import { Await } from "react-router-dom";
import { create } from "zustand";

export const useStorenow = create((set) => ({
  product: [],
  cart: [],
  action: async () => {
    const data = await fetch("https://fakestoreapi.com/products");
    const data2 = await data.json();

    if (data2) {
      set({ product: data2 });
    }
  },

  addtoCart: (item) => {
    set((state) => ({ cart: [...state.cart, item] }));
  },

  removeCart: (id) => {
    set((state) => ({ cart: [...state.cart.filter((i) => i.id !== id)] }));
  },
}));
