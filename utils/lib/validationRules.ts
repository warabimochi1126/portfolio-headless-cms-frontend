import z from "zod";

const domainWhiteList = [
  "https://qiita.com/",
  "https://github.com/",
  "https://www.udemy.com/",
];

export const inputValidationSchema = z.object({
  productName: z.string().min(1, { message: "作品名を入力してください" }),
  overview: z.string().min(1, { message: "概要を入力してください" }),
  mainTechnology: z
    .string()
    .min(1, { message: "メイン技術を入力してください" }),
  productLinks: z
    .array(z.string())
    .refine(
      (inputUrls) =>
        inputUrls.every((inputUrl) => {
          try {
            const parsedUrl = new URL(inputUrl);
            return domainWhiteList.includes(parsedUrl.host);
          } catch {
            return false;
          }
        }),
      {
        message:
          "入力するURLはQiita・GitHub・Udemyのいずれかである必要があります",
      }
    )
    .optional(),
});

export type FormValues = z.infer<typeof inputValidationSchema>;
