import Link from "next/link";
import { FormTitle } from "../components/form-title";
import { OtherAuth } from "../components/other-auth";
import { LoginForm } from "../components/login-form";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="p-4 min-h-screen">
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
      <Footer />
    </div>
  );
}
