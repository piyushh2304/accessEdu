import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
} from "@mui/material";
import Search from "./Search";
import CourseContainer from "./CourseContainer";
import Property1Design from "./Property1Design";

const FunctionCaller = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-base text-primary-500 font-body-medium-400">
      <div className="w-[1320px] flex flex-col items-start justify-start max-w-full">
        <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px] text-gray-900 lg:flex-wrap">
          <div className="w-[648px] flex flex-row items-start justify-start gap-[24px] max-w-full mq825:flex-wrap">
            <div className="bg-gray-white flex flex-row items-start justify-start py-0 px-[23px] gap-[24px] border-[1px] border-solid border-primary-200">
              <div className="flex flex-row items-start justify-start gap-[12px]">
                <div className="h-9 flex flex-col items-start justify-start pt-3 px-0 pb-0 box-border">
                  <img
                    className="w-6 h-6 relative"
                    loading="lazy"
                    alt=""
                    src="/faders.svg"
                  />
                </div>
                <div className="relative tracking-[-0.01em] leading-[48px] capitalize font-semibold inline-block min-w-[39px]">
                  Filter
                </div>
              </div>
              <div className="flex flex-col items-start justify-start pt-3 px-0 pb-0 text-center text-xs text-primary-500">
                <div className="bg-primary-100 flex flex-row items-start justify-start py-1 px-1.5">
                  <div className="w-2 relative leading-[16px] font-semibold inline-block min-w-[8px]">
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
                "& .MuiInputBase-input": {
                  textAlign: "left",
                  p: "0 !important",
                },
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
              </Select>
              <FormHelperText />
            </FormControl>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-10 box-border max-w-full text-sm">
          <div className="flex-1 bg-gray-white shadow-[0px_-1px_0px_#e9eaf0_inset] flex flex-row items-start justify-between pt-6 px-0 pb-4 box-border max-w-full gap-[20px] mq825:flex-wrap">
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
        <div className="self-stretch flex flex-col items-start justify-start gap-[40px] max-w-full text-lg mq825:gap-[20px_40px]">
          <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[24px]">
            <div className="flex-1 flex flex-col items-start justify-start gap-[24px] min-w-[287px] max-w-[312px]">
              <CourseContainer
                imageDimensionsId="/course-images@2x.png"
                categoryLabel="Disability"
                priceText="$35"
                courseTitle="Attitudes and Biases as Barriers for Deaf People"
                ratingText="4.8"
                numericValue="952,891"
                studentIds=" students"
                propFlex="unset"
                propHeight="388px"
                propBackgroundColor="#fff0f0"
                propColor="#882929"
                propMinWidth="55px"
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
                propMinWidth4="54px"
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
                imageDimensionsId="/course-images-2@2x.png"
                categoryLabel="Design"
                priceText="$13"
                courseTitle="Coordinating Services for Deaf Students"
                ratingText="4.6"
                numericValue="181,811"
                studentIds=" students"
                propFlex="unset"
                propHeight="388px"
                propBackgroundColor="#ffeee8"
                propColor="#993d20"
                propMinWidth="38px"
                propMinWidth1="32px"
                propTextDecoration="none"
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
                propMinWidth4="47px"
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
                imageDimensionsId="/course-images-4@2x.png"
                categoryLabel="Design"
                priceText="$16"
                courseTitle="Play, learning and the brain by OpenLean"
                ratingText="4.5"
                numericValue="854"
                studentIds=" students"
                propFlex="unset"
                propHeight="388px"
                propBackgroundColor="#ffeee8"
                propColor="#993d20"
                propMinWidth="38px"
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
                propMinWidth4="27px"
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
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[24px] min-w-[287px] max-w-[312px]">
              <CourseContainer
                imageDimensionsId="/course-images-5@2x.png"
                categoryLabel="Design"
                priceText="$49"
                courseTitle="Introduction to Assistive Listening Devices and Systems"
                ratingText="4.3"
                numericValue="16,063"
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
                propMinWidth4="45px"
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
                courseTitle="Exploring learning disabilities: supporting belonging"
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
                imageDimensionsId="/course-images-9@2x.png"
                categoryLabel={`IT & Software`}
                priceText="$9"
                courseTitle="LRC – Vocational Training for Persons with disabilities"
                ratingText="4.5"
                numericValue="982,941"
                studentIds=" students"
                propFlex="unset"
                propHeight="388px"
                propBackgroundColor="#fff0f0"
                propColor="#882929"
                propMinWidth="77px"
                propMinWidth1="24px"
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
                propMinWidth4="54px"
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
                  src="/course-images-111@2x.png"
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
                      $24
                    </div>
                  </div>
                  <div className="w-[276px] h-11 relative text-base leading-[22px] font-medium text-gray-900 inline-block">{`Machine Learning A-Z™: Hands-On Python & R In Data Science`}</div>
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
                      4.7
                    </div>
                  </div>
                  <div className="h-[22px] flex flex-row items-center justify-start gap-[6px]">
                    <img className="h-5 w-5 relative" alt="" src="/user.svg" />
                    <div className="self-stretch flex flex-row items-center justify-center">
                      <div className="relative tracking-[-0.01em] leading-[20px] font-medium">
                        451,444
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
            <div className="flex-1 flex flex-col items-start justify-start gap-[24px] min-w-[287px] max-w-[312px]">
              <CourseContainer
                imageDimensionsId="/course-images-15@2x.png"
                categoryLabel="Marketing"
                priceText="$13"
                courseTitle="OnDemand Webinar: Mentoring Deaf Youth Leads to #DeafSuccess"
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
              <div className="self-stretch bg-gray-white hidden flex-col items-center justify-center pt-0 px-0 pb-3.5 gap-[14px] border-[1px] border-solid border-gray-100">
                <img
                  className="self-stretch h-[234px] relative max-w-full overflow-hidden shrink-0 object-cover"
                  alt=""
                  src="/course-images-161@2x.png"
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
                      $23
                    </div>
                  </div>
                  <div className="w-[276px] h-11 relative text-base leading-[22px] font-medium text-gray-900 inline-block">
                    How to get Diamond in soloQ | League of Legends | Season 11
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
                      4.7
                    </div>
                  </div>
                  <div className="h-[22px] flex flex-row items-center justify-start gap-[6px]">
                    <img className="h-5 w-5 relative" alt="" src="/user.svg" />
                    <div className="self-stretch flex flex-row items-center justify-center">
                      <div className="relative tracking-[-0.01em] leading-[20px] font-medium">
                        435,671
                      </div>
                      <div className="self-stretch relative tracking-[-0.01em] leading-[22px] text-gray-500">
                        {" "}
                        students
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <CourseContainer
                imageDimensionsId="/course-images-151@2x.png"
                categoryLabel="Marketing"
                priceText="$9"
                courseTitle="Introduction to adolescent mental health"
                ratingText="5.0"
                numericValue="1,356,236"
                studentIds=" students"
                propFlex="unset"
                propHeight="388px"
                propBackgroundColor="#ebebff"
                propColor="#342f98"
                propMinWidth="60px"
                propMinWidth1="24px"
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
                propMinWidth4="66px"
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
                imageDimensionsId="/course-images-18@2x.png"
                categoryLabel="Marketing"
                priceText="$49"
                courseTitle="Learning How to Learn: Powerful mental tools to help you master tough subjects"
                ratingText="4.9"
                numericValue="197,637"
                studentIds=" students"
                propFlex="unset"
                propHeight="410px"
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
              <div className="self-stretch bg-gray-white hidden flex-col items-center justify-center pt-0 px-0 pb-3.5 gap-[14px] border-[1px] border-solid border-gray-100">
                <img
                  className="self-stretch h-[234px] relative max-w-full overflow-hidden shrink-0 object-cover"
                  alt=""
                  src="/course-images-162@2x.png"
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
                    Premiere Pro CC for Beginners: Video Editing in Premiere
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
                    <img className="h-5 w-5 relative" alt="" src="/user.svg" />
                    <div className="self-stretch flex flex-row items-center justify-center">
                      <div className="relative tracking-[-0.01em] leading-[20px] font-medium">
                        854
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
            <div className="flex-1 flex flex-col items-start justify-start gap-[24px] min-w-[287px] max-w-[312px]">
              <CourseContainer
                imageDimensionsId="/course-images-10@2x.png"
                categoryLabel="Developments"
                priceText="$32"
                courseTitle="Supporting Accessible Learning Environments for Deaf Students"
                ratingText="4.5"
                numericValue="7,638"
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
                propMinWidth4="37px"
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
                  src="/course-images-11@2x.png"
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
                      $16
                    </div>
                  </div>
                  <div className="w-[276px] h-11 relative text-base leading-[22px] font-medium text-gray-900 inline-block">
                    Angular - The Complete Guide (2021 Edition)
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
                      4.3
                    </div>
                  </div>
                  <div className="h-[22px] flex flex-row items-center justify-start gap-[6px]">
                    <img className="h-5 w-5 relative" alt="" src="/user.svg" />
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
                  src="/course-images-12@2x.png"
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
                      $24
                    </div>
                  </div>
                  <div className="w-[276px] h-11 relative text-base leading-[22px] font-medium text-gray-900 inline-block">
                    SEO 2021: Complete SEO Training + SEO for WordPress Websites
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
                      5.0
                    </div>
                  </div>
                  <div className="h-[22px] flex flex-row items-center justify-start gap-[6px]">
                    <img className="h-5 w-5 relative" alt="" src="/user.svg" />
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
                  src="/course-images-13@2x.png"
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
                      $32
                    </div>
                  </div>
                  <div className="w-[276px] h-11 relative text-base leading-[22px] font-medium text-gray-900 inline-block">
                    Digital Marketing Masterclass - 23 Courses in 1
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
                      5.0
                    </div>
                  </div>
                  <div className="h-[22px] flex flex-row items-center justify-start gap-[6px]">
                    <img className="h-5 w-5 relative" alt="" src="/user.svg" />
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
                    Selenium WebDriver with Java -Basics to Advanced+Frameworks
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
                    <img className="h-5 w-5 relative" alt="" src="/user.svg" />
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
              <CourseContainer
                imageDimensionsId="/course-images-16@2x.png"
                categoryLabel="Design"
                priceText="$9"
                courseTitle="Ultimate Google Ads Training 2020: Profit with Pay Per Click"
                ratingText="4.1"
                numericValue="154,817"
                studentIds=" students"
                propFlex="unset"
                propHeight="388px"
                propBackgroundColor="#ffeee8"
                propColor="#993d20"
                propMinWidth="38px"
                propMinWidth1="24px"
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
                imageDimensionsId="/course-images-23@2x.png"
                categoryLabel="Developments"
                priceText="$35"
                propFlex="unset"
                propHeight="432px"
                propBackgroundColor="#ebebff"
                propColor="#342f98"
                propMinWidth="82px"
                propMinWidth1="35px"
                propTextDecoration="unset"
                propHeight1="88px"
                propAlignSelf="unset"
                propHeight2="unset"
                propPosition="unset"
                propBorderTop="unset"
                propMargin="0"
                propDisplay1="unset"
                propFlexDirection1="unset"
                propGap1="unset"
                propAlignSelf2="stretch"
                propHeight3="1px"
                propPosition1="relative"
                propBorderTop1="1px solid #e9eaf0"
                propHeight4="unset"
                propWidth="unset"
                propPosition2="unset"
                propMinHeight="unset"
                propAlignSelf3="stretch"
                propDisplay2="flex"
                propFlexDirection2="row"
                propPadding1="0px 18px"
                propGap2="20px"
                propPosition3="unset"
                propFontSize="unset"
                propLetterSpacing="unset"
                propLineHeight="unset"
                propFontWeight="unset"
                propFontFamily="unset"
                propColor1="unset"
                propTextAlign="unset"
                propDisplay3="flex"
                propMinWidth2="unset"
                propFlexDirection3="row"
                propGap3="6px"
                propDisplay4="unset"
                propFlexDirection4="unset"
                propGap4="unset"
                propHeight5="20px"
                propWidth1="20px"
                propPosition4="relative"
                propMinHeight1="20px"
                propHeight6="unset"
                propWidth2="unset"
                propFontSize1="14px"
                propLetterSpacing1="-0.01em"
                propLineHeight1="20px"
                propFontWeight1="500"
                propFontFamily1="Inter"
                propColor2="#4e5566"
                propTextAlign1="left"
                propDisplay5="inline-block"
                propMinWidth3="21px"
                propGap5="6px"
                propMinWidth4="unset"
                propFontSize2="unset"
                propLetterSpacing2="unset"
                propLineHeight2="unset"
                propFontWeight2="unset"
                propFontFamily2="unset"
                propColor3="unset"
                propTextAlign2="unset"
                propDisplay6="unset"
                propHeight7="20px"
                propWidth3="20px"
                propPosition5="unset"
                propFontSize3="unset"
                propLetterSpacing3="unset"
                propLineHeight3="unset"
                propFontFamily3="unset"
                propColor4="unset"
                propTextAlign3="unset"
                propDisplay7="flex"
                propMinWidth5="unset"
                propFlexDirection5="row"
              />
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-center text-sm text-gray-900">
            <div className="flex flex-row items-start justify-center gap-[16px] max-w-full mq450:flex-wrap">
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
  );
};

export default FunctionCaller;
