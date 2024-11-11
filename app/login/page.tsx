import Link from "next/link";
import { FormTitle } from "../components/form-title";
import { OtherAuth } from "../components/other-auth";
import { LoginForm } from "../components/login-form";

export default function Home() {
  return (
    <div className="p-4">
      <FormTitle
        title="Login to your account"
        subtitle="It's great to see you again"
      />
      <LoginForm />
      <OtherAuth />
      <p className="text-gray-300 ">
        Already have an account?
        <Link href={"/login"}>
          <span>Log In</span>
        </Link>
      </p>
    </div>
  );
}
