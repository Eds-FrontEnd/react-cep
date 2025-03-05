import type { ReactNode } from "react";

interface MainProps {
	children: ReactNode;
	classNameStyle?: string;
}

const Main = ({ children, classNameStyle }: MainProps) => {
	return (
		<main
			className={`${classNameStyle} w-full bg-gray-100 flex items-center justify-center`}
		>
			<div className="flex items-center justify-center max-w-screen-lg px-4 w-full">
				<div className="text-xl font-bold">{children}</div>
			</div>
		</main>
	);
};

export default Main;
