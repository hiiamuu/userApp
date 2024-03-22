import { z } from "zod";
import { isAlpha, isAlphanumeric, isEmail } from "validator";

export const FormSchema = z.object({
	name: z
		.string()
		.min(3, { message: "Should contain min of 3 characters!" })
		.max(30, { message: "Should contain max of 30 characters!" })
		.refine(data => isAlpha(data,"en-US", { ignore: " " }), "Invalid characters found!"),
	email: z.string().refine(data => isEmail(data), "Invalid email!"),
	message: z
		.string()
		.min(10, { message: "Should contain min of 10 characters!" })
		.max(500, { message: "Should contain max of 500 characters!" })
		.refine(data => isAlphanumeric(data ? data : "", "en-US", { ignore: " '@#%&?!,.:()-/" }), "Invalid characters found!"),
});
