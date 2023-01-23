var gcd = function(a ,b) {
    if( !b ){
        return a;
    }
    return gcd (b, a%b);

};
console.log(gcd(23,27))