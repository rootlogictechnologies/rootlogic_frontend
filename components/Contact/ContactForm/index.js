import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

// TODO: Add validations
function ContactForm() {
  return (
    <div className="pb-20 mx-auto px-7 sm:px-6 lg:px-8 max-w-6xl">
      <div className="flex flex-col w-full space-y-10">
        <div className="flex flex-col md:flex-row md:space-x-7 w-full space-y-10 md:space-y-0">
          <TextField
            id="name"
            label="Name"
            type="text"
            variant="standard"
            className="w-full md:w-1/2 focus:border-0 focus:border-transparent focus:ring-0 focus:ring-transparent"
          />
          <TextField
            id="email"
            label="Email"
            type="email"
            variant="standard"
            className="w-full md:w-1/2 focus:border-0 focus:border-transparent focus:ring-0 focus:ring-transparent"
          />
        </div>
        <div className="flex flex-col md:flex-row md:space-x-7 w-full space-y-10 md:space-y-0">
          <TextField
            id="phoneNumber"
            label="Phone Number"
            type="number"
            variant="standard"
            className="w-full md:w-1/2 focus:border-0 focus:border-transparent focus:ring-0 focus:ring-transparent"
          />
          <TextField
            id="companyName"
            label="Company Name"
            type="text"
            variant="standard"
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
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Immediately</MenuItem>
              <MenuItem value={20}>In a week</MenuItem>
              <MenuItem value={30}>In a month</MenuItem>
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
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Social Media</MenuItem>
              <MenuItem value={20}>Google</MenuItem>
              <MenuItem value={30}>LinkedIn</MenuItem>
            </Select>
          </FormControl>
        </div>
        <TextField
          id="projectDetails"
          label="About the Project"
          type="text"
          rows={4}
          variant="standard"
          className="w-full focus:border-0 focus:border-transparent focus:ring-0 focus:ring-transparent"
        />
        <button
          type="submit"
          className="max-w-max bg-rl-red text-white font-semibold text-md text-center px-14 py-3 rounded-full cursor-pointer transform transition hover:scale-105 duration-300 ease-in-out"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default ContactForm;
