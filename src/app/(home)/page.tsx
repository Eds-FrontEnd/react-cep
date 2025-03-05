import { Button } from "../components/Button";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";
import ImageHome from "./imageHome";

import Link from "next/link";

export default function Home() {
	return (
		<>
			<Header />
			<Main classNameStyle="h-[80vh] overflow-auto">
				<div className="flex flex-col md:flex-row items-center justify-center gap-8 p-home">
					<div className="flex flex-col gap-4 text-center md:text-left">
						<h1 className="text-[2rem] md:text-[2.5rem] text-blue title-home">
							Seu melhor aplicativo de consultas de CEPs
						</h1>
						<Link href="/search">
							<Button
								classNameStyle="w-[320px] h-[50px] bg-yellow text-blue hover:bg-blue hover:text-white button-home"
								type="button"
							>
								Pesquisar
							</Button>
						</Link>
					</div>
					<ImageHome />
				</div>
			</Main>
			<Footer />
		</>
	);
}
