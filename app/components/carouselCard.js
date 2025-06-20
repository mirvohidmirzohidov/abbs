"use client";

import React from "react";
import Slider from "react-slick";
import Card from "./card/Card";
import styles from "../page.module.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ReviewsSection = ({ cards4 }) => {
    const slidesToShow = Math.min(cards4.length, 3);

    const settings = {
        dots: true,
        infinite: cards4.length > slidesToShow, // infinite faqat yetarli slayd bo‘lsa
        speed: 500,
        centerMode: cards4.length >= 3, // centerMode faqat 3 ta bo‘lsa
        centerPadding: "0px",
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: Math.min(cards4.length, 2), // 2ta ko'rsatadi
                    infinite: cards4.length > 2,
                },
            },
            {
                breakpoint: 500, // 500px dan pastda
                settings: {
                    slidesToShow: 1, // 1ta ko'rsatadi
                    infinite: cards4.length > 1,
                },
            },
        ],
    };

    return (
        <section className={styles.reviews} style={{ padding: "40px 20px", textAlign: "center" }}>
            <div className={styles.mainTitle}>
                <h3>Отзывы</h3>
            </div>
            <div className={styles.title}>Что о нас говорят пользователи <br /> и как оценивают наш сервис?</div>
            <div className={styles.subTitle}>Больше живых отзывов можно найти в нашем Telegram канале @AbbsNet</div>
            <div className={styles.rating}>
                <img src="/assets/ratingIMages.png" alt="" />
                <div>
                    <div className={styles.ratingStars}>
                        {Array.from({ length: 5 }).map((_, index) => (
                            <svg key={index} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.75347 0.694831L6.48611 5.86671L1.4132 6.69874C0.503475 6.84718 0.138892 8.10889 0.798614 8.83155L4.46875 12.855L3.6007 18.5386C3.44445 19.5659 4.40625 20.3355 5.21181 19.855L9.75 17.1714L14.2882 19.855C15.0938 20.3315 16.0556 19.5659 15.8993 18.5386L15.0313 12.855L18.7014 8.83155C19.3611 8.10889 18.9965 6.84718 18.0868 6.69874L13.0139 5.86671L10.7465 0.694831C10.3403 -0.227044 9.1632 -0.238763 8.75347 0.694831Z" fill="#EAB308" />
                            </svg>
                        ))}
                    </div>
                    <p>Средняя оценка <span>4.95</span></p>
                </div>
            </div>
            <Slider {...settings}>
                {cards4.map((user, index) => (
                    <div key={index} style={{ padding: "0 10px" }}>
                        <Card type="reviews" data={user} />
                    </div>
                ))}
            </Slider>

            <div className={styles.buttonItem}>
                <button>Перейти в Telegram канал
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_1_58)">
                            <path d="M11 0C17.0751 0 22 4.92487 22 11C22 17.0751 17.0751 22 11 22C4.92487 22 0 17.0751 0 11C0 4.92487 4.92487 0 11 0ZM15.4971 6.62207C15.0833 6.6295 14.4482 6.85099 11.3945 8.12109C10.3246 8.5661 8.18608 9.48673 4.97949 10.8838C4.45914 11.0907 4.1863 11.2933 4.16113 11.4912C4.11346 11.8715 4.66078 11.99 5.34961 12.2139C5.91125 12.3964 6.66681 12.6107 7.05957 12.6191C7.41568 12.6268 7.81319 12.4799 8.25195 12.1787C11.2481 10.1562 12.7955 9.13337 12.8926 9.11133C12.9611 9.09579 13.0559 9.07671 13.1201 9.13379C13.1842 9.191 13.1777 9.29911 13.1709 9.32812C13.115 9.56136 10.3067 12.1162 10.1406 12.2881C9.52172 12.9309 8.8175 13.3244 9.90332 14.04C10.8431 14.6593 11.3903 15.0548 12.3584 15.6895C12.977 16.095 13.4619 16.5753 14.1006 16.5166C14.3945 16.4896 14.6983 16.2137 14.8525 15.3896C15.2169 13.4415 15.9331 9.21983 16.0986 7.48047C16.1131 7.32814 16.0947 7.13339 16.0801 7.04785C16.0654 6.96226 16.035 6.84028 15.9238 6.75C15.792 6.64306 15.5881 6.62047 15.4971 6.62207Z" fill="black" />
                        </g>
                        <defs>
                            <clipPath id="clip0_1_58">
                                <rect width="22" height="22" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>

                </button>
            </div>
        </section>
    );
};

export { ReviewsSection };
