import React from "react";
import styles from "./Chat.module.css";

const Chat = ({ type, text, time, children }) => {
  return (
    <div className={styles.chat}>
      <div className={type === "receive" ? styles.receive : styles.sent}>
        {children}
        {text}
      </div>
      <div
        className={[styles.time, type === "sent" ? styles.timeSent : ""].join(
          " "
        )}
      >
        {time}
      </div>
    </div>
  );
};

export default Chat;
