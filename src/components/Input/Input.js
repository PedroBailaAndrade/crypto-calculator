import "./Input.css";

const Input = ({
  label,
  options = null,
  selectedValue,
  type,
  setInputValue,
}) => {
  return (
    <div className="input-wrapper">
      {label && <div className="label">{label}:</div>}
      <div className="input">
        {type === "currency" && options && (
          <div className="input-select">
            <select
              value={selectedValue.symbol}
              onChange={(event) => setInputValue(event.target.value)}
            >
              {options.map((option) => (
                <option
                  key={Math.random() * Math.random()}
                  value={option.symbol}
                >
                  {option.symbol}
                </option>
              ))}
            </select>
            <div className="arrow">
              <img alt="select-arrow" src="./select-arrow-down.svg"></img>
            </div>
          </div>
        )}
        {type === "market" && options && (
          <div className={`input-select ${type === "market" ? "market" : ""}`}>
            <select
              value={selectedValue.id}
              onChange={(event) => setInputValue(event.target.value)}
            >
              {options.map((option) => (
                <option key={Math.random() * Math.random()} value={option.id}>
                  {option.name}
                </option>
              ))}
            </select>
            <div className="arrow">
              <img alt="select-arrow" src="./select-arrow-down.svg"></img>
            </div>
          </div>
        )}
        {type === "number" && (
          <div className="input-number">
            <input
              onChange={(event) => setInputValue(event.target.value)}
              type="number"
              min="1"
              step="1"
              value={selectedValue}
            ></input>
          </div>
        )}
      </div>
    </div>
  );
};

export default Input;
