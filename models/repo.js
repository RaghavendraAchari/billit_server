var Bill = require("./bill");

var bills = [
  new Bill("Title 1", "Sub Title 1"),
  new Bill("Title 2", "Sub Title 2"),
  new Bill("Title 3", "Sub Title 3"),
  new Bill("Title 4", "Sub Title 4"),
  new Bill("Title 5", "Sub Title 5"),
  new Bill("Title 6", "Sub Title 6"),
  new Bill("Title 7", "Sub Title 7"),
  new Bill("Title 8", "Sub Title 8")
];

function getBills() {
  return bills;
}

function addBill(bill) {
  bills.push(bill);
}

function addDummyBill() {
  var id = bills.length;

  var bill = new Bill("Title " + id, "Sub Title " + id);
  bills.push(bill);
  return bills[bills.length - 1];
}

module.exports = {
  getBills,
  addBill,
  addDummyBill
};
