import React, { useContext } from "react";
import "./Main.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResults,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);
  const handleCardClick = (promptText) => {
    setInput(promptText);
  };
  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user} alt="" />
      </div>
      <div className="main-container">
        {!showResults ? (
          <>
            <div className="greet">
              <p>
                <span>Hello , Keshav </span>
              </p>
              <p>How Can i Help You Today?</p>
            </div>
            <div className="cards">
              <div
                className="card"
                onClick={() =>
                  handleCardClick("Tell interesting things about madhubani, Bihar")
                }
              >
                <p>Tell interesting things about madhubani, Bihar</p>
                <img src={assets.compass_icon} alt="" />
              </div>
              <div
                className="card"
                onClick={() =>
                  handleCardClick(
                    "explain the lore of game of thrones"
                  )
                }
              >
                <p>Explain the lore of game of thrones </p>
                <img src={assets.message_icon} alt="" />
              </div>
              <div
                className="card"
                onClick={() =>
                  handleCardClick(
                    "what are the pillars of OOPs"
                  )
                }
              >
                <p>
                  what are the pillars of OOPs
                </p>
                <img src={assets.bulb_icon} alt="" />
              </div>
              <div
                className="card"
                onClick={() => {
                  handleCardClick(
                    "how to get into stock market"
                  );
                }}
              >
                <p>
                  how to get into stock market
                </p>
                <img src={assets.code_icon} alt="" />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.user} alt="" />
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
              onChange={(e) => {
                setInput(e.target.value);
              }}
              value={input}
              type="text"
              placeholder="Enter the Prompt Here"
            />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              <img
                src={assets.send_icon}
                alt=""
                onClick={() => {
                  onSent();
                }}
              />
            </div>
          </div>
          <div className="bottom-info">
            <p>
              Gemini may display inaccurate info, including about people, so
              double-check its responses. Your privacy & Gemini Apps
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
//   return (
//     <div className="main">
//       <div className="nav">
//         <p>Gemini</p>
//         <img src={assets.user_icon} alt="" />
//       </div>
//       <div className="main-container">
//         {!showResults ?
//         <>
//         <div className="greet">
//             <p><span>Hello, Keshav.</span></p>
//             <p>How can I help you today?</p>
//         </div>
//         <div className="cards">
//             <div className="card">
//                 <p>suggest beautiful places to see on an upcoming road trip</p>
//                 <img src={assets.compass_icon} alt="" />
//             </div>
//             <div className="card">
//                 <p>briefly summerize: urban planning</p>
//                 <img src={assets.bulb_icon} alt="" />
//             </div>
//             <div className="card">
//                 <p>Brainstorm team bulding activity</p>
//                 <img src={assets.message_icon} alt="" />
//             </div>
//             <div className="card">
//                 <p>improve the readablity of the following code</p>
//                 <img src={assets.code_icon} alt="" />
//             </div>
//         </div>

//         </>
//         :  <div className="result">
//                 <div className="result-title">
//                   <img src={assets.user_icon} alt="" />
//                   <p>{recentPrompt}</p>
//                 </div>
//                 <div className="result-data">
//                   <img src={assets.gemini_icon} alt="" />
//                   {loading ? (
// 								<div className="loader">
// 									<hr />
// 									<hr />
// 									<hr />
// 								</div>
// 							) : (
// 								<p dangerouslySetInnerHTML={{ __html: resultData }}></p>
// 							)}

//                 </div>
//               </div>}

//         <div className="main-bottom">
//             <div className="search-box">
//             <input
// 							onChange={(e) => {
// 								setInput(e.target.value);
// 							}}
// 							value={input}
// 							type="text"
// 							placeholder="Enter the Prompt Here"
// 						/>
//                 <div>
//                     <img src={assets.gallery_icon} alt="" />
//                     <img src={assets.mic_icon} alt="" />
//                     <img onClick={()=> onSent()} src={assets.send_icon} alt="" />
//                 </div>
//             </div>
//             <p className="bottom-info">
//                 Gemini Clone, created by Keshav. All rights reserved.
//             </p>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Main;
// const handleCardClick = (promptText) => {
//   setInput(promptText);
// };
// return (
// <div className="main">
//   <div className="nav">
//     <p>Gemini</p>
//     <img src={assets.user} alt="" />
//   </div>
//   <div className="main-container">
//     {!showResults ?
//       <>
//         <div className="greet">
//           <p>
//             <span>Hello , Keshav </span>
//           </p>
//           <p>How Can i Help You Today?</p>
//         </div>
//         <div className="cards">
//           <div
//             className="card"
//             onClick={() =>
//               handleCardClick("Suggest Some Place To Visit In India.")
//             }
//           >
//             <p>Suggest Some Place To Visit In India.</p>
//             <img src={assets.compass_icon} alt="" />
//           </div>
//           <div
//             className="card"
//             onClick={() =>
//               handleCardClick(
//                 "Explain the process of photosynthesis in simple terms"
//               )
//             }
//           >
//             <p>Explain the process of photosynthesis in simple terms </p>
//             <img src={assets.message_icon} alt="" />
//           </div>
//           <div
//             className="card"
//             onClick={() =>
//               handleCardClick("How do you create a responsive navbar using CSS and JavaScript?")
//             }
//           >
//             <p>How do you create a responsive navbar using CSS and JavaScript?</p>
//             <img src={assets.bulb_icon} alt="" />
//           </div>
//           <div
//             className="card"
//             onClick={() => {
//               handleCardClick(
//                 "What are some essential skills for becoming a front-end developer?"
//               );
//             }}
//           >
//             <p>What are some essential skills for becoming a front-end developer?</p>
//             <img src={assets.code_icon} alt="" />
//           </div>
//         </div>
//       </> :
//       <div className="result">
//         <div className="result-title">
//           <img src={assets.user_icon} alt="" />
//           <p>{recentPrompt}</p>
//         </div>
//         <div className="result-data">
//           <img src={assets.gemini_icon} alt="" />
//             <p dangerouslySetInnerHTML={{ __html:resultData }}></p>
//         </div>
//       </div>
//     }

//     <div className="main-bottom">
//       <div className="search-box">
//         <input
//           onChange={(e) => {
//             setInput(e.target.value);
//           }}
//           value={input}
//           type="text"
//           placeholder="Enter the Prompt Here"
//         />
//         <div>
//           <img src={assets.gallery_icon} alt="" />
//           <img src={assets.mic_icon} alt="" />
//           <img
//             src={assets.send_icon}
//             alt=""
//             onClick={() => {
//               onSent();
//             }}
//           />
//         </div>
//       </div>
//       <div className="bottom-info">
//         <p>
//           Gemini may display inaccurate info, including about people, so
//           double-check its responses. Your privacy & Gemini Apps
//         </p>
//       </div>
//     </div>
//   </div>
// </div>
// );
// };

// export default Main;
