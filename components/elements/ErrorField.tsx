import { ErrorHeader } from "./ErrorHeader";

interface ErrorFieldProps {
  errorMsg: string;
}

export function ErrorField({ errorMsg }: ErrorFieldProps) {
  return (
    <div className="bg-red-50 border-l-4 border-red-500 p-3 mb-3 text-sm">
      <ErrorHeader />
      <p className="text-red-600 mt-1">{errorMsg}</p>
    </div>
  );
}
