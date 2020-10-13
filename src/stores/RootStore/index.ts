import { RouterStore, syncHistoryWithStore } from "mobx-react-router";
import { History, createBrowserHistory } from "history";
import { createContext, useContext } from "react";
import { AbstractRootStore } from "./__abstract__";
import { rootStoreContextMock, RootStoreMock } from "./__mocks__";
import { AuthStore } from "../AuthStore";

export class RootStore extends AbstractRootStore {
	public routerStore: RouterStore;
	public history: History;
	public authStore: AuthStore;

	public constructor() {
		super();
		const browerHistory = createBrowserHistory();
		this.routerStore = new RouterStore();
		this.history = syncHistoryWithStore(browerHistory, this.routerStore);
		this.authStore = new AuthStore();

		return {
			routerStore: this.routerStore,
			history: this.history,
			authStore: this.authStore,
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
