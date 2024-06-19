import { z } from "zod";

export const formSchema = z.object({
  githubUsername: z
    .string({ required_error: "error for githubUsername" })
    .min(1, { message: "error for githubUsername; > 1" })
    .max(39, { message: "error for githubUsername; < 39" }),
});

export interface FormBusinessCardDev {
  githubUsername: string;
}

export const defaultValues: FormBusinessCardDev = {
  githubUsername: "",
};
