import { useEffect, useState } from "react";
import axios from "axios";
import useSWR from "swr";
import env from "@/config/env";
import { useRouter } from "next/navigation";

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
    env.BASE_URL.recruitment + "/" + campaign_id + "/live",
    fetcher,
    options
  );
  const router = useRouter();

  useEffect(() => {
    mutate();
  }, [router]);

  return { loading: isLoading, data: data?.data?.result, error, mutate };
};
