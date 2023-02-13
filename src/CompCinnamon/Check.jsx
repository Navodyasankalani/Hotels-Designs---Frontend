import React, { useState, useEffect } from "react";
import Options from './Options';

function Check() {
  const [foodState, setFoodState] = useState();

  const onChangeComboBox = (e) => {
    const selectedId = e.target.value;
    const selectedFoodState = Options.filter((d) => d.id == selectedId)[0];
    setFoodState(selectedFoodState);
  };

  useEffect(() => {
    setFoodState(Options[0]);
  }, []);

  return (
    <div className="dropdown">
      <select className="dropdown-select"
        value={foodState?.id}
        onChange={(e) => {
          onChangeComboBox(e);
        }}
      >
        {Options.map((d) => (
          <option key={d.id} value={d.id}>
            {d.title}
          </option>
        ))}
      </select>
      <div className="coverImage">
        {foodState ? (
          <img src={foodState?.cover} alt="" width="50%" height="300px" />
        ) : (
          ""
        )}
      </div>

      <div className="card">
        {foodState ? (
          <h2>{foodState?.title}</h2>
        ) : (
          ""
        )}
        {foodState ? (
          <p>{foodState?.desc}</p>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Check;