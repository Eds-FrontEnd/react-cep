"use client";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	label?: string;
	error?: string;
}

const Input: React.FC<InputProps> = ({ label, error, id, ...props }) => {
	return (
		<div className="input-container">
			{label && (
				<label
					htmlFor={id}
					className="block text-sm font-semibold mb-1 text-blue"
				>
					{label}
				</label>
			)}
			<input
				id={id}
				{...props}
				className="w-[320px] h-[50px] border-2 border-blue rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-blue"
			/>
			{error && <span className="block text-sm text-danger">{error}</span>}
		</div>
	);
};

export default Input;
