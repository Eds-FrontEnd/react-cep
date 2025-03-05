import type { ComponentProps } from "react";

interface ButtonProps extends ComponentProps<"button"> {
	classNameStyle?: string;
}

export function Button(props: ButtonProps) {
	const { classNameStyle, disabled, ...rest } = props;

	return (
		<button
			className={`${classNameStyle} flex justify-center items-center p-2.5 font-semibold rounded-xl cursor-pointer transition-colors duration-300 mx-auto md:mx-0 border-2 border-blue ${disabled ? "disabled" : ""}`}
			disabled={disabled}
			{...rest}
		/>
	);
}
