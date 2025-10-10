"use client";

import Link from "next/link";
import styles from "./Card.module.css";

const ServiceCard = ({ data, pathname, clickButton, servicesPage }) => {
    return (
        <div
            style={{
                minHeight: pathname === "/" ? "390px" : "495px",
            }}
            className={`${styles.card} ${styles.servicesCard}`}
        >
            <div className={styles.cardTop}>
                <div
                    className={`${data.padding0 ? styles.padding0 : ""} ${styles.cardImgWrapper} ${servicesPage ? styles.cardImgWrapperService : ""
                        }`}
                    style={{ backgroundColor: data.background }}
                >
                    <img
                        style={{ width: data.width }}
                        src={data.img}
                        alt={`${data.name} складчина`}
                    />
                </div>
                <div style={{ textAlign: "center" }}>
                    <div className={styles.cardDiscount}>{data.discount}</div>
                    <div className={styles.cardPrice}>{data.salePrice}</div>
                    <div className={styles.cardOldPrice}>{data.oldPrice}</div>
                </div>
            </div>

            <div className={styles.cardTitle}>{data.name}</div>
            <div className={styles.cardText}>{data.title}</div>
            <div
                className={`${styles.cardInfo} ${servicesPage ? styles.serviceP : ""}`}
            >
                {data.info}
            </div>

            <div className={styles.buttonsWrapper}>
                {data.slug && (
                    <Link href={data.slug} prefetch>
                        <button className={styles.servicesCard_button}>
                            Ознакомиться детальнее
                            {!servicesPage && (
                                <svg
                                    width="10"
                                    height="16"
                                    viewBox="0 0 10 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M1.5 1L8.83744 7.84828C8.9243 7.92935 8.92175 8.06782 8.83197 8.14563L1.5 14.5"
                                        stroke="white"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            )}
                        </button>
                    </Link>
                )}
                <Link href={!clickButton ? data.buyAccess : ""}>
                    <button
                        onClick={() => {
                            if (clickButton) clickButton();
                        }}
                        className={styles.servicesCardBUtton}
                    >
                        Приобрести сервис
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceCard;
