import React, { useEffect, useState } from "react";
import InputField from "../../Components/Input/InputField";
import data from "../../data.json";
import CommentCard from "../Comments-card/CommentCard";
import John from "../../images/avatars/image-juliusomo.png";
import "./Comments-listing.css";
import { Container } from "@mui/system";
import axios from "axios";
import { axiosLink } from "../../Helper/Axios";
const CommentsListing = () => {
  const [comment, setcomment] = useState("");
  const [newcomment, setnewcomment] = useState([]);
  const [score, setscore] = useState(0);
  const [updateTextfield, setupdateTextfield] = useState("");
  const [updateField, setupdateField] = useState(false);
  const [updateId, setupdateId] = useState("");
  // console.log(score);

  const handleSubmit = () => {
    comment
      ? axios({
          method: "post",
          url: `${axiosLink}comment/post`,
          data: {
            comment: comment,
          },
        })
          .then((res) => {
            console.log("postData", res.data);
            setcomment("");
          })
          .catch((err) => console.log(err))
      : axios({
          method: "put",
          url: axiosLink + `comment/${updateId}`,
          data: {
            comment: updateTextfield,
          },
        })
          .then((res) => console.log("ress", res))
          .catch((err) => console.log(err));
  };
  const getComment = () => {
    axios
      .get(axiosLink + `comment/getcomment`)
      .then((res) => {
        console.log("response", res);
        setnewcomment(res.data);
        // setcomment("");
      })

      .catch((err) => {
        console.log("err", err);
      });
  };
  useEffect(() => {
    getComment();
  }, [newcomment]);

  const addNumber = () => {
    setscore((count) => count + 1);
  };
  const minusNumber = () => {
    if (score > 0) {
      setscore((count) => count - 1);
    }
  };
  const updateData = (item) => {
    console.log("editcomment", item);
    setupdateId(item._id);

    setupdateField(true);
    setupdateTextfield(item.comment);
    console.log("updateee", updateTextfield);
  };
  const deleteData = (_id) => {
    axios.delete(axiosLink + `comment/${_id}`).then(() => {
      getComment();
    });
  };
  console.log(newcomment);
  return (
    <div>
      <div style={{ marginBottom: "9%" }}>
        {data.comments.map((item) => {
          return (
            <CommentCard
              key={item._id}
              score={item.score}
              username={item.user.username}
              createdAt={item.createdAt}
              comment={item.content}
            />
          );
        })}

        {newcomment ? (
          newcomment.map((item) => {
            return (
              <CommentCard
                createdAt={item.createdAt}
                comment={item.comment}
                votes={item.score ? item.score : score}
                onClick={() => updateData(item)}
                delete={() => deleteData(item._id)}
              />
            );
          })
        ) : (
          <div>
            <h1>LOADING</h1>
          </div>
        )}
      </div>
      <div className="enter-comment">
        <img src={John} alt="" />
        <InputField
          type={"text"}
          value={updateField ? updateTextfield : comment}
          textHolder={`enter your comment`}
          handleChange={(e) =>
            updateField
              ? setupdateTextfield(e.target.value)
              : setcomment(e.target.value)
          }
        />
        <button className="submit-comment" onClick={handleSubmit}>
          SEND
        </button>
      </div>
      {/* </Container> */}
    </div>
  );
};

export default CommentsListing;
