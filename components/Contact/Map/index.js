import { useEffect } from "react";
import Image from "next/image";

import WorldMapSVG from "assets/Contact/Map.svg";

import WorldMapMobileSVG from "assets/Contact/MapMobile.svg";

function WorldMap() {
  function mapTooltips() {
    const tooltips = document.querySelectorAll(".all-tooltip .tooltip");
    const fullDiv = document.querySelector(".wrapper");
    const container = document.querySelector(".contain");
    let timeoutId;
    window.addEventListener("resize", contentPosition);
    window.addEventListener("DOMContentLoaded", contentPosition);

    function contentPosition() {
      tooltips.forEach((tooltip) => {
        const pin = tooltip.querySelector(".pin");
        const content = tooltip.querySelector(".tooltip-content");
        // const arrow = tooltip.querySelector(".arrow");
        const pinLeft = pin.offsetLeft;
        if (pinLeft + content.offsetWidth / 2 > fullDiv.offsetWidth) {
          const extraLeft =
            fullDiv.offsetWidth - (pinLeft + content.offsetWidth / 2);
          // console.log('right-conflict', tooltip)
          content.style.left =
            pinLeft - content.offsetWidth / 2 + extraLeft - 30 + "px";
          content.style.top = pin.offsetTop - content.offsetHeight + 30 + "px";
        } else if (
          pin.offsetLeft + container.offsetLeft <
          content.offsetWidth / 2
        ) {
          // console.log('left conflict', pin.offsetLeft)
          content.style.left = -container.offsetLeft + "px";
          content.style.top = pin.offsetTop - content.offsetHeight + 30 + "px";
        } else {
          content.style.left = pinLeft - content.offsetWidth / 2 + "px";
          content.style.top = pin.offsetTop - content.offsetHeight + 30 + "px";
        }
        // arrow.style.left =
        //   pinLeft - content.offsetLeft + pin.offsetWidth / 2 + "px";
      });
    }
    tooltips.forEach((tooltip) => {
      const pin = tooltip.querySelector(".pin");
      const content = tooltip.querySelector(".tooltip-content");
      pin.addEventListener("mouseover", () => {
        tooltip.classList.add("active");
      });
      pin.addEventListener("mouseleave", () => {
        timeoutId = setTimeout(() => {
          if (!tooltip.classList.contains("content-hover")) {
            tooltip.classList.remove("active");
          }
        }, 1000);
      });
      content.addEventListener("mouseover", () => {
        clearTimeout(timeoutId);
        tooltip.classList.add("active");
        tooltip.classList.add("content-hover");
      });
      content.addEventListener("mouseleave", () => {
        timeoutId = setTimeout(() => {
          tooltip.classList.remove("active");
          tooltip.classList.remove("content-hover");
        }, 1000);
      });
    });
  }

  useEffect(() => {
    mapTooltips();
  }, []);

  return (
    <div className="wrapper w-full max-w-6xl my-10 mx-auto md:h-615px max-h-80vh px-5">
      <div className="relative w-full h-full contain hidden md:block">
        <Image
          src={WorldMapSVG}
          alt="World Map"
          className="w-full h-full map"
        />

        <div class="all-tooltip hidden md:block">
          <div class=" tooltip tooltip-1">
            <div class="pin h-1 w-1 lg:h-2 lg:w-2 rounded-full relative bg-rl-red absolute animate-ping cursor-pointer"></div>
            <div class="tooltip-content">
              <div class="content">
                <h1 className="font-poppins text-xl leading-8 font-semibold text-rl-dark-grey">
                  India
                </h1>
                <p className="font-poppins font-normal text-xs leading-4 text-rl-dark-grey mt-2">
                  301, Level 3, Inani House, Lotus Heights, Plot No 264, Kavuri
                  Hills, Madhapur, Hyderabad, <br />
                  Telangana - 500033, India
                </p>
              </div>
              {/* <div className="arrow" /> */}
            </div>
          </div>
        </div>
      </div>
      <div className="block md:hidden w-full">
        {/* <Image
          src={WorldMapMobileSVG}
          alt="World Map"
          className="w-full"
          layout="responsive"
        /> */}
        {/* <div className="w-full max-w-xs mx-auto"> */}
      </div>
    </div>
  );
}

export default WorldMap;
