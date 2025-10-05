import React, { useEffect, useState } from "react";
import styles from "./alert.module.css";
import ReactDOM from "react-dom/client";
import { AlertIcon, CloseIcon } from "./icon";

function Alert({ type, title, message, button, onClose }) {
  let icon, color;
  if (type === "success") {
    icon = <AlertIcon color="#01E17B" />;
    color = "#01E17B";
  } else if (type === "warning") {
    icon = <AlertIcon color="#F0F000" />;
    color = "#F0F000";
  } else if (type === "error") {
    icon = <AlertIcon color="#F04349" />;
    color = "#F04349";
  }

  const messageSort = (msg) => {
    const formattedMsg = msg.replace(
      /\(@([^\)]+)\):\[(https?:\/\/[^\]]+)\]/g,
      `<a 
        href="$2" 
        target="_blank" 
        onmouseover="this.style.borderBottom='2px solid ${color}'" 
        onmouseout="this.style.borderBottom='2px solid transparent'" 
        onfocus="this.style.borderBottom='2px solid ${color}'" 
        onblur="this.style.borderBottom='2px solid transparent'"
      >
        @$1
      </a>`
    );

    return (
      <p
        className={styles.text}
        dangerouslySetInnerHTML={{ __html: formattedMsg }}
      ></p>
    );
  };

  const buttonSort = (msg) => {
    const regex = /\(([^)]+)\):\[(https?:\/\/[^\]]+)\]/;
    const match = msg.match(regex);

    if (!match) {
      const text = msg.replace(/[()]/g, "");
      return (
        <button
          className={styles.button}
          onClick={onClose}
          style={{ background: color }}
        >
          {text}
        </button>
      );
    }

    const text = match[1];
    const link = match[2];

    const handleClick = () => {
      onClose();
      window.open(link, "_blank");
    };

    return (
      <button
        className={styles.button}
        onClick={handleClick}
        style={{ background: color }}
      >
        {text}
      </button>
    );
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.title}>
          <div className={styles.icon}>{icon}</div>
          <p>{title}</p>
          <button className={styles.close} onClick={onClose}>
            <CloseIcon />
          </button>
        </div>
        {messageSort(message)}
        {buttonSort(button)}
      </div>
    </div>
  );
}

function createAlert(type, title, message, button) {
  const div = document.createElement("div");
  document.body.appendChild(div);
  document.body.style.overflowY = "hidden";

  const root = ReactDOM.createRoot(div);

  const close = () => {
    root.unmount();
    div.remove();
    document.body.style.overflowY = "auto";
  };

  root.render(
    <Alert
      type={type}
      title={title}
      message={message}
      button={button}
      onClose={close}
    />
  );
}

Alert.success = (title, message, button) =>
  createAlert("success", title, message, button);

Alert.warning = (title, message, button) =>
  createAlert("warning", title, message, button);

Alert.error = (title, message, button) =>
  createAlert("error", title, message, button);

export default Alert;
