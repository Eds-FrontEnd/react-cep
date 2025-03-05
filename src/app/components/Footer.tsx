const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="h-[10vh] flex justify-center items-center bg-white text-blue min-h-[40px]">
			<span className="text-center text-[0.85rem]">
				&copy; {currentYear} - Feito com dedicação! 🚀
			</span>
		</footer>
	);
};

export default Footer;
