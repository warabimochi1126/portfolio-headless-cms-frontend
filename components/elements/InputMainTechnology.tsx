import { InputField } from "./InputField";

export function InputMainTechnology() {
  return (
    <div className="space-y-1">
      <label htmlFor="technology" className="font-bold text-xl required">
        主な使用技術
      </label>
      <div className="space-y-2">
        <InputField
          type="text"
          id="technology"
          placeholder="メイン技術:カンマで区切ると別の技術スタックとして認識されます。"
          registerName="mainTechnology"
        />
        <InputField
          type="text"
          id="technology"
          placeholder="サブ技術:スペースで区切ると他の技術スタックとして認識されます。"
          registerName="subTechnology"
        />
      </div>
    </div>
  );
}
