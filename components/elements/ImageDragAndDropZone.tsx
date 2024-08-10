"use client";
import Image from "next/image";
import { useDropzone } from "react-dropzone";
import { useFormContext } from "react-hook-form";
import { toast } from "react-toastify";


export function ImageDragAndDropZone() {
  const { setValue, getValues } = useFormContext();

  const onDrop = (files: File[]) => {
    if (files.length !== 1) {
      toast.error("画像は一つしかアップロード出来ません。", {
        theme: "colored",
        autoClose: 2000,
      });
      return;
    }

    const droppedImage = files[0];

    // RHF側で一元管理する
    // 本来はサーバ側に処理を投げて、画像保存 + パスをDBに保存
    const imageUrl = URL.createObjectURL(droppedImage);
    setValue("imageSrcPath", imageUrl);
    console.log(droppedImage);
    setValue("imageFileData", droppedImage);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, 
    accept: {
      "image/*": []
    }});


  const imageSrcPath = getValues("imageSrcPath");

  return (
    <>
      <div
        {...getRootProps()}
        className={
          isDragActive
            ? "border-2 border-dotted rounded-lg border-red-400 h-3/6"
            : "border-2 border-dotted rounded-lg border-gray-300 h-3/6"
        }
      >
        {imageSrcPath && (
          <Image
            src={imageSrcPath}
            alt="プレビュー画像"
            width={9999}
            height={9999}
            className="h-full object-contain"
          />
        )}
        <input {...getInputProps()} />
        {!imageSrcPath && (
          <p
            className={
              isDragActive
                ? "text-gray-600 flex justify-center items-center h-full text-center"
                : "text-gray-400 flex justify-center items-center h-full text-center"
            }
          >
            ここにアップロードしたい画像をドラッグ&ドロップしてください。
          </p>
        )}
      </div>
    </>
  );
}
