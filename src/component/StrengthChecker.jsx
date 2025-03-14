import { Fragment } from "react";

export const PasswordStrengthIndicator = ({password}) => {

  const getPasswordStrength = () => {

    const passwordLength = password.length;
    
    if (passwordLength < 1) {
      return "";
    } else if (passwordLength < 4) {
      return "very weak";
    } else if (passwordLength < 8) {
      return "Poor";
    } else if (passwordLength < 12) {
      return "Medium";
    } else if (passwordLength < 16) {
      return "Strong";
    } else {
      return "Very Strong";
    }
    
  }
  const passwordStrength = getPasswordStrength();

  if(!passwordStrength) return Fragment;

  return (
    <div className="password-strength">
      Strength: <span style={{fontWeight:"bold"}}>{passwordStrength}</span>
    </div>
  )
};


