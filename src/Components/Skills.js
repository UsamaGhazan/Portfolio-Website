import React from "react";
import { forwardRef } from "react";

export const Skills = forwardRef((props, ref) => {
  return (
    <>
      <div className="skills" ref={ref}>
        <div className="max-width">
          <div className="title">My Skills</div>
          <div className="skill-content flex">
            <div className="column left">
              <div className="text">My creative skills & experiences.</div>
              <p>
                I have expertise in html css and Javascript. On frontend I use
                technologies like ReactJs, Material UI/Chakra UI. On backend I use Nodejs and ExpressJs.
                I use MongoDb Database which is quite efficient.
              </p>
              <a href="/">My Resume</a>
            </div>

            <div className="column right">
              <div className="bars">
                <div className="info">
                  <span>ReactJs</span>
                  <span>90%</span>
                </div>
                <div className="line html"></div>
              </div>
              <div className="bars">
                <div className="info">
                  <span>NodeJs</span>
                  <span>80%</span>
                </div>
                <div className="line css"></div>
              </div>
              <div className="bars">
                <div className="info">
                  <span>ExpressJs</span>
                  <span>80%</span>
                </div>
                <div className="line js"></div>
              </div>
              <div className="bars">
                <div className="info">
                  <span>MongoDb</span>
                  <span>80%</span>
                </div>
                <div className="line react"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});
