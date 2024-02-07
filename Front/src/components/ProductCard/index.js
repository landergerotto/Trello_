import styles from "./styles.module.scss";

import {  Link } from "react-router-dom";

export default function ProductCard() {
  return (
    <>
      {/* <body> */}
        <div className={styles.card_container}>
          <Link to="/" className={styles.hero_image_container}>
            <img
              className={styles.hero_image}
              src="https://i.postimg.cc/NfR2yhNs/image-equilibrium.jpg"
              alt="Spinning glass cube"
            />
          </Link>
          <main className={styles.main_content}>
            <h1>
              <Link to="/">Equilibrium #3429</Link>
            </h1>
            <hr></hr>
            <p>Our Equilibrium collection promotes balance and calm.</p>
            <div className={styles.flex_row}>
              <div className={styles.coin_base}>
                <img
                  src="https://static.vecteezy.com/system/resources/previews/010/156/541/non_2x/dollar-icon-sign-symbol-design-free-png.png"
                  alt="Ethereum"
                  className={styles.small_image}
                />
                <span>R$ 0.00</span>
              </div>
              <div className={styles.time_left}>
                <img
                  src="https://i.postimg.cc/prpyV4mH/clock-selection-no-bg.png"
                  alt="clock"
                  className={styles.small_image}
                />
                <span>3 days left</span>
              </div>
            </div>
          </main>
          {/* <div className={styles.card_attribute}>
            <img
              src="https://i.postimg.cc/SQBzNQf1/image-avatar.png"
              alt="avatar"
              className={styles.small_avatar}
            />
            <p>
              Creation of{" "}          
                <a >Jules Wyvern</a>
            </p>
          </div> */}
        </div>
      {/* </body> */}
    </>
  );
}
