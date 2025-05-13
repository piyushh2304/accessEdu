import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
} from "@mui/material";
import Property1Active from "./Property1Active";
import LOGO from "./LOGO";
import BrowseCategorySelect from "./BrowseCategorySelect";
import Search from "./Search";

const Navigation3 = () => {
  return (
    <section className="self-stretch flex flex-col items-start justify-start top-[0] z-[99] sticky max-w-full">
      <header className="self-stretch bg-gray-900 flex flex-row items-center justify-between py-0 px-8 box-border max-w-full gap-[20px]">
        <nav className="m-0 flex flex-row items-center justify-center gap-[8px] max-w-full">
          <Property1Active
            home="Home"
            property1ActiveBoxShadow="0px 2px 0px #ff6636 inset"
            homeColor="#fff"
            homeMinWidth="39px"
          />
          <Property1Active
            home="Courses"
            property1ActiveBoxShadow="unset"
            homeColor="#8c94a3"
            homeMinWidth="55px"
          />
          <Property1Active
            home="About"
            property1ActiveBoxShadow="unset"
            homeColor="#8c94a3"
            homeMinWidth="40px"
          />
          <Property1Active
            home="Contact"
            property1ActiveBoxShadow="unset"
            homeColor="#8c94a3"
            homeMinWidth="53px"
          />
          <Property1Active
            home="Become an Instructor"
            property1ActiveBoxShadow="unset"
            homeColor="#8c94a3"
            homeMinWidth="unset"
          />
        </nav>
        <div className="flex flex-row items-start justify-start gap-[24px] mq1400:hidden">
          <FormControl
            className="font-body-medium-400 text-sm text-gray-400"
            variant="outlined"
            sx={{
              borderRadius: "0px 0px 0px 0px",
              width: "48px",
              height: "22px",
              m: 0,
              p: 0,
              "& .MuiInputBase-root": {
                m: 0,
                p: 0,
                minHeight: "22px",
                justifyContent: "center",
                display: "inline-flex",
              },
              "& .MuiInputLabel-root": {
                m: 0,
                p: 0,
                minHeight: "22px",
                display: "inline-flex",
              },
              "& .MuiMenuItem-root": {
                m: 0,
                p: 0,
                height: "22px",
                display: "inline-flex",
              },
              "& .MuiSelect-select": {
                m: 0,
                p: 0,
                height: "22px",
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
              name="USD"
              defaultValue="USD"
              disableUnderline
              displayEmpty
            >
              <MenuItem value="USD">USD</MenuItem>
              <MenuItem value="Rupee">Rupee</MenuItem>
            </Select>
            <FormHelperText />
          </FormControl>
          <FormControl
            className="font-body-medium-400 text-sm text-gray-400"
            variant="outlined"
            sx={{
              borderRadius: "0px 0px 0px 0px",
              width: "65px",
              height: "22px",
              m: 0,
              p: 0,
              "& .MuiInputBase-root": {
                m: 0,
                p: 0,
                minHeight: "22px",
                justifyContent: "center",
                display: "inline-flex",
              },
              "& .MuiInputLabel-root": {
                m: 0,
                p: 0,
                minHeight: "22px",
                display: "inline-flex",
              },
              "& .MuiMenuItem-root": {
                m: 0,
                p: 0,
                height: "22px",
                display: "inline-flex",
              },
              "& .MuiSelect-select": {
                m: 0,
                p: 0,
                height: "22px",
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
              <MenuItem value="English(UK)">English(UK)</MenuItem>
              <MenuItem value="Hindi">Hindi</MenuItem>
            </Select>
            <FormHelperText />
          </FormControl>
        </div>
      </header>
      <div className="self-stretch bg-gray-white shadow-[0px_-1px_0px_#e9eaf0_inset] flex flex-row items-start justify-between py-6 px-8 box-border max-w-full gap-[20px]">
        <div className="w-[904px] flex flex-row items-start justify-start gap-[50px] max-w-full mq450:gap-[50px_25px]">
          <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
            <LOGO
              graduationCap="/graduationcap1.svg"
              eTutor="AccessEdu"
              graduationCapIconWidth="40px"
              graduationCapIconHeight="40px"
              graduationCapIconMinHeight="40px"
              eTutorFontSize="32px"
              eTutorColor="#1d2026"
              eTutorTextAlign="left"
              eTutorLineHeight="40px"
              eTutorMargin="0"
              eTutorMinWidth="unset"
            />
          </div>
          <div className="flex-1 flex flex-row items-start justify-start gap-[16px] max-w-full">
            {/* <BrowseCategorySelect
              propBackgroundColor="unset"
              propBorder="unset"
              propDisplay="unset"
              propFlexDirection="unset"
              propPadding="unset"
              propFontFamily="Inter"
              propFontSize="16px"
              propColor="#4e5566"
            /> */}
            <Search
              magnifyingGlass="/magnifyingglass.svg"
              whatDoYouWantLearn="What do you want learn..."
              searchPosition="unset"
              searchWidth="unset"
              searchHeight="unset"
              searchFlex="1"
              searchDisplay="flex"
              searchFlexDirection="row"
              searchPadding="12px 18px"
              infoPosition="unset"
              infoTop="unset"
              infoLeft="unset"
              infoWidth="229px"
              magnifyingGlassIconMinHeight="24px"
              whatDoYouWidth="calc(100% - 24px)"
              whatDoYouBorder="none"
              whatDoYouOutline="none"
              whatDoYouBackgroundColor="transparent"
              whatDoYouHeight="24px"
              whatDoYouFlex="1"
              whatDoYouMinWidth="116px"
              whatDoYouPadding="0"
              searchAlignSelf="unset"
              searchMinWidth="unset"
              searchBorder="1px solid #e9eaf0"
              whatDoYouColor="#8c94a3"
            />
          </div>
        </div>
        <div className="h-12 flex flex-row items-start justify-start gap-[24px]">
          <div className="h-9 flex flex-col items-start justify-start pt-3 px-0 pb-0 box-border">
            <img
              className="w-6 h-6 relative"
              loading="lazy"
              alt=""
              src="/bell1.svg"
            />
          </div>
          <div className="flex flex-col items-start justify-start pt-3 px-0 pb-0">
            <img
              className="w-6 h-6 relative"
              loading="lazy"
              alt=""
              src="/heart.svg"
            />
          </div>
          <img
            className="h-12 w-12 relative rounded-[50%] object-cover"
            loading="lazy"
            alt=""
            src="/avatar@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

export default Navigation3;
