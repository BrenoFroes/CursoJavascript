class CalcController{
    constructor(){
        this._displayCalc = "0";
        this._currentDate;
        this.initialize();
    }
    
    initialize(){
        
        let displayCalcEl = document.querySelector("#display");
        let dateEl = document.querySelector("#data");
        let timeEl = document.querySelector("#hora");
    
        displayCalcEl.innerHTML = "4321";
        dateEl.innerHTML = "01/09";
        timeEl.innerHTML = "23:33";
        console.log(displayCalcEl);
    }
    get displayCalc(){
        return this._displayCalc;
    }
    set displayCalc(value){
        this._displayCalc = valor;
    }
    get currentDate(){
        return this._currentDate;
    }
    set currentDate(value){
        this._currentDate = valor;
    }
}