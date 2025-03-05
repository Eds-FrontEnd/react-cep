import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../assets/logo.png";
import Navbar from "./Navbar";

const Header = () => {
	return (
		<>
			<Head>
				<title>React Cep</title>
			</Head>
			<header className="h-[10vh] flex justify-around items-center px-6 bg-white min-h-[50px]">
				<Link href="/">
					<div className="flex flex-row items-center">
						<Image
							src={Logo}
							alt="Logo da React Cep"
							title="Logo da React Cep"
							width={44}
							height={44}
							quality={80}
							loading="lazy"
						/>
						<p className="text-blue text-[1.2rem]">React Cep</p>
					</div>
				</Link>
				<Navbar />
			</header>
		</>
	);
};

export default Header;
