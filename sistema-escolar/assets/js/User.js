 class User{
    constructor(name,email,password){
        this._name = name;
        this._email =  email;
        this._password = password;
    }

    get name(){
        return this._name;
    }

    set name(name){
        this._name = name;
    }


    get email(){
        return this._email;
    }

    set email(email){
        this._email = email;
    }


    get password(){
        return this._password;
    }

    set password(password){
        this._password = password;
    }

    exibirPerfil(){
        console.log("Nome: ", this._name, " Email: " , this._email);
    }

}