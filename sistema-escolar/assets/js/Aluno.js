 class Aluno extends User{
    constructor(name,email,password,turma){
        super(name,email,password);
        this._turma = turma;
    }

    get turma(){
        return this._turma;
    }

    set turma(turma){
        this._turma = turma;
    }

}