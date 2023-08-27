import React from "react";
import CommentIcon from "@mui/icons-material/Comment";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
const QuestionComponent = (props) => {
  const { data } = props;
  console.log(data);
  return (
    <div style={{ width: "900px" }}>
      <h1 style={{ fontSize: "17px", color: "#037cfd" }}>Question</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "15px",
          }}
        >
          <p style={{ borderWidth: 1, borderColor: "black", padding: "3px" }}>
            meory
          </p>
          <p style={{ borderWidth: 1, borderColor: "black", padding: "3px" }}>
            pub
          </p>
          <p style={{ borderWidth: 1, borderColor: "black", padding: "3px" }}>
            sub
          </p>
        </div>
        <div>
          <div style={{ display: "flex", gap: "40px" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <p style={{ margin: 0 }}>0</p>
              <p style={{ margin: 0 }}>Votes</p>
              <ThumbUpOffAltIcon style={{ fontSize: "18px" }} />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <p style={{ margin: 0 }}>0</p>
              <p style={{ margin: 0 }}>answer</p>
              <CommentIcon style={{ fontSize: "18px" }} />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <p style={{ margin: 0 }}>0</p>
              <p style={{ margin: 0 }}>Viewa</p>
              <RemoveRedEyeIcon style={{ fontSize: "18px" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionComponent;
