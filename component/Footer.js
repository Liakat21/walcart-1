import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/footer logo.png"  layout="fill" alt="" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h3 className={styles.motto}>
           Flexibility, elegance and functionality makes WALCART more innovative and ideal for residential and commercial use.
          </h3>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR ADDRESS</h1>
          <p className={styles.text}>
          Plot-1088, Block-I, Sabrina Sobhan Road P.O-Khilkhet
            <br /> P.S-Vatara, Bashundhara R/A, 
            <br /> Dhaka-1229.
          </p>
          <p className={styles.text}>
          Chandra, Kaliakoir,  
            <br /> Walton MicrotechTo
            <br /> Hightech Rd
          </p>
          
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY UNTIL FRIDAY
            <br /> 9:00 – 22:00
          </p>
          <p className={styles.text}>
            SATURDAY - SUNDAY
            <br /> 12:00 – 24:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;