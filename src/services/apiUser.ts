const URL = "https://run.mocky.io/v3/fa7b1cfe-ea27-443b-9dc9-de642fa9a3cf";

export type userData = {
	id: "string";
	organization: string;
	firstName: string;
	lastName: string;
	email: string;
	phone: string;
	status: string;
	dateJoined: string;
};

type getUsersReturnType = {
	total: number;
	data: Array<userData>;
};

const getUsers = async function (page = 1, limit = 10) {
	try {
		const response = await fetch(URL);
		const data = await response.json();

		if (!response.ok) return { error: "Could not get user data" };
		if (data.status !== "success") return { error: "Could not get user data" };

		const start = page * limit - limit;
		const end = page * limit;

		const returnData = {
			total: data.data.length,
			data: data.data.slice(start, end),
		} as getUsersReturnType;

		return returnData;
	} catch (err) {
		console.log(err);
		return { error: "Could not get user data" };
	}
};

export { getUsers };
