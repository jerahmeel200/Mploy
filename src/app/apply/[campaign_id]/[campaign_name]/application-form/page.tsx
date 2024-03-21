import React from "react";
import RecruitmentApplicationFormMain from "@/component/pages/apply/application-form";

export default async function Page({ params: { campaign_id } }) {
  return (
    <>
      <RecruitmentApplicationFormMain campaign_id={campaign_id} />
    </>
  );
}
