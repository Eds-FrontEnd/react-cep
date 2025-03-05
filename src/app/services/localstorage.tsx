// localstorage.ts
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

// Função para salvar o CEP no localStorage
export const saveCepToLocalStorage = (cepData: IViaCepResponse): void => {
	const currentData = localStorage.getItem("cepHistory");
	const history = currentData ? JSON.parse(currentData) : [];
	// Verificar se o CEP já está salvo no histórico
	const isCepAlreadySaved = history.some(
		(item: IViaCepResponse) => item.cep === cepData.cep,
	);

	if (!isCepAlreadySaved) {
		history.push(cepData);
		localStorage.setItem("cepHistory", JSON.stringify(history));
	}
};

// Função para obter o histórico de Ceps do localStorage
export const getCepHistoryFromLocalStorage = (): IViaCepResponse[] => {
	const currentData = localStorage.getItem("cepHistory");
	return currentData ? JSON.parse(currentData) : [];
};

// Função para remover um item do localStorage
export const removeCepFromLocalStorage = (cep: string): void => {
	const currentData = localStorage.getItem("cepHistory");
	const history = currentData ? JSON.parse(currentData) : [];
	const updatedHistory = history.filter(
		(item: IViaCepResponse) => item.cep !== cep,
	);
	localStorage.setItem("cepHistory", JSON.stringify(updatedHistory));
};
