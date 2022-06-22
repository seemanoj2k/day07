class Movie {
    constructor(title, studio, rating) {
        this.title = title;
        this.studio = studio;
        if(rating==null) {
            return this.rating = "PG";}
        else{
            return this.rating=rating;
        }
    }

    getPG(array){
        var res=array.filter((element)=>element.rating=="PG");
        return res;
    }

}
var movie1 = new Movie("Casino Royale", "Eon Productions", "PG13");
var movie2 = new Movie("Pokiri", "vaishnavi Productions", "PG12");
var movie3 = new Movie("Don", "Sivakarthikeyan Productions");
var movie4 = new Movie("sarkaru vari patta", "Mythri Movie Makers","PU");

var array = [movie1, movie2, movie3, movie4];
//console.log(array)
// c) Write a method getPG, which takes an array of base type Movie as its argument,
//  and returns a new array of only those movies in the input array with a rating of "PG". 
// You may assume the input array is full of Movie instances. The returned array need not be full.
console.log(movie1.getPG(array));
// d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, 
// the studio “Eon Productions”, and the rating “PG­13”
var movie5 = new Movie("Casino Royale", "Eon Productions", "PG13");
//console.log(movie5)