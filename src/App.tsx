import { BrowserRouter, Route, Routes } from "react-router";
import LoginPage from "./pages/LoginPage";
import DashboardLayout from "./pages/DashboardLayout";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<LoginPage />} />
				<Route path="/dashboard" element={<DashboardLayout />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
