import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  const handleClicksIncrease = () => {
    setCounter(counter + 1);
  };

  const handleClicksDecrease = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  const isDecrementDisabled = counter === 0;

  return (
    <div className="counter flex items-center">
      <div
        className={`bg-slate-200 p-1 cursor-pointer ${
          isDecrementDisabled ? "opacity-50 cursor-not-allowed" : ""
        }`}
        onClick={!isDecrementDisabled ? handleClicksDecrease : undefined}
      >
        <RemoveIcon />
      </div>
      <input
        className="w-16 outline-none text-center overflow-hidden appearance-none"
        type="number"
        value={counter}
        readOnly
        style={{
          WebkitAppearance: "none",
          MozAppearance: "textfield",
        }}
      />
      <div
        className="bg-slate-200 p-1 cursor-pointer"
        onClick={handleClicksIncrease}
      >
        <AddIcon />
      </div>
    </div>
  );
};
