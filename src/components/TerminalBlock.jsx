import React from 'react';
import './Terminal.css'; // Make sure to link the CSS file

const TerminalBlock = () => {
  return (
    <div className="terminal-container">
      {/* Window Controls */}
      <div className="terminal-header">
        <div className="terminal-dots">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
        </div>
        <span className="terminal-title">piyush-bajpai.js</span>
      </div>

      {/* Code Area */}
      <div className="terminal-body">
        <pre>
          <code>
            <span className="keyword">const</span> <span className="variable">developer</span> <span className="operator">=</span> {'{'}
            <br />
            {'  '}<span className="key">name:</span> <span className="string">"Piyush Bajpai"</span>,
            <br />
            {'  '}<span className="key">role:</span> <span className="string">"3rd Year B.Tech Student"</span>,
            <br />
            {'  '}<span className="key">location:</span> <span className="string">"Raebareli/Greater Noida, UP"</span>,
            <br />
            {'  '}<span className="key">techStack:</span> [<span className="string">"JavaScript"</span>, <span className="string">"React.js"</span>, <span className="string">"Node.js"</span>, <span className="string">"MongoDB"</span>],
            <br />
            {'  '}<span className="key">recentBuilds:</span> [<span className="string">"NagarSeva"</span>, <span className="string">"Portfolio website"</span>],
            <br />
            {'  '}<span className="key">hobbies:</span> [<span className="string">"Gym"</span>, <span className="string">"Running"</span>, <span className="string">"F1"</span>, <span className="string">"Photography"</span>],
            <br />
            {'  '}<span className="key">hustleMode:</span> <span className="boolean">true</span>
            <br />
            {'}'};
            <span className="cursor">|</span>
          </code>
        </pre>
      </div>
    </div>
  );
};

export default TerminalBlock;