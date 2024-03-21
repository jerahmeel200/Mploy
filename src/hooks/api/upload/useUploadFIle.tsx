import axios from "axios";
import { useState } from "react";
import { showErrorToast } from "@/utils/toaster";

import env from "@/config/env";

export const useFileUpload = () => {
  const [loading, setLoading] = useState(false);

  const [uploadPercentage, setUploadPercentage] = useState(0);
  const onUploadProgress = (progressEvent: any) => {
    const percentage = Math.round(
      (progressEvent.loaded * 100) / progressEvent.total
    );
    setUploadPercentage(percentage);
  };

  const handleImageUpload = async (data: FormData, cb = () => {}) => {
    let response;
    try {
      axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
      setLoading(true);
      const request = await axios.post(env.BASE_URL.upload + "/file", data, {
        headers: {
          Authorization:
            "Bearer " +
            "VSS8ZcPGwplm0wLoXrmb3A8648w3T4GG-ts4Ee31l9iGJvuTWBAwKtiweMf4CjNmy-QQva6zKtLyHsYrRPeXoOs5a3LTY1zQDp",
        },
        onUploadProgress,
      });
      response = request.data;
      setLoading(false);
      cb();
    } catch (e: any) {
      response = {
        error: true,
        message:
          e?.response?.status === 413
            ? "File too large"
            : e?.response?.data?.message || "An error occured",
        status: e?.response?.status || 400,
        data: e?.response?.data?.data || undefined,
      };
      showErrorToast({
        message:
          "There seems to be a network error, the file is too large or the file format is not accepted.",
      });
    } finally {
      axios.defaults.headers.post["Content-Type"] = "application/json";
      setLoading(false);
    }
    return response;
  };
  return { handleImageUpload, loading, uploadPercentage };
};
