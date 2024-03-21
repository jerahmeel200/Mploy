import axios from "axios";
import env from "@/config/env";

class RecruitmentService {
  candidateSubmitResponse({
    data,
    campaign_live_id,
  }: {
    data?: any;
    campaign_live_id: string;
  }) {
    return axios.post(
      `${env.BASE_URL.recruitment}/campaign/${campaign_live_id}/candidate/submit`,
      data
    );
  }
}

export default new RecruitmentService();
