import React, { useState, useEffect } from "react";
import firebaseDb from "../../../firebase";
import { doc, getDoc } from "firebase/firestore";
import { BsDownload } from "react-icons/bs";
import "./PrayerTimes.css";

const currentTime = new Date();

// Getting the month as a string
const getMonthString = function () {
  currentTime.getMonth();
  switch (currentTime.getMonth()) {
    case 0:
      return "Jan";
    case 1:
      return "Feb";
    case 2:
      return "Mar";
    case 3:
      return "Apr";
    case 4:
      return "May";
    case 5:
      return "Jun";
    case 6:
      return "Jul";
    case 7:
      return "Aug";
    case 8:
      return "Sep";
    case 9:
      return "Oct";
    case 10:
      return "Nov";
    case 11:
      return "Dec";
    default:
      return "Jan";
  }
};

const month = getMonthString();
const day = currentTime.getDate();
const year = currentTime.getFullYear();
const currentDate = `${month}${day}${year}`;

const PrayerTimes = () => {
  // Fajr Adthan & Iqama
  const [fa, setFa] = useState("");
  const [fi, setFi] = useState("");
  // Duhur Adthan & Iqama
  const [da, setDa] = useState("");
  const [di, setDi] = useState("");
  // Asr Adthan & Iqama
  const [aa, setAa] = useState("");
  const [ai, setAi] = useState("");
  // Magrib Adthan & Iqama
  const [ma, setMa] = useState("");
  const [mi, setMi] = useState("");
  // Isha Adthan & Iqama
  const [ia, setIa] = useState("");
  const [ii, setIi] = useState("");
  // Jummah start times
  const [jummah, setJummah] = useState("");

  // Fetch prayer data upon page load
  useEffect(() => {
    const fetchPrayerTimes = async function () {
      // Checks database to see if there is a document in the PrayerTimes collection with the current date
      const docRef = doc(firebaseDb, "PrayerTimes", currentDate);
      // Gets the data in that document
      const docSnap = await getDoc(docRef);
      // Reference to default times if a current date isn't found
      const defaultRef = doc(firebaseDb, "PrayerTimes", "default");
      // Gets data in default document
      const defaultSnap = await getDoc(defaultRef);

      // If there is a document in the PrayerTimes collection with the current date, get and display that data, else display default times
      if (docSnap.exists()) {
        setFa(docSnap.data().fa);
        setFi(docSnap.data().fi);
        setDa(docSnap.data().da);
        setDi(docSnap.data().di);
        setAa(docSnap.data().aa);
        setAi(docSnap.data().ai);
        setMa(docSnap.data().ma);
        setMi(docSnap.data().mi);
        setIa(docSnap.data().ia);
        setIi(docSnap.data().ii);
        setJummah(docSnap.data().jummah);
      } else {
        setFa(defaultSnap.data().fa);
        setFi(defaultSnap.data().fi);
        setDa(defaultSnap.data().da);
        setDi(defaultSnap.data().di);
        setAa(defaultSnap.data().aa);
        setAi(defaultSnap.data().ai);
        setMa(defaultSnap.data().ma);
        setMi(defaultSnap.data().mi);
        setIa(defaultSnap.data().ia);
        setIi(defaultSnap.data().ii);
        setJummah(defaultSnap.data().jummah);
      }
      return () => {};
    };
    fetchPrayerTimes();
  }, []);

  return (
    <div className="prayer-times">
      <h3>Prayer Times</h3>
      <h4 className="day">
        {month} / {day} / {year}
      </h4>
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
      <p className="jummah-prayer">Jummah Prayers: {jummah}</p>
      <a
        href="https://603eecf8-2270-4b2d-be72-82a4a1ff7bea.filesusr.com/ugd/486ab4_b6cc01b9ff9146beaf064aa608c2bdf4.pdf?index=true"
        target="_blank"
        className="download-prayer-times"
      >
        <BsDownload className="download-logo" />
        Annual Prayer Times
      </a>
    </div>
  );
};

export default PrayerTimes;
