export const inputHandler = (e, type) => {
  let val = "";
  switch (type) {
    case "name":
      val = e.target.value.trimStart().replace(/[^a-zA-Z\s]/gi, "");
      return val;
      break;
    case "email":
      val = e.target.value.trimStart().replace(/[^\w\s\.\,@]/gi, "");
      return val;
      break;
    case "phoneNumber":
      val = e.target.value.trimStart().replace(/[^0-9]/gi, "");
      return val;
      break;
    case "companyName":
      val = e.target.value.trimStart();
      return val;
      break;
    case "start":
      val = e.target.value;
      return val;
      break;
    case "hear":
      val = e.target.value;
      return val;
      break;
    case "projectDetails":
      val = e.target.value.trimStart();
      return val;
      break;
    case "linkedinProfile":
      val = e.target.value.trimStart();
      return val;
      break;
    case "portfolioLink":
      val = e.target.value.trimStart();
      return val;
      break;
    case "githubProfile":
      val = e.target.value.trimStart();
      return val;
      break;
    default:
      val = e.target.value.trimStart();
      return val;
      break;
  }
};
