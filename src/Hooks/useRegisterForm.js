import { useState, useEffect } from "react";
import { useUserDetails } from "../ContextAPI/UserDetailsContext";

const useRegisterForm = (Validate) => {
  const [loader, setLoader] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  const [errors, setErrors] = useState({});

  const { userDetails } = useUserDetails();

  const [userValues, setUserValues] = useState({
    user_id: "",
    name: "",
    email: "",
    confirm_email: "",
    password: "",
    confirm_password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserValues((preValues) => {
      return {
        ...preValues,
        [name]: value,
      };
    });
  };

  const getUserId = () => {
    return "user_id";
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrors(Validate(userValues, userDetails));
    setIsSubmit(true);
  };

  useEffect(() => {
    function createUser() {
      setLoader(true);
      userValues.user_id = getUserId();

      // database post method fetch("")

      console.log(userValues);

      //  .then(()=>{
      //  navigate("/")
      //})
    }

    if (Object.keys(errors).length === 0 && isSubmit) {
      createUser();
    }
  }, [errors, isSubmit, userValues]); // eslint-disable-line react-hooks/exhaustive-deps

  return {
    handleChange,
    handleSubmit,
    userValues,
    errors,
    loader,
  };
};

export default useRegisterForm;
