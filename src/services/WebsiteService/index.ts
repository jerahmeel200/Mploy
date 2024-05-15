import axios from "axios";
import env from "@/config/env";

class RecruitmentService {
  submitContactUsForm({ data }: { data?: any }) {
    return axios.post(`${env.BASE_URL.website}/contact-us/submit`, data);
  }
}

export default new RecruitmentService();
