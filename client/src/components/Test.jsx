import React, { useState } from 'react'

function Test() {
    const [discordChecked, setDiscordChecked] = useState(true);
  const [framerChecked, setFramerChecked] = useState(true);
  // Add similar state variables for other checkboxes...

  return (
    <div>

<fieldset className="checkbox-group">
      <legend className="checkbox-group-legend">Choose your favorites</legend>
    
      <div className="checkbox">
        <label className="checkbox-wrapper">
          <input
            type="checkbox"
            className="checkbox-input"
            checked={discordChecked}
            onChange={() => setDiscordChecked(!discordChecked)}
          />
          <span className="checkbox-tile">
            <span className="checkbox-icon">
              {/* SVG for Discord */}
            </span>
            <span className="checkbox-label">Discord</span>
          </span>
        </label>
      </div>
      {/* Framer */}
      <div className="checkbox">
        <label className="checkbox-wrapper">
          <input
            type="checkbox"
            className="checkbox-input"
            checked={framerChecked}
            onChange={() => setFramerChecked(!framerChecked)}
          />
          <span className="checkbox-tile">
            <span className="checkbox-icon">
              {/* SVG for Framer */}
            </span>
            <span className="checkbox-label">Framer</span>
          </span>
        </label>
      </div>
      {/* Add similar structures for other checkboxes... */}
    </fieldset>
    </div>

  );
};

export default Test

