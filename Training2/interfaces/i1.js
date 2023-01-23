function getProductDetails(productobj) {
    return productobj.productName;
}
var productobj = { productId: 1001, productName: 'Mobile' };
console.log(getProductDetails(productobj));
getProductDetails(productobj);
getProductDetails(productobj);
