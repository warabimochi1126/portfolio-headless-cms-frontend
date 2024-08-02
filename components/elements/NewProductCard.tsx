"use client";

import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { motion } from "framer-motion";
import Modal from "react-modal";
import { modalStyle } from "@/styles/modalStyle";
import { ImageDragAndDropZone } from "./ImageDragAndDropZone";
import { InputDeployUrl } from "./InputDeployUrl";
import { InputProductName } from "./InputProductName";
import { InputOverView } from "./InputOverView";
import { InputMainTechnology } from "./InputMainTechnology";
import { InputProductLink } from "./InputProductLink";
import fileIcon from "@/public/fileIcon.svg";
import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod";
import { inputValidationSchema } from "@/utils/lib/validationRules";

export function NewProductCard() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const methods = useForm({
    // resolver: zodResolver(inputValidationSchema),
    defaultValues: {
      imageSrcPath: "",
      imageFileData: "",
      deployUrl: "",
      productName: "",
      overview: "",
      mainTechnology: "",
      subTechnology: "",
      productLinks: [],
    },
  });

  const onSubmit = async (data: any) => {
    console.log(data);

    const formData = new FormData();
    formData.append("imageFIleData", data.imageFileData);
    formData.append("deployUrl", data.deployUrl);
    formData.append("productName", data.productName);
    formData.append("overview", data.overview);
    formData.append("mainTechnology", data.mainTechnology);
    formData.append("subTechnology", data.subTechnology);
    formData.append("productLinks", data.productLinks);

    const response = await fetch("/api/products", {
      method: "POST",
      body: formData
    });
  };

  return (
    <div className="App">
      <motion.div
        className="w-56 h-56 flex flex-col items-center justify-center bg-gray-100 rounded-lg shadow-lg"
        whileHover={{ scale: 1.2, transition: { duration: 0.2 } }}
        onClick={() => setIsOpen(true)}
      >
        <div className="flex flex-col items-center">
          <Image
            src={fileIcon}
            alt="ファイルアイコン"
            className="w-16 h-16 text-gray-500 mb-4"
          />
          <p className="text-sm font-medium text-gray-700 text-center px-2">
            新しい作品を登録する
          </p>
        </div>
      </motion.div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setIsOpen(false)}
        style={modalStyle}
      >
        <FormProvider {...methods}>
          <ImageDragAndDropZone />
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <div className="space-y-2">
              <InputDeployUrl />
              <InputProductName />
              <InputOverView />
              <InputMainTechnology />
              <InputProductLink />
            </div>
          </form>
        </FormProvider>
      </Modal>
    </div>
  );
}
