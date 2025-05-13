import { useMemo } from "react";
import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
} from "@mui/material";

const Lecture3 = ({
  propAlignSelf,
  propWidth,
  propMargin,
  propPosition,
  propTop,
  propRight,
  propLeft,
}) => {
  const lectureStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      width: propWidth,
      margin: propMargin,
      position: propPosition,
      top: propTop,
      right: propRight,
      left: propLeft,
    };
  }, [
    propAlignSelf,
    propWidth,
    propMargin,
    propPosition,
    propTop,
    propRight,
    propLeft,
  ]);

  return (
    <div
      className="self-stretch bg-gray-white flex flex-row items-center justify-between py-3 px-5 gap-[20px] z-[2] text-left text-sm text-gray-900 font-body-medium-400 mq750:flex-wrap"
      style={lectureStyle}
    >
      <div className="h-[22px] flex flex-row items-center justify-start gap-[8px]">
        <img
          className="h-5 w-5 relative overflow-hidden shrink-0"
          alt=""
          src="/menu-1.svg"
        />
        <div className="relative tracking-[-0.01em] leading-[22px] inline-block min-w-[89px]">
          Lecture name
        </div>
      </div>
      <div className="flex flex-row items-center justify-center gap-[12px] mq450:flex-wrap">
        <FormControl
          className="font-body-medium-400 font-semibold text-sm text-primary-500"
          variant="outlined"
          sx={{
            borderRadius: "0px 0px 0px 0px",
            width: "119px",
            height: "40px",
            m: 0,
            p: 0,
            "& .MuiInputBase-root": {
              m: 0,
              p: 0,
              minHeight: "40px",
              justifyContent: "center",
              display: "inline-flex",
            },
            "& .MuiInputLabel-root": {
              m: 0,
              p: 0,
              minHeight: "40px",
              display: "inline-flex",
            },
            "& .MuiMenuItem-root": {
              m: 0,
              p: 0,
              height: "40px",
              display: "inline-flex",
            },
            "& .MuiSelect-select": {
              m: 0,
              p: 0,
              height: "40px",
              alignItems: "center",
              display: "inline-flex",
            },
            "& .MuiInput-input": { m: 0, p: 0 },
            "& .MuiInputBase-input": { textAlign: "left", p: "0 !important" },
          }}
        >
          <InputLabel color="primary" />
          <Select color="primary" disableUnderline displayEmpty />
          <FormHelperText />
        </FormControl>
        <div className="h-5 flex flex-row items-start justify-start gap-[12px]">
          <img
            className="h-5 w-5 relative min-h-[20px]"
            alt=""
            src="/pencilline-1.svg"
          />
          <img
            className="h-5 w-5 relative min-h-[20px]"
            alt=""
            src="/trash-1.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Lecture3;
