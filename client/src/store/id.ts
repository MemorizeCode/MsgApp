import { makeAutoObservable } from "mobx"

class MyIds {

    public id:number | null = null //Мой id

    //Нужная херня
    constructor(){
        makeAutoObservable(this)
    }

    //Установка моего id
    setId(id:number){
        this.id = id
    }

}

export default new MyIds()