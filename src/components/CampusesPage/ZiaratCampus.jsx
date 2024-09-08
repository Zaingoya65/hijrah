import React from "react";
import styles from "./CampusCard.module.css";

function DeraGhaziKhanCampus() {
  return (
    <>
      <div className={styles.pad}>
        <div className={`{styles.container} container`}>
          <h3 className={styles.title}>
            Al-Hijrah Residential School and College, Ziarat
          </h3>{" "}
          <br />
          <p className={styles.para}>
            AHRSC, Ziarat, transformative initiative, established in 2004
            through a pioneering public-private partnership with the Government
            of Balochistan. This visionary collaboration, formalized via a
            Memorandum of Understanding (MoU) with the Ministry of Education,
            Government of Balochistan, provided us with the essential
            infrastructure to embark on our educational journey.
          </p>
          <p className={styles.para}>
            Our mission is simple yet profound: to empower the youth of
            Balochistan by enrolling two students from every district in the
            province. We offer them more than just an education; we provide a
            holistic experience that blends conventional academic excellence
            with a robust character-building framework. At the heart of our
            educational philosophy lie three core values: a deep respect for
            humanity (Ensaneyat), a strong connection to Islamic faith
            (Islameyath), and a fervent dedication to patriotism (Pakistaniat).
          </p>
          <p className={styles.para}>
            Our students join us in the 7th grade and continue their educational
            journey with us through to the 12th grade, during which we shoulder
            the entire burden of their education. Tuition, accommodation, meals,
            uniforms, stationery, and all other living expenses are generously
            covered by us, ensuring that parents are not burdened with any
            financial concerns.
          </p>
          <p className={styles.para}>
            Beyond academics, we view education as a lifelong journey. To this
            end, we have established ‘Al-Hijrah Alumni Pakistan,’ a registered
            association that serves as a bridge to connect and support our
            graduates. Through this network, alumni benefit from valuable
            opportunities for networking, career placement, and mentorship. We
            are committed to nurturing the capacities of our alumni, empowering
            them to initiate solutions to local development challenges and
            societal issues. Our alumni are actively engaged in impactful
            activities such as flood response, ration distribution programs,
            medical camps, and more.
          </p>
          <p className={styles.para}>
            Our program is not just about attending a good school; it’s about
            forging a path from a quality education to meaningful employment and
            contributing to the creation of a more just and equitable society.
            We invite you to join us on this transformative journey.
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
