import React from "react";
import { useStore } from "../../stores/RootStore";

export const GitRepos = () => {
	const { reposStore } = useStore();

	return (
		<form onSubmit={(e) => e.preventDefault()}>
			<input
				value={reposStore.userName}
				onChange={(e) => reposStore.setUserName(e.target.value)}
			/>
			<button type="submit" onClick={(e) => e.preventDefault()}>
				Click me!
			</button>
		</form>
	);
};
