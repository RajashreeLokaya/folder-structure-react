import { useState } from "react";

const Folder = ({ explorer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  if (explorer.isFolder) {
    return (
      <>
        <div
          style={{ paddingLeft: "20px", textAlign: "left", cursor: "pointer" }}
          onClick={handleClick}
        >
          {explorer.fileName}
        </div>
        {isOpen &&
          explorer.item.map((x) => {
            return (
              <div style={{ paddingLeft: "20px", textAlign: "left" }}>
                <Folder explorer={x} />
              </div>
            );
          })}
      </>
    );
  } else {
    return (
      <div style={{ paddingLeft: "20px", textAlign: "left" }}>
        {explorer.fileName}
      </div>
    );
  }
};
export default Folder;
