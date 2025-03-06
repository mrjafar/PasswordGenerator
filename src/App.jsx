import { useState } from "react";
import "./App.css";
import usePasswordGen from "./hooks/usePasswordGen";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { PasswordStrengthIndicator } from "./component/StrengthChecker";

const App = () => {
  const [length, setLength] = useState(4);
  const [checkboxData, setCheckboxData] = useState([
    { title: "Include Uppercase Letters", state: false },
    { title: "Include Lowercase Letters", state: false },
    { title: "Include Numbers", state: false },
    { title: "Include Symbols", state: false },
  ]);

  const [copied, setCopied] = useState(false);

  const password = useSelector((state) => state.password)
  const errorMessage = useSelector((state) => state.errorMessage)

  const handleCheckboxChange = (i) => {
    const updatedCheckboxData = [...checkboxData];
    updatedCheckboxData[i].state = !updatedCheckboxData[i].state;
    setCheckboxData(updatedCheckboxData);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(password);
    setCopied(true);
    toast.success("Password Copied Successfully.")

    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  const {  generatePassword } = usePasswordGen();

  return (
    <>
      <h1>Password Generator</h1>
      <div className="container">
        {/* password text and copy btn */}
        {password && (
          <div className="header">
            <div className="title">{password}</div>
            <button className="copy-btn" onClick={() => handleCopy()}>
              {copied ? "Copied" : "Copy"}
            </button>
          </div>
        )}
        {/* Character length */}
        <div className="char-length">
          <span>
            <label>Character Length</label>
            <label>{length}</label>
          </span>
          <input
            type="range"
            min="4"
            max="20"
            value={length}
            onChange={(e) => setLength(e.target.value)}
          />
        </div>
        {/* checkbox  */}
        <div className="checkboxes">
          {checkboxData.map((curCheckbox, index) => {
            return (
              <div key={index}>
                <input
                  type="checkbox"
                  onChange={() => handleCheckboxChange(index)}
                  checked={curCheckbox.state}
                />
                <label>{curCheckbox.title}</label>
              </div>
            );
          })}
        </div>
        {/* Strength */}
        <PasswordStrengthIndicator password={password} />
        {/* Error Handling */}
        {errorMessage && <div className="error-msg">{errorMessage}</div>}
        {/* Generate btn */}
        <button
          className="generate-btn"
          onClick={() => generatePassword(checkboxData, length)}
        >
          Generate Password
        </button>
      </div>
    </>
  );
};

export default App;
