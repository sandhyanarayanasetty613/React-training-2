var MobilePrice;
(function (MobilePrice) {
    MobilePrice["blue"] = "799";
    MobilePrice["violet"] = "357";
    MobilePrice["red"] = "908";
    MobilePrice["pAvailable"] = "Available";
    MobilePrice["pDiscount"] = "13";
})(MobilePrice || (MobilePrice = {}));
document.getElementById("blue").innerHTML = MobilePrice.blue;
document.getElementById("gprice").innerHTML = MobilePrice.red;
document.getElementById("violet").innerHTML = MobilePrice.violet;
document.getElementById("red").innerHTML = MobilePrice.red;
document.getElementById("pAvailable").innerHTML = MobilePrice.pAvailable;
document.getElementById("pDiscount").innerHTML = MobilePrice.pDiscount;
function getMobileByColor(color) {
    switch (color) {
        case 'blue':
            document.getElementById("pPrice").innerHTML = MobilePrice.blue;
            document.getElementById("pDiscount").innerHTML = MobilePrice.pDiscount;
            break;
        case 'violet':
            document.getElementById("pPrice").innerHTML = MobilePrice.violet;
            document.getElementById("pDiscount").innerHTML = MobilePrice.pDiscount;
            break;
        case 'red':
            document.getElementById("pPrice").innerHTML = MobilePrice.red;
            document.getElementById("pDiscount").innerHTML = MobilePrice.pDiscount;
            break;
        default:
    }
}
