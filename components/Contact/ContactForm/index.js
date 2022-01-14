import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

// Utils
import { inputHandler } from "helpers/inputHandler";
import { validateEmail, validatePhone } from "helpers/checkRegex";

// APIs
import { contactForm } from "apis";

function ContactForm() {
  const [details, setDetails] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    companyName: "",
    start: "",
    heardFrom: "",
    projectDescription: "",
  });
  const [error, setError] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const submitContact = async () => {
    if (
      details?.name == "" ||
      details?.email == "" ||
      details?.phoneNumber == ""
    ) {
      let errorObj = {
        name: "",
        email: "",
        phoneNumber: "",
      };
      if (details?.name == "") errorObj.name = "Please enter a Name!";

      if (details?.email == "") errorObj.email = "Please enter an Email!";

      if (details?.phoneNumber == "")
        errorObj.phoneNumber = "Please enter a Phone Number!";

      setError(errorObj);

      return;
    }

    if (details?.email && details?.phoneNumber) {
      let errorObj = {
        email: "",
        phoneNumber: "",
      };

      let error = false;

      if (!validateEmail(details?.email)) {
        errorObj.email = "Please enter a valid Email!";
        error = true;
      }
      if (!validatePhone(details?.phoneNumber)) {
        errorObj.phoneNumber = "Please enter a valid Number!";
        error = true;
      }
      setError(errorObj);

      if (error) return;
    }

    try {
      const res = await contactForm({ data: details });
      if (res.data?.data) {
        setFormSubmitted(true);
        setDetails({
          name: "",
          email: "",
          phoneNumber: "",
          companyName: "",
          start: "",
          heardFrom: "",
          projectDescription: "",
        });
        setError({
          name: "",
          email: "",
          phoneNumber: "",
        });
        setTimeout(function () {
          setFormSubmitted(false);
        }, 2000);
      }
    } catch (e) {
      console.error("Error in Contact Form", e);
    }
  };

  return (
    <div className="pb-20 mx-auto px-7 sm:px-6 lg:px-8 max-w-6xl">
      <div className="flex flex-col w-full space-y-10">
        <div className="flex flex-col md:flex-row md:space-x-7 w-full space-y-10 md:space-y-0">
          <TextField
            id="name"
            label="Name"
            type="text"
            variant="standard"
            value={details?.name}
            error={error?.name}
            helperText={error?.name}
            onChange={(e) => {
              setDetails({
                ...details,
                name: inputHandler(e, "name"),
              });
              setError({
                ...error,
                name: "",
              });
            }}
            className="w-full md:w-1/2 focus:border-0 focus:border-transparent focus:ring-0 focus:ring-transparent"
          />
          <TextField
            id="email"
            label="Email"
            type="email"
            variant="standard"
            value={details?.email}
            error={error?.email}
            helperText={error?.email}
            onChange={(e) => {
              setDetails({
                ...details,
                email: inputHandler(e, "email"),
              });
              setError({
                ...error,
                email: "",
              });
            }}
            className="w-full md:w-1/2 focus:border-0 focus:border-transparent focus:ring-0 focus:ring-transparent"
          />
        </div>
        <div className="flex flex-col md:flex-row md:space-x-7 w-full space-y-10 md:space-y-0">
          <TextField
            id="phoneNumber"
            label="Phone Number"
            type="number"
            variant="standard"
            value={details?.phoneNumber}
            error={error?.phoneNumber}
            helperText={error?.phoneNumber}
            onChange={(e) => {
              setDetails({
                ...details,
                phoneNumber: inputHandler(e, "phoneNumber"),
              });
              setError({
                ...error,
                phoneNumber: "",
              });
            }}
            className="w-full md:w-1/2 focus:border-0 focus:border-transparent focus:ring-0 focus:ring-transparent"
          />
          <TextField
            id="companyName"
            label="Company Name"
            type="text"
            variant="standard"
            value={details?.companyName}
            onChange={(e) => {
              setDetails({
                ...details,
                companyName: inputHandler(e, "companyName"),
              });
            }}
            className="w-full md:w-1/2 focus:border-0 focus:border-transparent focus:ring-0 focus:ring-transparent"
          />
        </div>
        <div className="flex flex-col md:flex-row md:space-x-7 w-full space-y-10 md:space-y-0">
          <FormControl
            variant="standard"
            className="w-full md:w-1/2 focus:border-0 focus:border-transparent focus:ring-0 focus:ring-transparent"
          >
            <InputLabel id="start">When are you likely to start?</InputLabel>
            <Select
              labelId="start"
              id="start"
              label="When are you likely to start?"
              value={details?.start}
              onChange={(e) => {
                setDetails({
                  ...details,
                  start: inputHandler(e, "start"),
                });
              }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="Immediately">Immediately</MenuItem>
              <MenuItem value="In a week">In a week</MenuItem>
              <MenuItem value="In a month">In a month</MenuItem>
            </Select>
          </FormControl>
          <FormControl
            variant="standard"
            className="w-full md:w-1/2 focus:border-0 focus:border-transparent focus:ring-0 focus:ring-transparent"
          >
            <InputLabel id="heardFrom">Where did you hear about us?</InputLabel>
            <Select
              labelId="heardFrom"
              id="heardFrom"
              label="Where did you hear about us?"
              value={details?.heardFrom}
              onChange={(e) => {
                setDetails({
                  ...details,
                  heardFrom: inputHandler(e, "heardFrom"),
                });
              }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="Social Media">Social Media</MenuItem>
              <MenuItem value="Google">Google</MenuItem>
              <MenuItem value="LinkedIn">LinkedIn</MenuItem>
            </Select>
          </FormControl>
        </div>
        <TextField
          id="projectDescription"
          label="About the Project"
          type="text"
          rows={4}
          variant="standard"
          value={details?.projectDescription}
          onChange={(e) => {
            setDetails({
              ...details,
              projectDescription: inputHandler(e, "projectDescription"),
            });
          }}
          className="w-full focus:border-0 focus:border-transparent focus:ring-0 focus:ring-transparent"
        />
        <button
          type="submit"
          onClick={() => {
            submitContact(details);
          }}
          className="max-w-max bg-rl-red text-white font-semibold text-md text-center px-14 py-3 rounded-full cursor-pointer transform transition hover:scale-105 duration-300 ease-in-out"
        >
          {formSubmitted ? "Thank you!" : "Submit"}
        </button>
      </div>
    </div>
  );
}

export default ContactForm;
