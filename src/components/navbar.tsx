import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import { buttonVariants } from "./ui/button";
import { HandMetal } from "lucide-react";

const Navbar = () => {
    return (
        <div className="py-2 border-b border-s-zinc-200 fixed w-full z-10 top-0">
            <div className="container flex items-center justify-between">
                <Link
                    href="/"
                    className={buttonVariants({
                        variant: "ghost",
                        size: "icon",
                    })}
                >
                    <HandMetal />
                </Link>
                <div className="flex items-center gap-x-3">
                    <ModeToggle />
                    <Link
                        className={buttonVariants({ variant: "outline" })}
                        href="/sign-in"
                    >
                        Sign In
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
