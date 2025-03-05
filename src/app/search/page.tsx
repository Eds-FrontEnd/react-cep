"use client";

import { Save } from "lucide-react";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { Button } from "../components/Button";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Input from "../components/Input";
import Main from "../components/Main";
import { getCepData } from "../services/api";
import {
	getCepHistoryFromLocalStorage,
	saveCepToLocalStorage,
} from "../services/localstorage";

// Toasty
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useRouter } from "next/navigation"; // Importação do useRouter
import { useCallback, useEffect, useState } from "react";

const schema = z.object({
	cep: z
		.string()
		.length(8, { message: "O CEP deve ter exatamente 8 dígitos" })
		.regex(/^\d+$/, { message: "O CEP deve conter apenas números" }),
});

interface IFormData {
	cep: string;
}

interface IViaCepResponse {
	cep: string;
	logradouro: string;
	complemento: string;
	bairro: string;
	localidade: string;
	uf: string;
	estado: string;
	ibge: string;
	gia: string;
	ddd: string;
	siafi: string;
}

const CepsHistory = () => {
	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
		watch,
	} = useForm<IFormData>({
		resolver: async (data) => {
			try {
				schema.parse(data);
				return { values: data, errors: {} };
			} catch (err) {
				const zodError = err as z.ZodError;
				const formattedErrors = zodError.errors.reduce(
					(acc, error) => {
						acc[error.path[0]] = { message: error.message };
						return acc;
					},
					{} as Record<string, { message: string }>,
				);
				return { values: {}, errors: formattedErrors };
			}
		},
		mode: "onChange",
	});

	const cepValue = watch("cep");
	const isCepValid = schema.safeParse({ cep: cepValue }).success;

	const [errorApi, setErrorApi] = useState<string | null>(null);
	const [cepData, setCepData] = useState<IViaCepResponse | null>(null);
	const [errorVisible, setErrorVisible] = useState<boolean>(false);

	const router = useRouter();

	// Função para buscar dados no localStorage ou fazer a requisição se não houver cache
	const fetchCepData = useCallback(async (cep: string) => {
		const cepWithoutHyphen = cep.replace("-", "");

		// Obtém os dados armazenados no localStorage
		const cachedData = getCepHistoryFromLocalStorage();
		console.log("Cache:", JSON.stringify(cachedData, null, 2));

		// Verifica se o CEP está armazenado no cache (sem o hífen)
		const cachedCep = cachedData.find(
			(item) => item.cep.replace("-", "") === cepWithoutHyphen,
		);
		console.log(
			`Comparando CEP: ${cepWithoutHyphen} com ${JSON.stringify(cachedCep)}`,
		);

		// Carrega os dados do localStorage se o CEP existir
		if (cachedCep) {
			setCepData(cachedCep);
			console.log("Retornou dados armazenados no cache");
		} else {
			// Caso contrário, faz a requisição à API
			const { data, error } = await getCepData(cep);
			if (error) {
				setErrorApi(error);
				setCepData(null);
				setErrorVisible(true);
			} else {
				setCepData(data);
				console.log("Retornou dados da requisição ao ViaCEP");
			}
		}
	}, []);

	// Função chamada no evento onBlur (ao sair do campo)
	const handleBlur = () => {
		if (isCepValid) {
			fetchCepData(cepValue); // Chama a função para buscar os dados do CEP
		}
	};

	// Função chamada ao clicar no botão "Consultar"
	const handleConsult = () => {
		if (isCepValid) {
			fetchCepData(cepValue); // Chama a função para buscar os dados do CEP
		}
	};

	// Função de salvar o CEP
	const handleSave = () => {
		if (cepData) {
			const savedCepHistory = getCepHistoryFromLocalStorage();
			const isCepAlreadySaved = savedCepHistory.some(
				(item: IViaCepResponse) => item.cep === cepData.cep,
			);

			if (isCepAlreadySaved) {
				toast.warn("Este CEP já foi salvo anteriormente.");
			} else {
				saveCepToLocalStorage(cepData);
				toast.success("CEP salvo com sucesso!");

				setTimeout(() => {
					router.push("/register");
				}, 3000);
			}
		}
	};

	const onSubmit: SubmitHandler<IFormData> = async (data) => {
		setErrorApi(null);
		fetchCepData(data.cep);
	};

	useEffect(() => {
		if (errorVisible) {
			const timer = setTimeout(() => {
				setErrorVisible(false);
				setErrorApi(null);
			}, 3000);

			return () => clearTimeout(timer);
		}
	}, [errorVisible]);

	return (
		<>
			<Header />
			<Main classNameStyle="h-[80vh] overflow-auto">
				<div className="flex flex-col items-center gap-2">
					<h1 className="text-[2.4rem] text-blue flex flex-row items-center gap-2">
						Vamos começar?
					</h1>

					<form
						onSubmit={handleSubmit(onSubmit)}
						className="flex flex-col items-center gap-2"
					>
						<Input
							id="cep"
							type="text"
							placeholder="Digite o CEP"
							label="CEP:"
							error={errors.cep?.message}
							{...register("cep", { required: "Este campo é obrigatório" })}
							onBlur={handleBlur} // Chama a consulta ao sair do campo
						/>
						<div className="flex flex-row items-center gap-2">
							<Button
								classNameStyle="w-[320px] h-[50px] bg-yellow text-blue hover:bg-blue hover:text-white"
								type="button"
								disabled={!isCepValid}
								onClick={handleConsult} // Chama a consulta ao clicar no botão
							>
								Consultar
							</Button>
						</div>
					</form>

					{/* Exibindo os dados do CEP ou erro */}
					{errorVisible && errorApi && (
						<div className="text-danger">
							{errorApi === "Network Error"
								? "Ops, CEP não existe."
								: `Ops, Tente novamente. ${errorApi}`}
						</div>
					)}

					{cepData && !errorApi && (
						<div className="flex flex-col items-center gap-2 text-blue">
							{cepData.logradouro && (
								<p>
									<strong>Logradouro:</strong> {cepData.logradouro}
								</p>
							)}
							{cepData.bairro && (
								<p>
									<strong>Bairro:</strong> {cepData.bairro}
								</p>
							)}
							{cepData.localidade && (
								<p>
									<strong>Cidade:</strong> {cepData.localidade}
								</p>
							)}
							{cepData.uf && (
								<p>
									<strong>Estado:</strong> {cepData.uf}
								</p>
							)}
							<Button
								type="button"
								classNameStyle="w-[150px] h-[50px] bg-blue text-yellow hover:bg-yellow hover:text-blue flex gap-2"
								disabled={!isCepValid}
								onClick={handleSave}
							>
								Salvar
								<Save />
							</Button>
						</div>
					)}
				</div>
			</Main>
			<Footer />
			<ToastContainer />
		</>
	);
};

export default CepsHistory;
