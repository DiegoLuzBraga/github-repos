import { RepoData, StarredData, UserData } from "../../../@types/APITypes";
import { AbstractReposStore } from "../__abstract__";

export class ReposStoreMock extends AbstractReposStore {
  public getUser = async (handleRequest: (response: UserData) => void) => {
    await new Promise(resolve => {
      setTimeout(() => {
        resolve(handleRequest);
      }, 2000);
    });
  };

  public getUserRepos = async (
    handleRequest: (response: RepoData[]) => void
  ) => {
    await new Promise(resolve => {
      setTimeout(() => {
        resolve(handleRequest);
      }, 2000);
    });
  };

  public getUserReposStarred = async (
    handleRequest: (response: StarredData[]) => void
  ) => {
    await new Promise(resolve => {
      setTimeout(() => {
        resolve(handleRequest);
      }, 2000);
    });
  };
}
