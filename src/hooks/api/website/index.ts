import { useState } from "react";

import WebsiteService from "@/services/WebsiteService";
import { showSuccessToast, showErrorToast } from "@/utils/toaster";

export const useSubmitContactUsForm = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmitContactUsForm = async ({
    data,
    cb,
  }: {
    data?: any;
    cb?: any;
  }) => {
    setLoading(true);
    let success = false;
    try {
      const res = await WebsiteService.submitContactUsForm({
        data,
      });
      success = true;
      if (typeof cb === "function") cb(res?.data);
      setLoading(false);
      showSuccessToast({ message: res?.data?.message });
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

  return { loading, handleSubmitContactUsForm };
};
