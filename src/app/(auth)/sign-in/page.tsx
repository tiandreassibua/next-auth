import SignInForm from "@/components/form/sign-in-form";

const SignInPage = () => {
    return (
        <div className="w-full">
            <h1 className="mb-5 text-2xl font-bold uppercase text-center">
                Login
            </h1>
            <SignInForm />
        </div>
    );
};

export default SignInPage;
