import { Footer, Header } from "@/components";
import ProviderRedux from "@/redux/provider";
import type { Metadata } from "next";
import type { NextFont } from "next/dist/compiled/@next/font";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit: NextFont = Outfit({
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "GuitarLA - ",
	description: "Tienda de Guitarras",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}): React.ReactNode {
	return (
		<ProviderRedux>
			<html className="scroll-smooth" lang="es">
				<body className={outfit.className}>
					<Header />
					{children}
					<Footer />
				</body>
			</html>
		</ProviderRedux>
	);
}
