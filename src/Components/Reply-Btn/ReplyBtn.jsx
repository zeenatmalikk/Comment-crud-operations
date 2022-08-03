import React from "react";
import ReplyIcon from "@mui/icons-material/Reply";
import "./ReplyBtn.css"
const ReplyBtn = () => {
  return (
    <div>
      <button className="replybtn">
        <ReplyIcon />
        <h3>Reply</h3>
      </button>
    </div>
  );
};

export default ReplyBtn;
