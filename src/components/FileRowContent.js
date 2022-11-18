import React from "react";

const FileRowContent = ({ file, index }) => {
  console.log(file);
  return (
    <>
      {file.lines.map((f, index) => (
        <tr>
          <td>{f.text}</td>
        </tr>
      ))}
    </>
  );
};

export default FileRowContent;
