import React, { useState } from "react";
import "./CommentCard.css";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import userav from "../../images/avatars/image-amyrobson.png";
import { Container } from "@mui/system";
import ReplyBtn from "../../Components/Reply-Btn/ReplyBtn";
import ReplyCard from "../Reply-card/ReplyCard";
import InputField from "../../Components/Input/InputField";
import axios from "axios";
import { axiosLink } from "../../Helper/Axios";
const CommentCard = (props) => {
  const [counter, setcounter] = useState(0);
  const addNumber = () => {
    setcounter((count) => count + 1);
  };
  const minusNumber = () => {
    if (counter > 0) {
      setcounter((count) => count - 1);
    }
  };

  const deletecomment = (_id) => {
    axios
      .delete(axiosLink + `comment/${_id}`)
      .then((res) => {
        console.log("response", res);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
  return (
    <div>
      <Container>
        <div className="comment-card-container">
          <div className="flex-card-container">
            <div className="rating-comment">
              <button
                style={{
                  background: "initial",
                  border: "none",
                  cursor: "pointer",
                }}
                onClick={props.addNumber}
              >
                <AddIcon />
              </button>
              <p className="rating-count" onChange={props.handlechange}>
                {props.votes}
              </p>
              <button
                style={{
                  background: "initial",
                  border: "none",
                  cursor: "pointer",
                }}
                onClick={minusNumber}
              >
                <RemoveIcon />
              </button>
            </div>
            <div className="content-container">
              <div className="user-details">
                <img className="user-avatar" src={userav} alt="avatar" />
                <p className="username">{props.username}</p>
                <p className="timestamp">{props.createdAt}</p>
              </div>
              <p className="card-content">{props.comment}</p>
            </div>
            <div className="reply-btn">
              <ReplyBtn />
              <button onClick={props.onClick} >Edit</button>
              <button onClick={props.delete}>Delete</button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CommentCard;
