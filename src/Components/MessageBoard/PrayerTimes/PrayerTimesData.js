const currentTime = new Date();

const monthString = function () {
  currentTime.getMonth();
  switch (currentTime.getMonth()) {
    case 0:
      return "January";
    case 1:
      return "February";
    case 2:
      return "March";
    case 3:
      return "April";
    case 4:
      return "May";
    case 5:
      return "June";
    case 6:
      return "July";
    case 7:
      return "August";
    case 8:
      return "September";
    case 9:
      return "October";
    case 10:
      return "November";
    case 11:
      return "December";
    default:
      return "January";
  }
};

const month = monthString();
const day = currentTime.getDate();
const year = currentTime.getFullYear();

export let date = `${month} ${day}, ${year}`;

export let fa,
  fi,
  da,
  di,
  aa,
  ai,
  ma,
  mi,
  ia,
  ii = "";

let prayerTimes = function () {
  switch (date) {
    case "July 23, 2021":
      fa = "4:31am";
      fi = "5:15am";
      da = "1:43pm";
      di = "Jummah";
      aa = "5:38pm";
      ai = "6:00pm";
      ma = "9:04pm";
      mi = "9:09pm";
      ia = "10:13pm";
      ii = "10:45pm";
      break;
    case "July 24, 2021":
      fa = "4:33am";
      fi = "5:15am";
      da = "1:43pm";
      di = "2:00pm";
      aa = "5:38pm";
      ai = "6:00pm";
      ma = "9:03pm";
      mi = "9:08pm";
      ia = "10:12pm";
      ii = "10:45pm";
      break;
    case "July 25, 2021":
      fa = "4:34am";
      fi = "5:15am";
      da = "1:44pm";
      di = "2:00pm";
      aa = "5:38pm";
      ai = "6:00pm";
      ma = "9:02pm";
      mi = "9:07pm";
      ia = "10:10pm";
      ii = "10:45pm";
      break;
    default:
      fa = "8:00am";
      fi = "8:00am";
      da = "8:00am";
      di = "8:00am";
      aa = "8:00am";
      ai = "8:00am";
      ma = "8:00am";
      mi = "8:00am";
      ia = "8:00am";
      ii = "8:00am";
      break;
  }
};

prayerTimes();
