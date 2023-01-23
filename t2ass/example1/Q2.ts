var mobileList = [
    {
        pId:567,productName :"Sony 1",productPrice: "899",productAvailable :true
    },
    {
        pId:345,productName :"Sony 2",productPrice: "455",productAvailable :true
    },
    {
        pId:467,productName :"Sony 3",productPrice: "247",productAvailable :false
    },

];


function getMobileDetails( manufacturer: string , id:number){
    if (manufacturer === 'sony1'){
            document.getElementById("pPrice0").innerHTML = mobileList[0].productPrice;
            document.getElementById("pName0").innerHTML = mobileList[0].productName;
            document.getElementById("pAvailable0").innerHTML= mobileList[0].productAvailable? ("Available");
           
    }
           
    else if (manufacturer === 'sony2'){
        document.getElementById("pPrice1").innerHTML = mobileList[1].productPrice;
        document.getElementById("pName1").innerHTML = mobileList[1].productName;
        document.getElementById("pAvailable1").innerHTML= mobileList[0].productAvailable? ("Available");
       
}
if (manufacturer === 'sony3')
{
    document.getElementById("pPrice2").innerHTML = mobileList[2].productPrice;
    document.getElementById("pName2").innerHTML = mobileList[2].productName;
    document.getElementById("pAvailable2").innerHTML= mobileList[0].productAvailable? ("Available");
    
}
}