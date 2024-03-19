interface AuthLayoutProps {
    children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
    return <div className="p-10 rounded-md border">{children}</div>;
};

export default AuthLayout;
