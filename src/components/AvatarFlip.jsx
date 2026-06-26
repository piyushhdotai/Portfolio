import React from 'react';
import './AvatarFlip.css'; 

const Avatar = () => {
  return (
    <div className="avatar-flip-card">
      <div className="avatar-card-inner">
        {/* Front Side: Pixel Art */}
        <div className="avatar-card-front">
          <img src="./pfp.jpeg" alt="Pixel Avatar" />
        </div>
        
        {/* Back Side: Real Image */}
        <div className="avatar-card-back">
          <img src="./Me.jpeg" alt="Piyush Bajpai" />
        </div>
      </div>
    </div>
  );
};

export default Avatar;