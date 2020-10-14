import { RepoData, StarredData, UserData } from "../../@types/APITypes";
import { AbstractReposStore } from "./__abstract__";
import { baseRequest } from "../../utils/baseRequest";

export class ReposStore extends AbstractReposStore {
	public getUser = async (
		handleRequest: (response: UserData) => void,
		notificate: (
			message: string,
			status: "default" | "error" | "success" | "warning" | "info"
		) => void
	) => {
		await baseRequest(`${this.userName}`, handleRequest, notificate);
	};

	public getUserRepos = async (
		handleRequest: (response: RepoData[]) => void,
		notificate: (
			message: string,
			status: "default" | "error" | "success" | "warning" | "info"
		) => void
	) => {
		await baseRequest(`${this.userName}/repos`, handleRequest, notificate);
	};

	public getUserReposStarred = async (
		handleRequest: (response: StarredData[]) => void,
		notificate: (
			message: string,
			status: "default" | "error" | "success" | "warning" | "info"
		) => void
	) => {
		await baseRequest(`${this.userName}/starred`, handleRequest, notificate);
	};
}
