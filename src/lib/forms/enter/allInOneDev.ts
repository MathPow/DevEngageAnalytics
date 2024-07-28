import { z } from "zod";

export const formSchema = z.object({
  githubUsername: z
    .string({ required_error: "error for githubUsername" })
    .min(1, { message: "error for githubUsername; > 1" })
    .max(39, { message: "error for githubUsername; < 39" }),
  linkedinUsername: z
    .string({ required_error: "error for githubUsername" })
    .min(1, { message: "error for githubUsername; > 1" })
    .max(39, { message: "error for githubUsername; < 39" }),
  gitlabUsername: z
    .string({ required_error: "error for githubUsername" })
    .min(1, { message: "error for githubUsername; > 1" })
    .max(39, { message: "error for githubUsername; < 39" }),
});

export interface FormAllInOneDev {
  githubUsername: string;
  linkedinUsername: string;
  gitlabUsername: string;
}

export const defaultValues: FormAllInOneDev = {
  githubUsername: "",
  linkedinUsername: "",
  gitlabUsername: "",
};
