

 class Professor extends User{
    constructor(name,email,password,materias){
        super(name,email,password);
        this._materias = materias;
    }


    get materias(){
        return this._materias;
    }

    set materias(materias){
        this._materias = materias;
    }

}