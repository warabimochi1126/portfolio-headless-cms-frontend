"use client";

import { Dispatch, SetStateAction } from "react";
import { FieldValues, UseFieldArrayAppend } from "react-hook-form";

interface linkAddButtonProps {
  append: UseFieldArrayAppend<FieldValues, "productLinks">;
}

export function LinkAddButton({ append }: linkAddButtonProps) {
  return (
    <button
      onClick={() => append("")}
      className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
      type="button"
    >
      <span className="text-xl mr-2">+</span>
      <span>追加する</span>
    </button>
  );
}
