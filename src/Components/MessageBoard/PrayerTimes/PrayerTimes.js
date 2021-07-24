import React from "react";
import { BsDownload } from "react-icons/bs";
import {
  date,
  fa,
  fi,
  da,
  di,
  aa,
  ai,
  ma,
  mi,
  ia,
  ii,
} from "./PrayerTimesData";

import "./PrayerTimes.css";
import { Link } from "react-router-dom";

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
      <Link to="/" className="download-prayer-times">
        <BsDownload className="download-logo" />
        Annual Prayer Times
      </Link>
    </div>
  );
};

export default PrayerTimes;
