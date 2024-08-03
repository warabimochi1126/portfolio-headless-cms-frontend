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
        placeholder="カンマで区切ると改行して表示され、一つ目はカードの作品名の下に描画されます。 例)個人開発,.envをGitHubリポジトリに結び付けて共有・保存できるWebアプリケーションです。,個人開発です。"
        registerName="overview"
      />
    </div>
  );
}
