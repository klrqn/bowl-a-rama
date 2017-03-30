// an object
var brama = {
    // key: value pairs
    bizName: "Bowl-A-Rama",
    totalLanes: 20,
    rentedLanes: 5,

    // a method is just a function within an object (as the "key")
    openLanes : function() {
        return this.totalLanes - this.rentedLanes;
    }
};

// fullName : function() {
//    return this.firstName + " " + this.lastName;
// }

var business = document.getElementById('bName');
business.textContent = brama.bizName;

var tLanes = document.getElementById('tLanes');
tLanes.textContent = "We have a total of " + brama.totalLanes + " bowling lanes";

var rLanes = document.getElementById('rLanes');
rLanes.textContent = "currently there are " + brama.rentedLanes + " rented lanes";

var oLanes = document.getElementById('oLanes');
oLanes.textContent = "So there are currently " + brama.openLanes() + " available";
