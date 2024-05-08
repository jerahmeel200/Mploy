import { toast } from "react-toastify";

const toasterProps: any = {
  position: "top-right",
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "colored",
  style: { fontSize: "15px" },
};

export const showSuccessToast = ({
  message,
  autoClose = 5000,
  position = "top-right",
}: {
  message?: string;
  autoClose?: number;
  position?:
    | "bottom-center"
    | "bottom-left"
    | "bottom-right"
    | "top-center"
    | "top-left"
    | "top-right";
}) => {
  return toast(`🚀 ${message}`, {
    ...toasterProps,
    autoClose,
    position,
  });
};

export const showErrorToast = ({
  message,
  autoClose = 5000,
  position = "top-right",
}: {
  message?: string;
  autoClose?: number;
  position?:
    | "bottom-center"
    | "bottom-left"
    | "bottom-right"
    | "top-center"
    | "top-left"
    | "top-right";
}) => {
  return toast.error(`⚠️  ${message}`, {
    ...toasterProps,
    autoClose,
    position,
  });
};

export const showInfoToast = ({
  message,
  autoClose = 5000,
  position = "top-right",
}: {
  message?: string;
  autoClose?: number;
  position?: string;
}) => {
  return toast(`${message}`, {
    ...toasterProps,
    autoClose,
    position,
  });
};
