import { HubConnection, HubConnectionBuilder } from "@microsoft/signalr";
import { useState, useEffect } from "react";


function useFetch<T>(url: string) {
	const [data, setData] = useState<T[] | null>();
	const [connection, setConnection] = useState<HubConnection>();

	useEffect(() => {
		const newConnection = new HubConnectionBuilder()
			.withUrl("https://chififa.azurewebsites.net/hubs/game")

			.withAutomaticReconnect()
			.build();

		setConnection(newConnection);

		fetch(url)
			.then((res) => res.json())
			.then((data) => setData(data));
	}, [url]);

	useEffect(() => {
		if (connection) {
			connection
				.start()
				.then((result) => {
					console.log("Connected!");

					connection.on("ReceiveGame", (message) => {
						fetch(url)
							.then((res) => res.json())
							.then((data) =>{setData(data)});
					});
				})
				.catch((e) => console.log("Connection failed: ", e));
		}
	}, [connection, url]);

	return [data];
}

export default useFetch;
