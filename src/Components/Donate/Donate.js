import React, { useState } from "react";
import { FaWalking } from "react-icons/fa";
import { SiMailDotRu } from "react-icons/si";
import { RiComputerLine } from "react-icons/ri";
import classes from "./Donate.module.css";
import { Link } from "react-router-dom";

const Donate = () => {
  const [scrolled, setScrolled] = useState(false);

  document.addEventListener("scroll", () => {
    let scrolledPosition = window.scrollY;
    if (scrolledPosition > 10) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });

  return (
    <div
      className={
        scrolled
          ? classes["scrolled-donate-section"]
          : classes["donate-section"]
      }
    >
      <div className={classes["donate-wrapper"]}>
        <div>
          <h2>Ways You Can Donate</h2>
          <div className={classes.cards}>
            <div className={classes.card}>
              <div className={classes.image}>
                <FaWalking className={classes.icon} />
              </div>
              <p className={classes.cardTitle}>In Person</p>
              <p className={classes.cardContent}>
                Come down to our location to drop off your donations. You can
                also help by volunteering your time, speak with our manager for
                more information
              </p>
            </div>
            <div className={classes.card}>
              <div className={classes.image}>
                <SiMailDotRu className={classes.icon} />
              </div>
              <p className={classes.cardTitle}>Email</p>
              <p className={classes.cardContent}>
                You can help us by emailing us your donations. If you are
                interested in volunteering please email us. All inquiries can be
                made to info@email.com
              </p>
            </div>
            <div className={classes.card}>
              <div className={classes.image}>
                <RiComputerLine className={classes.icon} />
              </div>
              <p className={classes.cardTitle}>Online</p>
              <p className={classes.cardContent}>
                We accept donations made online through PayPal.
                <span>
                  <Link to="/donate" className={classes.link}>
                    {""} Click here {""}
                  </Link>
                </span>
                for more information.
              </p>
            </div>
          </div>
        </div>
        <div className={classes.verses}>
          <p className={classes.arabicText}>
            : قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ
          </p>
          <p className={classes.arabicText}>
            لَوْ كَانَ لِي مِثْلُ أُحُدٍ ذَهَبًا ، لَسَرَّنِي أَنْ لاَ تَمُرَّ
            عَلَيَّ ثَلاَثُ لَيَالٍ وَعِنْدِي مِنْهُ شَيْءٌ ، إِلَّا شَيْئًا
            أَرْصُدُهُ لِدَيْنٍ
          </p>
          <p className={classes.translation}>
            The Prophet Muhammad (peace be upon him) said: “ If I had (a
            mountain of) gold, I would love that, before three days had passed,
            not a single (coin) thereof remained with me if I found somebody to
            accept it (as charity), excluding some amount that I would keep for
            the payment of my debts.”
          </p>
          <p className={classes["translation-source"]}>
            Sahih Al-Bukhari, Volume 9, Hadith 334
          </p>
        </div>
      </div>
    </div>
  );
};

export default Donate;
