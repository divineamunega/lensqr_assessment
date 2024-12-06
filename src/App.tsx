import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import LoginPage from "./pages/LoginPage";
import DashboardLayout from "./pages/DashboardLayout";
import Users from "./features/users/Users";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<LoginPage />} />
				<Route path="/dashboard" element={<DashboardLayout />}>
					<Route path="" element={<Navigate to="users" />} />
					<Route path="users" element={<Users />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
