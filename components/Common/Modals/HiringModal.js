import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { UploadIcon, XIcon } from "@heroicons/react/outline";
import Image from "next/image";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";

// Assets
import ModalGraphic from "assets/Career/ModalGraphic.svg";

// Utils
import { inputHandler } from "helpers/inputHandler";

// TODO: Add upload feature
function HiringModal({ open, setOpen }) {
  const [details, setDetails] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    linkedinProfile: "",
    portfolioLink: "",
    githubProfile: "",
    uploadResume: "",
  });

  const onSubmit = async () => {
    if (details.name !== "") {
      console.log(details);
      setOpen(false);
    }
  };

  return (
    <>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed z-30 inset-0 overflow-y-auto"
          onClose={setOpen}
        >
          <div className="flex items-end justify-center min-h-screen max-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-transparent bg-opacity-5 backdrop-filter backdrop-blur transition-opacity" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div className="inline-block align-bottom bg-white rounded-xl margin-top-bottom overflow-y-auto shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-5xl w-full">
                <div className="block absolute top-0 right-0 pt-3 pr-3">
                  <button
                    type="button"
                    className="bg-white rounded-md text-rl-dark-grey hover:text-rl-red focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-transparent cursor-pointer transform transition hover:scale-125 duration-300 ease-in-out"
                    onClick={setOpen}
                  >
                    <span className="sr-only">Close</span>
                    <XIcon className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>
                <div className="flex flex-col md:flex-row sm:items-center w-full h-full bg-rl-light">
                  <div className="w-full md:w-1/2 bg-rl-light px-12 py-24 h-full">
                    <Image src={ModalGraphic} />
                  </div>
                  <div className="w-full md:w-1/2 flex flex-col items-start px-10 py-16 space-y-7 bg-white">
                    <Dialog.Title className="font-semibold text-md md:text-3.5xl text-left leading-snug text-rl-dark-grey">
                      Submit your details to apply for this position
                    </Dialog.Title>
                    <form className="flex flex-col items-start w-full space-y-7">
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
                        className="w-full focus:border-0 focus:border-transparent focus:ring-0 focus:ring-transparent"
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
                        className="w-full focus:border-0 focus:border-transparent focus:ring-0 focus:ring-transparent"
                      />
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
                        className="w-full focus:border-0 focus:border-transparent focus:ring-0 focus:ring-transparent"
                      />
                      <TextField
                        id="linkedinProfile"
                        label="Linkedin Profile"
                        type="text"
                        variant="standard"
                        value={details?.linkedinProfile}
                        onChange={(e) => {
                          setDetails({
                            ...details,
                            linkedinProfile: inputHandler(e, "linkedinProfile"),
                          });
                        }}
                        className="w-full focus:border-0 focus:border-transparent focus:ring-0 focus:ring-transparent"
                      />
                      <TextField
                        id="portfolioLink"
                        label="Portfolio Link"
                        type="text"
                        variant="standard"
                        value={details?.portfolioLink}
                        onChange={(e) => {
                          setDetails({
                            ...details,
                            portfolioLink: inputHandler(e, "portfolioLink"),
                          });
                        }}
                        className="w-full focus:border-0 focus:border-transparent focus:ring-0 focus:ring-transparent"
                      />
                      <TextField
                        id="githubProfile"
                        label="Github Profile"
                        type="text"
                        variant="standard"
                        value={details?.githubProfile}
                        onChange={(e) => {
                          setDetails({
                            ...details,
                            githubProfile: inputHandler(e, "githubProfile"),
                          });
                        }}
                        className="w-full focus:border-0 focus:border-transparent focus:ring-0 focus:ring-transparent"
                      />
                      <FormControl
                        className="w-full focus:border-0 focus:border-transparent focus:ring-0 focus:ring-transparent"
                        variant="standard"
                      >
                        <InputLabel htmlFor="uploadResume">
                          Upload resume
                        </InputLabel>
                        <Input
                          id="uploadResume"
                          label="Upload Resume"
                          type="text"
                          variant="standard"
                          value={details?.uploadResume}
                          onChange={(e) => {
                            setDetails({
                              ...details,
                              uploadResume: inputHandler(e, "uploadResume"),
                            });
                          }}
                          className="w-full focus:border-0 focus:border-transparent focus:ring-0 focus:ring-transparent"
                          endAdornment={
                            <InputAdornment position="end">
                              <IconButton
                              // onClick={handleClickShowPassword}
                              // onMouseDown={handleMouseDownPassword}
                              >
                                <UploadIcon className="h-5 w-5" />
                              </IconButton>
                            </InputAdornment>
                          }
                        />
                      </FormControl>
                      <button
                        type="button"
                        onClick={() => {
                          onSubmit();
                        }}
                        className="bg-rl-red text-white font-semibold text-md text-center px-9 py-2.5 rounded-full cursor-pointer transform transition hover:scale-105 duration-300 ease-in-out"
                      >
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}

export default HiringModal;
