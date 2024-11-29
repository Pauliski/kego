import Link from "next/link";
import { FormTitle } from "../components/form-title";
import { OtherAuth } from "../components/other-auth";
import SignupForm from "../components/signup-form";
import Footer from "../components/Footer";


export default function Home() {
  return (
    <div className="p-5">
      <FormTitle
        title="Create an account"
        subtitle="Let's create your account"
      />
      <SignupForm />
      
      <p className="text-colorTwo mt-8 flex justify-center">
        Already have an account?
        <span className="text-colorOne ml-4"><Link href={"/login"}>Log In</Link></span>
        
      </p>
      <Footer />
    </div>
  );
}
