import { useState } from "react";
import { InputField } from "./InputField";
import { SaveDBButton } from "./SaveDBButton";
import { LinkAddButton } from "./LinkAddButton";
import { useFieldArray, useFormContext } from "react-hook-form";

export function InputProductLink() {
  const { control } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    name: "productLinks",
    control,
  });

  return (
    <div className="space-y-2">
      <p className="font-bold text-xl">作品関連リンク</p>
      {fields.map((field, index) => (
        <InputField
          key={field.id}
          type="url"
          placeholder="入力されたURLのドメインによってアイコンが決定されます。"
          registerName={`productLinks.${index}`}
          remove={() => remove(index)}
        />
      ))}

      <div className="flex space-x-2">
        <LinkAddButton append={append} />
        <SaveDBButton />
      </div>
    </div>
  );
}
