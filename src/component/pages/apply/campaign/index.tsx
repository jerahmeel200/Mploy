"use client";
import React, { useEffect } from "react";
import { useFetchSingleLiveRecruitment } from "@/hooks/api/recruitment";
import { filterRecruitmentBasicInfo } from "@/hooks/api/recruitment/helpers";
import Button from "@/reuse/Button/Button";
import { motion } from "framer-motion";

import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import Link from "next/link";

import "./styles.css";

function RecruitmentApplyCampaignMain({ campaign_id }) {
  const { data, loading, error } = useFetchSingleLiveRecruitment({
    campaign_id,
  });

  const [preload, setPreload] = React.useState(true);

  useEffect(() => {
    if (data) {
      setPreload(false);
    }
  }, [data, error]);
  console.log({ preload });
  console.log({ preload });
  const { logo, display_picture, location, descriptions } =
    filterRecruitmentBasicInfo({ recruitment: data }) || {};
  const globalLoad = loading || preload;

  const errorMsg = error?.response?.data?.message || "An error occured";

  return (
    <div>
      <motion.div
        initial={{}}
        variants={{
          hide: {
            left: "-140%",
          },
        }}
        animate={!globalLoad ? "hide" : undefined}
        className="w-screen h-screen fixed bg-white   top-0 left-0 flex flex-col items-center justify-center z-10">
        {error ? (
          <div className="flex flex-col items-center justify-center gap-[32px]">
            <img src="/towing.svg" className="w-[400px]" />
            <h1 className="text-[23px] max-w-[800px] text-center">
              {errorMsg}
            </h1>

            <a
              className="text-primary cursor-pointer"
              onClick={() => window.history.back()}>
              Go backdd
            </a>
          </div>
        ) : (
          <>
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
        <div className="w-full max-w-[1280px] mx-auto flex flex-col gap-[32px] ">
          <div
            className="mt-[40px]  mx-auto    
             w-[clamp(150px,calc(150/1440*100vw),400px)]
             h-[clamp(50px,calc(50/1440*100vw),400px)]
            bg-gray-300 flex items-center justify-center">
            {logo ? (
              <img src={logo} className="w-full h-full object-contain" />
            ) : (
              <small className="text-primary">Company Logo</small>
            )}
          </div>
          <div
            className="w-full 
                     h-[clamp(400px,calc(280/1440*100vw),400px)]
                     mx-auto  bg-gray-300 flex items-center justify-center">
            {display_picture ? (
              <img
                src={display_picture}
                className="w-full h-full object-cover"
              />
            ) : (
              <small className="text-primary">Recruitment Banner</small>
            )}
          </div>

          <div className="mt-[20px] ">
            <p className="text-[clamp(16px,calc(20/1440*100vw),20px)] text-[#333333] font-normal ">
              We are looking for a...
            </p>
            <h2 className="text-[clamp(30px,calc(40/1440*100vw),40px)] font-bold mt-[20px]">
              {data?.job_title}
            </h2>

            <div className="flex flex-wrap gap-x-[10px] ">
              <div className="flex items-center gap-[5px]">
                <img className="w-[20px] h-[20px]" src="/location.png" />
                <span className="text-[#333333] text-[clamp(14px,calc(16/1440*100vw),16px)] mt-[10px]">
                  {location}
                </span>
              </div>
            </div>

            <Link href={data?.live_link + "/application-form"}>
              <Button title="Start" width="130px" mt="20px" />
            </Link>
          </div>

          <div className="flex flex-col gap-[30px] mt-[30px]">
            {!descriptions?.length ? (
              <div
                className="w-full 
                     h-[100px]
                     mx-auto  bg-gray-200 flex items-center justify-center">
                <small className="text-red-500 text-[16px]">
                  No job description has been added!
                </small>
              </div>
            ) : (
              descriptions?.map((desc) => {
                return (
                  <div key={desc.id}>
                    <h3 className=" text-[#000000] text-[clamp(18px,calc(24/1440*100vw),24px)] font-bold">
                      {desc.title}
                    </h3>

                    <div
                      dangerouslySetInnerHTML={{ __html: desc?.content || "" }}
                      className={"description_html_content"}
                    />
                  </div>
                );
              })
            )}
          </div>
        </div>
      </motion.main>
    </div>
  );
}

export default RecruitmentApplyCampaignMain;
