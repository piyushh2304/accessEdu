import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
} from "@mui/material";
import Property1Active from "./Property1Active";

const TopNav = () => {
  return (
    <div className="self-stretch bg-gray-900 flex flex-row items-center justify-between py-0 px-8 box-border top-[0] z-[99] sticky max-w-full gap-[20px]">
      <div className="flex flex-row items-center justify-center gap-[8px] max-w-full mq925:hidden">
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
      </div>
      <div className="flex flex-row items-start justify-start gap-[24px]">
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
          <InputLabel color="primary">{` `}</InputLabel>
          <Select
            color="primary"
            name="USD"
            defaultValue="USD"
            size="medium"
            label=" "
            disableUnderline
            displayEmpty
          />
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
            <MenuItem value="Hindi">Hindi</MenuItem>
            <MenuItem value="English(UK)">English(UK)</MenuItem>
          </Select>
          <FormHelperText />
        </FormControl>
      </div>
    </div>
  );
};

export default TopNav;
