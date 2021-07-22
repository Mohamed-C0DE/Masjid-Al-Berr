import React from "react";
import { BsDownload } from "react-icons/bs";

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
            <td className="table-left">Prayer</td>
            <td className="table-mid">Adthan</td>
            <td className="table-right">Iqama</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="prayer-name ">Fajr</td>
            <td className="table-mid">{fa}</td>
            <td className="table-right">{fi}</td>
          </tr>
          <tr>
            <td className="prayer-name">Duhur</td>
            <td className="table-mid">{da}</td>
            <td className="table-right">{di}</td>
          </tr>
          <tr>
            <td className="prayer-name">Asr</td>
            <td className="table-mid">{aa}</td>
            <td className="table-right">{ai}</td>
          </tr>
          <tr>
            <td className="prayer-name">Maghrib</td>
            <td className="table-mid">{ma}</td>
            <td className="table-right">{mi}</td>
          </tr>
          <tr>
            <td className="prayer-name">Isha</td>
            <td className="table-mid">{ia}</td>
            <td className="table-right">{ii}</td>
          </tr>
        </tbody>
      </table>
      <p className="jummah-prayer">Jummah Prayers: 1:15pm, 2pm</p>
      <a className="download-prayer-times">
        <BsDownload className="download-logo" />
        Annual Prayer Times
      </a>
    </div>
  );
};

export default PrayerTimes;
