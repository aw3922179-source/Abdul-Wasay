export class User {
    //CONSTRUCTORS
    constructor(name , email){
        this.name = name;
        this.email = email;
        this.loggedIn = false
    }
    // Methods
    login () {
        this.loggedIn = true ;
        console.log(`${this.name} Logged In.....`)
    }
    logOut () {
        this.loggedIn = true ;
        console.log(`${this.name} Logged Out.....`)
    }
}