import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
} from "@mui/material";
import Navigation3 from "../components/Navigation3";
import StudentsProfile from "../components/StudentsProfile";
import DataAggregator from "../components/DataAggregator";
import Instructor1 from "../components/Instructor1";
import Footer from "../components/Footer";

const StudentInstructors = () => {
  return (
    <div className="w-full relative bg-gray-white overflow-hidden flex flex-col items-start justify-start gap-[80px] tracking-[normal] lg:gap-[40px_80px] mq825:gap-[20px_80px]">
      <Navigation3 />
      <section className="w-full h-[280px] absolute !m-[0] top-[148px] right-[0px] left-[0px] bg-primary-100" />
      <section className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-5xl text-gray-900 font-body-medium-400">
        <div className="w-[1320px] flex flex-col items-start justify-start gap-[40px] max-w-full mq825:gap-[20px_40px]">
          <StudentsProfile
            arrowRight="/arrowright.svg"
            propAlignSelf="stretch"
            propFlex="unset"
            propBackgroundColor="unset"
            propBoxShadow="unset"
            propColor="#4e5566"
            propBackgroundColor1="unset"
            propBoxShadow1="unset"
            propColor1="#4e5566"
            propBackgroundColor2="#fff"
            propBoxShadow2="0px -3px 0px #ff6636 inset"
            propColor2="#1d2026"
            propBackgroundColor3="unset"
            propBoxShadow3="unset"
            propColor3="#4e5566"
          />
          <div className="self-stretch flex flex-col items-start justify-start gap-[40px] max-w-full mq825:gap-[20px_40px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[24px] max-w-full">
              <h2 className="m-0 relative text-inherit leading-[32px] font-inherit mq450:text-lgi mq450:leading-[26px]">
                <span className="tracking-[-0.01em] font-semibold">{`Instructors `}</span>
                <span>(241)</span>
              </h2>
              <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[24px] max-w-full text-xs text-gray-600">
                <DataAggregator whatDoYouWantLeaPlacehold="Search in your teachers..." />
                <div className="flex-1 flex flex-row items-start justify-start gap-[24px] min-w-[421px] max-w-full mq825:flex-wrap mq825:min-w-full">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[8px] min-w-[276px] max-w-full">
                    <div className="relative leading-[16px] inline-block min-w-[51px]">
                      Courses:
                    </div>
                    <FormControl
                      className="self-stretch font-body-medium-400 text-base text-gray-700 gap-[20px]"
                      variant="outlined"
                      sx={{
                        borderRadius: "0px 0px 0px 0px",
                        width: "424px",
                        height: "48px",
                        m: 0,
                        p: 0,
                        "& .MuiInputBase-root": {
                          m: 0,
                          p: 0,
                          minHeight: "48px",
                          justifyContent: "center",
                          display: "inline-flex",
                        },
                        "& .MuiInputLabel-root": {
                          m: 0,
                          p: 0,
                          minHeight: "48px",
                          display: "inline-flex",
                        },
                        "& .MuiMenuItem-root": {
                          m: 0,
                          p: 0,
                          height: "48px",
                          display: "inline-flex",
                        },
                        "& .MuiSelect-select": {
                          m: 0,
                          p: 0,
                          height: "48px",
                          alignItems: "center",
                          display: "inline-flex",
                        },
                        "& .MuiInput-input": { m: 0, p: 0 },
                        "& .MuiInputBase-input": {
                          textAlign: "left",
                          p: "0 !important",
                        },
                      }}
                    >
                      <InputLabel color="primary" />
                      <Select
                        color="primary"
                        name="All Courses"
                        defaultValue="All Courses"
                        disableUnderline
                        displayEmpty
                      >
                        <MenuItem value="All Courses">All Courses</MenuItem>
                        <MenuItem value={`UI & UX`}>{`UI & UX`}</MenuItem>
                        <MenuItem value="Designing">Designing</MenuItem>
                        <MenuItem
                          value={`IT & Software`}
                        >{`IT & Software`}</MenuItem>
                      </Select>
                      <FormHelperText />
                    </FormControl>
                  </div>
                  <div className="w-[200px] flex flex-col items-start justify-start gap-[8px]">
                    <div className="relative leading-[16px] inline-block min-w-[50px]">
                      Teacher:
                    </div>
                    <FormControl
                      className="self-stretch font-body-medium-400 text-base text-gray-700 gap-[20px]"
                      variant="outlined"
                      sx={{
                        borderRadius: "0px 0px 0px 0px",
                        width: "200px",
                        height: "48px",
                        m: 0,
                        p: 0,
                        "& .MuiInputBase-root": {
                          m: 0,
                          p: 0,
                          minHeight: "48px",
                          justifyContent: "center",
                          display: "inline-flex",
                        },
                        "& .MuiInputLabel-root": {
                          m: 0,
                          p: 0,
                          minHeight: "48px",
                          display: "inline-flex",
                        },
                        "& .MuiMenuItem-root": {
                          m: 0,
                          p: 0,
                          height: "48px",
                          display: "inline-flex",
                        },
                        "& .MuiSelect-select": {
                          m: 0,
                          p: 0,
                          height: "48px",
                          alignItems: "center",
                          display: "inline-flex",
                        },
                        "& .MuiInput-input": { m: 0, p: 0 },
                        "& .MuiInputBase-input": {
                          textAlign: "left",
                          p: "0 !important",
                        },
                      }}
                    >
                      <InputLabel color="primary" />
                      <Select
                        color="primary"
                        name="All Teachers"
                        defaultValue="All Teachers"
                        disableUnderline
                        displayEmpty
                      >
                        <MenuItem value="All Teachers">All Teachers</MenuItem>
                      </Select>
                      <FormHelperText />
                    </FormControl>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[24px_22.7px] min-h-[1040px]">
              <Instructor1
                image="/image6@2x.png"
                instructorName="Wade Warren"
                headline="Digital Product Designer"
                dataSplitter="5.0"
                k="236,568"
              />
              <Instructor1
                image="/image-14@2x.png"
                instructorName="Bessie Cooper"
                headline="Senior Developer"
                dataSplitter="4.9"
                k="211,434"
                propMinWidth="52px"
              />
              <Instructor1
                image="/image-21@2x.png"
                instructorName="Floyd Miles"
                headline="UI/UX Designer"
                dataSplitter="4.8"
                k="435,671"
                propMinWidth="53px"
              />
              <Instructor1
                image="/image-31@2x.png"
                instructorName="Ronald Richards"
                headline="Lead Developer"
                dataSplitter="4.5"
                k="1,356,236"
                propMinWidth="66px"
              />
              <Instructor1
                image="/image-41@2x.png"
                instructorName="Devon Lane"
                headline="Senior Developer"
                dataSplitter="4.8"
                k="854"
                propMinWidth="27px"
              />
              <Instructor1
                image="/image-5@2x.png"
                instructorName="Robert Fox"
                headline="UI/UX Designer"
                dataSplitter="4.2"
                k="197,637"
                propMinWidth="51px"
              />
              <Instructor1
                image="/image-6@2x.png"
                instructorName="Kathryn Murphy"
                headline="Adobe Instructor"
                dataSplitter="4.8"
                k="197,637"
                propMinWidth="51px"
              />
              <Instructor1
                image="/image-7@2x.png"
                instructorName="Jerome Bell"
                headline="Adobe Instructor"
                dataSplitter="4.4"
                k="2,711"
                propMinWidth="34px"
              />
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-center text-sm">
            <div className="flex flex-row items-start justify-start gap-[16px] max-w-full mq450:flex-wrap">
              <div className="h-12 w-12 rounded-81xl bg-primary-100 flex flex-row items-start justify-start p-3 box-border">
                <img
                  className="h-6 w-6 relative"
                  loading="lazy"
                  alt=""
                  src="/arrowleft1.svg"
                />
              </div>
              <div className="flex flex-row items-start justify-start">
                <div className="h-12 w-12 rounded-81xl flex flex-col items-start justify-start py-3.5 px-0 box-border">
                  <div className="self-stretch relative tracking-[-0.01em] leading-[20px] font-medium">
                    01
                  </div>
                </div>
                <div className="h-12 w-12 rounded-81xl bg-primary-500 flex flex-col items-start justify-start py-3.5 px-0 box-border text-gray-white">
                  <div className="self-stretch relative tracking-[-0.01em] leading-[20px] font-medium">
                    02
                  </div>
                </div>
                <div className="h-12 w-12 rounded-81xl flex flex-col items-start justify-start py-3.5 px-0 box-border">
                  <div className="self-stretch relative tracking-[-0.01em] leading-[20px] font-medium">
                    03
                  </div>
                </div>
                <div className="h-12 w-12 rounded-81xl bg-primary-100 flex flex-col items-start justify-start py-3.5 px-0 box-border text-primary-500">
                  <div className="self-stretch relative tracking-[-0.01em] leading-[20px] font-medium">
                    04
                  </div>
                </div>
                <div className="h-12 w-12 rounded-81xl flex flex-col items-start justify-start py-3.5 px-0 box-border">
                  <div className="self-stretch relative tracking-[-0.01em] leading-[20px] font-medium">
                    05
                  </div>
                </div>
              </div>
              <button className="cursor-pointer [border:none] p-3 bg-primary-100 h-12 w-12 rounded-81xl flex flex-row items-start justify-start box-border">
                <img
                  className="h-6 w-6 relative"
                  alt=""
                  src="/arrowright.svg"
                />
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer propMarginTop="unset" />
    </div>
  );
};

export default StudentInstructors;
