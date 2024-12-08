const URL = "https://run.mocky.io/v3/fa7b1cfe-ea27-443b-9dc9-de642fa9a3cf";

export type userData = {
	id: string;
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

type filterType = {
	organization?: string;
	username?: string;
	email?: string;
	date?: string;
	phone_number?: string;
	status?: string;
};

const getUsers = async function (page = 1, limit = 10, filter: filterType) {
	try {
		const response = await fetch(URL);
		const data = await response.json();

		if (!response.ok) return { error: "Could not get user data" };
		if (data.status !== "success") return { error: "Could not get user data" };

		const start = page * limit - limit;
		const end = page * limit;

		let returnData = {
			total: data.data.length,
			data: data.data.slice(start, end),
		} as getUsersReturnType;

		console.log(returnData);

		if (!!filter.username && filter.username !== "") {
			const data = returnData.data.filter((user) =>
				user.firstName.toLowerCase().includes(filter.username!.toLowerCase())
			);

			returnData = {
				total: data.length,
				data,
			};
		}

		if (!!filter.email && filter.email !== "") {
			const data = returnData.data.filter((user) =>
				user.email.toLowerCase().includes(filter.email!.toLowerCase())
			);

			returnData = {
				total: data.length,
				data,
			};
		}

		if (
			(!!filter.organization && filter.organization !== "Select") ||
			filter.organization !== ""
		) {
			const data = returnData.data.filter((user) =>
				user.status.toLowerCase().includes(filter.status!.toLowerCase())
			);

			returnData = {
				total: data.length,
				data,
			};
		}
		return returnData;
	} catch (err) {
		console.log(err);
		return { error: "Could not get user data" };
	}
};

export { getUsers };
