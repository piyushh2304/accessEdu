import { useMemo } from "react";
import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
} from "@mui/material";

const FrameComponent2 = ({
  courseCategory,
  propMinWidth,
  propDisplay,
  propMinWidth1,
}) => {
  const categorySelectStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const courseCategoryStyle = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth1,
    };
  }, [propDisplay, propMinWidth1]);

  return (
    <div
      className="flex-1 flex flex-col items-start justify-start gap-[6px] min-w-[395px] max-w-full text-left text-sm text-gray-900 font-body-medium-400 mq750:min-w-full"
      style={categorySelectStyle}
    >
      <div
        className="relative tracking-[-0.01em] leading-[22px] inline-block min-w-[111px]"
        style={courseCategoryStyle}
      >
        {courseCategory}
      </div>
      <FormControl
        className="self-stretch font-body-medium-400 text-base text-gray-500 gap-[20px]"
        variant="outlined"
        sx={{
          borderRadius: "0px 0px 0px 0px",
          width: "608px",
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
        <Select color="primary" disableUnderline displayEmpty />
        <FormHelperText />
      </FormControl>
    </div>
  );
};

export default FrameComponent2;
