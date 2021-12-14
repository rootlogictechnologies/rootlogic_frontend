import { useState } from "react";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

// Utils
import { inputHandler } from "helpers/inputHandler";

function ContactForm() {
  const [details, setDetails] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    companyName: "",
    start: "",
    hear: "",
    projectDetails: "",
  });

  const onSubmit = async () => {
    if (details.name !== "") {
      console.log(details);
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
            <InputLabel id="hear">Where did you hear about us?</InputLabel>
            <Select
              labelId="hear"
              id="hear"
              label="Where did you hear about us?"
              value={details?.hear}
              onChange={(e) => {
                setDetails({
                  ...details,
                  hear: inputHandler(e, "hear"),
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
          id="projectDetails"
          label="About the Project"
          type="text"
          rows={4}
          variant="standard"
          value={details?.projectDetails}
          onChange={(e) => {
            setDetails({
              ...details,
              projectDetails: inputHandler(e, "projectDetails"),
            });
          }}
          className="w-full focus:border-0 focus:border-transparent focus:ring-0 focus:ring-transparent"
        />
        <button
          type="submit"
          onClick={() => {
            onSubmit();
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
