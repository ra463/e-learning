import React, { Fragment } from "react";
import "./home.css";
import { BsMouse, BsFillArrowRightCircleFill } from "react-icons/bs";
import { TreeView, TreeItem } from "@material-ui/lab";
import { MdExpandMore } from "react-icons/md";
import { BiChevronDown } from "react-icons/bi";
import { RiNumber1, RiNumber2 } from "react-icons/ri";
// import { useAlert } from "react-alert";
// import Loder from "../loader/Loder";

const home = () => {
  return (
    <Fragment>
      <div className="title">
        <div className="left-title">
          <p>
            <h2 className="welcome">WELCOME TO</h2>
            <h1>
              <span>Career</span>
              <span>.Scouters</span>
            </h1>
          </p>
          <p>
            <h2>
              DISCOVER & EXPLORE THE CAREER & OPPORTUNITY<br></br>
              <h4 className="heading-1">
                Career and oppurtunities that excite's you for your future
              </h4>
            </h2>
          </p>
          <a href="#study">
            <button className="btn">
              <BsMouse className="button" />
              Get Started
            </button>
          </a>
        </div>
        <div className="right-title">
          {" "}
          <img src="/learn.png" alt="img" />
        </div>
      </div>
      <h2 className="head-1">For School Student</h2>
      <div className="courses">
        <div>
          The conclusion of <b> secondary education</b> happens at the end of
          the <b> 10th standard</b>. However, at this point in your educational
          journey, you will have to choose between completing senior secondary
          schooling in either
          <b>Commerce stream, Arts, or Science stream </b> or opting directly
          from a long list of <b>courses after 10th standard.</b>
        </div>
        <div>
          Rather than moving to 11th standard, many students go for{" "}
          <b>skill development courses</b> or <b>training programs</b> that can
          get them placed into their field of interest. If you are planning to
          pursue a <b>program right after 10th </b>but don’t know where to
          start, then you have certainly come to the <b>right place!</b>
          <b>
            <i>
              &nbsp;Here we have provided the roadmap of courses after 10th
              standard and the varied benefits they offer.{" "}
            </i>
          </b>
        </div>
      </div>
      <div id="study">
        <div>
          <RiNumber1 />
          <h3 className="head-2">Fields after 10th</h3>
        </div>
        <div className="student">
          <div className="class-12">
            <div>
              <BsFillArrowRightCircleFill />
              <h3 className="head-3">Further Study</h3>{" "}
            </div>
            <TreeView
              aria-label="file system navigator"
              defaultCollapseIcon={<BiChevronDown />}
              defaultExpandIcon={<MdExpandMore />}
              sx={{
                height: 240,
                flexGrow: 1,
                maxWidth: 400,
                overflowY: "auto",
              }}
            >
              <TreeItem nodeId="1" label="Maths/Science" />
              <TreeItem nodeId="5" label="Commmerce" />
              <TreeItem nodeId="15" label="Biology" />
              <TreeItem nodeId="20" label="Arts" />
            </TreeView>
          </div>
          <div className="class-12">
            <div>
              <BsFillArrowRightCircleFill />
              <h3 className="head-3">Diploma Courses</h3>{" "}
            </div>
            <TreeView
              aria-label="file system navigator"
              defaultCollapseIcon={<BiChevronDown />}
              defaultExpandIcon={<MdExpandMore />}
              sx={{
                height: 240,
                flexGrow: 1,
                maxWidth: 400,
                overflowY: "auto",
              }}
            >
              <TreeItem
                nodeId="1"
                label="Diploma in Engineering
"
              />
              <TreeItem
                nodeId="1"
                label="Diploma in Hotel Management
"
              />
              <TreeItem
                nodeId="1"
                label="Diploma in Journalism
"
              />
              <TreeItem
                nodeId="1"
                label="Diploma in Education
"
              />
              <TreeItem
                nodeId="1"
                label="Diploma in Photography
"
              />
              <TreeItem
                nodeId="1"
                label="Diploma in Psychology
"
              />
              <TreeItem
                nodeId="1"
                label="Diploma in Elementary Education
"
              />
              <details>
                <summary>Show More</summary>
                <TreeItem
                  nodeId="1"
                  label="Diploma in Digital Marketing
"
                />
                <TreeItem
                  nodeId="1"
                  label="Diploma in Fine Arts
"
                />
                <TreeItem
                  nodeId="1"
                  label="Diploma in English
"
                />
                <TreeItem
                  nodeId="1"
                  label="Diploma in Fashion Designing
"
                />
                <TreeItem
                  nodeId="1"
                  label="Diploma in Information Technology
"
                />
                <TreeItem
                  nodeId="1"
                  label="Diploma in Food Technology
"
                />
                <TreeItem
                  nodeId="1"
                  label="Diploma in Web Development
"
                />
                <TreeItem
                  nodeId="1"
                  label="Diploma in Graphic Designing
"
                />
                <TreeItem
                  nodeId="1"
                  label="Diploma in Makeup and Beauty
"
                />
                <TreeItem
                  nodeId="1"
                  label="Diploma in Textile Designing
"
                />
              </details>
            </TreeView>
          </div>
          <div className="class-12">
            <div>
              <BsFillArrowRightCircleFill />
              <h3 className="head-3">Polytechnic Courses</h3>{" "}
            </div>
            <TreeView
              aria-label="file system navigator"
              defaultCollapseIcon={<BiChevronDown />}
              defaultExpandIcon={<MdExpandMore />}
              sx={{
                height: 240,
                flexGrow: 1,
                maxWidth: 400,
                overflowY: "auto",
              }}
            >
              <TreeItem
                nodeId="1"
                label="Diploma in Computer Programming
"
              />
              <TreeItem
                nodeId="1"
                label="Graduate Certificate in Marketing Management
"
              />
              <TreeItem
                nodeId="1"
                label="Diploma in Petroleum Engineering
"
              />
              <TreeItem
                nodeId="1"
                label="Diploma in Business Administration
"
              />
              <TreeItem
                nodeId="1"
                label="Diploma in Animation, Art & Design
"
              />
              <TreeItem
                nodeId="1"
                label="Diploma in Hospitality Management
"
              />
              <TreeItem
                nodeId="1"
                label="Diploma in Accounting
"
              />
              <TreeItem
                nodeId="1"
                label="Diploma of Early Childhood Education & Care
"
              />
            </TreeView>
          </div>
        </div>
        <div className="student-2">
          <div className="class-12">
            <div>
              <BsFillArrowRightCircleFill />
              <h3 className="head-3">Medical & Paramedical Courses</h3>{" "}
            </div>
            <TreeView
              aria-label="file system navigator"
              defaultCollapseIcon={<BiChevronDown />}
              defaultExpandIcon={<MdExpandMore />}
              sx={{
                height: 240,
                flexGrow: 1,
                maxWidth: 400,
                overflowY: "auto",
              }}
            >
              <TreeItem nodeId="1" label="Maths/Science" />
            </TreeView>
          </div>
          <div className="class-12">
            <div>
              <BsFillArrowRightCircleFill />
              <h3 className="head-3">Vocational Courses</h3>{" "}
            </div>
            <TreeView
              aria-label="file system navigator"
              defaultCollapseIcon={<BiChevronDown />}
              defaultExpandIcon={<MdExpandMore />}
              sx={{
                height: 240,
                flexGrow: 1,
                maxWidth: 400,
                overflowY: "auto",
              }}
            >
              <TreeItem nodeId="1" label="Maths/Science">
                <TreeItem nodeId="2" label="Engineering" />
              </TreeItem>
              <TreeItem nodeId="5" label="Commmerce">
                <TreeItem nodeId="10" label="OSS" />
                <TreeItem nodeId="6" label="MUI">
                  <TreeItem nodeId="8" label="index.js" />
                </TreeItem>
              </TreeItem>
              <TreeItem nodeId="15" label="Biology">
                <TreeItem
                  nodeId="17"
                  label="Bachelor of Veterinary Science (B.VSc)"
                ></TreeItem>
                <TreeItem
                  nodeId="17"
                  label="B Tech Genetic Engineering"
                ></TreeItem>
                <TreeItem nodeId="17" label="B Tech Food Technology"></TreeItem>
                <TreeItem nodeId="17" label="BSc Nursing"></TreeItem>
                <TreeItem nodeId="17" label="B.Sc. Microbiology"></TreeItem>
              </TreeItem>
              <TreeItem nodeId="20" label="Arts">
                <TreeItem nodeId="22" label="Banking"></TreeItem>
              </TreeItem>
            </TreeView>
          </div>
          <div className="class-12">
            <div>
              <BsFillArrowRightCircleFill />
              <h3 className="head-3">ITI Courses</h3>{" "}
            </div>
            <TreeView
              aria-label="file system navigator"
              defaultCollapseIcon={<BiChevronDown />}
              defaultExpandIcon={<MdExpandMore />}
              sx={{
                height: 240,
                flexGrow: 1,
                maxWidth: 400,
                overflowY: "auto",
              }}
            >
              <TreeItem nodeId="1" label="Maths/Science">
                <TreeItem nodeId="2" label="Engineering" />
              </TreeItem>
              <TreeItem nodeId="5" label="Commmerce">
                <TreeItem nodeId="10" label="OSS" />
                <TreeItem nodeId="6" label="MUI">
                  <TreeItem nodeId="8" label="index.js" />
                </TreeItem>
              </TreeItem>
              <TreeItem nodeId="15" label="Biology">
                <TreeItem
                  nodeId="17"
                  label="Bachelor of Veterinary Science (B.VSc)"
                ></TreeItem>
                <TreeItem
                  nodeId="17"
                  label="B Tech Genetic Engineering"
                ></TreeItem>
                <TreeItem nodeId="17" label="B Tech Food Technology"></TreeItem>
                <TreeItem nodeId="17" label="BSc Nursing"></TreeItem>
                <TreeItem nodeId="17" label="B.Sc. Microbiology"></TreeItem>
              </TreeItem>
              <TreeItem nodeId="20" label="Arts">
                <TreeItem nodeId="22" label="Banking"></TreeItem>
              </TreeItem>
            </TreeView>
          </div>
        </div>
      </div>
      <div id="study">
        <div>
          <RiNumber2 />
          <h3 className="head-2">After 12th </h3>
        </div>
        <div className="student">
          <div className="class-12">
            <div>
              <BsFillArrowRightCircleFill />
              <h3 className="head-3">UG Courses for Arts</h3>{" "}
            </div>
            <TreeView
              aria-label="file system navigator"
              defaultCollapseIcon={<BiChevronDown />}
              defaultExpandIcon={<MdExpandMore />}
              sx={{
                height: 240,
                flexGrow: 1,
                maxWidth: 400,
                overflowY: "auto",
              }}
            >
              <TreeItem nodeId="1" label="Maths/Science">
                <TreeItem nodeId="2" label="Engineering" />
              </TreeItem>
              <TreeItem nodeId="5" label="Commmerce">
                <TreeItem nodeId="10" label="OSS" />
                <TreeItem nodeId="6" label="MUI">
                  <TreeItem nodeId="8" label="index.js" />
                </TreeItem>
              </TreeItem>
              <TreeItem nodeId="15" label="Biology">
                <TreeItem
                  nodeId="17"
                  label="Bachelor of Veterinary Science (B.VSc)"
                ></TreeItem>
                <TreeItem
                  nodeId="17"
                  label="B Tech Genetic Engineering"
                ></TreeItem>
                <TreeItem nodeId="17" label="B Tech Food Technology"></TreeItem>
                <TreeItem nodeId="17" label="BSc Nursing"></TreeItem>
                <TreeItem nodeId="17" label="B.Sc. Microbiology"></TreeItem>
              </TreeItem>
              <TreeItem nodeId="20" label="Arts">
                <TreeItem nodeId="22" label="Banking"></TreeItem>
              </TreeItem>
            </TreeView>
          </div>
          <div className="class-12">
            <div>
              <BsFillArrowRightCircleFill />
              <h3 className="head-3">UG Courses for 12th Science</h3>{" "}
            </div>
            <TreeView
              aria-label="file system navigator"
              defaultCollapseIcon={<BiChevronDown />}
              defaultExpandIcon={<MdExpandMore />}
              sx={{
                height: 240,
                flexGrow: 1,
                maxWidth: 400,
                overflowY: "auto",
              }}
            >
              <TreeItem nodeId="1" label="Maths/Science">
                <TreeItem nodeId="2" label="Engineering" />
              </TreeItem>
              <TreeItem nodeId="5" label="Commmerce">
                <TreeItem nodeId="10" label="OSS" />
                <TreeItem nodeId="6" label="MUI">
                  <TreeItem nodeId="8" label="index.js" />
                </TreeItem>
              </TreeItem>
              <TreeItem nodeId="15" label="Biology">
                <TreeItem
                  nodeId="17"
                  label="Bachelor of Veterinary Science (B.VSc)"
                ></TreeItem>
                <TreeItem
                  nodeId="17"
                  label="B Tech Genetic Engineering"
                ></TreeItem>
                <TreeItem nodeId="17" label="B Tech Food Technology"></TreeItem>
                <TreeItem nodeId="17" label="BSc Nursing"></TreeItem>
                <TreeItem nodeId="17" label="B.Sc. Microbiology"></TreeItem>
              </TreeItem>
              <TreeItem nodeId="20" label="Arts">
                <TreeItem nodeId="22" label="Banking"></TreeItem>
              </TreeItem>
            </TreeView>
          </div>
          <div className="class-12">
            <div>
              <BsFillArrowRightCircleFill />
              <h3 className="head-3">UG Courses for 12th Commerce</h3>{" "}
            </div>
            <TreeView
              aria-label="file system navigator"
              defaultCollapseIcon={<BiChevronDown />}
              defaultExpandIcon={<MdExpandMore />}
              sx={{
                height: 240,
                flexGrow: 1,
                maxWidth: 400,
                overflowY: "auto",
              }}
            >
              <TreeItem nodeId="1" label="Maths/Science">
                <TreeItem nodeId="2" label="Engineering" />
              </TreeItem>
              <TreeItem nodeId="5" label="Commmerce">
                <TreeItem nodeId="10" label="OSS" />
                <TreeItem nodeId="6" label="MUI">
                  <TreeItem nodeId="8" label="index.js" />
                </TreeItem>
              </TreeItem>
              <TreeItem nodeId="15" label="Biology">
                <TreeItem
                  nodeId="17"
                  label="Bachelor of Veterinary Science (B.VSc)"
                ></TreeItem>
                <TreeItem
                  nodeId="17"
                  label="B Tech Genetic Engineering"
                ></TreeItem>
                <TreeItem nodeId="17" label="B Tech Food Technology"></TreeItem>
                <TreeItem nodeId="17" label="BSc Nursing"></TreeItem>
                <TreeItem nodeId="17" label="B.Sc. Microbiology"></TreeItem>
              </TreeItem>
              <TreeItem nodeId="20" label="Arts">
                <TreeItem nodeId="22" label="Banking"></TreeItem>
              </TreeItem>
            </TreeView>
          </div>
        </div>
      </div>
      <h2 className="head-1">After Graduation</h2>
      <div className="courses">
        <div>
          The conclusion of <b> secondary education</b> happens at the end of
          the <b> 10th standard</b>. However, at this point in your educational
          journey, you will have to choose between completing senior secondary
          schooling in either
          <b>Commerce stream, Arts, or Science stream </b> or opting directly
          from a long list of <b>courses after 10th standard.</b>
        </div>
        <div>
          Rather than moving to 11th standard, many students go for{" "}
          <b>skill development courses</b> or <b>training programs</b> that can
          get them placed into their field of interest. If you are planning to
          pursue a <b>program right after 10th </b>but don’t know where to
          start, then you have certainly come to the <b>right place!</b>
          <b>
            <i>
              &nbsp;Here we have provided the roadmap of courses after 10th
              standard and the varied benefits they offer.{" "}
            </i>
          </b>
        </div>
      </div>
      <div id="study">
        {/* <div>
          <RiNumber1 />
          <h3 className="head-2">After 12th</h3>
        </div> */}
        <div className="student">
          <div className="class-12">
            <div>
              <BsFillArrowRightCircleFill />
              <h3 className="head-3">Jobs</h3>{" "}
            </div>
            <TreeView
              aria-label="file system navigator"
              defaultCollapseIcon={<BiChevronDown />}
              defaultExpandIcon={<MdExpandMore />}
              sx={{
                height: 240,
                flexGrow: 1,
                maxWidth: 400,
                overflowY: "auto",
              }}
            >
              <TreeItem nodeId="1" label="Maths/Science">
                <TreeItem nodeId="2" label="Engineering" />
              </TreeItem>
              <TreeItem nodeId="5" label="Commmerce">
                <TreeItem nodeId="10" label="OSS" />
                <TreeItem nodeId="6" label="MUI">
                  <TreeItem nodeId="8" label="index.js" />
                </TreeItem>
              </TreeItem>
              <TreeItem nodeId="15" label="Biology">
                <TreeItem
                  nodeId="17"
                  label="Bachelor of Veterinary Science (B.VSc)"
                ></TreeItem>
                <TreeItem
                  nodeId="17"
                  label="B Tech Genetic Engineering"
                ></TreeItem>
                <TreeItem nodeId="17" label="B Tech Food Technology"></TreeItem>
                <TreeItem nodeId="17" label="BSc Nursing"></TreeItem>
                <TreeItem nodeId="17" label="B.Sc. Microbiology"></TreeItem>
              </TreeItem>
              <TreeItem nodeId="20" label="Arts">
                <TreeItem nodeId="22" label="Banking"></TreeItem>
              </TreeItem>
            </TreeView>
          </div>
          <div className="class-12">
            <div>
              <BsFillArrowRightCircleFill />
              <h3 className="head-3">UG Courses for 12th Science</h3>{" "}
            </div>
            <TreeView
              aria-label="file system navigator"
              defaultCollapseIcon={<BiChevronDown />}
              defaultExpandIcon={<MdExpandMore />}
              sx={{
                height: 240,
                flexGrow: 1,
                maxWidth: 400,
                overflowY: "auto",
              }}
            >
              <TreeItem nodeId="1" label="Maths/Science">
                <TreeItem nodeId="2" label="Engineering" />
              </TreeItem>
              <TreeItem nodeId="5" label="Commmerce">
                <TreeItem nodeId="10" label="OSS" />
                <TreeItem nodeId="6" label="MUI">
                  <TreeItem nodeId="8" label="index.js" />
                </TreeItem>
              </TreeItem>
              <TreeItem nodeId="15" label="Biology">
                <TreeItem
                  nodeId="17"
                  label="Bachelor of Veterinary Science (B.VSc)"
                ></TreeItem>
                <TreeItem
                  nodeId="17"
                  label="B Tech Genetic Engineering"
                ></TreeItem>
                <TreeItem nodeId="17" label="B Tech Food Technology"></TreeItem>
                <TreeItem nodeId="17" label="BSc Nursing"></TreeItem>
                <TreeItem nodeId="17" label="B.Sc. Microbiology"></TreeItem>
              </TreeItem>
              <TreeItem nodeId="20" label="Arts">
                <TreeItem nodeId="22" label="Banking"></TreeItem>
              </TreeItem>
            </TreeView>
          </div>
          <div className="class-12">
            <div>
              <BsFillArrowRightCircleFill />
              <h3 className="head-3">UG Courses for 12th Commerce</h3>{" "}
            </div>
            <TreeView
              aria-label="file system navigator"
              defaultCollapseIcon={<BiChevronDown />}
              defaultExpandIcon={<MdExpandMore />}
              sx={{
                height: 240,
                flexGrow: 1,
                maxWidth: 400,
                overflowY: "auto",
              }}
            >
              <TreeItem nodeId="1" label="Maths/Science">
                <TreeItem nodeId="2" label="Engineering" />
              </TreeItem>
              <TreeItem nodeId="5" label="Commmerce">
                <TreeItem nodeId="10" label="OSS" />
                <TreeItem nodeId="6" label="MUI">
                  <TreeItem nodeId="8" label="index.js" />
                </TreeItem>
              </TreeItem>
              <TreeItem nodeId="15" label="Biology">
                <TreeItem
                  nodeId="17"
                  label="Bachelor of Veterinary Science (B.VSc)"
                ></TreeItem>
                <TreeItem
                  nodeId="17"
                  label="B Tech Genetic Engineering"
                ></TreeItem>
                <TreeItem nodeId="17" label="B Tech Food Technology"></TreeItem>
                <TreeItem nodeId="17" label="BSc Nursing"></TreeItem>
                <TreeItem nodeId="17" label="B.Sc. Microbiology"></TreeItem>
              </TreeItem>
              <TreeItem nodeId="20" label="Arts">
                <TreeItem nodeId="22" label="Banking"></TreeItem>
              </TreeItem>
            </TreeView>
          </div>
        </div>
      </div>
      <h2 className="head-1"> Want to do Job</h2>
      {/* <div className="courses">
        <div>
          JOBS AFTER 10TH
        </div>
        <div>
         JOBS AFTER 12TH
        </div>
        </div> */}
    </Fragment>
  );
};

export default home;
