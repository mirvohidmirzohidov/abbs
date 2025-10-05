import styles from "./profile.module.css";

const Card = ({ product, onBuy, setProduct }) => {
  const access_until = new Date(product.access_until);

  return (
    <div className={styles.card}>
      <img className={styles.icon} src={product.icon} alt={product.name} />
      <div className={styles.texts}>
        <div className={styles.card_left}>
          <h4>{product.name}</h4>
          <p>Доступ до {access_until.toLocaleDateString("ru-RU")}</p>
        </div>
        <span>Осталось <br /> {product.daysLeft} дня</span>
      </div>
      <button onClick={() => {
        onBuy()
        setProduct(product.name)
      }}>
        Продлить подписку
        <img src="/assets/icons/rotation_arrows.svg" alt="icon" />
      </button>
    </div>
  );
};

export default Card;
