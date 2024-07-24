import { PiUploadSimpleLight } from "react-icons/pi";

export function SaveDBButton() {
  return (
    <button
      type="submit"
      className="flex items-center px-4 py-2 bg-gray-200 text-gray-700 border border-gray-300 rounded-md hover:bg-gray-300 active:bg-gray-400 transition duration-300"
    >
      <PiUploadSimpleLight />
      <span className="ml-2">DBに保存する</span>
    </button>
  );
}
