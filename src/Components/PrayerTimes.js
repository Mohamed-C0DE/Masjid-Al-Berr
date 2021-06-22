import React from "react";
import "./PrayerTimes.css";

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

let date = `${month} ${day}, ${year}`;

let fa,
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
    case "December 20, 2020":
      fa = "6:20am";
      fi = "6:45am";
      da = "12:34pm";
      di = "1:00pm";
      aa = "2:44pm";
      ai = "3:15pm";
      ma = "5:05pm";
      mi = "5:10pm";
      ia = "6:36pm";
      ii = "7:30pm";
      break;
    default:
      fa = "6:20am";
      fi = "6:45am";
      da = "12:35pm";
      di = "1:00pm";
      aa = "2:45pm";
      ai = "3:15pm";
      ma = "5:05pm";
      mi = "5:10pm";
      ia = "6:37pm";
      ii = "7:30pm";
      break;
  }
};

prayerTimes();

const PrayerTimes = () => {
  return (
    <div className="prayer-times">
      <h3>Prayer Times</h3>
      <h4 className="day">{date}</h4>
      <table className="prayer-table">
        <thead>
          <tr className="table-row">
            <td>Prayer</td>
            <td>Adthan</td>
            <td>Iqama</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="prayer-name">Fajr</td>
            <td>{fa}</td>
            <td>{fi}</td>
          </tr>
          <tr>
            <td className="prayer-name">Duhur</td>
            <td>{da}</td>
            <td>{di}</td>
          </tr>
          <tr>
            <td className="prayer-name">Asr</td>
            <td>{aa}</td>
            <td>{ai}</td>
          </tr>
          <tr>
            <td className="prayer-name">Maghrib</td>
            <td>{ma}</td>
            <td>{mi}</td>
          </tr>
          <tr>
            <td className="prayer-name">Isha</td>
            <td>{ia}</td>
            <td>{ii}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PrayerTimes;
