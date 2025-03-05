"use client";

import {
	House,
	MailSearch,
	MapPinHouse,
	Save,
	SaveAll,
	Search,
} from "lucide-react"; // Importação otimizada
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useMemo } from "react";

// Movendo os itens do menu para fora do componente para evitar recriação repetida
const menuItems = [
	{
		name: "Home",
		path: "/",
		icon: <MapPinHouse className="text-[20px]" />,
		activeIcon: <House className="text-[20px]" />,
	},
	{
		name: "Pesquisar",
		path: "/search",
		icon: <Search className="text-[20px]" />,
		activeIcon: <MailSearch className="text-[20px]" />,
	},
	{
		name: "Registro",
		path: "/register",
		icon: <Save className="text-[18px]" />,
		activeIcon: <SaveAll className="text-[18px]" />,
	},
];

// Navbar otimizado usando React.memo para evitar re-renderizações desnecessárias
const Navbar = React.memo(() => {
	const pathname = usePathname();

	// Usando useMemo para evitar recriação da lista de itens a cada renderização
	const menu = useMemo(() => menuItems, []);

	return (
		<nav>
			<ul className="flex space-x-6 gap-5">
				{menu.map(({ name, path, icon, activeIcon }) => (
					<li key={path} className="relative">
						<Link
							href={path}
							className={`text-[0.85rem] text-gray-400 relative hover:text-blue after:block after:h-[2px] after:bg-blue after:absolute after:bottom-[-10px] after:left-0 after:w-0 after:scale-x-0 after:origin-center after:transition-all after:duration-500 ${
								pathname === path
									? "text-blue after:w-full after:scale-x-100"
									: ""
							}`}
						>
							<span
								className={`flex items-center justify-center gap-1.5 ${pathname === path ? "text-blue scale-110" : ""} transition-all duration-300 transform`}
								title={name}
							>
								{pathname === path ? activeIcon : icon}
								<span className="hidden md:block">{name}</span>
							</span>
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
});

export default Navbar;
