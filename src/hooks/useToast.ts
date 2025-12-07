import useToastStore from "@/store/toastStore";

export const useToast = () => {
  const showToast = useToastStore((state: any) => state.addToast);

  return { showToast };
};
