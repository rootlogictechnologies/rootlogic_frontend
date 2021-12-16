import { useState } from "react";
import { Disclosure, Transition } from "@headlessui/react";
import { MinusIcon, PlusIcon } from "@heroicons/react/solid";

// Component
import HiringModal from "components/Common/Modals/HiringModal";

function Openings({ title, description, experience, type, location, link }) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Disclosure
        as="div"
        className="w-full bg-rl-light rounded-lg py-7 px-5 md:px-7"
      >
        {({ open }) => (
          <>
            <div className="w-full flex flex-row items-center justify-between">
              <h1 className="font-semibold text-rl-dark-grey text-sm md:text-md leading-5 md:leading-7">
                {title}
              </h1>
              <div className="flex flex-row items-center">
                {open && (
                  <div className="md:flex flex-row items-center hidden text-rl-dark-grey font-normal text-base leading-6">
                    <div className="pr-3">{experience}</div>
                    <vr className="w-0.25 h-4 bg-rl-dark-grey" />
                    <div className="px-3">{type}</div>
                    <vr className="w-0.25 h-4 bg-rl-dark-grey" />
                    <div className="pl-3">{location}</div>
                  </div>
                )}
                <Disclosure.Button className="ml-12">
                  {open ? (
                    <MinusIcon className="h-4 w-4 text-rl-dark-grey" />
                  ) : (
                    <PlusIcon className="h-4 w-4 text-rl-dark-grey" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
            {open && (
              <div className="flex flex-row items-center md:hidden mt-3 text-xs font-normal leading-4 text-rl-dark-grey">
                <div className="pr-3">{experience}</div>
                <vr className="w-0.25 h-4 bg-rl-dark-grey" />
                <div className="px-3">{type}</div>
                <vr className="w-0.25 h-4 bg-rl-dark-grey" />
                <div className="pl-3">{location}</div>
              </div>
            )}
            <Transition
              show={open}
              enter="transition-opacity duration-75"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity duration-150"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Disclosure.Panel
                static
                as="div"
                className="mt-5 flex flex-col items-start space-y-7"
              >
                <p className="font-normal text-sm md:text-base leading-5 md:leading-6 text-rl-dark-grey opacity-70">
                  {description}
                </p>
                <button
                  onClick={() => {
                    setModalOpen(true);
                  }}
                  className="bg-rl-red text-white font-semibold text-md text-center px-9 py-2.5 rounded-full cursor-pointer transform transition hover:scale-105 duration-300 ease-in-out"
                >
                  Apply Now
                </button>
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
      <HiringModal
        open={modalOpen}
        setOpen={() => {
          setModalOpen(false);
        }}
      />
    </>
  );
}

export default Openings;
