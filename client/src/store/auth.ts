import { makeAutoObservable } from "mobx"

class IsAuthState {

    public auth:boolean = false //По умолчанию авторизованност false

    //Нужная херня
    constructor(){
        makeAutoObservable(this)
    }

    //Функция которая меняет auth на true (авторизован)
    authTrue(){
        this.auth = true
    }


    //Функция которая меняет auth на false (не авторизован)
    neAuthTrue(){
        this.auth = false
    }
}

export default new IsAuthState()