import React, {useState} from "react";

const BoxGenerator = (props) => {
  const [boxColor, setBoxColor] = useState("");
  const [boxList, setBoxList] = useState([]);

  const createBox = (e) => {
    e.preventDefault();
    setBoxList([...boxList, boxColor]);
    setBoxColor("");
  };

  return (
    <div>
      <form onSubmit={createBox}>
        <label>Ingresa un color: </label>
        <input
          type="text"
          onChange={(e) => setBoxColor(e.target.value)}
          value={boxColor}
        />
        <input type="submit" value="Add" />
      </form>
      {boxList.map((box, i) => (
        <div
          key={i}
          style={{
            backgroundColor: box,
            width: "200px",
            height: "200px",
            display: "inline-block",
            margin: "10px",
          }}
        ></div>
      ))}
    </div>
  );
};

export default BoxGenerator;
