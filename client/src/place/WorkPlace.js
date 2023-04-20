
import {makeAutoObservable} from "mobx";
//import { Category } from "../../../server/models/models";

export default class WorkPlace {
    constructor() {
        this._categories = [
            {id:1, name:'Developers'},
            {id:2, name:'Courier'},
            {id:3, name:'Driver'},
            {id:4, name:'Disegner'},

        ]

        this._works =[
            {id:1, name:'Wed-developer', salary: 2000},
            {id:2, name:'Wed-developer', salary: 2000},
            {id:3, name:'Wed-developer', salary: 2000},
            {id:4, name:'Wed-developer', salary: 2000},
        ]

        this._selectedCategory={}
        makeAutoObservable(this)
    }

    setCategories(categories) {
        this._categories = categories
    }
    setWorks(works) {
        this._works = works
    }

    setSelectedCategory(categories){
        this._selectedCategory = categories

    }

    get categories() {
        return this._categories
    }
    get works() {
        return this._works
    }
    get selectedCategory(){
        return this._selectedCategory
    }


}