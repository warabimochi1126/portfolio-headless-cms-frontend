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

Modal.setAppElement(".App");

export function ProductCard({
  imageData,
  altStr,
  title,
  overViewDescription,
  deployUrl,
  overViewStrArray,
  mainTechStrArray,
  subTechStrArray,
}: ProductCardProps) {
  const [modalIsOpen, setIsOpen] = useState(false);
  const methods = useForm({
    defaultValues: {
      imageSrcPath: imageData,
      deployUrl: deployUrl,
      productName: title,
      overview: overViewStrArray,
      mainTechnology: mainTechStrArray,
      subTechnology: subTechStrArray,
      productLinks: [
        "https://qiita.com/warabimochi_26/items/0c86ea1e6dfb84fb1c4a",
        "https://github.com/warabimochi1126/EnvHub",
      ],
    },
  });

  const onSubmit = (data: any) => console.log(data);

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
