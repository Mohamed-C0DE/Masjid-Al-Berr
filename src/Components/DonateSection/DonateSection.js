import React from "react";
import { Link } from "react-router-dom";
import Button from "../../UI/Button";
import "./DonateSection.css";

const DonateSection = () => {
  return (
    <section className="donate">
      <h3 className="donate-title">Donate to Your Masjid</h3>
      <div className="donate-text">
        <p className="arabic-text">
          لَن تَنَالُواْ ٱلْبِرَّ حَتَّىٰ تُنفِقُواْ مِمَّا تُحِبُّونَ ۚ وَمَا
          تُنفِقُواْ مِن شَىْءٍۢ فَإِنَّ ٱللَّهَ بِهِۦ عَلِيمٌ
        </p>
        <p>
          <em>
            “By no means shall you attain piety, unless you spend (in Allah’s
            Cause) of that which you love; and whatever of good you spend, Allah
            knows it well.”​
          </em>
        </p>
        <p className="donate-paragraph-ref">
          <em>[Al-Imran 3:92]</em>
        </p>
      </div>
      <Link to="/donate">
        <Button>Donate Now!</Button>
      </Link>
    </section>
  );
};

export default DonateSection;
