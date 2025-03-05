"use client";

import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";
import { removeCepFromLocalStorage } from "../services/localstorage";
import type { IViaCepResponse } from "../services/localstorage";

import { Trash2 } from "lucide-react";

import { useEffect, useState } from "react";

// Toasty
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
	const [cepHistory, setCepHistory] = useState<IViaCepResponse[]>([]);

	// Carregar o histórico de CEPs ao montar o componente
	useEffect(() => {
		const history = localStorage.getItem("cepHistory");
		if (history) {
			setCepHistory(JSON.parse(history));
		}
	}, []);

	// Função para excluir um cep
	const handleDelete = (cep: string) => {
		removeCepFromLocalStorage(cep);

		setCepHistory(cepHistory.filter((item) => item.cep !== cep));
		toast.success("CEP excluído com sucesso!");
	};

	return (
		<>
			<Header />
			<Main classNameStyle="h-[100vh] overflow-auto">
				<h1 className="text-[2.4rem] text-blue flex flex-row items-center justify-center gap-2">
					Registros Salvos
				</h1>
				{/* Verifica se há registros salvos */}
				{cepHistory.length > 0 ? (
					<div className="flex flex-row justify-center items-center gap-4 flex-wrap main-cards">
						{/* Exibindo os registros */}
						{cepHistory.map((item) => (
							<div
								key={item.cep}
								className="flex flex-col items-start bg-white rounded-lg w-80 cards text-[0.85rem] relative"
							>
								<p>
									<strong>CEP:</strong> {item.cep}
								</p>
								<p>
									<strong>Endereço:</strong> {item.logradouro}
								</p>
								<p>
									<strong>Bairro:</strong> {item.bairro}
								</p>
								<p>
									<strong>Cidade:</strong> {item.localidade}
								</p>
								<p>
									<strong>Estado:</strong> {item.uf}
								</p>
								{/* Botão de excluir */}
								<button
									type="button"
									className="mt-2 text-danger bg-blue cursor-pointer w-8 h-8 flex justify-center items-center rounded-2xl absolute top-2 right-2"
									onClick={() => handleDelete(item.cep)}
								>
									<Trash2 />
								</button>
							</div>
						))}
					</div>
				) : (
					<p className="text-gray-500">Nenhum registro encontrado.</p>
				)}
			</Main>
			<Footer />
			<ToastContainer />
		</>
	);
};

export default Contact;
