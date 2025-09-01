import { Link } from "react-router";
import { IconCopyright, IconSend } from "@tabler/icons-react";

const Homepage = () => {
  return (
    <main className="flex flex-col items-start w-full max-w-screen-xl min-h-screen gap-28 px-6 bg-black">
      <div className="inline-flex items-center justify-between w-full py-5">
        <div className="inline-flex flex-col items-center md:items-start justify-start gap-1  w-full md:w-fit">
          <h2 className="text-3xl">CAD·Nexus·Tech</h2>
          <p className="text-sm text-center md:text-start">
            Engineering future, one nexus at a time
          </p>
        </div>
        <Link
          to="/services"
          className="justify-start text-base font-normal hidden md:inline-block underline underline-offset-2"
        >
          Our services
        </Link>
        <div className="hidden gap-2 md:flex">
          <IconSend />
          <Link
            to={`mailto:info@cadnexus.tech`}
            className="justify-start inline-block py-0.5 border-b hover:border-b border-transparent hover:border-white transition-all text-base font-normal "
          >
            info@cadnexus.tech
          </Link>
        </div>
      </div>
      <HeroSection />
      <div className="inline-flex flex-col-reverse items-center justify-between w-full gap-5 mb-4 md:flex-row">
        {/* <div className=""> */}
        <p className="flex md:items-center items-start justify-center md:justify-start  gap-2 w-full">
          <div>
            <IconCopyright size={15} />
          </div>
          2025 CAD Nexus Technologies. All rights reserved.
        </p>
        {/* </div> */}
        <p className="font-extralight w-full text-center flex-1 text-sm md:text-base  text-nowrap">
          Extended website launching soon...
        </p>
      </div>
    </main>
  );
};

export default Homepage;
const HeroSection = () => {
  return (
    <div className="flex flex-col justify-center flex-1 mx-auto text-center ">
      <div className="inline-flex justify-start items-center gap-3.5">
        <p className="justify-start text-3xl font-bold text-balance">
          The Nexus of Engineering, Technology, and the{" "}
          <span className="px-1 text-3xl font-bold text-center text-black bg-white">
            future
          </span>
        </p>
      </div>
      <p className="max-w-[740px] text-center mt-6 text-base mx-auto text-balance">
        <span className="text-black bg-white">CAD·Nexus·Technologies</span> is a
        multidisciplinary hub for design, fabrication, and software solutions.
        We bring together MEP designs, CAD/CAM and software development to
        transform ideas into meaningful reality.
      </p>
      <Link to="/services" className="text-sm mt-10 md:hidden">
        Checkout our services
      </Link>
      <Link
        to="mailto:info@cadnexus.tech"
        className="px-5 w-fit mx-auto mt-10 hover:bg-white hover:text-black transition-all py-2.5 bg-black/0  outline-[1.50px] outline-offset-[-1.50px] outline-white inline-flex justify-center items-center gap-2.5"
      >
        <p className="text-lg font-medium ">GET IN TOUCH</p>
      </Link>
    </div>
  );
};
