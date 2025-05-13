import { useMemo } from "react";
import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
} from "@mui/material";

const LogicGate = ({ sortBy, select, propMinWidth, propMinWidth1 }) => {
  const sortBy1Style = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className="w-60 flex flex-col items-start justify-start gap-[8px] text-left text-xs text-gray-600 font-body-medium-400">
      <div
        className="relative leading-[16px] inline-block min-w-[45px]"
        style={sortBy1Style}
      >
        {sortBy}
      </div>
      <FormControl
        className="self-stretch font-body-medium-400 text-base text-gray-700 gap-[20px]"
        variant="outlined"
        sx={{
          borderRadius: "0px 0px 0px 0px",
          width: "240px",
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
          name="Latest"
          defaultValue="Latest"
          disableUnderline
          displayEmpty
        >
          <MenuItem value="Latest">Latest</MenuItem>
          <MenuItem value="Newest">Newest</MenuItem>
          <MenuItem value="Oldest">Oldest</MenuItem>
        </Select>
        <FormHelperText />
      </FormControl>
    </div>
  );
};

export default LogicGate;
