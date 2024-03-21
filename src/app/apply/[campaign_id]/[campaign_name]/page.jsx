import React from "react";
import RecruitmentApplyCampaignMain from "@/component/pages/apply/campaign";

export default async function Page({ params: { campaign_id } }) {
  return (
    <>
      <RecruitmentApplyCampaignMain campaign_id={campaign_id} />
    </>
  );
}
