import { RepoData, StarredData, UserData } from "../../@types/APITypes";
import { AbstractReposStore } from "./__abstract__";
import { baseRequest } from "../../utils/baseRequest";

export class ReposStore extends AbstractReposStore {
  public getUser = async (handleRequest: (response: UserData) => void) => {
    await baseRequest<UserData>(
      `${this.userName}`,
      data => {
        handleRequest(data);
        this.setError(null);
      },
      error => this.setError(error)
    );
  };

  public getUserRepos = async (
    handleRequest: (response: RepoData[]) => void
  ) => {
    await baseRequest<RepoData[]>(
      `${this.userName}/repos`,
      data => {
        handleRequest(data);
        this.setError(null);
      },
      this.setError
    );
  };

  public getUserReposStarred = async (
    handleRequest: (response: StarredData[]) => void
  ) => {
    await baseRequest<StarredData[]>(
      `${this.userName}/starred`,
      data => {
        handleRequest(data);
        this.setError(null);
      },
      this.setError
    );
  };
}
