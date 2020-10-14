import { action, observable } from "mobx";
import { RepoData, UserData, StarredData } from "../../../@types/APITypes";

export abstract class AbstractReposStore {
  public abstract getUser: (
    handleRequest: (response: UserData) => void
  ) => Promise<void>;
  public abstract getUserRepos: (
    handleRequest: (response: RepoData[]) => void
  ) => Promise<void>;
  public abstract getUserReposStarred: (
    handleRequest: (response: StarredData[]) => void
  ) => Promise<void>;

  @observable
  public userData: UserData | null = null;

  @observable
  public userName: string = "";

  @observable
  public repoData: RepoData[] = [];

  @observable
  public starredData: StarredData[] = [];

  @observable
  public error: string | null = null;

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

  @action
  public setError = (error: string | null) => {
    this.error = error;
  };
}
