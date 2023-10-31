import React from 'react';
import "./fileInput.css";

function FileInput({ onFileSelect }) {
  const handleFileSelect = (e) => {
    const selectedFile = e.target.files[0];
    onFileSelect(selectedFile);
  };

  return (
        <label className="custom-file-input">
        Choose a File
        <input type="file" className="file-input" accept=".pdf, .doc, .docx" onChange={handleFileSelect} />
      </label>
  );
}

export default FileInput;