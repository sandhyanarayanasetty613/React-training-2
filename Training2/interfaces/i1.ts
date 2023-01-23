interface Product{
    productId: number;
    productName: string;
}
function getProductDetails(productobj:Product):string{
    return productobj.productName ;

}
let productobj = {productId:1001 , productName :'Mobile'};
 
console.log(getProductDetails(productobj));
getProductDetails(productobj);
 getProductDetails(productobj);