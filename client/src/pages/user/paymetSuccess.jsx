import React from 'react';

const containerStyle = {
  width: '100%',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
};

const checkContainerStyle = {
  width: '6.25rem',
  height: '7.5rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
};

const checkBackgroundStyle = {
  width: '100%',
  height: 'calc(100% - 1.25rem)',
  background: 'linear-gradient(to bottom right, #5de593, #41d67c)',
  boxShadow: '0px 0px 0px 65px rgba(255, 255, 255, 0.25) inset, 0px 0px 0px 65px rgba(255, 255, 255, 0.25) inset',
  transform: 'scale(0.84)',
  borderRadius: '50%',
  animation: 'animateContainer 0.75s ease-out forwards 0.75s',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  opacity: 0,
};

const svgStyle = {
  width: '65%',
  transform: 'translateY(0.25rem)',
  strokeDasharray: 80,
  strokeDashoffset: 80,
  animation: 'animateCheck 0.35s forwards 1.25s ease-out',
};

const checkShadowStyle = {
  bottom: 'calc(-15% - 5px)',
  left: '0',
  borderRadius: '50%',
  background: 'radial-gradient(closest-side, rgba(73, 218, 131, 1), transparent)',
  animation: 'animateShadow 0.75s ease-out forwards 0.75s',
};

function PaymentSuccess() {
  return (
    <div style={containerStyle}>
      <div style={checkContainerStyle}>
        <div style={checkBackgroundStyle}>
          <svg viewBox="0 0 65 51" fill="none" xmlns="http://www.w3.org/2000/svg" style={svgStyle}>
            <path d="M7 25L27.3077 44L58.5 7" stroke="white" strokeWidth="13" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div style={checkShadowStyle}></div>
      </div>
    </div>
  );
}

export default PaymentSuccess;
