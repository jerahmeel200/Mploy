"use client";
import React, { Fragment, useEffect } from "react";
import {
  useFetchSingleLiveRecruitment,
  useCandidateSubmitResponse,
} from "@/hooks/api/recruitment";
import { filterRecruitmentBasicInfo } from "@/hooks/api/recruitment/helpers";
import Button from "@/reuse/Button/Button";
import { motion } from "framer-motion";

import { LoadingOutlined } from "@ant-design/icons";
import Link from "next/link";

import "./styles.css";

import { IBlock, IBlockOption } from "@/data/applicationFormBuilder";
import { Radio, Spin, Space, Popover, Tooltip, Checkbox } from "antd";
import TextField from "@/component/reuseables/TextField/TextField";

import { useFileUpload } from "@/hooks/api/upload/useUploadFIle";
import { showErrorToast } from "@/utils/toaster";
import { isValidEmail } from "@/utils/validateEmail";
import AlertModal from "@/component/reuseables/AlertModal";

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
  const [upolad_names, setupolad_names] = React.useState({});

  const { loading: uploading, handleImageUpload } = useFileUpload();

  const uploadFileToAWS = async ({
    event,
    optionId,
  }: {
    event: React.ChangeEvent<HTMLInputElement>;
    optionId?: string;
  }) => {
    const files = event.target.files;

    try {
      if (files && files?.length > 0) {
        const _selectedFile = files[0];
        const fileSizeInMB = _selectedFile.size / (1024 * 1024);
        if (fileSizeInMB > 5) {
          alert("File size should be 5MB or less.");
        }

        const formData: any = new FormData();
        formData.append("file", _selectedFile);
        const req = await handleImageUpload(formData);

        if (req?.status === 200 && req?.error === false) {
          const returnedUri = req?.data?.data?.Location;

          setupolad_names((old) => ({
            ...old,
            [optionId]: _selectedFile?.name,
          }));

          setresponses((old) => ({
            ...old,
            [optionId]: {
              value: returnedUri,
            },
          }));
        } else {
        }
      }
    } catch (error) {
    } finally {
    }
  };

  const { submitResponse, loading: updating } = useCandidateSubmitResponse();

  const [success, setSuccess] = React.useState(false);
  const [showmodal, setshowmodal] = React.useState("");

  const onSubmit = () => {
    const idsOfAllRequiredFields = [];

    let first_name_id = "";
    let last_name_id = "";
    let email_id = "";
    let phone_id = "";

    if (application_form_blocks?.length) {
      application_form_blocks.map((block) => {
        if (block?.options?.length) {
          block.options.map((option?: IBlockOption) => {
            if (option.required) {
              idsOfAllRequiredFields.unshift(option.optionId);
            }

            if (option?.dbKey === "first_name")
              first_name_id = option?.optionId;
            if (option?.dbKey === "last_name") last_name_id = option?.optionId;
            if (option?.dbKey === "email") email_id = option?.optionId;
            if (option?.dbKey === "phone") phone_id = option?.optionId;
          });
        }
      });
    }

    if (idsOfAllRequiredFields?.length) {
      const idsOfAllRequiredFieldsThatHaveNotBeenFilled: any = [];
      idsOfAllRequiredFields.map((id?: string) => {
        if (
          responses[id]?.value?.trim()?.length ||
          responses[id]?.values?.length
        ) {
        } else {
          idsOfAllRequiredFieldsThatHaveNotBeenFilled.unshift(id);
        }
      });

      const targetElementId = idsOfAllRequiredFieldsThatHaveNotBeenFilled[0];
      if (targetElementId) {
        showErrorToast({
          message: "All required fields must be filled in!",
          position: "top-center",
        });

        const targetElement = document.getElementById(targetElementId);
        targetElement.scrollIntoView({ behavior: "smooth", block: "end" });

        return;
      }
    }

    if (!isValidEmail(responses[email_id]?.value?.trim())) {
      const targetElement = document.getElementById(email_id);
      targetElement.scrollIntoView({ behavior: "smooth", block: "end" });
      return showErrorToast({
        message: "Invalid email. Please double-check and try again.",
        position: "top-center",
      });
    }

    const reqBody = {
      recruitment_id: data?.id,
      first_name: responses[first_name_id]?.value,
      last_name: responses[last_name_id]?.value,
      email: responses[email_id]?.value,
      phone: responses[phone_id]?.value,

      responses,
    };

    submitResponse({
      campaign_live_id: campaign_id,
      data: reqBody,
      cb: (result?: any) => {
        setSuccess(true);
      },
      onError: (errorMsg?: string, showModal?: any) => {
        console.log({ errorMsg, showModal });
        if (showModal) setshowmodal(errorMsg);
      },
    });
  };

  const globalLoading = uploading || updating;
  const disabled = globalLoading;

  if (success)
    return (
      <div className="h-screen bg-white w-full flex-col gap-[32px] flex items-center justify-start">
        <a href="/">
          <img
            src="/logo_blue_transparent.png"
            className="w-[50px] mb-[20px] absolute top-[20px] left-[20px]"
          />
        </a>

        <img
          // src="/complete_task.svg"
          src="/success-rocket.webp"
          className="w-full max-w-[400px]"
        />

        <div>
          <h1 className="text-[#013575] text-[40px] mt-[-30px] font-medium max-w-[800px] text-center">
            Application Success!
          </h1>
          <h2 className="text-gray-600 text-[18px] max-w-[700px] text-center mt-[10px]">
            Your job application for the position of {job_title} has been
            successfully submitted! In the meantime, you can expect a
            confirmation email with more details about the application process.
          </h2>
        </div>
      </div>
    );
  return (
    <>
      <AlertModal
        title="An Error occured!"
        open={showmodal ? true : false}
        message={showmodal}
        handleClose={() => setshowmodal(false)}
      />
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

            <button
              className="text-primary cursor-pointer"
              onClick={() => window.history.back()}>
              Go back
            </button>
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
        <div className="mt-[10px] ">
          <button
            className="text-primary cursor-pointer text-[14px] font-[600] underline"
            onClick={() => window.history.back()}>
            Go back
          </button>
        </div>

        <div
          className="mt-[0px]  mx-auto    
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
                              id={option?.optionId}
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
                                        <label
                                          htmlFor={subOption?.subOptionId}
                                          key={subOption?.subOptionId}
                                          className={
                                            option?.optionType === "yes_no"
                                              ? " cursor-pointer mt-[15px] flex gap-[5px] items-center rounded-[4px] border border-[#E0E0E0] w-[170px] h-[48px] px-[20px]"
                                              : "cursor-pointer  mt-[15px] flex gap-[5px] items-center "
                                          }>
                                          <Radio
                                            id={subOption?.subOptionId}
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
                                          <span>{subOption?.label}</span>
                                        </label>
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

                                  <p className="text-[13px] leading-[18px] text-[#9795ab]">
                                    (Select all that apply)
                                  </p>

                                  {option?.subOptions.map((subOption) => {
                                    const checked =
                                      responses[option?.optionId]?.values
                                        ?.length &&
                                      responses[option?.optionId]?.values?.some(
                                        (item) =>
                                          item === subOption?.subOptionId
                                      )
                                        ? true
                                        : false;

                                    const itemsThatHaveBeenChecked =
                                      typeof responses[option?.optionId]
                                        ?.values === "object" &&
                                      responses[option?.optionId]?.values
                                        ?.length
                                        ? responses[option?.optionId]?.values
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
                                                  values:
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
                                    className="w-full mt-[10px]
                                                          h-[150px] flex-col
                                                             mx-auto  bg-gray-200 gap-[10px] flex items-center justify-center">
                                    {!responses[option?.optionId] ? null : (
                                      <div>
                                        <label>
                                          {upolad_names[option?.optionId]}
                                        </label>
                                      </div>
                                    )}

                                    {!uploading ? (
                                      <>
                                        <div className=" gap-[10px] flex items-center justify-center">
                                          <img
                                            src="/add-circle-blue.png"
                                            className="w-[20px]"
                                          />
                                          <label
                                            htmlFor="display_picture_div"
                                            className="cursor-pointer">
                                            <span className="text-primary">
                                              {responses[option?.optionId]
                                                ? "Change upload"
                                                : "Click to upload"}
                                            </span>
                                          </label>

                                          <input
                                            type="file"
                                            className=" hidden"
                                            id="display_picture_div"
                                            accept="image/jpeg, image/jpg, image/png, .pdf, .docx"
                                            onChange={(e: any) => {
                                              uploadFileToAWS({
                                                event: e,
                                                optionId: option?.optionId,
                                              });
                                              e.target.value = null;
                                            }}
                                          />
                                        </div>
                                      </>
                                    ) : (
                                      <Spin
                                        indicator={
                                          <LoadingOutlined
                                            style={{ fontSize: 24 }}
                                            spin
                                          />
                                        }
                                      />
                                    )}
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
          <Button
            title="Submit Application"
            width="100%"
            disabled={disabled}
            loading={globalLoading}
            onClick={onSubmit}
          />
        </div>
      </motion.main>
    </>
  );
}

export default RecruitmentApplicationFormMain;
