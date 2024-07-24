import { InputField } from "./InputField";

export function InputOverView() {
  return (
    <div className="space-y-1">
      <label htmlFor="overview" className="font-bold text-xl required">
        概要
      </label>
      <InputField
        type="text"
        id="overview"
        placeholder="スペースで区切ると改行して表示されます。"
        registerName="overview"
      />
    </div>
  );
}
