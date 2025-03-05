// api.ts
import axios from "axios";

export interface IViaCepResponse {
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

export interface ApiResponse {
	data: IViaCepResponse | null;
	error: string | null;
}

export const api = axios.create({
	baseURL: "https://viacep.com.br/ws",
});

// Função para buscar o CEP
export const getCepData = async (cep: string): Promise<ApiResponse> => {
	try {
		const response = await api.get<IViaCepResponse>(`/ws/${cep}/json/`);
		return { data: response.data, error: null };
	} catch (error: unknown) {
		const errorMessage =
			error instanceof Error ? error.message : "Erro desconhecido";
		return { data: null, error: errorMessage };
	}
};
