import { useMemo } from "react";
import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
} from "@mui/material";
import Search from "./Search";

const TopActions = ({
  faders,
  propBorder,
  propColor,
  propBackgroundColor,
  propColor1,
}) => {
  const buttons1Style = useMemo(() => {
    return {
      border: propBorder,
    };
  }, [propBorder]);

  const filterStyle = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const filter1Style = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const divStyle = useMemo(() => {
    return {
      color: propColor1,
    };
  }, [propColor1]);

  return (
    <div className="self-stretch flex flex-col items-start justify-start max-w-full text-left text-base text-primary-500 font-body-medium-400">
      <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px] lg:flex-wrap">
        <div className="w-[648px] flex flex-row items-start justify-start gap-[24px] max-w-full mq825:flex-wrap">
          <div
            className="bg-gray-white flex flex-row items-start justify-start py-0 px-[23px] gap-[24px] border-[1px] border-solid border-primary-500"
            style={buttons1Style}
          >
            <div className="flex flex-row items-start justify-start gap-[12px]">
              <div className="h-9 flex flex-col items-start justify-start pt-3 px-0 pb-0 box-border">
                <img
                  className="w-6 h-6 relative"
                  loading="lazy"
                  alt=""
                  src={faders}
                />
              </div>
              <div
                className="relative tracking-[-0.01em] leading-[48px] capitalize font-semibold inline-block min-w-[39px]"
                style={filterStyle}
              >
                Filter
              </div>
            </div>
            <div className="flex flex-col items-start justify-start pt-3 px-0 pb-0 text-center text-xs text-gray-white">
              <div
                className="bg-primary-500 flex flex-row items-start justify-start py-1 px-1.5"
                style={filter1Style}
              >
                <div
                  className="w-2 relative leading-[16px] font-semibold inline-block min-w-[8px]"
                  style={divStyle}
                >
                  3
                </div>
              </div>
            </div>
          </div>
          <Search
            magnifyingGlass="/magnifyingglass.svg"
            whatDoYouWantLearn="UI/UX Design"
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
            infoWidth="unset"
            magnifyingGlassIconMinHeight="24px"
            whatDoYouWidth="unset"
            whatDoYouBorder="unset"
            whatDoYouOutline="unset"
            whatDoYouBackgroundColor="unset"
            whatDoYouHeight="unset"
            whatDoYouFlex="unset"
            whatDoYouMinWidth="101px"
            whatDoYouPadding="unset"
            searchAlignSelf="unset"
            searchMinWidth="137px"
            searchBorder="1px solid #e9eaf0"
            whatDoYouColor="#1d2026"
          />
        </div>
        <div className="w-[276px] flex flex-row items-start justify-start gap-[24px] text-sm text-gray-700">
          <div className="flex flex-col items-start justify-start pt-[13px] px-0 pb-0">
            <div className="relative tracking-[-0.01em] leading-[22px] inline-block min-w-[52px]">
              Sort by:
            </div>
          </div>
          <FormControl
            className="flex-1 font-body-medium-400 text-base text-gray-700 gap-[20px]"
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
              name="Trending"
              defaultValue="Trending"
              disableUnderline
              displayEmpty
            >
              <MenuItem value="Trending">Trending</MenuItem>
              <MenuItem value="Popular">Popular</MenuItem>
              <MenuItem value="Must Enroll">Must Enroll</MenuItem>
            </Select>
            <FormHelperText />
          </FormControl>
        </div>
      </div>
      <div className="self-stretch bg-gray-white shadow-[0px_-1px_0px_#e9eaf0_inset] flex flex-row items-start justify-between pt-6 px-0 pb-4 box-border max-w-full gap-[20px] text-sm mq825:flex-wrap">
        <div className="flex flex-row items-start justify-start gap-[12px] max-w-full mq825:flex-wrap">
          <div className="relative tracking-[-0.01em] leading-[22px] text-gray-900 inline-block min-w-[77px]">
            Suggestion:
          </div>
          <div className="relative tracking-[-0.01em] leading-[22px] inline-block min-w-[90px]">
            user interface
          </div>
          <div className="relative tracking-[-0.01em] leading-[22px] inline-block min-w-[104px]">
            user experience
          </div>
          <div className="relative tracking-[-0.01em] leading-[22px] inline-block min-w-[75px]">
            web design
          </div>
          <div className="relative tracking-[-0.01em] leading-[22px] inline-block min-w-[58px]">
            interface
          </div>
          <div className="relative tracking-[-0.01em] leading-[22px] inline-block min-w-[25px]">
            app
          </div>
        </div>
        <div className="relative tracking-[-0.01em] text-gray-900">
          <span className="leading-[20px] font-medium">{`3,145,684 `}</span>
          <span className="leading-[22px] text-gray-700">
            results find for “ui/ux design”
          </span>
        </div>
      </div>
    </div>
  );
};

export default TopActions;
