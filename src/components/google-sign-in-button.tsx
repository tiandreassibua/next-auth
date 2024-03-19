import { Button } from "@/components/ui/button";
import { FC } from "react";
import { FcGoogle } from "react-icons/fc";

interface GoogleSignInButtonProps {
    children: React.ReactNode;
}

const GoogleSignInButton: FC<GoogleSignInButtonProps> = ({ children }) => {
    const loginWithGoogle = () => {
        console.log("login with google");
    };

    return (
        <Button onClick={loginWithGoogle} className="w-full flex">
            <FcGoogle size={20} className="mr-2" />
            {children}
        </Button>
    );
};

export default GoogleSignInButton;
