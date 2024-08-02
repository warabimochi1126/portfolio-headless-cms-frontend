import { useFormContext } from "react-hook-form";
import { InputField } from "./InputField";
import { ErrorField } from "./ErrorField";

export function InputOverView() {
  const {
    formState: { errors },
  } = useFormContext();

  return (
    <div className="space-y-1">
      <label htmlFor="overview" className="font-bold text-xl required">
        概要
      </label>
      {errors.overview && (
        <ErrorField errorMsg={errors.overview?.message as string} />
      )}

      <InputField
        type="text"
        id="overview"
        placeholder="カンマで区切ると改行して表示されます。"
        registerName="overview"
      />
    </div>
  );
}
