enum MobilePrice {blue ="799" , violet ="357" ,red ="908" , pAvailable ="Available" ,pDiscount ="13"}
document.getElementById("blue").innerHTML = MobilePrice.blue;
document.getElementById("gprice").innerHTML = MobilePrice.red;
document.getElementById("violet"). innerHTML = MobilePrice.violet;
document.getElementById("red").innerHTML = MobilePrice.red;


document.getElementById("pAvailable").innerHTML = MobilePrice.pAvailable;
document.getElementById("pDiscount").innerHTML = MobilePrice.pDiscount;



function getMobileByColor( color: string){
    switch(color){
        case 'blue' :
            document.getElementById("pPrice").innerHTML = MobilePrice.blue;
            document.getElementById("pDiscount").innerHTML = MobilePrice.pDiscount;
            break;
            case 'violet' :
            document.getElementById("pPrice").innerHTML = MobilePrice.violet;
            document.getElementById("pDiscount").innerHTML = MobilePrice.pDiscount;
            break;
            case 'red' :
            document.getElementById("pPrice").innerHTML = MobilePrice.red;
            document.getElementById("pDiscount").innerHTML = MobilePrice.pDiscount;
            break;
            default :     
    }
}