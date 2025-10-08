"use client"

import Card from "../card"
import ServicesModal from "../services_modal/services_modal"
import services from "../data/services.json"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import modal from "../Alert/alert"
import styles from "../profile.module.css"

const ControlPanel = () => {
  const [opeModal, setOpenModal] = useState(false)
  const [month, setMonth] = useState(1)
  const [activeCard, setActiveCard] = useState(1)
  const [openServicesModal, setOpenServicesModal] = useState(false)
  const [product, setProduct] = useState("")
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(null)

useEffect(() => {
  if (typeof window !== "undefined") {
    setOpenModal(false)
    setOpenServicesModal(false)
    const open = localStorage.getItem("openServicesModal")
    setIsOpen(open)
  }
}, [pathname])


  useEffect(() => {
    if (isOpen) {
      setOpenServicesModal(true)
      localStorage.removeItem("openServicesModal")
    }
  }, [isOpen])

  return (
    <div className={styles.control_panel}>
      {
        services.slice(0, 4).map(item => (
          <Card setProduct={setProduct} onBuy={() => setOpenModal(true)} key={item.id} product={item} />
        ))
      }
      <div className={styles.buy_service} onClick={() => setOpenServicesModal(true)}>
        <img src="/assets/icons/cart.svg" alt="icon" />
        <p>Купить сервис</p>
        <span>(Нажмите, чтобы выбрать сервис)</span>
      </div>

      {
        opeModal && (
          <div className={styles.modal} onClick={() => setOpenModal(false)}>
            <div className={styles.modal_content} onClick={(e) => e.stopPropagation()}>
              <div className={styles.modal_top}>
                <span className={styles.close_btn} onClick={() => setOpenModal(false)}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.64 8.00051L15.5898 3.0507C16.1367 2.50379 16.1367 1.61713 15.5898 1.07108L14.9299 0.411203C14.3829 -0.135871 13.4962 -0.135871 12.9502 0.411203L8.00051 5.36085L3.0507 0.410178C2.50379 -0.136726 1.61713 -0.136726 1.07108 0.410178L0.410178 1.07005C-0.136726 1.61713 -0.136726 2.50379 0.410178 3.04984L5.36085 8.00051L0.411203 12.9502C-0.135871 13.4972 -0.135871 14.3839 0.411203 14.9299L1.07108 15.5898C1.61798 16.1367 2.50465 16.1367 3.0507 15.5898L8.00051 10.64L12.9502 15.5898C13.4972 16.1367 14.3839 16.1367 14.9299 15.5898L15.5898 14.9299C16.1367 14.3829 16.1367 13.4962 15.5898 12.9502L10.64 8.00051Z" fill="#6B6D6E" />
                  </svg>
                </span>
                <p>Период</p>
                <span>Выберите период на который желаете оформить доступ</span>
                <div className={styles.choose_month}>
                  <div onClick={() => setMonth(1)} className={`${styles.month} ${month === 1 ? styles.active : ""}`}>1 Месяц</div>
                  <div onClick={() => setMonth(2)} className={`${styles.month} ${month === 2 ? styles.active : ""}`}>2 Месяц</div>
                </div>
              </div>
              <div className={styles.card_selection}>
                <p>Выберите способ оплаты</p>
                <div className={styles.cards}>
                  <div onClick={() => setActiveCard(1)} className={`${styles.card} ${activeCard === 1 ? styles.active : ""}`}>
                    <div className={styles.text}>
                      <p>CБП</p>
                      <span>Система быстрых платежей</span>
                    </div>
                    <div className={styles.icon}>
                      <img src="/assets/icons/sbp_card.svg" alt="icon" />
                    </div>
                  </div>
                  <div onClick={() => setActiveCard(2)} className={`${styles.card} ${styles.crypto} ${activeCard === 2 ? styles.active : ""}`}>
                    <div className={styles.text}>
                      <p>Криптовалюта</p>
                      <span>USDT, Bitcoin, Ethereum и <br /> более 30 других монет</span>
                    </div>
                    <div className={styles.icon}>
                      <img src="/assets/icons/cryptos.svg" alt="icon" />
                      <img className={styles.usdt} src="/assets/icons/usdt.svg" alt="icon" />
                    </div>
                  </div>
                  <div onClick={() => setActiveCard(3)} className={`${styles.card} ${styles.visa} ${activeCard === 3 ? styles.active : ""}`}>
                    <div className={styles.text}>
                      <p>Visa\Master Card</p>
                      <span>Оплата зарубежными картами через <br /> администратора @AbbsNet_Support</span>
                    </div>
                    <div className={styles.icon}>
                      <div className={styles.mastercard}>
                        <img src="/assets/icons/mastercard.svg" alt="icon" />
                      </div>
                      <div className={styles.visa}>
                        <img src="/assets/icons/visa.svg" alt="icon" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <label>
                <input type="checkbox" />
                <p>Я прочитал и согласен с <span>(Условиями предоставления услуг)</span></p>
              </label>
              <button onClick={() => {
                product === 'Freepik' ? modal.warning(
                  "Внимание!",
                  "Доступ к AI-функциям в Freepik недоступен. Эта подписка Freepik предназначена для загрузки дизайнов и файлов, которые доступны для скачивания с подпиской Premium.",
                  "(Ок, перейти к Оплате)"
                ) : product === 'Midjourney' ? modal.error(
                  "Произошла ошибка!",
                  "К сожалению, активация подписки не была завершена. Написать мб ошибку какую-то",
                  "(Вернуться в панель управления)"
                ) : product === 'Leonardo Ai' ? modal.warning(
                  "Платёж прошёл успешно!",
                  "Чтобы получить доступ, напишите администратору (@AbbsNet_Support):[https://t.me/AbbsNet_Support] в Telegram, и он предоставит Вам доступ.",
                  "(Написать администратору в Telegram):[https://t.me/AbbsNet_Support]"
                ) : modal.success(
                  "Успех!",
                  "Ваша подписка активирована, и теперь вы можете пользоваться возможностями приобретённого сервиса. Доступ предоставлен автоматически, никаких дополнительных действий с вашей стороны не требуется.",
                  "(Вернуться в панель управления)"
                )
                setOpenModal(false)
              }}>Оплатить</button>
            </div>
          </div>
        )
      }
      {
        openServicesModal && (
          <ServicesModal setOpenModal={setOpenModal} onClose={() => setOpenServicesModal(false)} />
        )
      }
    </div>
  )
}

export default ControlPanel