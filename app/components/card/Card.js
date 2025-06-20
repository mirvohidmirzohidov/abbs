import React from "react";
import styles from "./card.module.css";

const Card = ({ type, data }) => {
  if (type === "howItWorks") {
    return (
      <div className={`${styles.card} ${styles.howItWorksCard}`} style={{ maxWidth: data.width ? data.width : "", width: "100%", textAlign: data.textAlign ? "center" : "" }}>
        {data.img && <img src={data.img} alt="" />}
        {data.subTitle && <div className={styles.cardSubTitle}><h3>{data.subTitle}</h3></div>}
        {data.title && <div className={styles.title}>{data.title}</div>}
        <div
          className={`${styles.cardText}`}
          dangerouslySetInnerHTML={{ __html: data.text }}
        ></div>
      </div>
    );
  }

  if (type === "benefits") {
    return (
      <div className={`${styles.card} ${styles.benefitsCard}`}>
        <div style={{ height: "52px", lineHeight: "52px" }}>{data.icon}</div>
        <div className={styles.cardTitle}>{data.title}</div>
        <div className={`${styles.cardText} cardText2`}>{data.text}</div>
      </div>
    );
  }

  if (type === "services") {
    return (
      <div className={`${styles.card} ${styles.servicesCard}`}>
        <div className={styles.cardTop}>
          <div className={styles.cardImgWrapper} style={{ backgroundColor: data.background }}>
            <img style={{ width: data.width }} src={data.img} alt="" />
          </div>
          <div style={{ textAlign: "center" }}>
            <div className={styles.cardDiscount}>{data.discount}</div>
            <div className={styles.cardPrice}>{data.salePrice}</div>
            <div className={styles.cardOldPrice}>{data.oldPrice}</div>
          </div>
        </div>
        <div className={styles.cardTitle}>{data.name}</div>
        <div className={styles.cardText}>{data.title}</div>
        <div className={styles.cardInfo}>{data.info}</div>
        <button onClick={data.onclick}>
          Ознакомиться детальнее
          <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.5 1L8.83744 7.84828C8.9243 7.92935 8.92175 8.06782 8.83197 8.14563L1.5 14.5" stroke="white" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    );
  }

  if (type === "reviews") {
    return (
      <div className={`${styles.card} ${styles.reviewsCard} reviewsCard`}>
        <div className={styles.reviewsCardTop}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <img className={styles.reviewsCardImg} src={data.image} alt="" />
            <div>
              <h3>{data.name}</h3>
              <p className={styles.cardText1}>Telegram</p>
            </div>
          </div>
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0)">
              <path d="M11 0C17.0751 0 22 4.92487 22 11C22 17.0751 17.0751 22 11 22C4.92487 22 0 17.0751 0 11C0 4.92487 4.92487 0 11 0ZM15.4971 6.62207C15.0833 6.6295 14.4482 6.85099 11.3945 8.12109C10.3246 8.5661 8.18608 9.48673 4.97949 10.8838C4.45914 11.0907 4.1863 11.2933 4.16113 11.4912C4.11346 11.8715 4.66078 11.99 5.34961 12.2139C5.91125 12.3964 6.66681 12.6107 7.05957 12.6191C7.41568 12.6268 7.81319 12.4799 8.25195 12.1787C11.2481 10.1562 12.7955 9.13337 12.8926 9.11133C12.9611 9.09579 13.0559 9.07671 13.1201 9.13379C13.1842 9.191 13.1777 9.29911 13.1709 9.32812C13.115 9.56136 10.3067 12.1162 10.1406 12.2881C9.52172 12.9309 8.8175 13.3244 9.90332 14.04C10.8431 14.6593 11.3903 15.0548 12.3584 15.6895C12.977 16.095 13.4619 16.5753 14.1006 16.5166C14.3945 16.4896 14.6983 16.2137 14.8525 15.3896C15.2169 13.4415 15.9331 9.21983 16.0986 7.48047C16.1131 7.32814 16.0947 7.13339 16.0801 7.04785C16.0654 6.96226 16.035 6.84028 15.9238 6.75C15.792 6.64306 15.5881 6.62047 15.4971 6.62207Z" fill="white" />
            </g>
            <defs>
              <clipPath id="clip0">
                <rect width="22" height="22" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className={styles.cardText}>{data.message}</div>
      </div>
    );
  }

  return null;
};

export default Card;
