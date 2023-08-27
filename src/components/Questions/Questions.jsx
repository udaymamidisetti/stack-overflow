import React, { useState, useEffect } from "react";
import "./Questions.css";
import QuestionComponent from "../QuestionComponent/QuestionComponent";
import CommentIcon from "@mui/icons-material/Comment";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { Chrono } from "react-chrono";
import Footer from "../Footer/Footer";
import { useSelector } from "react-redux";
const Questions = () => {
  const [data, setData] = useState([]);
  const search = useSelector((state) => state.Header.search);
  const getQuestions = async () => {
    const response = await fetch(
      "https://api.stackexchange.com/2.3/questions?order=desc&sort=activity&site=stackoverflow"
    );
    const responseData = await response.json();
    console.log(responseData);
    setData(responseData.items);
  };
  useEffect(() => {
    getQuestions();
  }, [search]);

  useEffect(() => {
    {
      search.length > 0 && getQuestionSearch();
    }
  }, [search]);

  const getQuestionSearch = async () => {
    const responce = await fetch(
      `https://api.stackexchange.com/docs/search#order=desc&sort=activity&intitle=${search}&filter=default&site=stackoverflow`,
      {
        mode: "no-cors",
      }
    );
    // const responceData = await responce.json();
    console.log(responce);
    // setData(responceData.items);
  };

  const items = [
    {
      cardTitle: "Frontend Developer with Angular",
      url: "http://www.history.com",
      cardSubtitle: "Wallet Hub",
      cardDetailedText: "Washington,DC",
    },
    {
      cardTitle: "Senior Ios/Iphone engineer",
      url: "http://www.history.com",
      cardSubtitle: "Perk.com INC.",
      cardDetailedText: "Bangalore,India",
    },
    {
      cardTitle: "Software Engineer",
      url: "http://www.history.com",
      cardSubtitle: "SparkNET Technologies",
      cardDetailedText: "No Location,Remote",
    },
  ];

  return (
    <div style={{ maxWidth: "1300px", margin: "auto" }}>
      <h1 style={{ fontSize: "20px" }}>Questions</h1>
      <div style={{ display: "flex", gap: "40px", alignItems: "center" }}>
        <p className="nav-links">interesting</p>
        <p className="nav-links">featured</p>
        <p className="nav-links">hot</p>
        <p className="nav-links">week</p>
        <p className="nav-links">month</p>
      </div>
      <div style={{ display: "flex" }}>
        <div>
          <div style={{ height: "500px", overflow: "scroll" }}>
            {data.map((e, i) => (
              <div style={{ width: "900px" }}>
                <h1
                  style={{
                    fontSize: "17px",
                    color: "#037cfd",
                    width: "500px",
                    cursor: "pointer",
                  }}
                >
                  {e.title}
                </h1>
                <div
                  style={{
                    display: "flex",
                    gap: "25px",
                    alignItems: "center",
                  }}
                >
                  {e.tags.map((n, j) => (
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "25px",
                      }}
                    >
                      <p
                        style={{
                          borderWidth: 1,
                          borderColor: "black",
                          padding: "3px",
                          margin: 0,
                        }}
                      >
                        {n}
                      </p>
                    </div>
                  ))}

                  <div style={{ marginLeft: "auto" }}>
                    <div style={{ display: "flex", gap: "40px" }}>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <p style={{ margin: 0 }}>{e.score}</p>
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
                        <p style={{ margin: 0 }}>{e.answer_count}</p>
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
                        <p style={{ margin: 0 }}>{e.view_count}</p>
                        <p style={{ margin: 0 }}>Views</p>
                        <RemoveRedEyeIcon style={{ fontSize: "18px" }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <h2 style={{ textAlign: "center" }}>Looking for more</h2>
          <p style={{ textAlign: "center", fontWeight: "500" }}>
            Browse the complete list of questions, or popular tags. Help us
            answer unanswered questions
          </p>
        </div>
        <div style={{ width: "400px" }}>
          <div style={{ height: "500px" }}>
            <h1 style={{ fontSize: "17px", paddingLeft: "65px" }}>
              Looking out for..
            </h1>
            <Chrono items={items} mode="VERTICAL" />
          </div>
          <h1
            style={{
              fontSize: "17px",
              paddingLeft: "65px",
              paddingTop: "20px",
            }}
          >
            Network questions
          </h1>
          <div style={{ width: "300px", marginLeft: "64px" }}>
            <p style={{ color: "#037cfd", fontWeight: "bold" }}>
              Were there woman who were against giving women the right to vote?
            </p>
            <p style={{ color: "#037cfd", fontWeight: "bold" }}>
              Why does everybody typedef over standard types?
            </p>
            <p style={{ color: "#037cfd", fontWeight: "bold" }}>
              An english word describing a psuedo-job
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Questions;
