import React from 'react'
import styles from "../page.module.css"

const Footer = ({ className }) => {
    return (
        <div>
            <section className={`${styles.footer} ${className}`}>
                <div className={`${styles.container} container`}>
                    <div>
                        <div className={styles.mainTitle}>
                            <h3>ABBSNET</h3>
                        </div>
                        <div className={styles.subTitle}>
                            Лучший поставщик доступов в СНГ
                        </div>
                        <a href="#" target='_blank'><svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_1_383)">
                                <path d="M12.5 0C19.4036 0 25 5.59644 25 12.5C25 19.4036 19.4036 25 12.5 25C5.59644 25 0 19.4036 0 12.5C0 5.59644 5.59644 0 12.5 0ZM17.6104 7.52539C17.1402 7.53382 16.4184 7.78514 12.9482 9.22852C11.7324 9.73421 9.30221 10.7805 5.6582 12.3682C5.06658 12.6034 4.7568 12.8335 4.72852 13.0586C4.67434 13.4907 5.29629 13.6254 6.0791 13.8799C6.71733 14.0873 7.57615 14.3302 8.02246 14.3398C8.42724 14.3485 8.87918 14.1813 9.37793 13.8389C12.7825 11.5407 14.54 10.3786 14.6504 10.3535C14.7282 10.3359 14.8361 10.314 14.9092 10.3789C14.9819 10.4436 14.9755 10.5659 14.9678 10.5996C14.9059 10.8633 11.7115 13.7691 11.5234 13.9639C10.8201 14.6944 10.0198 15.1418 11.2539 15.9551C12.3217 16.6587 12.9429 17.108 14.043 17.8291C14.746 18.2899 15.2976 18.8363 16.0234 18.7695C16.3574 18.7388 16.7027 18.4247 16.8779 17.4883C17.292 15.2745 18.1058 10.4775 18.2939 8.50098C18.3104 8.32781 18.2901 8.10607 18.2734 8.00879C18.2568 7.91151 18.2212 7.77348 18.0947 7.6709C17.945 7.5494 17.7137 7.52357 17.6104 7.52539Z" fill="#989899" />
                            </g>
                            <defs>
                                <clipPath id="clip0_1_383">
                                    <rect width="25" height="25" fill="white" />
                                </clipPath>
                            </defs>
                        </svg></a>
                        <div className={`${styles.subTitle} ${styles.footerYear}`}>
                            &copy; 2025 AbbsNet
                        </div>
                    </div>
                    <div>
                        <div className={styles.subTitle}>
                            Скачать ABBSNET
                        </div>
                        <ul>
                            <li><a href="#">Windows</a></li>
                            <li><a href="#">MacOS (Intel)</a></li>
                            <li><a href="#">MacOS (M-processor)</a></li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer