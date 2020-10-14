import React, { useState } from "react";
import s from "./style.scss";
import { useStore } from "../../stores/RootStore";
import { Error } from "../../components/Error";
import { Button } from "../../components/Button";
import { observer } from "mobx-react";

export const GitRepos = observer(() => {
  const { reposStore, routerStore } = useStore();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    await reposStore.getUser(reposStore.setUserData);
    setLoading(false);
  };

  return (
    <form
      className={s.form}
      onSubmit={e => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      {reposStore.error ? (
        <Error label={reposStore.error} />
      ) : (
        <>
			<div className={s.formFields}>
          <input
            value={reposStore.userName}
            onChange={e => reposStore.setUserName(e.target.value)}
          />
          <Button
            onClick={handleSubmit}
            label="Search repo"
            isLoading={loading}
          />
			</div>
          {reposStore.userData !== null && (
            <div
              className={s.card}
                onClick={() => routerStore.push(`/${reposStore.userData?.login}`)}
            >
              <div className={s.basic}>
                {reposStore.userData.name && <h3>Name: {reposStore.userData.name}</h3>}
                <h3>User: {reposStore.userData.login}</h3>
              </div>
              <div className={s.data}>
                <h2>
				Followers: {reposStore.userData.followers}
                </h2>
                <h2>
				Following: {reposStore.userData.following}
                </h2>
              </div>
              <div className={s.bio}>
                <h2>Description</h2>
                <h3>{reposStore.userData.bio}</h3>
              </div>
            </div>
          )}
        </>
      )}
    </form>
  );
});
