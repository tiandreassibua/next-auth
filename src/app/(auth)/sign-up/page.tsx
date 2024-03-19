import SignUpForm from "@/components/form/sign-up-form";

const SignUpPage = () => {
    return (
        <div className="w-full">
            <h1 className="mb-5 text-2xl font-bold uppercase text-center">
                Register
            </h1>
            <SignUpForm />
        </div>
    );
};

export default SignUpPage;
