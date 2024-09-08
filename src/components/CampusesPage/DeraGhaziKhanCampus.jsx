import React from "react";
import styles from "./CampusCard.module.css";

function DeraGhaziKhanCampus() {
  return (
    <>
    <div className={styles.pad}>
      <div className={`{styles.container} container`}>
        <h3 className={styles.title}>Al-Hijrah Residential School and College, Dera Ghazi Khan</h3> <br />
        <p className={styles.para}>
          Al-Hijrah Residential School and College, D.G.Khan, a remarkable
          project inspired by our successful Ziarat endeavor. The project is
          dedicated to uplifting students from economically disadvantaged
          backgrounds in Sindh and South Punjab.
        </p>
        <p className={styles.para}>
          This project was born out of a stark realization: certain regions in
          our nation bear the heavy burden of relative poverty. For instance,
          while Chakwal district boasts a mere 5.6 percent poverty rate, the
          plight of Rajan Pur district in southern Punjab paints a grim picture,
          with a staggering poverty rate of 63.3 percent – nearly eleven times
          higher than Chakwal’s. These stark inequalities not only hinder our
          country’s development but also fuel resentment and prejudice.
        </p>
        <p className={styles.para}>
          Our mission at Al-Hijrah is to enroll and educate students from these
          underserved communities. We provide them with a high-quality
          conventional education, firmly rooted in our trifold ethos of Ensaniat
          (respect for humanity), Islamiat (Faithfullness), and Pakistaniat
          (Patriotism). Our commitment extends beyond academics; we nurture a
          strong sense of civic responsibility through our equity-based
          education program, ensuring equal opportunities for all. This
          transformational journey empowers the raw talent of these regions,
          turning them into the breadwinners for their families and catalysts
          for societal change.”
        </p>
        <ul>
        Beneficiary Profile:
            <li>1. Student has Family Income below Rs 400,000 per annum</li>
            <li>2. Student has passed class 6th from Government School</li>
            <li>3. Student has qualified test and interview of Al-Hijrah</li>
        </ul>
      </div>
      </div>
    </>
  );
}

export default DeraGhaziKhanCampus;
