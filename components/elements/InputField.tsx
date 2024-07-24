"use client";

import { useFormContext } from "react-hook-form";
import { IoTrashBin } from "react-icons/io5";

interface inputFieldProps {
  type: string;
  id?: string;
  placeholder: string;
  registerName: string;
  remove?: () => void;
}

export function InputField({
  type,
  id,
  placeholder,
  registerName,
  remove,
}: inputFieldProps) {
  const { register } = useFormContext();

  return (
    <div className="relative flex items-center w-full">
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        className="rounded-md border px-3 py-2 text-sm shadow-sm transition-colors focus:outline-none focus:ring-1 w-full"
        {...register(registerName)}
      />
      {remove && (
        <div
          className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
          onClick={remove}
        >
          <IoTrashBin />
        </div>
      )}
    </div>
  );
}
