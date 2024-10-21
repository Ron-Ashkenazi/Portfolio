import "./Intro.css";
import { HiChevronDoubleDown } from "react-icons/hi";
import { forwardRef } from "react";

const Intro = forwardRef(({ aboutRef }, ref) => {
  return (
    <div ref={ref} className="top-div">
      <div className="content">
        <h1 className="RA-title">ron ashkenazi</h1>
        <h3 className="SF-title">software developer</h3>
      </div>
      <HiChevronDoubleDown
        onClick={() => {
          if (aboutRef.current) {
            aboutRef.current.scrollIntoView({ behavior: "smooth" });
          }
        }}
        className="bottom-span"
      />
    </div>
  );
});

export default Intro;
