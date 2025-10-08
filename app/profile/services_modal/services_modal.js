"use client"

import styles from "./services_modal.module.css"
import categories from "../data/categories.json"
import { cards5 } from "../../data/cards"
import { useState } from "react"
import Card from "../../components/card/Card"

const ServicesModal = ({ onClose, setOpenModal }) => {
  const [category, setCategory] = useState("all")
  const cards = cards5.filter(item => item.category === category)
  const [showAll, setShowAll] = useState(false)

  return (
    <div className={styles.modal}>
      <div className={styles.modal_content}>
        <div className={styles.left}>
          <div className={styles.logo}>
            <img src="/logo.svg" alt="" />
          </div>
          <p>Категории</p>
          <div className={styles.categories}>
            <div onClick={() => setCategory("all")} className={`${styles.category} ${category === "all" ? styles.active : ""}`}>
              Все сервисы <span></span>
            </div>
            {
              categories.map(item => (
                <div key={item.id} onClick={() => setCategory(item.title)} className={`${styles.category} ${category === item.title ? styles.active : ""}`}>
                  {item.title}
                  <span></span>
                </div>
              ))
            }
          </div>
        </div>

        <div className={styles.right}>
          <span className={styles.close_btn} onClick={onClose}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.64 8.00051L15.5898 3.0507C16.1367 2.50379 16.1367 1.61713 15.5898 1.07108L14.9299 0.411203C14.3829 -0.135871 13.4962 -0.135871 12.9502 0.411203L8.00051 5.36085L3.0507 0.410178C2.50379 -0.136726 1.61713 -0.136726 1.07108 0.410178L0.410178 1.07005C-0.136726 1.61713 -0.136726 2.50379 0.410178 3.04984L5.36085 8.00051L0.411203 12.9502C-0.135871 13.4972 -0.135871 14.3839 0.411203 14.9299L1.07108 15.5898C1.61798 16.1367 2.50465 16.1367 3.0507 15.5898L8.00051 10.64L12.9502 15.5898C13.4972 16.1367 14.3839 16.1367 14.9299 15.5898L15.5898 14.9299C16.1367 14.3829 16.1367 13.4962 15.5898 12.9502L10.64 8.00051Z" fill="#6B6D6E" />
            </svg>
          </span>
          <div className={styles.texts}>
            <p>Выберите сервис</p>
            <span>Выберите нужный сервис. Фильтры слева помогут быстрее найти подходящий вариант.</span>
          </div>
          <div className={styles.categories}>
            <div className={styles.items}>
              <div onClick={() => setCategory("all")} className={`${styles.category} ${category === "all" ? styles.active : ""}`}>
                Все сервисы <span></span>
              </div>
              {
                (showAll ? categories : categories.slice(0, 1)).map(item => (
                  <div key={item.id} onClick={() => setCategory(item.title)} className={`${styles.category} ${category === item.title ? styles.active : ""}`}>
                    {item.title}
                    <span></span>
                  </div>
                ))
              }
            </div>
            <button onClick={() => setShowAll(prev => !prev)} className={`${styles.show_more_btn}`}>Показать категории
              <svg style={{transform: showAll ? "rotate(180deg" : ""}} width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.99212 4.00078L7.10715 0.885692C7.17926 0.813644 7.21898 0.717466 7.21898 0.614914C7.21898 0.512362 7.17926 0.416184 7.10715 0.344135L6.8778 0.114731C6.72836 -0.0345444 6.48546 -0.0345444 6.33625 0.114731L3.72043 2.73055L1.10171 0.111828C1.02961 0.0397802 0.933486 0 0.83099 0C0.728381 0 0.63226 0.0397802 0.560098 0.111828L0.330807 0.341233C0.258702 0.413338 0.218979 0.509459 0.218979 0.612011C0.218979 0.714563 0.258702 0.810741 0.330807 0.88279L3.44868 4.00078C3.52102 4.073 3.61759 4.11267 3.72026 4.11244C3.82332 4.11267 3.91984 4.073 3.99212 4.00078Z" fill="white" />
                <path d="M3.99209 7.50078L7.10712 4.38569C7.17923 4.31364 7.21895 4.21747 7.21895 4.11491C7.21895 4.01236 7.17923 3.91618 7.10712 3.84414L6.87777 3.61473C6.72833 3.46546 6.48543 3.46546 6.33622 3.61473L3.7204 6.23055L1.10168 3.61183C1.02958 3.53978 0.933455 3.5 0.83096 3.5C0.728351 3.5 0.632229 3.53978 0.560068 3.61183L0.330777 3.84123C0.258672 3.91334 0.218948 4.00946 0.218948 4.11201C0.218948 4.21456 0.258672 4.31074 0.330777 4.38279L3.44865 7.50078C3.52099 7.573 3.61756 7.61267 3.72023 7.61244C3.82329 7.61267 3.91981 7.573 3.99209 7.50078Z" fill="white" />
              </svg>

            </button>
          </div>
          <div className={styles.cards}>
            {(category === "all" ? cards5 : cards).map((card, index) => (
              <div key={index} className={styles.card_wrapper}>
                <Card clickButton={() => setOpenModal(true)} type="services" servicesPage={true} data={card} />
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

export default ServicesModal