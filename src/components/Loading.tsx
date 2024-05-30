import "@/styles/loading.css";

export default function Loading() {
  return (
    <div className="lds-ellipsis text-_lightGrayText/50 dark:text-_darkGrayText/50">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
