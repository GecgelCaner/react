import { useState } from "react";
import "./App.css";
function App() {
  const [value, setValue] = useState("");

  const click = (e) => {
    setValue(value + e.target.value);
  };

  return (
    <div className="container">
      <div className="calculator">
        <form action="">
          <div className="display">
            <input type="text" value={value} />
          </div>
          <div>
            <input type="button" value="AC" onClick={() => setValue("")} />
            <input
              type="button"
              value="DE"
              onClick={() => setValue(value.slice(0, -1))}
            />
            <input type="button" value="." onClick={click} />
            <input type="button" value="/" onClick={click} />
          </div>
          <div>
            <input type="button" value="7" onClick={click} />
            <input type="button" value="8" onClick={click} />
            <input type="button" value="9" onClick={click} />
            <input type="button" value="*" onClick={click} />
          </div>
          <div>
            <input type="button" value="4" onClick={click} />
            <input type="button" value="5" onClick={click} />
            <input type="button" value="6" onClick={click} />
            <input type="button" value="+" onClick={click} />
          </div>
          <div>
            <input type="button" value="1" onClick={click} />
            <input type="button" value="2" onClick={click} />
            <input type="button" value="3" onClick={click} />
            <input type="button" value="-" onClick={click} />
          </div>
          <div>
            <input type="button" value="00" onClick={click} />
            <input type="button" value="0" onClick={click} />
            <input
              className="equal"
              type="button"
              value="="
              onClick={(e) => setValue(eval(value))}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
