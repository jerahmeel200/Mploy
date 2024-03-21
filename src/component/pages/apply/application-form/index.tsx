"use client";
import React, { Fragment, useEffect } from "react";
import { useFetchSingleLiveRecruitment } from "@/hooks/api/recruitment";
import { filterRecruitmentBasicInfo } from "@/hooks/api/helpers";
import Button from "@/reuse/Button/Button";
import { motion } from "framer-motion";

import { LoadingOutlined } from "@ant-design/icons";
import Link from "next/link";

import "./styles.css";

import { IBlock, IBlockOption } from "@/data/applicationFormBuilder";
import { Radio, Spin, Space, Popover, Tooltip, Checkbox } from "antd";
import TextField from "@/component/reuseables/TextField/TextField";

const emptyMsg = (
  <div
    className="w-full 
h-[100px]
mx-auto  bg-gray-200 flex items-center justify-center">
    <small className="text-red-500 text-[16px]">
      No application form questions have been created!
    </small>
  </div>
);

const getTextFIeldType = (optionType?: string) => {
  if (optionType === "textfield" || optionType === "open_text") return "text";
  if (optionType === "email") return "email";
  if (optionType === "time") return "time";
  if (optionType === "date") return "date";
  if (optionType === "date_time") return "datetime-local";
  return "text";
};

function RecruitmentApplicationFormMain({ campaign_id }) {
  const { data, loading, error } = useFetchSingleLiveRecruitment({
    campaign_id,
  });

  const [preload, setPreload] = React.useState(true);

  useEffect(() => {
    if (data) {
      setPreload(false);
    }
  }, [data, error]);

  const {
    logo,
    job_title,
    application_form_blocks = [],
  } = filterRecruitmentBasicInfo({ recruitment: data }) || {};
  const globalLoad = loading || preload;
  const errorMsg = error?.response?.data?.message || "An error occured";

  const [responses, setresponses] = React.useState({});
  console.log({ responses, application_form_blocks });

  const onSUbmit = () => {
    const reqBody = {
      first_name: responses["first_name"],
      last_name: responses["last_name"],
      email: responses["email"],
      phone: responses["phone"],

      responses: {},
    };
  };

  return (
    <>
      <motion.div
        initial={{}}
        variants={{
          hide: {
            left: "-140%",
          },
        }}
        animate={!globalLoad ? "hide" : undefined}
        className="w-screen h-screen fixed  top-0 left-0 bg-white flex flex-col items-center justify-center">
        {error ? (
          <div className="flex flex-col items-center justify-center gap-[32px]">
            <img src="/towing.svg" className="w-[400px]" />
            <h1 className="text-[23px] max-w-[800px] text-center">
              {errorMsg}
            </h1>

            <Link href="/" className="text-primary cursor-pointer">
              <button>Go to homepage</button>
            </Link>
          </div>
        ) : (
          <>
            {" "}
            <img
              src="/logo_blue_transparent.png"
              className="w-[80px] mb-[20px]"
            />
            <Spin
              indicator={<LoadingOutlined style={{ fontSize: 30 }} spin />}
            />
          </>
        )}
      </motion.div>

      <motion.main
        className="px-[20px] sm:px-[30px] pb-[30px]"
        initial={{ opacity: 0 }}
        variants={{
          show: {
            opacity: 1,
            transition: {
              delay: 0.2,
            },
          },
        }}
        animate={!globalLoad ? "show" : undefined}>
        <div
          className="mt-[40px]  mx-auto    
           w-[clamp(150px,calc(150/1440*100vw),400px)]
           h-[clamp(50px,calc(50/1440*100vw),400px)]
          bg-gray-200 flex items-center justify-center">
          {logo ? (
            <img src={logo} className="w-full h-full object-contain" />
          ) : (
            <small className="text-primary">Company Logo</small>
          )}
        </div>

        <div className="mt-[70px] mb-[40px]">
          <h2 className="text-center text-[clamp(16px,calc(18/1440*100vw),18px)] font-medium ">
            {job_title}
          </h2>
          <h2 className="text-center text-[clamp(18px,calc(24/1440*100vw),24px)] font-bold mt-[10px]">
            Apply
          </h2>
        </div>

        <div
          className="w-full max-w-[1440px] mx-auto flex flex-col gap-[32px] bg-white 
          pb-[70px] pt-[50px]
          px-[clamp(16px,calc(100/1440*100vw),100px)]
           ">
          {application_form_blocks?.length ? (
            <>
              {application_form_blocks.every(
                (block: IBlock) => !block?.options?.length
              )
                ? emptyMsg
                : application_form_blocks.map((block: IBlock) => {
                    const options: IBlockOption[] = block?.options || [];

                    return (
                      <div
                        key={block.id}
                        className="mb-[20px] flex flex-row flex-wrap justify-between">
                        {options.map((option) => {
                          return (
                            <div
                              className="mb-[20px] flex flex-row "
                              key={option?.optionId}
                              style={{
                                flexBasis: option?.fullWidth
                                  ? "100%"
                                  : "calc(49% - 10px)",
                              }}>
                              {option.optionType === "heading" ? (
                                <h2 className="w-full text-[clamp(18px,calc(24/1440*100vw),24px)] text-[#0B1A3E] font-medium mb-[10px] mt-[20px]">
                                  {option.label}
                                </h2>
                              ) : null}

                              {option.optionType === "yes_no" ||
                              option.optionType === "select_one" ? (
                                <div className="mb-[20px]">
                                  {option?.label?.length ? (
                                    <p className="text-[clamp(14px,calc(16/1440*100vw),16px)] text-[#1D1D1D] font-medium ">
                                      {option.label}
                                      {!option?.required ? null : (
                                        <span
                                          style={{
                                            color: "#EB5757",
                                            fontSize: 18,
                                          }}>
                                          {" "}
                                          *
                                        </span>
                                      )}
                                    </p>
                                  ) : null}

                                  <div
                                    className={
                                      option?.optionType === "yes_no"
                                        ? "flex items-center gap-[30px]"
                                        : undefined
                                    }>
                                    {option?.subOptions.map((subOption) => {
                                      return (
                                        <div
                                          key={subOption?.subOptionId}
                                          className={
                                            option?.optionType === "yes_no"
                                              ? "mt-[15px] flex gap-[5px] items-center rounded-[4px] border border-[#E0E0E0] w-[170px] h-[48px] px-[20px]"
                                              : " mt-[15px] flex gap-[5px] items-center "
                                          }>
                                          <Radio
                                            style={{ fontSize: 12 }}
                                            checked={
                                              responses[option?.optionId]
                                                ?.value ===
                                              subOption?.subOptionId
                                            }
                                            onClick={() => {
                                              setresponses((old) => ({
                                                ...old,
                                                [option?.optionId]: {
                                                  value: subOption?.subOptionId,
                                                },
                                              }));
                                            }}
                                          />
                                          <label>{subOption?.label}</label>
                                        </div>
                                      );
                                    })}
                                  </div>
                                </div>
                              ) : null}

                              {option.optionType === "description" ? (
                                <p className="text-[clamp(14px,calc(16/1440*100vw),16px)] text-[#1D1D1D]">
                                  {option.label}
                                </p>
                              ) : null}
                              {option.optionType === "textfield" ||
                              option.optionType === "email" ||
                              option.optionType === "open_text" ||
                              option.optionType === "date" ||
                              option.optionType === "time" ||
                              option.optionType === "date_time" ? (
                                <div className="w-full">
                                  <TextField
                                    required={option?.required}
                                    type={getTextFIeldType(option?.optionType)}
                                    label={option?.inputLabel}
                                    placeholder={option?.inputPlaceholder}
                                    mb={"0px"}
                                    mt={"0px"}
                                    width="100%"
                                    maxWidth="100%"
                                    value={responses[option?.optionId]?.value}
                                    onChange={(e) =>
                                      setresponses((old) => ({
                                        ...old,
                                        [option?.optionId]: {
                                          value: e?.target?.value,
                                        },
                                      }))
                                    }
                                    textarea={option.optionType === "open_text"}
                                    customLabel={
                                      <span className="text-[clamp(14px,calc(16/1440*100vw),16px)] text-[#1D1D1D] font-medium">
                                        {option.inputLabel}{" "}
                                      </span>
                                    }
                                  />
                                </div>
                              ) : null}

                              {option.optionType === "multiple_choice" ? (
                                <div className="mb-[20px]">
                                  {option?.label?.length ? (
                                    <p className="text-[clamp(14px,calc(16/1440*100vw),16px)] text-[#1D1D1D] ">
                                      {option.label}
                                    </p>
                                  ) : null}

                                  <p className="text-[13px] leading-[18px] text-[#9795ab]">
                                    (Select all that apply)
                                  </p>

                                  {option?.subOptions.map((subOption) => {
                                    const checked =
                                      responses[option?.optionId]?.value
                                        ?.length &&
                                      responses[option?.optionId]?.value?.some(
                                        (item) =>
                                          item === subOption?.subOptionId
                                      )
                                        ? true
                                        : false;

                                    const itemsThatHaveBeenChecked =
                                      typeof responses[option?.optionId]
                                        ?.value === "object" &&
                                      responses[option?.optionId]?.value?.length
                                        ? responses[option?.optionId]?.value
                                        : [];

                                    return (
                                      <div
                                        key={subOption?.subOptionId}
                                        className=" mt-[15px] flex gap-[5px] items-center ">
                                        <Checkbox
                                          style={{
                                            fontSize: 12,
                                            marginRight: 5,
                                          }}
                                          checked={checked}
                                          onClick={() => {
                                            setresponses((old) => {
                                              return {
                                                ...old,
                                                [option?.optionId]: {
                                                  value:
                                                    itemsThatHaveBeenChecked?.length
                                                      ? checked
                                                        ? itemsThatHaveBeenChecked.filter(
                                                            (item) =>
                                                              item !==
                                                              subOption?.subOptionId
                                                          )
                                                        : [
                                                            ...itemsThatHaveBeenChecked,
                                                            subOption?.subOptionId,
                                                          ]
                                                      : [
                                                          subOption?.subOptionId,
                                                        ],
                                                },
                                              };
                                            });
                                          }}
                                        />
                                        <label>{subOption?.label}</label>
                                      </div>
                                    );
                                  })}
                                </div>
                              ) : null}

                              {option.optionType === "file_upload" ? (
                                <div className="w-full mb-[20px]">
                                  <label>{option?.label}</label>
                                  <div
                                    className="w-full mt-[10px]
                                                          h-[150px]
                                                             mx-auto  bg-gray-200 gap-[10px] flex items-center justify-center">
                                    <img
                                      src="/add-circle-blue.png"
                                      className="w-[20px]"
                                    />
                                    <label
                                      htmlFor="display_picture_div"
                                      className="cursor-pointer">
                                      <span className="text-primary">
                                        Click to upload
                                      </span>
                                    </label>

                                    <input
                                      type="file"
                                      className=" hidden"
                                      id="display_picture_div"
                                      accept="pdf/*"
                                    />
                                  </div>
                                </div>
                              ) : null}
                            </div>
                          );
                        })}
                      </div>
                    );
                  })}
            </>
          ) : (
            emptyMsg
          )}
          <Button title="Submit Application" width="100%" disabled />
        </div>
      </motion.main>
    </>
  );
}

export default RecruitmentApplicationFormMain;
