import React, { useEffect, useState } from "react";
import s from "./style.scss";
import { useParams, withRouter } from "react-router";
import { Loading } from "../../components/Loading";
import { useStore } from "../../stores/RootStore";

export const UserRepo = withRouter(() => {
  const { userName } = useParams<{ userName: string }>();
  const { reposStore, routerStore } = useStore();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      console.log(userName);
    if (userName) {
      reposStore.setUserName(userName);
      getUserRepos();
    }
  });

  const getUserRepos = async () => {
    await reposStore.getUserRepos(reposStore.setRepoData);
    setLoading(false);
  };

  return loading ? (
    <Loading />
  ) : (
    <div>
      {reposStore.repoData.map(repo => {
        return (
          <div
            key={repo.name}
            className={s.card}
            onClick={() => routerStore.push(`/`)}
          >
            <div className={s.basic}>
              <h3>Name: {repo.name}</h3>
              <h3>Language: {repo.language}</h3>
            </div>
            <div className={s.data}>
              <h2>Owner: {repo.owner.name}</h2>
              <h2>Forks: {repo.forks}</h2>
            </div>
          </div>
        );
      })}
    </div>
  );
});
