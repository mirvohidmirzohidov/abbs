'use client';

import React from 'react';
import styles from "../page.module.css";
import { cards5 } from '../data/cards';
import Card from '../components/card/Card';
import Link from 'next/link';

export default function ServicesPageClient() {
    return (
        <div className={styles.servicesPage}>
            <div className={`${styles.container} container`}>
                <section className={`${styles.services} ${styles.header}`}>
                    <div className={styles.mainTitle}>
                        <h3>Самый большой выбор сервисов и нейросетей</h3>
                    </div>
                    <div className={styles.title}>
                        <h3><span>Ассортимент </span> сервисов AbbsNet</h3>
                    </div>
                    <div className={styles.subTitle}>Всё, что нужно для работы, креатива и жизни — в одном месте. AbbsNet подойдёт  всем — от опытных digital-специалистов до новичков и простых пользователей.</div>
                    <div className={styles.buttonItem}>
                    <a href="https://www.youtube.com/embed/qBupou26ZMw?si=iUDCMF5a72UZu2WE">
                        <button>Как работает AbbsNet?</button>
                    </a>
                    </div>
                    <p style={{ marginBottom: "30px" }} className={styles.notice}>
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.5 0C3.36425 0 0 3.36457 0 7.5C0 11.6354 3.36425 15 7.5 15C11.6358 15 15 11.6354 15 7.5C15 3.36457 11.6358 0 7.5 0ZM10.4816 7.76276L6.10658 10.5753C6.05531 10.6085 5.9961 10.625 5.93751 10.625C5.88624 10.625 5.83436 10.6122 5.78798 10.5869C5.68726 10.5319 5.625 10.4269 5.625 10.3125V4.6875C5.625 4.57307 5.68726 4.46807 5.78798 4.41313C5.88686 4.35882 6.01075 4.36216 6.10658 4.42474L10.4816 7.23724C10.5707 7.2946 10.625 7.3938 10.625 7.5C10.625 7.6062 10.5707 7.70537 10.4816 7.76276Z" fill="#FFFF00" />
                        </svg>
                        <span className={styles.yellow}>Детальный</span> видеообзор AbbsNet: <span>суть  экономия</span>
                    </p>
                    <div className={styles.cardsWrapper}>
                        {cards5.map((card, index) => (
                            <Card key={index} type="services" servicesPage={true} data={card} />
                        ))}
                    </div>
                </section>

                <section className={styles.services}>
                    <div className={styles.mainTitle}>
                        <h3>Напиши нам в Telegram — мы открыты к предложениям!</h3>
                    </div>
                    <div className={`${styles.title} ${styles.serviceNowFound}`}>Не нашел нужный сервис? <img src="/assets/icon.png" alt="" /></div>
                    <div className={styles.subTitle}>Просто напиши нам в Telegram, и мы постараемся добавить нужный сервис как   можно скорее. AbbsNet развивается вместе с вами 💛</div>
                    <div className={styles.buttonItem}>
                        <Link href={'https://t.me/m/jidwlHXNNDFi'}>
                            <button>Написать в Telegram</button>
                        </Link>
                    </div>
                </section>
            </div>
        </div>
    );
}

