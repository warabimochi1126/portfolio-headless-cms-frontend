import { InputField } from "./InputField";

export function InputProductName() {
  return (
    <div className="space-y-1">
      <label htmlFor="product-name" className="font-bold text-xl required">
        作品名
      </label>
      <InputField
        type="text"
        id="product-name"
        placeholder="例)EnvHub"
        registerName="productName"
      />
    </div>
  );
}
