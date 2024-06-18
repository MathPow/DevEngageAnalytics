import Icon from "@/components/Icon";
import { toast } from "sonner";

export function toastSuccess(message: string) {
  toast.success(message, {
    icon: <Icon className="mr-1 mt-1" name={"check-circle"} size={20} color="#22c55e" />,
  });
}

export function toastError(message: string) {
  toast.error(message, {
    icon: <Icon className="mr-1 mt-1" name={"error"} size={20} color="#ef4444" />,
  });
}

export function toastWarning(message: string) {
  toast.warning(message, {
    icon: <Icon className="mr-1 mt-1" name={"warning"} size={20} color="#eab308" />,
  });
}

export function toastInformation(message: string) {
  toast.info(message, {
    icon: <Icon className="mr-1 mt-1" name={"info"} size={20} color="#3b82f6" />,
  });
}
