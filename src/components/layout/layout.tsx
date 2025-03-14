import { ReactNode } from "react";
import { useRouter } from "next/router";
import { NavBottom, NavTop } from "./nav";

interface LayoutProps {
	children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
	const router = useRouter();
	return (
		<div className="container max-w-xs mx-auto">
			{router.pathname.includes("/protected/") ? (
				<>
					<NavTop />
					<main className="mt-25">{children}</main>
					<NavBottom />
				</>
			) : (
				<main className="mt-12">{children}</main>
			)}
		</div>
	);
};

export default Layout;
