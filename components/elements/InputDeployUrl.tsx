import { InputField } from "./InputField";

export function InputDeployUrl() {
  return (
    <div className="space-y-1 mt-3">
      <label htmlFor="deploy-url" className="font-bold text-xl">
        デプロイ先URL
      </label>
      <InputField
        type="url"
        id="deploy-url"
        placeholder="https://warabimochi1126.net/"
        registerName="deployUrl"
      />
    </div>
  );
}
