import { useMemo } from "react";
import { Link } from "react-router-dom";
import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
} from "@mui/material";

const BrowseCategorySelect = ({
  propBackgroundColor,
  propBorder,
  propDisplay,
  propFlexDirection,
  propPadding,
  propFontFamily,
  propFontSize,
  propColor,
}) => {
  const categoryStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
      border: propBorder,
      display: propDisplay,
      flexDirection: propFlexDirection,
      padding: propPadding,
      fontFamily: propFontFamily,
      fontSize: propFontSize,
      color: propColor,
    };
  }, [
    propBackgroundColor,
    propBorder,
    propDisplay,
    propFlexDirection,
    propPadding,
    propFontFamily,
    propFontSize,
    propColor,
  ]);

  return (
    <FormControl
      className="w-[200px] font-body-medium-400 text-base text-gray-700 gap-[20px]"
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
      style={categoryStyle}
    >
      <InputLabel color="primary" />
      <Select
        color="primary"
        name="Browse"
        defaultValue="Browse"
        disableUnderline
        displayEmpty
      >
        <MenuItem value="Browse">Browse</MenuItem>
        <Link to="/11-become-an-instrcutor" style={{ textDecoration: 'none' }}><MenuItem value="Tutors">Tutors</MenuItem></Link>
        <MenuItem value="Articles">Articles</MenuItem>
      </Select>
      <FormHelperText />
    </FormControl>
  );
};

export default BrowseCategorySelect;
