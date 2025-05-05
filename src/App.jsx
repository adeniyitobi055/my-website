import React from "react";
import { useMediaQuery } from "react-responsive";
import { Toaster } from "react-hot-toast";
import GlobalStyles from "./styles/GlobalStyles";
import { DarkModeProvider } from "./context/DarkModeContext";
import AppLayout from "./ui/AppLayout";

function App() {
	const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

	return (
		<DarkModeProvider>
			<GlobalStyles />
			<AppLayout isMobile={isMobile} />
			<Toaster
				position="top-right"
				gutter={12}
				containerStyle={{ margin: "8px" }}
				toastOptions={{
					success: { duration: 3000 },
					error: { duration: 5000 },
					style: {
						fontSize: "15px",
						maxWidth: "500px",
						padding: "16px 24px",
						backgroundColor: "var(--color-grey-0)",
						color: "var(--color-grey-700)",
					},
				}}
			/>
		</DarkModeProvider>
	);
}

export default App;
