function openNav() {
    document.getElementById("SideNav").style.width = "250px";
}   

function closeNav() {
    document.getElementById("SideNav").style.width = "0px";
}

//javascript :O

let minNights = 2;

const Hotel = {
    costPerNight: 50,
    name: "Mountain Retreat",
}

const Hotel2 = {
    costPerNight: 40,
    name: "Trail Getaway",
}

const discountedApril = new Date();
const discountedAprilDay = new Date();

discountedApril.setMonth(3);
discountedAprilDay.setDate(30)

const discountedMay = new Date();
const discountedMayDay = new Date();

discountedMay.setMonth(4);
discountedMayDay.setDate(31);

let month = new Date();
month.getMonth();

let day = new Date();
day.getDate();

let Weekday = new Date();
Weekday.getDay();

let disCostPerNight1;
let disCostPerNight2;
let weekDiscount;
let weekDiscount2;

if(Weekday = 1 ||  2 || 3){
    weekDiscount = Hotel.costPerNight * .1;
    weekDiscount2 = Hotel2.costPerNight * .1;
}

if (discountedApril <= month && discountedAprilDay <= day){
        disCostPerNight1 = Hotel.costPerNight * .2;
        disCostPerNight2 = Hotel2.costPerNight * .2;

    }

if(discountedMay <= month && discountedMayDay <= day){
        disCostPerNight1 = Hotel.costPerNight * .1;
        disCostPerNight2 = Hotel2.costPerNight * .1;
    }

let totalDiscount;
let TotalCostPerNight;

if(RadioNodeList = 0){
    totalDiscount = disCostPerNight1 + weekDiscount;
    TotalCostPerNight = Hotel.costPerNight - totalDiscount;
}

if(RadioNodeList = 1){
    totalDiscount = disCostPerNight2 + weekDiscount;
    TotalCostPerNight = Hotel.costPerNight - totalDiscount;
}