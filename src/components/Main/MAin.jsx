import React, { useContext } from "react";
import "./Main.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
    userName,
    newChat,
    setRecentPrompt,
    setPrevPrompts,
  } = useContext(Context);

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    setPrevPrompts((prev) => [...prev, prompt]);
    await onSent(prompt);
  };

  return (
    <div className="main">
      <div className="nav">
        <p>ChatAI</p>
        <div onClick={() => newChat()} className="new-chat response-icon">
          <p>New Chat</p>
        </div>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Hello, {userName}</span>
              </p>
              <p>How can I help you today?</p>
            </div>
            <div className="cards">
              <div
                onClick={() =>
                  loadPrompt(
                    "Suggest beautiful places to see on an upcoming road trip"
                  )
                }
                className="card"
              >
                <p>Suggest beautiful places to see on an upcoming road trip</p>
                <img src={assets.compass_icon} alt="" />
              </div>
              <div
                onClick={() =>
                  loadPrompt("Briefly summarize this concept: urban planning")
                }
                className="card"
              >
                <p>Briefly summarize this concept: urban planning</p>
                <img src={assets.bulb_icon} alt="" />
              </div>
              <div
                onClick={() =>
                  loadPrompt(
                    "Brainstorm team bonding activities for our work retreat"
                  )
                }
                className="card"
              >
                <p>Brainstorm team bonding activities for our work retreat</p>
                <img src={assets.message_icon} alt="" />
              </div>
              <div
                onClick={() =>
                  loadPrompt(
                    "List some power words to use on my resume that show teamwork."
                  )
                }
                className="card"
              >
                <p>
                  List some power words to use on my resume that show teamwork.
                </p>
                <img src={assets.code_icon} alt="" />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.user_icon} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Enter a prompt here"
            />
            <div className="div">
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              {input ? (
                <img onClick={() => onSent()} src={assets.send_icon} alt="" />
              ) : null}
            </div>
          </div>
          <p className="bottom-info">
            ChatAI can make mistakes. Consider checking important
            information.Designed and Code by @rishabhrajprajapati
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
