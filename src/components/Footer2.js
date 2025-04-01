import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
} from "@mui/material";
import CallToAction from "./CallToAction";
import LOGO from "./LOGO";
import Property1FacebookColorDar from "./Property1FacebookColorDar";
import Property1Default1 from "./Property1Default11";
import Property1Hover from "./Property1Hover";

const Footer2 = () => {
  return (
    <footer className="self-stretch bg-gray-900 flex flex-col items-start justify-start gap-[80px] max-w-full text-justify text-sm text-gray-white font-body-medium-400 mq850:gap-[40px_80px] mq450:gap-[20px_80px]">
      <CallToAction />
      <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
        <div className="w-[1409px] overflow-x-auto shrink-0 flex flex-row items-start justify-start py-0 pr-[45px] pl-0 box-border gap-[35px] max-w-full mq850:gap-[35px_17px] mq1225:pr-[22px] mq1225:box-border">
          <div className="w-[424px] shrink-0 flex flex-col items-start justify-center gap-[26px] max-w-full text-gray-500">
            <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
              <LOGO
                graduationCap="/graduationcap-1.svg"
                eTutor="AccessEdu"
                graduationCapIconWidth="46px"
                graduationCapIconHeight="46px"
                graduationCapIconMinHeight="46px"
                eTutorFontSize="36.8px"
                eTutorColor="#fff"
                eTutorTextAlign="justify"
                eTutorLineHeight="46px"
                eTutorMargin="unset"
                eTutorMinWidth="unset"
              />
              <div className="self-stretch relative tracking-[-0.01em] leading-[22px]">
                <p className="m-0">
                  Aliquam rhoncus ligula est, non pulvinar elit
                </p>
                <p className="m-0">convallis nec. Donec mattis odio at.</p>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[12px]">
              <Property1FacebookColorDar
                frame75="/frame-75.svg"
                property1FacebookColorDarBackgroundColor="rgba(54, 59, 71, 0.4)"
                property1FacebookColorDarBoxShadow="unset"
                property1FacebookColorDarFlexDirection="row"
                property1FacebookColorDarBorder="none"
                frameIconOverflow="unset"
              />
              <Property1FacebookColorDar
                frame75="/instragarm.svg"
                property1FacebookColorDarBackgroundColor="rgba(54, 59, 71, 0.4)"
                property1FacebookColorDarBoxShadow="unset"
                property1FacebookColorDarFlexDirection="row"
                property1FacebookColorDarBorder="none"
                frameIconOverflow="unset"
              />
              <Property1FacebookColorDar
                frame75="/linkedin.svg"
                property1FacebookColorDarBackgroundColor="#ff6636"
                property1FacebookColorDarBoxShadow="0px 6px 20px rgba(204, 82, 43, 0.5)"
                property1FacebookColorDarFlexDirection="row"
                property1FacebookColorDarBorder="unset"
                frameIconOverflow="unset"
              />
              <Property1FacebookColorDar
                frame75="/twitter.svg"
                property1FacebookColorDarBackgroundColor="rgba(54, 59, 71, 0.4)"
                property1FacebookColorDarBoxShadow="unset"
                property1FacebookColorDarFlexDirection="column"
                property1FacebookColorDarBorder="unset"
                frameIconOverflow="hidden"
              />
              <Property1FacebookColorDar
                frame75="/frame-74@2x.png"
                property1FacebookColorDarBackgroundColor="rgba(54, 59, 71, 0.4)"
                property1FacebookColorDarBoxShadow="unset"
                property1FacebookColorDarFlexDirection="column"
                property1FacebookColorDarBorder="unset"
                frameIconOverflow="unset"
              />
            </div>
          </div>
          <div className="w-[200px] shrink-0 flex flex-col items-start justify-start gap-[20px]">
            <div className="self-stretch relative leading-[100%] uppercase font-medium">
              Top Categories
            </div>
            <div className="flex flex-col items-start justify-start">
              <Property1Default1
                categoryLabel="Learner"
                labalTextAlign="justify"
                labalMinWidth="50px"
              />
              <Property1Default1
                categoryLabel="Special Abled Learner"
                labalTextAlign="justify"
                labalMinWidth="unset"
              />
              <Property1Default1
                categoryLabel="Instructor"
                labalTextAlign="justify"
                labalMinWidth="63px"
              />
              <Property1Default1
                categoryLabel="Worksheets"
                labalTextAlign="justify"
                labalMinWidth="77px"
              />
            </div>
          </div>
          <div className="w-[200px] shrink-0 flex flex-col items-start justify-start gap-[20px]">
            <div className="self-stretch relative leading-[100%] uppercase font-medium">
              Courses
            </div>
            <div className="flex flex-col items-start justify-start">
              <Property1Default1
                categoryLabel="Development"
                labalTextAlign="justify"
                labalMinWidth="87px"
              />
              <Property1Default1
                categoryLabel={`Finance & Accounting`}
                labalTextAlign="justify"
                labalMinWidth="unset"
              />
              <Property1Default1
                categoryLabel="Design"
                labalTextAlign="justify"
                labalMinWidth="45px"
              />
              <Property1Default1
                categoryLabel="Business"
                labalTextAlign="justify"
                labalMinWidth="58px"
              />
            </div>
          </div>
          <div className="w-[200px] shrink-0 flex flex-col items-start justify-start gap-[20px]">
            <div className="self-stretch relative leading-[100%] uppercase font-medium">
              Quick Links
            </div>
            <div className="flex flex-col items-start justify-start">
              <Property1Default1
                categoryLabel="About"
                labalTextAlign="justify"
                labalMinWidth="40px"
              />
              <Property1Hover
                labal="Become Instructor"
                arrowRight="/arrowright-4.svg"
                property1HoverBorder="none"
                labalTextAlign="justify"
                labalMinWidth="120px"
              />
              <Property1Default1
                categoryLabel="Contact"
                labalTextAlign="justify"
                labalMinWidth="52px"
              />
              <Property1Default1
                categoryLabel="Career"
                labalTextAlign="justify"
                labalMinWidth="44px"
              />
            </div>
          </div>
          <div className="w-[200px] shrink-0 flex flex-col items-start justify-start gap-[20px]">
            <div className="self-stretch relative leading-[100%] uppercase font-medium">
              Support
            </div>
            <div className="flex flex-col items-start justify-start">
              <Property1Default1
                categoryLabel="Help Center"
                labalTextAlign="justify"
                labalMinWidth="78px"
              />
              <Property1Default1
                categoryLabel="FAQs"
                labalTextAlign="justify"
                labalMinWidth="34px"
              />
              <Property1Default1
                categoryLabel={`Terms & Condition`}
                labalTextAlign="justify"
                labalMinWidth="120px"
              />
              <Property1Default1
                categoryLabel="Privacy Policy"
                labalTextAlign="justify"
                labalMinWidth="91px"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch bg-gray-900 shadow-[0px_1px_0px_rgba(54,_59,_71,_0.5)_inset] flex flex-row items-start justify-between py-6 px-[300px] box-border max-w-full gap-[20px] text-gray-500 mq850:pl-[75px] mq850:pr-[75px] mq850:box-border mq1225:flex-wrap mq1225:justify-center mq1225:pl-[150px] mq1225:pr-[150px] mq1225:box-border">
        <div className="flex flex-col items-start justify-start pt-[13px] px-0 pb-0 box-border max-w-full">
          <div className="relative tracking-[-0.01em] leading-[22px]">
            © 2024 - AccessEdu. Designed by AVIP. All rights reserved
          </div>
        </div>
        <FormControl
          className="w-[200px] font-body-medium-400 text-base text-gray-500"
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
            "& .MuiInputBase-input": { textAlign: "left", p: "0 !important" },
          }}
        >
          <InputLabel color="primary" />
          <Select
            color="primary"
            name="English"
            defaultValue="English"
            disableUnderline
            displayEmpty
          >
            <MenuItem value="English">English</MenuItem>
          </Select>
          <FormHelperText />
        </FormControl>
      </div>
    </footer>
  );
};

export default Footer2;
