import styles from "./FooterStyles.module.css";

function Footer() {
  return (
    <section id="footer" className={styles.container}>
      <h2>Contact Me</h2><br/>
      <div >
        <h3 style={{fontSize:'15px'}}>Email: barewarmukul321@gmail.com </h3><br/>
        <h3  style={{fontSize:'15px'}}>Mobile-No.:+91-7385561587</h3>
      </div>
      <br />
      <p>
        &copy; 2024 Mukul Barewar. <br />
        All rights reserved.
      </p>
    </section>
  );
}

export default Footer;
