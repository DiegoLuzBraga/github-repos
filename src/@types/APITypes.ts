export interface UserData {
	login: string;
	avatar_url: string;
	name: string;
	bio: string;
	followers: number;
	following: number;
}

export interface RepoData {
	name: string;
	owner: {
		name: string;
	};
	language: string;
	watchers: number;
	forks: number;
}

export interface StarredData {
	name: string;
	owner: {
		login: string;
	};
	description: string;
	open_issues: number;
}
