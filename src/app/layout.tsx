import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "React Cep",
	description: "Buscador de CEP",
	icons: "/favicon.png",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt-BR">
			<head />
			<body>{children}</body>
		</html>
	);
}
