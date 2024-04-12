import React from "react";
import styles from "./ChatFooter.module.css";
import logo from "../../assets/Logo.svg";
import chevronRightWhite from "../../assets/chevron-right-white.svg";
import attachmentIcon from "../../assets/paperclip.svg";

const ChatFooter = () => {
  return (
    <div className={styles.chatFooter}>
      <div className={styles.actionItems}>
        <div className={styles.inputBox}>
          <p>Type your message</p>
          <img src={attachmentIcon} alt="attachment" />
        </div>
        <div className={styles.sendButton}>
          <img src={chevronRightWhite} alt="arrow" />
        </div>
      </div>
      <div className={styles.companyInfo}>
        <p>
          Powered by <span>Krunk.ai</span>
        </p>
        <img src={logo} alt="logo" />
      </div>
    </div>
    // <div className={styles.chatFooter}>
    //   <div className={styles.actionItems}>
    //     <div className={styles.inputBox}>
    //       <span>Type your message</span>
    //       <img src={attachmentIcon} alt="attachment" />
    //     </div>
    //     <div className={styles.button}>
    //       <img src={chevronRightWhite} alt="arrow" />
    //     </div>
    //   </div>
    //   <div>
    //     <p>
    //       Powered by <span>Krunk.ai</span>
    //     </p>
    //     <img src={logo} alt="logo" />
    //   </div>
    // </div>
  );
};

export default ChatFooter;
