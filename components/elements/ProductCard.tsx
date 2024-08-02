"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Modal from "react-modal";
import { z } from "zod";

import { ProductCardProps } from "@/types/ProductCardProps";
import { ImageComponent } from "./ImageComponent";
import { OverViewDescription } from "./OverViewDescription";
import { DetailImage } from "./DetailImage";
import { DetailProductName } from "./DetailProductName";
import { DetailOverView } from "./DetailOverView";
import { DetailMainTechnology } from "./DetailMainTechnology";
import { DetailProductLink } from "./DetailProductLink";
import { ImageDragAndDropZone } from "./ImageDragAndDropZone";
import { InputDeployUrl } from "./InputDeployUrl";
import { InputProductName } from "./InputProductName";
import { InputOverView } from "./InputOverView";
import { InputMainTechnology } from "./InputMainTechnology";
import { InputProductLink } from "./InputProductLink";
import { FormProvider, useForm } from "react-hook-form";
import { modalStyle } from "@/styles/modalStyle";
import { zodResolver } from "@hookform/resolvers/zod";
import { inputValidationSchema } from "@/utils/lib/validationRules";

Modal.setAppElement(".App");

export function ProductCard({
  id,
  r2uuid,
  imageData,
  altStr,
  title,
  overViewDescription,
  deployUrl,
  overViewStrArray,
  mainTechStrArray,
  subTechStrArray,
  productLinks
}: ProductCardProps) {
  const [modalIsOpen, setIsOpen] = useState(false);
  const methods = useForm({
    // resolver: zodResolver(inputValidationSchema),
    defaultValues: {
      r2uuid,
      imageSrcPath: imageData,
      imageFileData: "",
      deployUrl: deployUrl,
      productName: title,
      overview: overViewStrArray.toString(),
      mainTechnology: mainTechStrArray.toString(),
      subTechnology: subTechStrArray?.toString(),
      productLinks: productLinks?.toString(),
    },
  });

  const onSubmit = async (data: any) => {  
    const formData = new FormData();

    console.log(data);


    formData.append("id", id.toString());
    formData.append("r2uuid", r2uuid);
    formData.append("imageFIleData", data.imageFileData ? data.imageFIleData : "");
    formData.append("deployUrl", data.deployUrl ? data.imageFIleData : "");
    formData.append("productName", data.productName);
    formData.append("overview", data.overview);
    formData.append("mainTechnology", data.mainTechnology);
    formData.append("subTechnology", data.subTechnology ? data.subTechnology : "");
    formData.append("productLinks", data.productLinks);

    const response = await fetch("/api/products", {
      method: "PUT",
      body: formData
    })
  } 

  return (
    <div className="App">
      <motion.div
        className="w-56 h-56 border-2 rounded-2xl mx-auto"
        whileHover={{ scale: 1.2, transition: { duration: 0.2 } }}
        onClick={() => setIsOpen(true)}
      >
        <ImageComponent imageData={imageData} altStr={altStr} />
        <OverViewDescription
          title={title}
          overViewDescription={overViewDescription}
        />
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
