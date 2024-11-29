"use server";


import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { parseWithZod } from "@conform-to/zod";
import { LoginSchema, UserSchema } from "./zodSchemas";

export type State = {
  errors?: {
    username?: string[] | null;
    email?: string[] | null;
    password?: string[] | null;
  };
  message?: string | null;
};


const CreateUser = UserSchema.omit({ id: true, date: true, status: true });

export async function createUser(state: unknown, formData: FormData) {
  console.log(formData.get("username"));

    const validator = parseWithZod(formData, {
      schema: CreateUser
    });

    if(validator.status !== 'success'){
      return validator.reply()
    }

}

export async function loginUser(state: unknown, formData: FormData) {
  ;

  const validator = parseWithZod(formData, {
    schema: LoginSchema,
  });

  if (validator.status !== "success") {
    return validator.reply();
  }
}

