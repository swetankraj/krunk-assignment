import UserProfileBar from "./components/UserProfileBar/UserProfileBar";
import ChatTimeline from "./components/ChatTimeline/ChatTimeline";
import styles from "./App.module.css";
import ChatFooter from "./components/ChatFooter/ChatFooter";

function App() {
  return (
    <div className={styles.screen}>
      <UserProfileBar />
      <ChatTimeline />
      <ChatFooter />
    </div>
  );
}

export default App;
