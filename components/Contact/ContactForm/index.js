import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

// Utils
import { inputHandler } from "helpers/inputHandler";

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

  const [formSubmitted, setFormSubmitted] = useState(false);

  const submitContact = async () => {
    try {
      const res = await contactForm({ data: details });
      if (res.data?.data) {
        setFormSubmitted(true);
      }
    } catch (e) {
      console.error("Error in Contact Form", e);
    }
  };

  useEffect(() => {
    if (formSubmitted) {
      setDetails({
        name: "",
        email: "",
        phoneNumber: "",
        companyName: "",
        start: "",
        heardFrom: "",
        projectDescription: "",
      });
      setFormSubmitted(false);
    }
  }, [formSubmitted]);

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
            onChange={(e) => {
              setDetails({
                ...details,
                name: inputHandler(e, "name"),
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
            onChange={(e) => {
              setDetails({
                ...details,
                email: inputHandler(e, "email"),
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
            onChange={(e) => {
              setDetails({
                ...details,
                phoneNumber: inputHandler(e, "phoneNumber"),
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
            if (details.name !== "") {
              submitContact(details);
            }
          }}
          className="max-w-max bg-rl-red text-white font-semibold text-md text-center px-14 py-3 rounded-full cursor-pointer transform transition hover:scale-105 duration-300 ease-in-out"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default ContactForm;
