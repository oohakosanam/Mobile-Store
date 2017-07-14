

(function() {
    var app=angular.module("MobileStore",[]);
    var iphone = {
        name: "iphone7 Plus",
        color: "Apple red",
        memory: "3GB RAM,128GB Internal Memory",
        price: 80000,
        image: "img/apple.png",
        isSoldOut: false,
        activeTab:"Description"

};
    var samsung = {
        name: "iphone7 Plus",
        color: "Black",
        memory: "6GB RAM,64GB Internal Memory",
        price: 65000,
        image: "img/samsung.png",
        isSoldOut: false,
        activeTab:"Description"

};
    var moto = {
        name: "MotoG4 Plus",
        color: "Black",
        memory: "6GB RAM,32GB Internal Memory",
        price: 13000,
        image: "img/moto.png",
        isSoldOut: false,
        activeTab:"Description"

};
    var apple2 = {
        name: "iphone7 plus ",
        color: "Black",
        memory: "6GB RAM,32GB Internal Memory",
        price: 75000,
        image: "img/apple2.png",
        isSoldOut: false,
        activeTab:"Description"

};



    app.controller("StoreController", function () {
        this.mobiles = [iphone, samsung, moto,apple2];
        this.setActiveTab=function (mobile,tab){
            mobile.activeTab=tab;
        }

    });
})();

