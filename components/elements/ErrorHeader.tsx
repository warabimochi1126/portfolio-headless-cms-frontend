import { ErrorIcon } from "./ErrorIcon";

export function ErrorHeader() {
  return (
    <div className="flex items-center">
      <ErrorIcon />
      <p className="text-red-700 font-medium">エラー</p>
    </div>
  );
}
