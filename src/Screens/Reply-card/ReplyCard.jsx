import React from "react";
import "./ReplyCard.css";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import userav from "../../images/avatars/image-amyrobson.png";
import { Container } from "@mui/system";
import ReplyBtn from "../../Components/Reply-Btn/ReplyBtn";

const ReplyCard = (props) => {
  return (
    <div className="reply-card-container">
      {" "}
      <div key={props.item.id}>
        <div className="flex-card-container">
          <div className="rating-comment">
            <AddIcon />
            <p className="rating-count">{props.item.score}</p>
            <RemoveIcon />
          </div>
          <div className="content-container">
            <div className="user-details">
              <img className="user-avatar" src={userav} alt="avatar" />
              <p className="username">{props.item.user.username}</p>
              <p className="timestamp">{props.item.createdAt}</p>
            </div>
            <p className="card-content">{props.item.content}</p>
          </div>
          <div className="reply-btn">
            <ReplyBtn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReplyCard;
