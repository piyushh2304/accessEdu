import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
} from "@mui/material";

const FrameComponent = () => {
  return (
    <div className="self-stretch h-[348px] flex flex-row items-start justify-start pt-0 px-0 pb-[200px] box-border max-w-full text-left text-13xl text-gray-900 font-body-medium-400">
      <div className="self-stretch flex-1 flex flex-col items-start justify-start top-[0] z-[99] sticky max-w-full">
        <header className="self-stretch bg-gray-900 flex flex-row items-center justify-between py-0 px-8 box-border max-w-full gap-[20px]">
          <nav className="m-0 flex flex-row items-center justify-center gap-[8px] max-w-full text-left text-sm text-gray-500 font-body-medium-400">
            <div className="bg-gray-900 shadow-[0px_2px_0px_#ff6636_inset] flex flex-row items-start justify-start p-4 text-gray-white">
              <div className="relative tracking-[-0.01em] leading-[20px] font-medium inline-block min-w-[39px]">
                Home
              </div>
            </div>
            <div className="bg-gray-900 flex flex-row items-start justify-start p-4">
              <div className="relative tracking-[-0.01em] leading-[20px] font-medium inline-block min-w-[55px]">
                Courses
              </div>
            </div>
            <div className="bg-gray-900 flex flex-row items-start justify-start p-4">
              <div className="relative tracking-[-0.01em] leading-[20px] font-medium inline-block min-w-[40px]">
                About
              </div>
            </div>
            <div className="bg-gray-900 flex flex-row items-start justify-start p-4">
              <div className="relative tracking-[-0.01em] leading-[20px] font-medium inline-block min-w-[53px]">
                Contact
              </div>
            </div>
            <div className="bg-gray-900 flex flex-row items-start justify-start p-4 whitespace-nowrap">
              <div className="relative tracking-[-0.01em] leading-[20px] font-medium">
                Become an Instructor
              </div>
            </div>
          </nav>
          <div className="h-[22px] flex flex-row items-start justify-start gap-[24px] mq1400:hidden">
            <FormControl
              className="self-stretch font-body-medium-400 text-sm text-gray-400"
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
                "& .MuiInputBase-input": {
                  textAlign: "left",
                  p: "0 !important",
                },
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
              className="self-stretch font-body-medium-400 text-sm text-gray-400"
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
                "& .MuiInputBase-input": {
                  textAlign: "left",
                  p: "0 !important",
                },
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
        <div className="self-stretch flex-1 bg-gray-white shadow-[0px_-1px_0px_#e9eaf0_inset] flex flex-row items-start justify-between py-6 px-8 box-border max-w-full gap-[20px]">
          <div className="self-stretch w-[904px] flex flex-row items-start justify-start gap-[50px] max-w-full mq450:gap-[50px_25px]">
            <div className="h-11 flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border">
              <div className="flex-1 flex flex-row items-start justify-start gap-[8px]">
                <img
                  className="h-10 w-10 relative min-h-[40px]"
                  loading="lazy"
                  alt=""
                  src="/graduationcap1.svg"
                />
                <h1 className="m-0 relative text-inherit tracking-[-0.03em] leading-[40px] font-semibold font-inherit whitespace-nowrap">
                  AccessEdu
                </h1>
              </div>
            </div>
            <div className="self-stretch flex-1 flex flex-row items-start justify-start gap-[16px] max-w-full">
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
                  "& .MuiInputBase-input": {
                    textAlign: "left",
                    p: "0 !important",
                  },
                }}
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
                </Select>
                <FormHelperText />
              </FormControl>
              <div className="self-stretch flex-1 bg-gray-white box-border overflow-hidden flex flex-row items-start justify-start py-3 px-[18px] max-w-full border-[1px] border-solid border-gray-100">
                <div className="self-stretch w-[229px] flex flex-row items-start justify-start gap-[12px]">
                  <img
                    className="h-6 w-6 relative min-h-[24px]"
                    alt=""
                    src="/magnifyingglass.svg"
                  />
                  <input
                    className="w-[calc(100%_-_24px)] [border:none] [outline:none] font-body-medium-400 text-base bg-[transparent] h-6 flex-1 relative leading-[24px] text-gray-500 text-left inline-block min-w-[116px] whitespace-nowrap p-0"
                    placeholder="What do you want learn..."
                    type="text"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[24px] text-center text-3xs text-gray-white">
            <div className="h-9 flex flex-col items-start justify-start pt-3 px-0 pb-0 box-border">
              <img
                className="w-6 h-6 relative"
                loading="lazy"
                alt=""
                src="/bell1.svg"
              />
            </div>
            <div className="h-9 flex flex-col items-start justify-start pt-3 px-0 pb-0 box-border">
              <img
                className="w-6 h-6 relative"
                loading="lazy"
                alt=""
                src="/heart.svg"
              />
            </div>
            <div className="h-6 w-6 relative hidden">
              <img
                className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/property-1default.svg"
              />
              <div className="absolute top-[-3px] left-[11px] rounded-61xl bg-primary-500 flex flex-col items-center justify-center py-[3px] px-0">
                <div className="self-stretch h-2.5 relative leading-[10px] font-medium inline-block">
                  2
                </div>
              </div>
            </div>
            <img
              className="h-12 w-12 relative rounded-[50%] object-cover"
              loading="lazy"
              alt=""
              src="/avatar@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
