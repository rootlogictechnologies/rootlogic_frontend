import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import Image from "next/image";

// Assets
import ModalGraphic from "assets/Career/ModalGraphic.svg";

function HiringModal({ open, setOpen }) {
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
              <div className="inline-block align-bottom bg-white rounded-xl margin-top-bottom overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-5xl w-full">
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
                <div className="flex flex-row sm:items-center w-full">
                  <div className="w-1/2 bg-rl-light px-12 py-24 hidden md:block">
                    <Image src={ModalGraphic} />
                  </div>
                  <div className="w-full md:w-1/2 flex flex-col items-start px-10 py-16 space-y-7">
                    <Dialog.Title className="font-semibold text-3.5xl text-left leading-snug text-rl-dark-grey">
                      Submit your details to apply for this position
                    </Dialog.Title>
                    <form className=""></form>
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
