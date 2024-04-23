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
let disCostPerNight1;
let disCostPerNight2;

if (discountedApril <= month && discountedAprilDay <= day){
    disCostPerNight1 = Hotel.costPerNight * .2;
    disCostPerNight2 = Hotel2.costPerNight * .2;

}

if(discountedMay <= month && discountedMayDay <= day){
    disCostPerNight1 = Hotel.costPerNight * .1;
    disCostPerNight2 = Hotel2.costPerNight * .1;
}
