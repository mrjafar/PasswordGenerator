/* eslint-disable no-unused-vars */
import { useDispatch} from "react-redux";
import { setErrorMessage, setPassword } from "../feature/PasswordSlice";
import { toast } from "react-toastify";

const usePasswordGen = () => {

  const dispatch = useDispatch();


  const generatePassword = (checkboxData, length) => {
    let charSet = "",
      generatedPassword = "";

    const selectedOption = checkboxData.filter(
      (checkbox) => checkbox.state
    );

    if(selectedOption.length === 0) {
        dispatch(setErrorMessage(("Please select at lease one option")));
        dispatch(setPassword(""))
        return;
    }

    selectedOption.forEach((option) => {
      switch (option.title) {
        case "Include Uppercase Letters":
          charSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
          break;

        case "Include Lowercase Letters":
          charSet += "abcdefghijklmnopqrstuvwxyz";
          break;

        case "Include Numbers":
          charSet += "0123456789";
          break;

        case "Include Symbols":
          charSet += "!@#$%^&*()";
          break;
        default:
          break;
      }
    });

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charSet.length);
      generatedPassword += charSet[randomIndex];
    }

    dispatch(setPassword(generatedPassword));
    dispatch(setErrorMessage(""));
    toast.success("Password generated successfully.")
  };``
  return { generatePassword };
};

export default usePasswordGen;
