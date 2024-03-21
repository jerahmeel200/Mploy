export const filterRecruitmentBasicInfo = ({ recruitment }: { recruitment?: any }) => {
   return {
      recruitment_id: recruitment?.id,
      company_name: recruitment?.company?.company_name,
      job_title: recruitment?.job_title,
      location: recruitment?.location,
      status: recruitment?.status,
      expires_on: recruitment?.expires_on,
      descriptions: recruitment?.recruitment_job_detail?.descriptions,
      credentials: recruitment?.recruitment_job_detail?.credentials,
      display_picture: recruitment?.recruitment_job_detail?.display_picture,
      logo: recruitment?.recruitment_job_detail?.logo,
      application_form_blocks: recruitment?.recruitment_application_form?.blocks,
      default_stages: recruitment?.recruitment_setting?.default_stages,
      selected_stages: recruitment?.recruitment_setting?.selected_stages,
   };
};
