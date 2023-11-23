import React, { useState } from "react";

function Test() {
  const [discordChecked, setDiscordChecked] = useState(true);
  const [framerChecked, setFramerChecked] = useState(true);
  // Add similar state variables for other checkboxes...

  return (
    <div
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
      }}
    >
      <fieldset className="checkbox-group">
        <legend className="checkbox-group-legend">Choose your favorites</legend>

        <div
          style={{
            border: `2px solid ${discordChecked ? "blue" : "black"}`,
            display: "inline-block",
            margin: "8px",
            padding: "10px",
            borderRadius: "12px",
            position: "relative", // Add position relative to the container
            overflow: "hidden", // Hide the checkbox overflow
            backgroundColor: discordChecked ? "#e6f7ff" : "white", // Optional background color change
            transition: "border 0.3s, background-color 0.3s",
          }}
        >
          <label
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              position: "relative",
            }}
          >
            <input
              type="checkbox"
              style={{
                width: "20px",
                height: "20px",
                position: "absolute",
                top: "5px",
                left: "5px",
                cursor: "pointer",
              }}
              checked={discordChecked}
              onChange={() => setDiscordChecked(!discordChecked)}
            />
            <span
              className="checkbox-tile"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <span className="checkbox-icon" style={{ marginBottom: "5px" }}>
                {/* You can replace this with an SVG for Discord */}
                <br />
              </span>
              <img
                style={{ width: "100px", height: "90px", borderRadius: "8px" }}
                src="/img2.JPG"
                alt=""
              />
              {/* Uncomment the line below if you want to add a label */}
              {/* <span className="checkbox-label">Discord</span> */}
            </span>
          </label>
        </div>
        <div
          style={{
            border: `2px solid ${discordChecked ? "blue" : "black"}`,
            display: "inline-block",
            margin: "8px",
            padding: "10px",
            borderRadius: "12px",
            position: "relative", // Add position relative to the container
            overflow: "hidden", // Hide the checkbox overflow
            backgroundColor: discordChecked ? "#e6f7ff" : "white", // Optional background color change
            transition: "border 0.3s, background-color 0.3s",
          }}
        >
          <label
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              position: "relative",
            }}
          >
            <input
              type="checkbox"
              style={{
                width: "20px",
                height: "20px",
                position: "absolute",
                top: "5px",
                left: "5px",
                cursor: "pointer",
              }}
              checked={discordChecked}
              onChange={() => setDiscordChecked(!discordChecked)}
            />
            <span
              className="checkbox-tile"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <span className="checkbox-icon" style={{ marginBottom: "5px" }}>
                {/* You can replace this with an SVG for Discord */}
                <br />
              </span>
              <img
                style={{ width: "100px", height: "90px", borderRadius: "8px" }}
                src="/img2.JPG"
                alt=""
              />
              {/* Uncomment the line below if you want to add a label */}
              {/* <span className="checkbox-label">Discord</span> */}
            </span>
          </label>
        </div>
        <div
          style={{
            border: `2px solid ${discordChecked ? "blue" : "black"}`,
            display: "inline-block",
            margin: "8px",
            padding: "10px",
            borderRadius: "12px",
            position: "relative", // Add position relative to the container
            overflow: "hidden", // Hide the checkbox overflow
            backgroundColor: discordChecked ? "#e6f7ff" : "white", // Optional background color change
            transition: "border 0.3s, background-color 0.3s",
          }}
        >
          <label
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              position: "relative",
            }}
          >
            <input
              type="checkbox"
              style={{
                width: "20px",
                height: "20px",
                position: "absolute",
                top: "5px",
                left: "5px",
                cursor: "pointer",
              }}
              checked={discordChecked}
              onChange={() => setDiscordChecked(!discordChecked)}
            />
            <span
              className="checkbox-tile"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <span className="checkbox-icon" style={{ marginBottom: "5px" }}>
                {/* You can replace this with an SVG for Discord */}
                <br />
              </span>
              <img
                style={{ width: "100px", height: "90px", borderRadius: "8px" }}
                src="/img2.JPG"
                alt=""
              />
              {/* Uncomment the line below if you want to add a label */}
              {/* <span className="checkbox-label">Discord</span> */}
            </span>
          </label>
        </div>
        <div
          style={{
            border: `2px solid ${discordChecked ? "blue" : "black"}`,
            display: "inline-block",
            margin: "8px",
            padding: "10px",
            borderRadius: "12px",
            position: "relative", // Add position relative to the container
            overflow: "hidden", // Hide the checkbox overflow
            backgroundColor: discordChecked ? "#e6f7ff" : "white", // Optional background color change
            transition: "border 0.3s, background-color 0.3s",
          }}
        >
          <label
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              position: "relative",
            }}
          >
            <input
              type="checkbox"
              style={{
                width: "20px",
                height: "20px",
                position: "absolute",
                top: "5px",
                left: "5px",
                cursor: "pointer",
              }}
              checked={discordChecked}
              onChange={() => setDiscordChecked(!discordChecked)}
            />
            <span
              className="checkbox-tile"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <span className="checkbox-icon" style={{ marginBottom: "5px" }}>
                {/* You can replace this with an SVG for Discord */}
                <br />
              </span>
              <img
                style={{ width: "100px", height: "90px", borderRadius: "8px" }}
                src="/img2.JPG"
                alt=""
              />
              {/* Uncomment the line below if you want to add a label */}
              {/* <span className="checkbox-label">Discord</span> */}
            </span>
          </label>
        </div>
        <div
          style={{
            border: `2px solid ${discordChecked ? "blue" : "black"}`,
            display: "inline-block",
            margin: "8px",
            padding: "10px",
            borderRadius: "12px",
            position: "relative", // Add position relative to the container
            overflow: "hidden", // Hide the checkbox overflow
            backgroundColor: discordChecked ? "#e6f7ff" : "white", // Optional background color change
            transition: "border 0.3s, background-color 0.3s",
          }}
        >
          <label
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              position: "relative",
            }}
          >
            <input
              type="checkbox"
              style={{
                width: "20px",
                height: "20px",
                position: "absolute",
                top: "5px",
                left: "5px",
                cursor: "pointer",
              }}
              checked={discordChecked}
              onChange={() => setDiscordChecked(!discordChecked)}
            />
            <span
              className="checkbox-tile"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <span className="checkbox-icon" style={{ marginBottom: "5px" }}>
                {/* You can replace this with an SVG for Discord */}
                <br />
              </span>
              <img
                style={{ width: "100px", height: "90px", borderRadius: "8px" }}
                src="/img2.JPG"
                alt=""
              />
              {/* Uncomment the line below if you want to add a label */}
              {/* <span className="checkbox-label">Discord</span> */}
            </span>
          </label>
        </div>
        <div
          style={{
            border: `2px solid ${discordChecked ? "blue" : "black"}`,
            display: "inline-block",
            margin: "8px",
            padding: "10px",
            borderRadius: "12px",
            position: "relative", // Add position relative to the container
            overflow: "hidden", // Hide the checkbox overflow
            backgroundColor: discordChecked ? "#e6f7ff" : "white", // Optional background color change
            transition: "border 0.3s, background-color 0.3s",
          }}
        >
          <label
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              position: "relative",
            }}
          >
            <input
              type="checkbox"
              style={{
                width: "20px",
                height: "20px",
                position: "absolute",
                top: "5px",
                left: "5px",
                cursor: "pointer",
              }}
              checked={discordChecked}
              onChange={() => setDiscordChecked(!discordChecked)}
            />
            <span
              className="checkbox-tile"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <span className="checkbox-icon" style={{ marginBottom: "5px" }}>
                {/* You can replace this with an SVG for Discord */}
                <br />
              </span>
              <img
                style={{ width: "100px", height: "90px", borderRadius: "8px" }}
                src="/img2.JPG"
                alt=""
              />
              {/* Uncomment the line below if you want to add a label */}
              {/* <span className="checkbox-label">Discord</span> */}
            </span>
          </label>
        </div>

        
      </fieldset>
    </div>
  );
}

export default Test;
