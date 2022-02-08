import { defineStore } from 'pinia'
const initialState = {"username":"","password":"","isAuth":false}
export const useUserStore = defineStore('userdata', {
  state: () => ({ user: initialState }),
  actions: {
     signout(){
       this.user=initialState
     }
  },
})
