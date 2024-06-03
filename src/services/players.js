import { CLIENT_URL, PLAYERS_URL } from "../config";

export const getPlayers = () =>
	fetch(CLIENT_URL + PLAYERS_URL + "/available", {
		method: "GET",
	});
