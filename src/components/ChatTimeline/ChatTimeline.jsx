import React from "react";
import styles from "./ChatTimeline.module.css";
import Chat from "../Chat/Chat";
import PopularTags from "../PopularTags/PopularTags";
import verifiedImg from "../../assets/verified.svg";
import chevronRightGray from "../../assets/chevron-right-gray.svg";
import bagImg from "../../assets/bag.png";
import Filters from "../Filters/Filters";

const BagsOnTimpu = () => {
  return (
    <div className={styles.bagsOnTimpu}>
      <img src={bagImg} alt="bag" />
      <div className={styles.description}>
        <div className={[styles.flex, styles.title].join(" ")}>
          <p>Bags on Timpu</p>
          <img src={verifiedImg} alt="verified" />
        </div>
        <div className={[styles.flex]}>
          <span>1123 products</span>
          <img src={chevronRightGray} alt="arrow" />
        </div>
      </div>
    </div>
  );
};

const ChatTimeline = () => {
  return (
    <div className={styles.chat}>
      <Chat
        type="receive"
        text="Hi Sam! I am your personal shopping assistant , how can i help you today ?"
        time="4:45 PM"
      />
      <Chat
        type="sent"
        text="I am looking for a hand bag, with long strap ."
        time="4:46 PM"
      />
      <PopularTags />
      <Chat
        type="receive"
        text="Or set filter and help us choose the best bag for you."
        time="4:48 PM"
      >
        <BagsOnTimpu />
      </Chat>
      <Filters />
    </div>
  );
};

export default ChatTimeline;
