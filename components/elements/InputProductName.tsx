import { InputField } from "./InputField";
import { ErrorField } from "./ErrorField";
import { useFormContext } from "react-hook-form";

export function InputProductName() {
  const {
    formState: { errors },
  } = useFormContext();

  return (
    <div className="space-y-1">
      <label htmlFor="product-name" className="font-bold text-xl required">
        作品名
      </label>
      {errors.productName && (
        <ErrorField errorMsg={errors.productName?.message as string} />
      )}
      <InputField
        type="text"
        id="product-name"
        placeholder="例)EnvHub"
        registerName="productName"
      />
    </div>
  );
}
