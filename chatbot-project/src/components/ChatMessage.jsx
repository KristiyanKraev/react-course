import RobotProfileImage from "../assets/pictures/robot.png";
// import UserProfileImage from "../assets/pictures/user.png";
import Me from "../assets/pictures/PhotomadeArtStudio (1 of 1).jpg";
import "./ChatMessage.css";
export function ChatMessage({ message, sender, time }) {
  console.log(RobotProfileImage);
  return (
    <div
      className={sender === "user" ? "chat-message-user" : "chat-message-robot"}
    >
      {sender === "robot" && (
        <img src={RobotProfileImage} className="chat-message-profile" />
      )}
      <div className="chat-message-text">
        {message}
        <div className="chat-message-time">{time}</div>
      </div>
      {sender === "user" && <img src={Me} className="chat-message-profile" />}
    </div>
  );
}
