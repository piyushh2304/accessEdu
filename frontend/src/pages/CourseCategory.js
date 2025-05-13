import { useState } from "react";
import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
} from "@mui/material";
import Navigation2 from "../components/Navigation2";
import TopActions from "../components/TopActions";
import Heading from "../components/Heading";
import CourseContainer from "../components/CourseContainer";
import Property1Design from "../components/Property1Design";
import Footer1 from "../components/Footer1";

const CourseCategory = () => {
  const [checkBoxIconChecked, setCheckBoxIconChecked] = useState(true);
  const [checkBoxIcon1Checked, setCheckBoxIcon1Checked] = useState(true);
  return (
    <div className="w-full relative bg-gray-white overflow-hidden flex flex-col items-start justify-start gap-[40px] tracking-[normal] mq825:gap-[20px_40px]">
      <Navigation2 />
      <main className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
        <section className="w-[1320px] flex flex-col items-start justify-start pt-0 px-0 pb-10 box-border gap-[40px] max-w-full text-left text-sm text-gray-700 font-body-medium-400 mq825:gap-[20px_40px]">
          <TopActions faders="/faders1.svg" />
          <div className="self-stretch flex flex-row items-start justify-start gap-[24px] max-w-full">
            <div className="w-[312px] flex flex-col items-start justify-start gap-[24px] lg:hidden">
              <div className="self-stretch bg-gray-white flex flex-col items-start justify-start pt-0 px-0 pb-4 gap-[11.73913043478261px] text-gray-900 border-[1px] border-solid border-gray-100">
                <Heading category="Category" />
                <div className="self-stretch h-6 flex flex-row items-start justify-start py-0 px-5 box-border">
                  <div className="self-stretch flex-1 flex flex-col items-start justify-center gap-[16px]">
                    <div className="self-stretch flex-1 flex flex-row items-center justify-between gap-[20px]">
                      <div className="self-stretch flex flex-row items-center justify-start gap-[12px]">
                        <input
                          className="m-0 h-6 w-6 relative"
                          type="checkbox"
                        />
                        <div className="relative tracking-[-0.01em] leading-[20px] font-medium inline-block min-w-[79px]">
                          High School
                        </div>
                      </div>
                      <img
                        className="h-4 w-4 relative"
                        alt=""
                        src="/chevrondown-5.svg"
                      />
                    </div>
                    <div className="self-stretch bg-gray-white hidden flex-col items-start justify-center gap-[10px] text-gray-700">
                      <div className="self-stretch flex flex-row items-center justify-between gap-[20px]">
                        <div className="h-[22px] flex flex-row items-center justify-start gap-[12px]">
                          <div className="h-[18px] w-[18px] relative bg-gray-white box-border border-[1px] border-solid border-gray-200" />
                          <div className="self-stretch relative tracking-[-0.01em] leading-[22px]">
                            Mathematics
                          </div>
                        </div>
                        <div className="relative text-xs leading-[16px] text-gray-500">
                          574
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-center justify-between gap-[20px]">
                        <div className="h-[22px] flex flex-row items-center justify-start gap-[12px]">
                          <div className="h-[18px] w-[18px] relative bg-gray-white box-border border-[1px] border-solid border-gray-200" />
                          <div className="self-stretch relative tracking-[-0.01em] leading-[22px]">
                            Science
                          </div>
                        </div>
                        <div className="relative text-xs leading-[16px] text-gray-500">
                          568
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-center justify-between gap-[20px] text-primary-500">
                        <div className="h-[22px] flex flex-row items-center justify-start gap-[12px]">
                          <img
                            className="h-[18px] w-[18px] relative"
                            alt=""
                            src="/check-box.svg"
                          />
                          <div className="self-stretch relative tracking-[-0.01em] leading-[22px] font-medium">
                            English Literature
                          </div>
                        </div>
                        <div className="relative text-xs leading-[16px] font-medium text-gray-700">
                          1345
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-center justify-between gap-[20px]">
                        <div className="h-[22px] flex flex-row items-center justify-start gap-[12px]">
                          <div className="h-[18px] w-[18px] relative bg-gray-white box-border border-[1px] border-solid border-gray-200" />
                          <div className="self-stretch relative tracking-[-0.01em] leading-[22px]">
                            English Grammer
                          </div>
                        </div>
                        <div className="relative text-xs leading-[16px] text-gray-500">
                          317
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-center justify-between gap-[20px]">
                        <div className="h-[22px] flex flex-row items-center justify-start gap-[12px]">
                          <div className="h-[18px] w-[18px] relative bg-gray-white box-border border-[1px] border-solid border-gray-200" />
                          <div className="self-stretch relative tracking-[-0.01em] leading-[22px]">
                            Social Studies
                          </div>
                        </div>
                        <div className="relative text-xs leading-[16px] text-gray-500">
                          31
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-center justify-between gap-[20px]">
                        <div className="h-[22px] flex flex-row items-center justify-start gap-[12px]">
                          <div className="h-[18px] w-[18px] relative bg-gray-white box-border border-[1px] border-solid border-gray-200" />
                          <div className="self-stretch relative tracking-[-0.01em] leading-[22px]">
                            Hindi
                          </div>
                        </div>
                        <div className="relative text-xs leading-[16px] text-gray-500">
                          558
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-center justify-between gap-[20px]">
                        <div className="h-[22px] flex flex-row items-center justify-start gap-[12px]">
                          <div className="h-[18px] w-[18px] relative bg-gray-white box-border border-[1px] border-solid border-gray-200" />
                          <div className="self-stretch relative tracking-[-0.01em] leading-[22px]">
                            Optional Courses
                          </div>
                        </div>
                        <div className="relative text-xs leading-[16px] text-gray-500">
                          37
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-gray-100" />
                <div className="self-stretch h-6 flex flex-row items-start justify-start py-0 px-5 box-border">
                  <FormControl
                    className="self-stretch flex-1 font-body-medium-400 text-sm text-gray-900 gap-[20px]"
                    variant="outlined"
                    sx={{
                      borderRadius: "0px 0px 0px 0px",
                      width: "272px",
                      height: "24px",
                      m: 0,
                      p: 0,
                      "& .MuiInputBase-root": {
                        m: 0,
                        p: 0,
                        minHeight: "24px",
                        justifyContent: "center",
                        display: "inline-flex",
                      },
                      "& .MuiInputLabel-root": {
                        m: 0,
                        p: 0,
                        minHeight: "24px",
                        display: "inline-flex",
                      },
                      "& .MuiMenuItem-root": {
                        m: 0,
                        p: 0,
                        height: "24px",
                        display: "inline-flex",
                      },
                      "& .MuiSelect-select": {
                        m: 0,
                        p: 0,
                        height: "24px",
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
                      name="Senior Secondary"
                      defaultValue="Senior Secondary"
                      size="medium"
                      disableUnderline
                      displayEmpty
                    >
                      <MenuItem value="Senior Secondary">
                        Senior Secondary
                      </MenuItem>
                    </Select>
                    <FormHelperText />
                  </FormControl>
                </div>
                <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-gray-100" />
                <div className="self-stretch h-6 flex flex-row items-start justify-start py-0 px-5 box-border">
                  <FormControl
                    className="self-stretch flex-1 font-body-medium-400 text-sm text-gray-900 gap-[20px]"
                    variant="outlined"
                    sx={{
                      borderRadius: "0px 0px 0px 0px",
                      width: "272px",
                      height: "24px",
                      m: 0,
                      p: 0,
                      "& .MuiInputBase-root": {
                        m: 0,
                        p: 0,
                        minHeight: "24px",
                        justifyContent: "center",
                        display: "inline-flex",
                      },
                      "& .MuiInputLabel-root": {
                        m: 0,
                        p: 0,
                        minHeight: "24px",
                        display: "inline-flex",
                      },
                      "& .MuiMenuItem-root": {
                        m: 0,
                        p: 0,
                        height: "24px",
                        display: "inline-flex",
                      },
                      "& .MuiSelect-select": {
                        m: 0,
                        p: 0,
                        height: "24px",
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
                      name={`IT & Software`}
                      defaultValue={`IT & Software`}
                      disableUnderline
                      displayEmpty
                    >
                      <MenuItem
                        value={`IT & Software`}
                      >{`IT & Software`}</MenuItem>
                    </Select>
                    <FormHelperText />
                  </FormControl>
                </div>
                <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-gray-100" />
                <div className="self-stretch h-6 flex flex-row items-start justify-start py-0 px-5 box-border">
                  <FormControl
                    className="self-stretch flex-1 font-body-medium-400 text-sm text-gray-900 gap-[20px]"
                    variant="outlined"
                    sx={{
                      borderRadius: "0px 0px 0px 0px",
                      width: "272px",
                      height: "24px",
                      m: 0,
                      p: 0,
                      "& .MuiInputBase-root": {
                        m: 0,
                        p: 0,
                        minHeight: "24px",
                        justifyContent: "center",
                        display: "inline-flex",
                      },
                      "& .MuiInputLabel-root": {
                        m: 0,
                        p: 0,
                        minHeight: "24px",
                        display: "inline-flex",
                      },
                      "& .MuiMenuItem-root": {
                        m: 0,
                        p: 0,
                        height: "24px",
                        display: "inline-flex",
                      },
                      "& .MuiSelect-select": {
                        m: 0,
                        p: 0,
                        height: "24px",
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
                      name="Business"
                      defaultValue="Business"
                      disableUnderline
                      displayEmpty
                    >
                      <MenuItem value="Business">Business</MenuItem>
                    </Select>
                    <FormHelperText />
                  </FormControl>
                </div>
                <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-gray-100" />
                <div className="self-stretch h-6 flex flex-row items-start justify-start py-0 px-5 box-border">
                  <FormControl
                    className="self-stretch flex-1 font-body-medium-400 text-sm text-gray-900 gap-[20px]"
                    variant="outlined"
                    sx={{
                      borderRadius: "0px 0px 0px 0px",
                      width: "272px",
                      height: "24px",
                      m: 0,
                      p: 0,
                      "& .MuiInputBase-root": {
                        m: 0,
                        p: 0,
                        minHeight: "24px",
                        justifyContent: "center",
                        display: "inline-flex",
                      },
                      "& .MuiInputLabel-root": {
                        m: 0,
                        p: 0,
                        minHeight: "24px",
                        display: "inline-flex",
                      },
                      "& .MuiMenuItem-root": {
                        m: 0,
                        p: 0,
                        height: "24px",
                        display: "inline-flex",
                      },
                      "& .MuiSelect-select": {
                        m: 0,
                        p: 0,
                        height: "24px",
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
                      name="Personality Development"
                      defaultValue="Personality Development"
                      disableUnderline
                      displayEmpty
                    >
                      <MenuItem value="Personality Development">
                        Personality Development
                      </MenuItem>
                    </Select>
                    <FormHelperText />
                  </FormControl>
                </div>
                <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-gray-100" />
                <div className="self-stretch h-6 flex flex-row items-start justify-start py-0 px-5 box-border">
                  <FormControl
                    className="self-stretch flex-1 font-body-medium-400 text-sm text-gray-900 gap-[20px]"
                    variant="outlined"
                    sx={{
                      borderRadius: "0px 0px 0px 0px",
                      width: "272px",
                      height: "24px",
                      m: 0,
                      p: 0,
                      "& .MuiInputBase-root": {
                        m: 0,
                        p: 0,
                        minHeight: "24px",
                        justifyContent: "center",
                        display: "inline-flex",
                      },
                      "& .MuiInputLabel-root": {
                        m: 0,
                        p: 0,
                        minHeight: "24px",
                        display: "inline-flex",
                      },
                      "& .MuiMenuItem-root": {
                        m: 0,
                        p: 0,
                        height: "24px",
                        display: "inline-flex",
                      },
                      "& .MuiSelect-select": {
                        m: 0,
                        p: 0,
                        height: "24px",
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
                      name="Office Productivity"
                      defaultValue="Office Productivity"
                      disableUnderline
                      displayEmpty
                    >
                      <MenuItem value="Office Productivity">
                        Office Productivity
                      </MenuItem>
                    </Select>
                    <FormHelperText />
                  </FormControl>
                </div>
                <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-gray-100" />
                <div className="self-stretch h-6 flex flex-row items-start justify-start py-0 px-5 box-border">
                  <FormControl
                    className="self-stretch flex-1 font-body-medium-400 text-sm text-gray-900 gap-[20px]"
                    variant="outlined"
                    sx={{
                      borderRadius: "0px 0px 0px 0px",
                      width: "272px",
                      height: "24px",
                      m: 0,
                      p: 0,
                      "& .MuiInputBase-root": {
                        m: 0,
                        p: 0,
                        minHeight: "24px",
                        justifyContent: "center",
                        display: "inline-flex",
                      },
                      "& .MuiInputLabel-root": {
                        m: 0,
                        p: 0,
                        minHeight: "24px",
                        display: "inline-flex",
                      },
                      "& .MuiMenuItem-root": {
                        m: 0,
                        p: 0,
                        height: "24px",
                        display: "inline-flex",
                      },
                      "& .MuiSelect-select": {
                        m: 0,
                        p: 0,
                        height: "24px",
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
                      name="Marketing"
                      defaultValue="Marketing"
                      disableUnderline
                      displayEmpty
                    >
                      <MenuItem value="Marketing">Marketing</MenuItem>
                    </Select>
                    <FormHelperText />
                  </FormControl>
                </div>
                <div className="self-stretch h-0.5 relative box-border border-t-[1px] border-solid border-gray-100" />
                <div className="self-stretch h-6 flex flex-row items-start justify-start py-0 px-5 box-border">
                  <FormControl
                    className="self-stretch flex-1 font-body-medium-400 text-sm text-gray-900 gap-[20px]"
                    variant="outlined"
                    sx={{
                      borderRadius: "0px 0px 0px 0px",
                      width: "272px",
                      height: "24px",
                      m: 0,
                      p: 0,
                      "& .MuiInputBase-root": {
                        m: 0,
                        p: 0,
                        minHeight: "24px",
                        justifyContent: "center",
                        display: "inline-flex",
                      },
                      "& .MuiInputLabel-root": {
                        m: 0,
                        p: 0,
                        minHeight: "24px",
                        display: "inline-flex",
                      },
                      "& .MuiMenuItem-root": {
                        m: 0,
                        p: 0,
                        height: "24px",
                        display: "inline-flex",
                      },
                      "& .MuiSelect-select": {
                        m: 0,
                        p: 0,
                        height: "24px",
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
                      name={`Finance & Accounting`}
                      defaultValue={`Finance & Accounting`}
                      disableUnderline
                      displayEmpty
                    >
                      <MenuItem
                        value={`Finance & Accounting`}
                      >{`Finance & Accounting`}</MenuItem>
                    </Select>
                    <FormHelperText />
                  </FormControl>
                </div>
                <div className="self-stretch h-0.5 relative box-border border-t-[1px] border-solid border-gray-100" />
                <div className="self-stretch h-6 flex flex-row items-start justify-start py-0 px-5 box-border">
                  <FormControl
                    className="self-stretch flex-1 font-body-medium-400 text-sm text-gray-900 gap-[20px]"
                    variant="outlined"
                    sx={{
                      borderRadius: "0px 0px 0px 0px",
                      width: "272px",
                      height: "24px",
                      m: 0,
                      p: 0,
                      "& .MuiInputBase-root": {
                        m: 0,
                        p: 0,
                        minHeight: "24px",
                        justifyContent: "center",
                        display: "inline-flex",
                      },
                      "& .MuiInputLabel-root": {
                        m: 0,
                        p: 0,
                        minHeight: "24px",
                        display: "inline-flex",
                      },
                      "& .MuiMenuItem-root": {
                        m: 0,
                        p: 0,
                        height: "24px",
                        display: "inline-flex",
                      },
                      "& .MuiSelect-select": {
                        m: 0,
                        p: 0,
                        height: "24px",
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
                      name="Lifestyle"
                      defaultValue="Lifestyle"
                      disableUnderline
                      displayEmpty
                    >
                      <MenuItem value="Lifestyle">Lifestyle</MenuItem>
                    </Select>
                    <FormHelperText />
                  </FormControl>
                </div>
                <div className="self-stretch h-0.5 relative box-border border-t-[1px] border-solid border-gray-100" />
                <div className="self-stretch h-6 flex flex-row items-start justify-start py-0 px-5 box-border">
                  <FormControl
                    className="self-stretch flex-1 font-body-medium-400 text-sm text-gray-900 gap-[20px]"
                    variant="outlined"
                    sx={{
                      borderRadius: "0px 0px 0px 0px",
                      width: "272px",
                      height: "24px",
                      m: 0,
                      p: 0,
                      "& .MuiInputBase-root": {
                        m: 0,
                        p: 0,
                        minHeight: "24px",
                        justifyContent: "center",
                        display: "inline-flex",
                      },
                      "& .MuiInputLabel-root": {
                        m: 0,
                        p: 0,
                        minHeight: "24px",
                        display: "inline-flex",
                      },
                      "& .MuiMenuItem-root": {
                        m: 0,
                        p: 0,
                        height: "24px",
                        display: "inline-flex",
                      },
                      "& .MuiSelect-select": {
                        m: 0,
                        p: 0,
                        height: "24px",
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
                      name="Design"
                      defaultValue="Design"
                      disableUnderline
                      displayEmpty
                    >
                      <MenuItem value="Design">Design</MenuItem>
                    </Select>
                    <FormHelperText />
                  </FormControl>
                </div>
                <div className="self-stretch h-0.5 relative box-border border-t-[1px] border-solid border-gray-100" />
                <div className="self-stretch h-6 flex flex-row items-start justify-start py-0 px-5 box-border">
                  <FormControl
                    className="self-stretch flex-1 font-body-medium-400 text-sm text-gray-900 gap-[20px]"
                    variant="outlined"
                    sx={{
                      borderRadius: "0px 0px 0px 0px",
                      width: "272px",
                      height: "24px",
                      m: 0,
                      p: 0,
                      "& .MuiInputBase-root": {
                        m: 0,
                        p: 0,
                        minHeight: "24px",
                        justifyContent: "center",
                        display: "inline-flex",
                      },
                      "& .MuiInputLabel-root": {
                        m: 0,
                        p: 0,
                        minHeight: "24px",
                        display: "inline-flex",
                      },
                      "& .MuiMenuItem-root": {
                        m: 0,
                        p: 0,
                        height: "24px",
                        display: "inline-flex",
                      },
                      "& .MuiSelect-select": {
                        m: 0,
                        p: 0,
                        height: "24px",
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
                      name={`Health & Fitness`}
                      defaultValue={`Health & Fitness`}
                      disableUnderline
                      displayEmpty
                    >
                      <MenuItem
                        value={`Health & Fitness`}
                      >{`Health & Fitness`}</MenuItem>
                    </Select>
                    <FormHelperText />
                  </FormControl>
                </div>
                <div className="self-stretch h-0.5 relative box-border border-t-[1px] border-solid border-gray-100" />
                <div className="self-stretch h-6 flex flex-row items-start justify-start py-0 px-5 box-border">
                  <FormControl
                    className="self-stretch flex-1 font-body-medium-400 text-sm text-gray-900 gap-[20px]"
                    variant="outlined"
                    sx={{
                      borderRadius: "0px 0px 0px 0px",
                      width: "272px",
                      height: "24px",
                      m: 0,
                      p: 0,
                      "& .MuiInputBase-root": {
                        m: 0,
                        p: 0,
                        minHeight: "24px",
                        justifyContent: "center",
                        display: "inline-flex",
                      },
                      "& .MuiInputLabel-root": {
                        m: 0,
                        p: 0,
                        minHeight: "24px",
                        display: "inline-flex",
                      },
                      "& .MuiMenuItem-root": {
                        m: 0,
                        p: 0,
                        height: "24px",
                        display: "inline-flex",
                      },
                      "& .MuiSelect-select": {
                        m: 0,
                        p: 0,
                        height: "24px",
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
                      name="Indian Sign Language"
                      defaultValue="Indian Sign Language"
                      disableUnderline
                      displayEmpty
                    >
                      <MenuItem value="Indian Sign Language">
                        Indian Sign Language
                      </MenuItem>
                    </Select>
                    <FormHelperText />
                  </FormControl>
                </div>
              </div>
              <div className="self-stretch bg-gray-white flex flex-col items-start justify-start pt-0 px-0 pb-4 gap-[16px] border-[1px] border-solid border-gray-100">
                <Heading category="Tools" propMinWidth="61px" />
                <div className="self-stretch flex flex-row items-start justify-start py-0 px-5">
                  <div className="flex-1 bg-gray-white flex flex-col items-start justify-start gap-[10px]">
                    <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
                      <div className="flex flex-row items-start justify-start gap-[12px]">
                        <input className="m-0 h-5 w-[18px]" type="checkbox" />
                        <div className="relative tracking-[-0.01em] leading-[22px] inline-block min-w-[52px]">
                          HTML 5
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0 text-xs text-gray-500">
                        <div className="relative leading-[16px] inline-block min-w-[29px]">
                          1345
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
                      <div className="flex flex-row items-start justify-start gap-[12px]">
                        <input className="m-0 h-5 w-[18px]" type="checkbox" />
                        <div className="relative tracking-[-0.01em] leading-[22px] inline-block min-w-[41px]">
                          CSS 3
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0 text-xs text-gray-500">
                        <div className="relative leading-[16px] inline-block min-w-[36px]">
                          l2,736
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
                      <div className="flex flex-row items-start justify-start gap-[12px]">
                        <input className="m-0 h-5 w-[18px]" type="checkbox" />
                        <div className="relative tracking-[-0.01em] leading-[22px] inline-block min-w-[38px]">
                          React
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0 text-xs text-gray-500">
                        <div className="relative leading-[16px] inline-block min-w-[29px]">
                          1345
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-between gap-[20px] text-primary-500">
                      <div className="flex flex-row items-start justify-start gap-[12px]">
                        <div className="h-5 flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
                          <input
                            className="accent-primary-500 m-0 w-[18px] h-[18px] relative"
                            checked={checkBoxIconChecked}
                            type="checkbox"
                            onChange={(event) =>
                              setCheckBoxIconChecked(event.target.checked)
                            }
                          />
                        </div>
                        <div className="relative tracking-[-0.01em] leading-[22px] font-medium inline-block min-w-[58px]">
                          Webflow
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0 text-xs text-gray-700">
                        <div className="relative leading-[16px] font-medium inline-block min-w-[29px]">
                          1345
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
                      <div className="flex flex-row items-start justify-start gap-[12px]">
                        <input className="m-0 h-5 w-[18px]" type="checkbox" />
                        <div className="relative tracking-[-0.01em] leading-[22px] inline-block min-w-[50px]">
                          Node.js
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0 text-xs text-gray-500">
                        <div className="relative leading-[16px] inline-block min-w-[29px]">
                          1345
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
                      <div className="flex flex-row items-start justify-start gap-[12px]">
                        <input className="m-0 h-5 w-[18px]" type="checkbox" />
                        <div className="relative tracking-[-0.01em] leading-[22px] inline-block min-w-[47px]">
                          Laravel
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0 text-xs text-gray-500">
                        <div className="relative leading-[16px] inline-block min-w-[29px]">
                          1345
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
                      <div className="flex flex-row items-start justify-start gap-[12px]">
                        <input className="m-0 h-5 w-[18px]" type="checkbox" />
                        <div className="relative tracking-[-0.01em] leading-[22px] inline-block min-w-[32px]">
                          Saas
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0 text-xs text-gray-500">
                        <div className="relative leading-[16px] inline-block min-w-[29px]">
                          1345
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
                      <div className="flex flex-row items-start justify-start gap-[12px]">
                        <input className="m-0 h-5 w-[18px]" type="checkbox" />
                        <div className="relative tracking-[-0.01em] leading-[22px] inline-block min-w-[70px]">
                          Wordpress
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0 text-xs text-gray-500">
                        <div className="relative leading-[16px] inline-block min-w-[29px]">
                          1345
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch bg-gray-white flex flex-col items-start justify-start pt-0 px-0 pb-4 gap-[16px] border-[1px] border-solid border-gray-100">
                <Heading category="Course level" propMinWidth="unset" />
                <div className="self-stretch flex flex-row items-start justify-start py-0 px-5">
                  <div className="flex-1 bg-gray-white flex flex-col items-start justify-start gap-[10px]">
                    <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
                      <div className="flex flex-row items-start justify-start gap-[12px]">
                        <input className="m-0 h-5 w-[18px]" type="checkbox" />
                        <div className="relative tracking-[-0.01em] leading-[22px] inline-block min-w-[54px]">
                          All Level
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0 text-xs text-gray-500">
                        <div className="relative leading-[16px] inline-block min-w-[29px]">
                          1345
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
                      <div className="flex flex-row items-start justify-start gap-[12px]">
                        <input className="m-0 h-5 w-[18px]" type="checkbox" />
                        <div className="relative tracking-[-0.01em] leading-[22px] inline-block min-w-[58px]">
                          Beginner
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0 text-xs text-gray-500">
                        <div className="relative leading-[16px] inline-block min-w-[29px]">
                          1345
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
                      <div className="flex flex-row items-start justify-start gap-[12px]">
                        <input className="m-0 h-5 w-[18px]" type="checkbox" />
                        <div className="relative tracking-[-0.01em] leading-[22px] inline-block min-w-[83px]">
                          Intermediate
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0 text-xs text-gray-500">
                        <div className="relative leading-[16px] inline-block min-w-[29px]">
                          1345
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
                      <div className="flex flex-row items-start justify-start gap-[12px]">
                        <input className="m-0 h-5 w-[18px]" type="checkbox" />
                        <div className="relative tracking-[-0.01em] leading-[22px] inline-block min-w-[43px]">
                          Expert
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0 text-xs text-gray-500">
                        <div className="relative leading-[16px] inline-block min-w-[29px]">
                          1345
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch bg-gray-white flex flex-col items-start justify-start pt-0 px-0 pb-4 gap-[24px] border-[1px] border-solid border-gray-100">
                <Heading category="Duration" propMinWidth="93px" />
                <div className="self-stretch flex flex-row items-start justify-start py-0 px-5">
                  <div className="flex-1 bg-gray-white flex flex-col items-start justify-start gap-[10px]">
                    <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
                      <div className="flex flex-row items-start justify-start gap-[12px]">
                        <input className="m-0 h-5 w-[18px]" type="checkbox" />
                        <div className="relative tracking-[-0.01em] leading-[22px] inline-block min-w-[83px]">
                          6-12 Months
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0 text-xs text-gray-500">
                        <div className="relative leading-[16px] inline-block min-w-[29px]">
                          1345
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
                      <div className="flex flex-row items-start justify-start gap-[12px]">
                        <input className="m-0 h-5 w-[18px]" type="checkbox" />
                        <div className="relative tracking-[-0.01em] leading-[22px] inline-block min-w-[77px]">
                          3-6 Months
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0 text-xs text-gray-500">
                        <div className="relative leading-[16px] inline-block min-w-[29px]">
                          1345
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-between gap-[20px] text-primary-500">
                      <div className="flex flex-row items-start justify-start gap-[12px]">
                        <div className="h-5 flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
                          <input
                            className="accent-primary-500 m-0 w-[18px] h-[18px] relative"
                            checked={checkBoxIcon1Checked}
                            type="checkbox"
                            onChange={(event) =>
                              setCheckBoxIcon1Checked(event.target.checked)
                            }
                          />
                        </div>
                        <div className="relative tracking-[-0.01em] leading-[22px] font-medium inline-block min-w-[76px]">
                          1-3 Months
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0 text-xs text-gray-700">
                        <div className="relative leading-[16px] font-medium inline-block min-w-[29px]">
                          1345
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
                      <div className="flex flex-row items-start justify-start gap-[12px]">
                        <input className="m-0 h-5 w-[18px]" type="checkbox" />
                        <div className="relative tracking-[-0.01em] leading-[22px] inline-block min-w-[69px]">
                          1-4 Weeks
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0 text-xs text-gray-500">
                        <div className="relative leading-[16px] inline-block min-w-[29px]">
                          1345
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
                      <div className="flex flex-row items-start justify-start gap-[12px]">
                        <input className="m-0 h-5 w-[18px]" type="checkbox" />
                        <div className="relative tracking-[-0.01em] leading-[22px] inline-block min-w-[57px]">
                          1-7 Days
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0 text-xs text-gray-500">
                        <div className="relative leading-[16px] inline-block min-w-[29px]">
                          1345
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[40px] max-w-[calc(100%_-_336px)] text-lg text-primary-500 lg:max-w-full mq825:gap-[20px_40px]">
              <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[24px]">
                <div className="flex-1 flex flex-col items-start justify-start gap-[24px] min-w-[234px]">
                  <CourseContainer
                    imageDimensionsId="/course-images-5@2x.png"
                    categoryLabel="Design"
                    priceText="$49"
                    courseTitle="Complete Blender Creator: Learn 3D Modelling for Beginners"
                    ratingText="4.9"
                    numericValue="197,637"
                    studentIds=" students"
                    propFlex="unset"
                    propHeight="388px"
                    propBackgroundColor="#ffeee8"
                    propColor="#993d20"
                    propMinWidth="38px"
                    propMinWidth1="35px"
                    propTextDecoration="unset"
                    propHeight1="unset"
                    propAlignSelf="stretch"
                    propHeight2="1px"
                    propPosition="relative"
                    propBorderTop="1px solid #e9eaf0"
                    propMargin="unset"
                    propAlignSelf1="stretch"
                    propDisplay="flex"
                    propFlexDirection="row"
                    propPadding="0px 18px"
                    propGap="20px"
                    propDisplay1="flex"
                    propFlexDirection1="row"
                    propGap1="6px"
                    propAlignSelf2="unset"
                    propHeight3="unset"
                    propPosition1="unset"
                    propBorderTop1="unset"
                    propHeight4="20px"
                    propWidth="20px"
                    propPosition2="relative"
                    propMinHeight="20px"
                    propAlignSelf3="unset"
                    propDisplay2="unset"
                    propFlexDirection2="unset"
                    propPadding1="unset"
                    propGap2="unset"
                    propPosition3="relative"
                    propFontSize="14px"
                    propLetterSpacing="-0.01em"
                    propLineHeight="20px"
                    propFontWeight="500"
                    propFontFamily="Inter"
                    propColor1="#4e5566"
                    propTextAlign="left"
                    propDisplay3="inline-block"
                    propMinWidth2="22px"
                    propFlexDirection3="unset"
                    propGap3="unset"
                    propDisplay4="flex"
                    propFlexDirection4="row"
                    propGap4="6px"
                    propHeight5="unset"
                    propWidth1="unset"
                    propPosition4="unset"
                    propMinHeight1="unset"
                    propHeight6="20px"
                    propWidth2="20px"
                    propFontSize1="unset"
                    propLetterSpacing1="unset"
                    propLineHeight1="unset"
                    propFontWeight1="unset"
                    propFontFamily1="unset"
                    propColor2="unset"
                    propTextAlign1="unset"
                    propDisplay5="unset"
                    propMinWidth3="unset"
                    propGap5="unset"
                    propMinWidth4="51px"
                    propFontSize2="14px"
                    propLetterSpacing2="-0.01em"
                    propLineHeight2="20px"
                    propFontWeight2="500"
                    propFontFamily2="Inter"
                    propColor3="#4e5566"
                    propTextAlign2="left"
                    propDisplay6="inline-block"
                    propHeight7="unset"
                    propWidth3="unset"
                    propPosition5="relative"
                    propFontSize3="14px"
                    propLetterSpacing3="-0.01em"
                    propLineHeight3="22px"
                    propFontFamily3="Inter"
                    propColor4="#8c94a3"
                    propTextAlign3="left"
                    propDisplay7="inline-block"
                    propMinWidth5="61px"
                    propFlexDirection5="unset"
                  />
                  <CourseContainer
                    imageDimensionsId="/course-images-6@2x.png"
                    categoryLabel={`IT & Software`}
                    priceText="$35"
                    courseTitle="Learn Ethical Hacking From Scratch 2021"
                    ratingText="4.8"
                    numericValue="451,444"
                    studentIds=" students"
                    propFlex="unset"
                    propHeight="388px"
                    propBackgroundColor="#fff0f0"
                    propColor="#882929"
                    propMinWidth="77px"
                    propMinWidth1="35px"
                    propTextDecoration="unset"
                    propHeight1="unset"
                    propAlignSelf="stretch"
                    propHeight2="1px"
                    propPosition="relative"
                    propBorderTop="1px solid #e9eaf0"
                    propMargin="unset"
                    propAlignSelf1="stretch"
                    propDisplay="flex"
                    propFlexDirection="row"
                    propPadding="0px 18px"
                    propGap="20px"
                    propDisplay1="flex"
                    propFlexDirection1="row"
                    propGap1="6px"
                    propAlignSelf2="unset"
                    propHeight3="unset"
                    propPosition1="unset"
                    propBorderTop1="unset"
                    propHeight4="20px"
                    propWidth="20px"
                    propPosition2="relative"
                    propMinHeight="20px"
                    propAlignSelf3="unset"
                    propDisplay2="unset"
                    propFlexDirection2="unset"
                    propPadding1="unset"
                    propGap2="unset"
                    propPosition3="relative"
                    propFontSize="14px"
                    propLetterSpacing="-0.01em"
                    propLineHeight="20px"
                    propFontWeight="500"
                    propFontFamily="Inter"
                    propColor1="#4e5566"
                    propTextAlign="left"
                    propDisplay3="inline-block"
                    propMinWidth2="21px"
                    propFlexDirection3="unset"
                    propGap3="unset"
                    propDisplay4="flex"
                    propFlexDirection4="row"
                    propGap4="6px"
                    propHeight5="unset"
                    propWidth1="unset"
                    propPosition4="unset"
                    propMinHeight1="unset"
                    propHeight6="20px"
                    propWidth2="20px"
                    propFontSize1="unset"
                    propLetterSpacing1="unset"
                    propLineHeight1="unset"
                    propFontWeight1="unset"
                    propFontFamily1="unset"
                    propColor2="unset"
                    propTextAlign1="unset"
                    propDisplay5="unset"
                    propMinWidth3="unset"
                    propGap5="unset"
                    propMinWidth4="55px"
                    propFontSize2="14px"
                    propLetterSpacing2="-0.01em"
                    propLineHeight2="20px"
                    propFontWeight2="500"
                    propFontFamily2="Inter"
                    propColor3="#4e5566"
                    propTextAlign2="left"
                    propDisplay6="inline-block"
                    propHeight7="unset"
                    propWidth3="unset"
                    propPosition5="relative"
                    propFontSize3="14px"
                    propLetterSpacing3="-0.01em"
                    propLineHeight3="22px"
                    propFontFamily3="Inter"
                    propColor4="#8c94a3"
                    propTextAlign3="left"
                    propDisplay7="inline-block"
                    propMinWidth5="61px"
                    propFlexDirection5="unset"
                  />
                  <CourseContainer
                    imageDimensionsId="/course-images-17@2x.png"
                    categoryLabel={`IT & Software`}
                    priceText="$32"
                    courseTitle="SQL for NEWBS: Weekender Crash Course"
                    ratingText="5.0"
                    numericValue="451,444"
                    studentIds=" students"
                    propFlex="unset"
                    propHeight="388px"
                    propBackgroundColor="#fff0f0"
                    propColor="#882929"
                    propMinWidth="77px"
                    propMinWidth1="35px"
                    propTextDecoration="unset"
                    propHeight1="unset"
                    propAlignSelf="stretch"
                    propHeight2="1px"
                    propPosition="relative"
                    propBorderTop="1px solid #e9eaf0"
                    propMargin="unset"
                    propAlignSelf1="stretch"
                    propDisplay="flex"
                    propFlexDirection="row"
                    propPadding="0px 18px"
                    propGap="20px"
                    propDisplay1="flex"
                    propFlexDirection1="row"
                    propGap1="6px"
                    propAlignSelf2="unset"
                    propHeight3="unset"
                    propPosition1="unset"
                    propBorderTop1="unset"
                    propHeight4="20px"
                    propWidth="20px"
                    propPosition2="relative"
                    propMinHeight="20px"
                    propAlignSelf3="unset"
                    propDisplay2="unset"
                    propFlexDirection2="unset"
                    propPadding1="unset"
                    propGap2="unset"
                    propPosition3="relative"
                    propFontSize="14px"
                    propLetterSpacing="-0.01em"
                    propLineHeight="20px"
                    propFontWeight="500"
                    propFontFamily="Inter"
                    propColor1="#4e5566"
                    propTextAlign="left"
                    propDisplay3="inline-block"
                    propMinWidth2="21px"
                    propFlexDirection3="unset"
                    propGap3="unset"
                    propDisplay4="flex"
                    propFlexDirection4="row"
                    propGap4="6px"
                    propHeight5="unset"
                    propWidth1="unset"
                    propPosition4="unset"
                    propMinHeight1="unset"
                    propHeight6="20px"
                    propWidth2="20px"
                    propFontSize1="unset"
                    propLetterSpacing1="unset"
                    propLineHeight1="unset"
                    propFontWeight1="unset"
                    propFontFamily1="unset"
                    propColor2="unset"
                    propTextAlign1="unset"
                    propDisplay5="unset"
                    propMinWidth3="unset"
                    propGap5="unset"
                    propMinWidth4="55px"
                    propFontSize2="14px"
                    propLetterSpacing2="-0.01em"
                    propLineHeight2="20px"
                    propFontWeight2="500"
                    propFontFamily2="Inter"
                    propColor3="#4e5566"
                    propTextAlign2="left"
                    propDisplay6="inline-block"
                    propHeight7="unset"
                    propWidth3="unset"
                    propPosition5="relative"
                    propFontSize3="14px"
                    propLetterSpacing3="-0.01em"
                    propLineHeight3="22px"
                    propFontFamily3="Inter"
                    propColor4="#8c94a3"
                    propTextAlign3="left"
                    propDisplay7="inline-block"
                    propMinWidth5="61px"
                    propFlexDirection5="unset"
                  />
                  <CourseContainer
                    imageDimensionsId="/course-images-14@2x.png"
                    categoryLabel={`IT & Software`}
                    priceText="$89"
                    courseTitle="Complete Adobe Lightroom Megacourse: Beginner to Expert"
                    ratingText="4.9."
                    numericValue="511,123"
                    studentIds=" students"
                    propFlex="unset"
                    propHeight="388px"
                    propBackgroundColor="#fff0f0"
                    propColor="#882929"
                    propMinWidth="77px"
                    propMinWidth1="35px"
                    propTextDecoration="unset"
                    propHeight1="unset"
                    propAlignSelf="stretch"
                    propHeight2="1px"
                    propPosition="relative"
                    propBorderTop="1px solid #e9eaf0"
                    propMargin="unset"
                    propAlignSelf1="stretch"
                    propDisplay="flex"
                    propFlexDirection="row"
                    propPadding="0px 18px"
                    propGap="20px"
                    propDisplay1="flex"
                    propFlexDirection1="row"
                    propGap1="6px"
                    propAlignSelf2="unset"
                    propHeight3="unset"
                    propPosition1="unset"
                    propBorderTop1="unset"
                    propHeight4="20px"
                    propWidth="20px"
                    propPosition2="relative"
                    propMinHeight="20px"
                    propAlignSelf3="unset"
                    propDisplay2="unset"
                    propFlexDirection2="unset"
                    propPadding1="unset"
                    propGap2="unset"
                    propPosition3="relative"
                    propFontSize="14px"
                    propLetterSpacing="-0.01em"
                    propLineHeight="20px"
                    propFontWeight="500"
                    propFontFamily="Inter"
                    propColor1="#4e5566"
                    propTextAlign="left"
                    propDisplay3="inline-block"
                    propMinWidth2="25px"
                    propFlexDirection3="unset"
                    propGap3="unset"
                    propDisplay4="flex"
                    propFlexDirection4="row"
                    propGap4="6px"
                    propHeight5="unset"
                    propWidth1="unset"
                    propPosition4="unset"
                    propMinHeight1="unset"
                    propHeight6="20px"
                    propWidth2="20px"
                    propFontSize1="unset"
                    propLetterSpacing1="unset"
                    propLineHeight1="unset"
                    propFontWeight1="unset"
                    propFontFamily1="unset"
                    propColor2="unset"
                    propTextAlign1="unset"
                    propDisplay5="unset"
                    propMinWidth3="unset"
                    propGap5="unset"
                    propMinWidth4="48px"
                    propFontSize2="14px"
                    propLetterSpacing2="-0.01em"
                    propLineHeight2="20px"
                    propFontWeight2="500"
                    propFontFamily2="Inter"
                    propColor3="#4e5566"
                    propTextAlign2="left"
                    propDisplay6="inline-block"
                    propHeight7="unset"
                    propWidth3="unset"
                    propPosition5="relative"
                    propFontSize3="14px"
                    propLetterSpacing3="-0.01em"
                    propLineHeight3="22px"
                    propFontFamily3="Inter"
                    propColor4="#8c94a3"
                    propTextAlign3="left"
                    propDisplay7="inline-block"
                    propMinWidth5="61px"
                    propFlexDirection5="unset"
                  />
                  <div className="self-stretch bg-gray-white hidden flex-col items-center justify-center pt-0 px-0 pb-3.5 gap-[14px] border-[1px] border-solid border-gray-100">
                    <img
                      className="self-stretch h-[234px] relative max-w-full overflow-hidden shrink-0 object-cover"
                      alt=""
                      src="/course-images-9@2x.png"
                    />
                    <div className="self-stretch flex flex-col items-center justify-center gap-[8px]">
                      <div className="self-stretch flex flex-row items-center justify-between py-0 px-[18px] gap-[20px]">
                        <Property1Design
                          design={`IT & Software`}
                          property1DesignBackgroundColor="#fff0f0"
                          property1DesignHeight="20px"
                          property1DesignBorder="unset"
                          designMinWidth="unset"
                          designColor="#882929"
                          designAlignSelf="stretch"
                        />
                        <div className="h-6 relative leading-[24px] font-medium inline-block whitespace-nowrap">
                          $9
                        </div>
                      </div>
                      <div className="w-[276px] h-11 relative text-base leading-[22px] font-medium text-gray-900 inline-block">
                        Automate the Boring Stuff with Python Programming
                      </div>
                    </div>
                    <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-gray-100" />
                    <div className="self-stretch flex flex-row items-center justify-between py-0 px-[18px] gap-[20px] text-sm text-gray-700">
                      <div className="h-5 flex flex-row items-center justify-start gap-[6px]">
                        <img
                          className="h-5 w-5 relative min-h-[20px]"
                          alt=""
                          src="/star-10.svg"
                        />
                        <div className="self-stretch relative tracking-[-0.01em] leading-[20px] font-medium">
                          4.5
                        </div>
                      </div>
                      <div className="h-[22px] flex flex-row items-center justify-start gap-[6px]">
                        <img
                          className="h-5 w-5 relative"
                          alt=""
                          src="/user.svg"
                        />
                        <div className="self-stretch flex flex-row items-center justify-center">
                          <div className="relative tracking-[-0.01em] leading-[20px] font-medium">
                            982,941
                          </div>
                          <div className="self-stretch relative tracking-[-0.01em] leading-[22px] text-gray-500">
                            {" "}
                            students
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-start justify-start gap-[24px] min-w-[234px]">
                  <CourseContainer
                    imageDimensionsId="/course-images-10@2x.png"
                    categoryLabel="Developments"
                    priceText="$32"
                    courseTitle="Adobe Premiere Pro CC – Advanced Training Course"
                    ratingText="4.6"
                    numericValue="236,568"
                    studentIds=" students"
                    propFlex="unset"
                    propHeight="388px"
                    propBackgroundColor="#ebebff"
                    propColor="#342f98"
                    propMinWidth="82px"
                    propMinWidth1="35px"
                    propTextDecoration="unset"
                    propHeight1="unset"
                    propAlignSelf="stretch"
                    propHeight2="1px"
                    propPosition="relative"
                    propBorderTop="1px solid #e9eaf0"
                    propMargin="unset"
                    propAlignSelf1="stretch"
                    propDisplay="flex"
                    propFlexDirection="row"
                    propPadding="0px 18px"
                    propGap="20px"
                    propDisplay1="flex"
                    propFlexDirection1="row"
                    propGap1="6px"
                    propAlignSelf2="unset"
                    propHeight3="unset"
                    propPosition1="unset"
                    propBorderTop1="unset"
                    propHeight4="20px"
                    propWidth="20px"
                    propPosition2="relative"
                    propMinHeight="20px"
                    propAlignSelf3="unset"
                    propDisplay2="unset"
                    propFlexDirection2="unset"
                    propPadding1="unset"
                    propGap2="unset"
                    propPosition3="relative"
                    propFontSize="14px"
                    propLetterSpacing="-0.01em"
                    propLineHeight="20px"
                    propFontWeight="500"
                    propFontFamily="Inter"
                    propColor1="#4e5566"
                    propTextAlign="left"
                    propDisplay3="inline-block"
                    propMinWidth2="21px"
                    propFlexDirection3="unset"
                    propGap3="unset"
                    propDisplay4="flex"
                    propFlexDirection4="row"
                    propGap4="6px"
                    propHeight5="unset"
                    propWidth1="unset"
                    propPosition4="unset"
                    propMinHeight1="unset"
                    propHeight6="20px"
                    propWidth2="20px"
                    propFontSize1="unset"
                    propLetterSpacing1="unset"
                    propLineHeight1="unset"
                    propFontWeight1="unset"
                    propFontFamily1="unset"
                    propColor2="unset"
                    propTextAlign1="unset"
                    propDisplay5="unset"
                    propMinWidth3="unset"
                    propGap5="unset"
                    propMinWidth4="56px"
                    propFontSize2="14px"
                    propLetterSpacing2="-0.01em"
                    propLineHeight2="20px"
                    propFontWeight2="500"
                    propFontFamily2="Inter"
                    propColor3="#4e5566"
                    propTextAlign2="left"
                    propDisplay6="inline-block"
                    propHeight7="unset"
                    propWidth3="unset"
                    propPosition5="relative"
                    propFontSize3="14px"
                    propLetterSpacing3="-0.01em"
                    propLineHeight3="22px"
                    propFontFamily3="Inter"
                    propColor4="#8c94a3"
                    propTextAlign3="left"
                    propDisplay7="inline-block"
                    propMinWidth5="61px"
                    propFlexDirection5="unset"
                  />
                  <CourseContainer
                    imageDimensionsId="/course-images-11@2x.png"
                    categoryLabel="Developments"
                    priceText="$16"
                    courseTitle="Angular - The Complete Guide (2021 Edition)"
                    ratingText="4.3"
                    numericValue="197,637"
                    studentIds=" students"
                    propFlex="unset"
                    propHeight="388px"
                    propBackgroundColor="#ebebff"
                    propColor="#342f98"
                    propMinWidth="82px"
                    propMinWidth1="32px"
                    propTextDecoration="unset"
                    propHeight1="unset"
                    propAlignSelf="stretch"
                    propHeight2="1px"
                    propPosition="relative"
                    propBorderTop="1px solid #e9eaf0"
                    propMargin="unset"
                    propAlignSelf1="stretch"
                    propDisplay="flex"
                    propFlexDirection="row"
                    propPadding="0px 18px"
                    propGap="20px"
                    propDisplay1="flex"
                    propFlexDirection1="row"
                    propGap1="6px"
                    propAlignSelf2="unset"
                    propHeight3="unset"
                    propPosition1="unset"
                    propBorderTop1="unset"
                    propHeight4="20px"
                    propWidth="20px"
                    propPosition2="relative"
                    propMinHeight="20px"
                    propAlignSelf3="unset"
                    propDisplay2="unset"
                    propFlexDirection2="unset"
                    propPadding1="unset"
                    propGap2="unset"
                    propPosition3="relative"
                    propFontSize="14px"
                    propLetterSpacing="-0.01em"
                    propLineHeight="20px"
                    propFontWeight="500"
                    propFontFamily="Inter"
                    propColor1="#4e5566"
                    propTextAlign="left"
                    propDisplay3="inline-block"
                    propMinWidth2="22px"
                    propFlexDirection3="unset"
                    propGap3="unset"
                    propDisplay4="flex"
                    propFlexDirection4="row"
                    propGap4="6px"
                    propHeight5="unset"
                    propWidth1="unset"
                    propPosition4="unset"
                    propMinHeight1="unset"
                    propHeight6="20px"
                    propWidth2="20px"
                    propFontSize1="unset"
                    propLetterSpacing1="unset"
                    propLineHeight1="unset"
                    propFontWeight1="unset"
                    propFontFamily1="unset"
                    propColor2="unset"
                    propTextAlign1="unset"
                    propDisplay5="unset"
                    propMinWidth3="unset"
                    propGap5="unset"
                    propMinWidth4="51px"
                    propFontSize2="14px"
                    propLetterSpacing2="-0.01em"
                    propLineHeight2="20px"
                    propFontWeight2="500"
                    propFontFamily2="Inter"
                    propColor3="#4e5566"
                    propTextAlign2="left"
                    propDisplay6="inline-block"
                    propHeight7="unset"
                    propWidth3="unset"
                    propPosition5="relative"
                    propFontSize3="14px"
                    propLetterSpacing3="-0.01em"
                    propLineHeight3="22px"
                    propFontFamily3="Inter"
                    propColor4="#8c94a3"
                    propTextAlign3="left"
                    propDisplay7="inline-block"
                    propMinWidth5="61px"
                    propFlexDirection5="unset"
                  />
                  <CourseContainer
                    imageDimensionsId="/course-images-12@2x.png"
                    categoryLabel="Developments"
                    priceText="$24"
                    courseTitle="SEO 2021: Complete SEO Training + SEO for WordPress Websites"
                    ratingText="5.0"
                    numericValue="197,637"
                    studentIds=" students"
                    propFlex="unset"
                    propHeight="388px"
                    propBackgroundColor="#ebebff"
                    propColor="#342f98"
                    propMinWidth="82px"
                    propMinWidth1="35px"
                    propTextDecoration="unset"
                    propHeight1="unset"
                    propAlignSelf="stretch"
                    propHeight2="1px"
                    propPosition="relative"
                    propBorderTop="1px solid #e9eaf0"
                    propMargin="unset"
                    propAlignSelf1="stretch"
                    propDisplay="flex"
                    propFlexDirection="row"
                    propPadding="0px 18px"
                    propGap="20px"
                    propDisplay1="flex"
                    propFlexDirection1="row"
                    propGap1="6px"
                    propAlignSelf2="unset"
                    propHeight3="unset"
                    propPosition1="unset"
                    propBorderTop1="unset"
                    propHeight4="20px"
                    propWidth="20px"
                    propPosition2="relative"
                    propMinHeight="20px"
                    propAlignSelf3="unset"
                    propDisplay2="unset"
                    propFlexDirection2="unset"
                    propPadding1="unset"
                    propGap2="unset"
                    propPosition3="relative"
                    propFontSize="14px"
                    propLetterSpacing="-0.01em"
                    propLineHeight="20px"
                    propFontWeight="500"
                    propFontFamily="Inter"
                    propColor1="#4e5566"
                    propTextAlign="left"
                    propDisplay3="inline-block"
                    propMinWidth2="21px"
                    propFlexDirection3="unset"
                    propGap3="unset"
                    propDisplay4="flex"
                    propFlexDirection4="row"
                    propGap4="6px"
                    propHeight5="unset"
                    propWidth1="unset"
                    propPosition4="unset"
                    propMinHeight1="unset"
                    propHeight6="20px"
                    propWidth2="20px"
                    propFontSize1="unset"
                    propLetterSpacing1="unset"
                    propLineHeight1="unset"
                    propFontWeight1="unset"
                    propFontFamily1="unset"
                    propColor2="unset"
                    propTextAlign1="unset"
                    propDisplay5="unset"
                    propMinWidth3="unset"
                    propGap5="unset"
                    propMinWidth4="51px"
                    propFontSize2="14px"
                    propLetterSpacing2="-0.01em"
                    propLineHeight2="20px"
                    propFontWeight2="500"
                    propFontFamily2="Inter"
                    propColor3="#4e5566"
                    propTextAlign2="left"
                    propDisplay6="inline-block"
                    propHeight7="unset"
                    propWidth3="unset"
                    propPosition5="relative"
                    propFontSize3="14px"
                    propLetterSpacing3="-0.01em"
                    propLineHeight3="22px"
                    propFontFamily3="Inter"
                    propColor4="#8c94a3"
                    propTextAlign3="left"
                    propDisplay7="inline-block"
                    propMinWidth5="61px"
                    propFlexDirection5="unset"
                  />
                  <CourseContainer
                    imageDimensionsId="/course-images-13@2x.png"
                    categoryLabel="Developments"
                    priceText="$32"
                    courseTitle="Digital Marketing Masterclass - 23 Courses in 1"
                    ratingText="5.0"
                    numericValue="211,434"
                    studentIds=" students"
                    propFlex="unset"
                    propHeight="388px"
                    propBackgroundColor="#ebebff"
                    propColor="#342f98"
                    propMinWidth="82px"
                    propMinWidth1="35px"
                    propTextDecoration="unset"
                    propHeight1="unset"
                    propAlignSelf="stretch"
                    propHeight2="1px"
                    propPosition="relative"
                    propBorderTop="1px solid #e9eaf0"
                    propMargin="unset"
                    propAlignSelf1="stretch"
                    propDisplay="flex"
                    propFlexDirection="row"
                    propPadding="0px 18px"
                    propGap="20px"
                    propDisplay1="flex"
                    propFlexDirection1="row"
                    propGap1="6px"
                    propAlignSelf2="unset"
                    propHeight3="unset"
                    propPosition1="unset"
                    propBorderTop1="unset"
                    propHeight4="20px"
                    propWidth="20px"
                    propPosition2="relative"
                    propMinHeight="20px"
                    propAlignSelf3="unset"
                    propDisplay2="unset"
                    propFlexDirection2="unset"
                    propPadding1="unset"
                    propGap2="unset"
                    propPosition3="relative"
                    propFontSize="14px"
                    propLetterSpacing="-0.01em"
                    propLineHeight="20px"
                    propFontWeight="500"
                    propFontFamily="Inter"
                    propColor1="#4e5566"
                    propTextAlign="left"
                    propDisplay3="inline-block"
                    propMinWidth2="21px"
                    propFlexDirection3="unset"
                    propGap3="unset"
                    propDisplay4="flex"
                    propFlexDirection4="row"
                    propGap4="6px"
                    propHeight5="unset"
                    propWidth1="unset"
                    propPosition4="unset"
                    propMinHeight1="unset"
                    propHeight6="20px"
                    propWidth2="20px"
                    propFontSize1="unset"
                    propLetterSpacing1="unset"
                    propLineHeight1="unset"
                    propFontWeight1="unset"
                    propFontFamily1="unset"
                    propColor2="unset"
                    propTextAlign1="unset"
                    propDisplay5="unset"
                    propMinWidth3="unset"
                    propGap5="unset"
                    propMinWidth4="52px"
                    propFontSize2="14px"
                    propLetterSpacing2="-0.01em"
                    propLineHeight2="20px"
                    propFontWeight2="500"
                    propFontFamily2="Inter"
                    propColor3="#4e5566"
                    propTextAlign2="left"
                    propDisplay6="inline-block"
                    propHeight7="unset"
                    propWidth3="unset"
                    propPosition5="relative"
                    propFontSize3="14px"
                    propLetterSpacing3="-0.01em"
                    propLineHeight3="22px"
                    propFontFamily3="Inter"
                    propColor4="#8c94a3"
                    propTextAlign3="left"
                    propDisplay7="inline-block"
                    propMinWidth5="61px"
                    propFlexDirection5="unset"
                  />
                  <div className="self-stretch bg-gray-white hidden flex-col items-center justify-center pt-0 px-0 pb-3.5 gap-[14px] border-[1px] border-solid border-gray-100">
                    <img
                      className="self-stretch h-[234px] relative max-w-full overflow-hidden shrink-0 object-cover"
                      alt=""
                      src="/course-images-141@2x.png"
                    />
                    <div className="self-stretch flex flex-col items-center justify-center gap-[8px]">
                      <div className="self-stretch flex flex-row items-center justify-between py-0 px-[18px] gap-[20px]">
                        <Property1Design
                          design="Developments"
                          property1DesignBackgroundColor="#ebebff"
                          property1DesignHeight="20px"
                          property1DesignBorder="unset"
                          designMinWidth="unset"
                          designColor="#342f98"
                          designAlignSelf="stretch"
                        />
                        <div className="h-6 relative leading-[24px] font-medium inline-block whitespace-nowrap">
                          $9
                        </div>
                      </div>
                      <div className="w-[276px] h-11 relative text-base leading-[22px] font-medium text-gray-900 inline-block">
                        Selenium WebDriver with Java -Basics to
                        Advanced+Frameworks
                      </div>
                    </div>
                    <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-gray-100" />
                    <div className="self-stretch flex flex-row items-center justify-between py-0 px-[18px] gap-[20px] text-sm text-gray-700">
                      <div className="h-5 flex flex-row items-center justify-start gap-[6px]">
                        <img
                          className="h-5 w-5 relative min-h-[20px]"
                          alt=""
                          src="/star-10.svg"
                        />
                        <div className="self-stretch relative tracking-[-0.01em] leading-[20px] font-medium">
                          4.4
                        </div>
                      </div>
                      <div className="h-[22px] flex flex-row items-center justify-start gap-[6px]">
                        <img
                          className="h-5 w-5 relative"
                          alt=""
                          src="/user.svg"
                        />
                        <div className="self-stretch flex flex-row items-center justify-center">
                          <div className="relative tracking-[-0.01em] leading-[20px] font-medium">
                            154,817
                          </div>
                          <div className="self-stretch relative tracking-[-0.01em] leading-[22px] text-gray-500">
                            {" "}
                            students
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-start justify-start gap-[24px] min-w-[234px]">
                  <CourseContainer
                    imageDimensionsId="/course-images-15@2x.png"
                    categoryLabel="Marketing"
                    priceText="$13"
                    courseTitle="Ultimate AWS Certified Solutions Architect Associate 2021"
                    ratingText="4.1"
                    numericValue="511,123"
                    studentIds=" students"
                    propFlex="unset"
                    propHeight="388px"
                    propBackgroundColor="#ebebff"
                    propColor="#342f98"
                    propMinWidth="60px"
                    propMinWidth1="32px"
                    propTextDecoration="unset"
                    propHeight1="unset"
                    propAlignSelf="stretch"
                    propHeight2="1px"
                    propPosition="relative"
                    propBorderTop="1px solid #e9eaf0"
                    propMargin="unset"
                    propAlignSelf1="stretch"
                    propDisplay="flex"
                    propFlexDirection="row"
                    propPadding="0px 18px"
                    propGap="20px"
                    propDisplay1="flex"
                    propFlexDirection1="row"
                    propGap1="6px"
                    propAlignSelf2="unset"
                    propHeight3="unset"
                    propPosition1="unset"
                    propBorderTop1="unset"
                    propHeight4="20px"
                    propWidth="20px"
                    propPosition2="relative"
                    propMinHeight="20px"
                    propAlignSelf3="unset"
                    propDisplay2="unset"
                    propFlexDirection2="unset"
                    propPadding1="unset"
                    propGap2="unset"
                    propPosition3="relative"
                    propFontSize="14px"
                    propLetterSpacing="-0.01em"
                    propLineHeight="20px"
                    propFontWeight="500"
                    propFontFamily="Inter"
                    propColor1="#4e5566"
                    propTextAlign="left"
                    propDisplay3="inline-block"
                    propMinWidth2="18px"
                    propFlexDirection3="unset"
                    propGap3="unset"
                    propDisplay4="flex"
                    propFlexDirection4="row"
                    propGap4="6px"
                    propHeight5="unset"
                    propWidth1="unset"
                    propPosition4="unset"
                    propMinHeight1="unset"
                    propHeight6="20px"
                    propWidth2="20px"
                    propFontSize1="unset"
                    propLetterSpacing1="unset"
                    propLineHeight1="unset"
                    propFontWeight1="unset"
                    propFontFamily1="unset"
                    propColor2="unset"
                    propTextAlign1="unset"
                    propDisplay5="unset"
                    propMinWidth3="unset"
                    propGap5="unset"
                    propMinWidth4="48px"
                    propFontSize2="14px"
                    propLetterSpacing2="-0.01em"
                    propLineHeight2="20px"
                    propFontWeight2="500"
                    propFontFamily2="Inter"
                    propColor3="#4e5566"
                    propTextAlign2="left"
                    propDisplay6="inline-block"
                    propHeight7="unset"
                    propWidth3="unset"
                    propPosition5="relative"
                    propFontSize3="14px"
                    propLetterSpacing3="-0.01em"
                    propLineHeight3="22px"
                    propFontFamily3="Inter"
                    propColor4="#8c94a3"
                    propTextAlign3="left"
                    propDisplay7="inline-block"
                    propMinWidth5="61px"
                    propFlexDirection5="unset"
                  />
                  <CourseContainer
                    imageDimensionsId="/course-images-161@2x.png"
                    categoryLabel="Marketing"
                    priceText="$23"
                    courseTitle="How to get Diamond in soloQ | League of Legends | Season 11"
                    ratingText="4.7"
                    numericValue="435,671"
                    studentIds=" students"
                    propFlex="unset"
                    propHeight="388px"
                    propBackgroundColor="#ebebff"
                    propColor="#342f98"
                    propMinWidth="60px"
                    propMinWidth1="35px"
                    propTextDecoration="unset"
                    propHeight1="unset"
                    propAlignSelf="stretch"
                    propHeight2="1px"
                    propPosition="relative"
                    propBorderTop="1px solid #e9eaf0"
                    propMargin="unset"
                    propAlignSelf1="stretch"
                    propDisplay="flex"
                    propFlexDirection="row"
                    propPadding="0px 18px"
                    propGap="20px"
                    propDisplay1="flex"
                    propFlexDirection1="row"
                    propGap1="6px"
                    propAlignSelf2="unset"
                    propHeight3="unset"
                    propPosition1="unset"
                    propBorderTop1="unset"
                    propHeight4="20px"
                    propWidth="20px"
                    propPosition2="relative"
                    propMinHeight="20px"
                    propAlignSelf3="unset"
                    propDisplay2="unset"
                    propFlexDirection2="unset"
                    propPadding1="unset"
                    propGap2="unset"
                    propPosition3="relative"
                    propFontSize="14px"
                    propLetterSpacing="-0.01em"
                    propLineHeight="20px"
                    propFontWeight="500"
                    propFontFamily="Inter"
                    propColor1="#4e5566"
                    propTextAlign="left"
                    propDisplay3="inline-block"
                    propMinWidth2="21px"
                    propFlexDirection3="unset"
                    propGap3="unset"
                    propDisplay4="flex"
                    propFlexDirection4="row"
                    propGap4="6px"
                    propHeight5="unset"
                    propWidth1="unset"
                    propPosition4="unset"
                    propMinHeight1="unset"
                    propHeight6="20px"
                    propWidth2="20px"
                    propFontSize1="unset"
                    propLetterSpacing1="unset"
                    propLineHeight1="unset"
                    propFontWeight1="unset"
                    propFontFamily1="unset"
                    propColor2="unset"
                    propTextAlign1="unset"
                    propDisplay5="unset"
                    propMinWidth3="unset"
                    propGap5="unset"
                    propMinWidth4="53px"
                    propFontSize2="14px"
                    propLetterSpacing2="-0.01em"
                    propLineHeight2="20px"
                    propFontWeight2="500"
                    propFontFamily2="Inter"
                    propColor3="#4e5566"
                    propTextAlign2="left"
                    propDisplay6="inline-block"
                    propHeight7="unset"
                    propWidth3="unset"
                    propPosition5="relative"
                    propFontSize3="14px"
                    propLetterSpacing3="-0.01em"
                    propLineHeight3="22px"
                    propFontFamily3="Inter"
                    propColor4="#8c94a3"
                    propTextAlign3="left"
                    propDisplay7="inline-block"
                    propMinWidth5="61px"
                    propFlexDirection5="unset"
                  />
                  <CourseContainer
                    imageDimensionsId="/course-images-151@2x.png"
                    categoryLabel="Marketing"
                    priceText="$9"
                    courseTitle="[NEW] Ultimate AWS Certified Cloud Practitioner - 2021"
                    ratingText="5.0"
                    numericValue="1,356,236"
                    studentIds=" students"
                  />
                  <div className="self-stretch bg-gray-white hidden flex-col items-center justify-center pt-0 px-0 pb-3.5 gap-[14px] border-[1px] border-solid border-gray-100">
                    <img
                      className="self-stretch h-[234px] relative max-w-full overflow-hidden shrink-0 object-cover hidden"
                      alt=""
                      src="/course-images-18@2x.png"
                    />
                    <div className="self-stretch flex flex-col items-center justify-center gap-[8px]">
                      <div className="self-stretch flex flex-row items-center justify-between py-0 px-[18px] gap-[20px]">
                        <Property1Design
                          design="Marketing"
                          property1DesignBackgroundColor="#ebebff"
                          property1DesignHeight="20px"
                          property1DesignBorder="unset"
                          designMinWidth="unset"
                          designColor="#342f98"
                          designAlignSelf="stretch"
                        />
                        <div className="h-6 relative leading-[24px] font-medium inline-block whitespace-nowrap">
                          $49
                        </div>
                      </div>
                      <div className="w-[276px] h-11 relative text-base leading-[22px] font-medium text-gray-900 inline-block">
                        The Ultimate Drawing Course - Beginner to Advanced
                      </div>
                    </div>
                    <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-gray-100" />
                    <div className="self-stretch flex flex-row items-center justify-between py-0 px-[18px] gap-[20px] text-sm text-gray-700">
                      <div className="h-5 flex flex-row items-center justify-start gap-[6px]">
                        <img
                          className="h-5 w-5 relative min-h-[20px]"
                          alt=""
                          src="/star-10.svg"
                        />
                        <div className="self-stretch relative tracking-[-0.01em] leading-[20px] font-medium">
                          4.9
                        </div>
                      </div>
                      <div className="h-[22px] flex flex-row items-center justify-start gap-[6px]">
                        <img
                          className="h-5 w-5 relative"
                          alt=""
                          src="/user.svg"
                        />
                        <div className="self-stretch flex flex-row items-center justify-center">
                          <div className="relative tracking-[-0.01em] leading-[20px] font-medium">
                            197,637
                          </div>
                          <div className="self-stretch relative tracking-[-0.01em] leading-[22px] text-gray-500">
                            {" "}
                            students
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch bg-gray-white hidden flex-col items-center justify-center pt-0 px-0 pb-3.5 gap-[14px] border-[1px] border-solid border-gray-100">
                    <img
                      className="self-stretch h-[234px] relative max-w-full overflow-hidden shrink-0 object-cover"
                      alt=""
                      src="/course-images-19@2x.png"
                    />
                    <div className="self-stretch flex flex-col items-center justify-center gap-[8px]">
                      <div className="self-stretch flex flex-row items-center justify-between py-0 px-[18px] gap-[20px]">
                        <Property1Design
                          design="Marketing"
                          property1DesignBackgroundColor="#ebebff"
                          property1DesignHeight="20px"
                          property1DesignBorder="unset"
                          designMinWidth="unset"
                          designColor="#342f98"
                          designAlignSelf="stretch"
                        />
                        <div className="h-6 relative leading-[24px] font-medium inline-block whitespace-nowrap">
                          $24
                        </div>
                      </div>
                      <div className="w-[276px] h-11 relative text-base leading-[22px] font-medium text-gray-900 inline-block">
                        iPhone Photography | Take Professional Photos On Your
                        iPhone
                      </div>
                    </div>
                    <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-gray-100" />
                    <div className="self-stretch flex flex-row items-center justify-between py-0 px-[18px] gap-[20px] text-sm text-gray-700">
                      <div className="h-5 flex flex-row items-center justify-start gap-[6px]">
                        <img
                          className="h-5 w-5 relative min-h-[20px]"
                          alt=""
                          src="/star-10.svg"
                        />
                        <div className="self-stretch relative tracking-[-0.01em] leading-[20px] font-medium">
                          4.8
                        </div>
                      </div>
                      <div className="h-[22px] flex flex-row items-center justify-start gap-[6px]">
                        <img
                          className="h-5 w-5 relative"
                          alt=""
                          src="/user.svg"
                        />
                        <div className="self-stretch flex flex-row items-center justify-center">
                          <div className="relative tracking-[-0.01em] leading-[20px] font-medium">
                            211,434
                          </div>
                          <div className="self-stretch relative tracking-[-0.01em] leading-[22px] text-gray-500">
                            {" "}
                            students
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-center text-sm text-gray-900">
                <div className="flex flex-row items-start justify-start gap-[16px] max-w-full mq450:flex-wrap">
                  <div className="h-12 w-12 rounded-81xl flex flex-row items-start justify-start p-3 box-border opacity-[0.5]">
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
          </div>
        </section>
      </main>
      <Footer1 propOverflowX="unset" />
    </div>
  );
};

export default CourseCategory;
