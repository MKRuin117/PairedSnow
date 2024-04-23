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
let disCostPerNight;

if (discountedApril < month && discountedAprilDay <= day){
    disCostPerNight = Hotel.costPerNight * .2;
}