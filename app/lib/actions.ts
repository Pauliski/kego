"use server";

import { z } from "zod";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export type State = {
  errors?: {
    username?: string[];
    email?: string[];
    password?: string[];
  };
  message?: string | null;
};

const UserSchema = z.object({
  id: z.string(),
  username: z.string({ invalid_type_error: "Invalid name" }),
  //   mobile: z.coerce.number(),
  email: z
    .string({
      invalid_type_error: "invalid email please type something different",
    })
    .email(),
  password: z.string(),
  status: z.enum(["active", "inactive"]),
  date: z.string(),
});

const CreateUser = UserSchema.omit({ id: true, date: true, status: true });

export async function createUser(prevState: State, formData: FormData) {
  //   const { fullName, password, email } = CreateUser.parse({
  //     fullName: formData.get("fullName"),
  //     password: formData.get("password"),
  //     email: formData.get("email"),
  //   });

  console.log(formData);

  const validatedFields = CreateUser.safeParse({
    username: formData.get("username"),
    password: formData.get("password"),
    email: formData.get("email"),
  });

  if (!validatedFields.success) {
    console.log(validatedFields);

    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Create User.",
    };
  }
  try {
    console.log('hello')
  } catch (error) {
    return {
      message: "Database Error: Failed to Create Invoice.",
    };
  }

  // const date = new Date().toISOString().split("T")[0];
  const status = "active";

  // DB LOGIC SHOULD BE HERE

  revalidatePath("/signup");
  redirect("/signup");
}
