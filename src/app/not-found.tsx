import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../app/components/Button";
import PageFound404 from "../assets/page_found_404.png";

const Custom404 = () => {
	return (
		<main className="min-h-[100vh] w-full bg-gray-100 flex items-center justify-center">
			<div className="flex flex-col-reverse md:flex-row items-center justify-center min-h-screen px-6 text-center md:text-left m-3">
				<div className="md:w-1/2 flex flex-col gap-5">
					<h1 className="text-4xl font-bold text-blue">Ops...</h1>
					<h2 className="text-4xl font-bold text-blue">
						Essa página não existe.
					</h2>
					<Link href="/">
						<Button className="w-[150px] h-[50px] bg-blue text-yellow hover:bg-yellow hover:text-blue flex gap-2 rounded-xl text-center cursor-pointer justify-center items-center text-base">
							<ArrowLeft />
							Voltar
						</Button>
					</Link>
				</div>

				<div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
					<Image
						src={PageFound404}
						alt="Página não encontrada"
						width={500}
						height={500}
						className="w-full max-w-xs md:max-w-md"
						loading="lazy"
					/>
				</div>
			</div>
		</main>
	);
};

export default Custom404;
