import { HubConnection, HubConnectionBuilder } from "@microsoft/signalr";
import { useState, useEffect } from "react";
import { Game } from "../interfaces/Game";
import { Player } from "../interfaces/Player";

function useFetch<T>(url: string) {
	const [data, setData] = useState<T[] | null>();
	const [connection, setConnection] = useState<HubConnection>();

	/*
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [url]);
  */

	useEffect(() => {
		const newConnection = new HubConnectionBuilder()
			.withUrl("https://localhost:7256/hubs/game")

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
            console.log("HERE");
						fetch(url)
							.then((res) => res.json())
							.then((data) =>{console.log(data); setData(data)});
					});
				})
				.catch((e) => console.log("Connection failed: ", e));
		}
	}, [connection]);

	return [data];
}

export default useFetch;
