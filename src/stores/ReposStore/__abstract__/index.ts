import { action, observable } from "mobx";
import { RepoData, UserData, StarredData } from "../../../@types/APITypes";

export abstract class AbstractReposStore {
	public abstract getUser: (
		handleRequest: (response: UserData) => void,
		notificate: (
			message: string,
			status: "default" | "error" | "success" | "warning" | "info"
		) => void
	) => Promise<void>;
	public abstract getUserRepos: (
		handleRequest: (response: RepoData[]) => void,
		notificate: (
			message: string,
			status: "default" | "error" | "success" | "warning" | "info"
		) => void
	) => Promise<void>;
	public abstract getUserReposStarred: (
		handleRequest: (response: StarredData[]) => void,
		notificate: (
			message: string,
			status: "default" | "error" | "success" | "warning" | "info"
		) => void
	) => Promise<void>;

	@observable
	public userData: UserData | null = null;

	@observable
	public userName: string = "";

	@observable
	public repoData: RepoData[] = [];

	@observable
	public starredData: StarredData[] = [];

	@action
	public setUserData = (data: UserData | null) => {
		this.userData = data;
	};

	@action
	public setUserName = (name: string) => {
		this.userName = name;
	};

	@action
	public setRepoData = (data: RepoData[]) => {
		this.repoData = data;
	};

	@action
	public setStarredData = (data: StarredData[]) => {
		this.starredData = data;
	};
}
