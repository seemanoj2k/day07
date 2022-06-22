class Person{
    constructor(fname,lname,age,place){
        this.fname=fname;
        this.lname=lname;
        this.age=age;
        this.place=place
    }
    
}

var user= new Person("walazapet","chandramanoj","21","Tirupati");
console.log(user.fname);
console.log(user.lname);
console.log(user.age);
console.log(user.place);

user.fname = 'Bansar';
console.log(user.fname);