import { useEffect, useState } from "react";
import axios from "axios";
import useSWR from "swr";
import env from "@/config/env";
import { useRouter } from "next/navigation";
import RecruitmentService from "@/services/RecruitmentService";
import { showSuccessToast, showErrorToast } from "@/utils/toaster";

const fetcher = (url?: any) => axios.get(url);

export const useFetchSingleLiveRecruitment = ({
  campaign_id,
  options = {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  },
}: {
  campaign_id?: string;
  options?: {
    revalidateIfStale: boolean;
    revalidateOnFocus: boolean;
    revalidateOnReconnect: boolean;
  };
}) => {
  const { data, error, isLoading, mutate } = useSWR(
    env.BASE_URL.recruitment + "/campaign/" + campaign_id + "/live",
    fetcher,
    options
  );
  const router = useRouter();

  useEffect(() => {
    mutate();
  }, [router]);

  return { loading: isLoading, data: data?.data?.result, error, mutate };
};

export const useCandidateSubmitResponse = () => {
  const [loading, setLoading] = useState(false);

  const submitResponse = async ({
    campaign_live_id,
    data,
    cb,
  }: {
    campaign_live_id: any;
    data?: any;
    cb?: any;
  }) => {
    setLoading(true);
    let success = false;
    try {
      const res = await RecruitmentService.candidateSubmitResponse({
        data,
        campaign_live_id,
      });
      success = true;
      if (typeof cb === "function") cb(res?.data);
      setLoading(false);
    } catch (error: Error | any) {
      showErrorToast({
        message: error?.response?.data?.message || "An error occured!",
      });
      success = false;
      setLoading(false);
    } finally {
    }

    return success;
  };

  return { loading, submitResponse };
};
