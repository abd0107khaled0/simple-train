let over = {

    bestsaller: 20 ,
    round: 10, 
    arr: 15,
    getaway: function(){

        return this.bestsaller + (this.round + this.arr)
    }
}
console.log(over.getaway());
