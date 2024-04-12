import React from "react";
import styles from "./UserProfileBar.module.css";
import profilePic from "../../assets/chatbot.svg";
import verified from "../../assets/verified.svg";

const UserProfileBar = () => {
  return (
    <div className={styles.profileBar}>
      <div className={styles.profilePic}>
        <img src={profilePic} alt="profile-pic" />
        <div className={styles.onlineDot}></div>
      </div>

      <div className={styles.userInfo}>
        <div className={styles.userName}>
          <span>Timpu</span>
          <img src={verified} alt="verifed" />
        </div>
        <div className={styles.userDescription}>
          <span>Chat assistant</span>
          <div className={styles.online}>
            <div className={styles.onlineDot2}></div>
            <span>Online</span>
          </div>
        </div>
      </div>
      {/* <div className={styles.userData}>
        <div className={styles.profilePic}>
          <img src={profilePic} alt="profile-pic" />
          <div className={styles.onlineDot}></div>
        </div>

        <div className={styles.userInfo}>
          <div className={styles.userName}>
            <span>Timpu</span>
            <img src={verified} alt="verifed" />
          </div>
          <div className={styles.userDescription}>
            <p>Chat assistant</p>
            <p>Online</p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default UserProfileBar;
