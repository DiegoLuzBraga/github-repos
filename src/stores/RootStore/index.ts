import { RouterStore, syncHistoryWithStore } from "mobx-react-router";
import { History, createBrowserHistory } from "history";
import { createContext, useContext } from "react";
import { AbstractRootStore } from "./__abstract__";
import { rootStoreContextMock, RootStoreMock } from "./__mocks__";
import { ReposStore } from "../ReposStore";

export class RootStore extends AbstractRootStore {
	public routerStore: RouterStore;
	public history: History;
	public reposStore: ReposStore;

	public constructor() {
		super();
		const browerHistory = createBrowserHistory();
		this.routerStore = new RouterStore();
		this.history = syncHistoryWithStore(browerHistory, this.routerStore);
		this.reposStore = new ReposStore();

		return {
			routerStore: this.routerStore,
			history: this.history,
			reposStore: this.reposStore,
		};
	}
}

export const rootStore = new RootStore();
export const rootStoreContext = createContext(rootStore);
export let useStore = (): RootStore | RootStoreMock => {
	return useContext(rootStoreContext);
};

if (process.env.UNIT_TEST) {
	useStore = () => {
		return useContext(rootStoreContextMock);
	};
}
