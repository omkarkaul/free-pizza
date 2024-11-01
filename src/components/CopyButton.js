import React from 'react';

function CopyButton({ onClick }) {
  return (
    <button 
      className="copyButton" 
      onClick={onClick}
    >
      Copy
    </button>
  );
}

export default CopyButton;
