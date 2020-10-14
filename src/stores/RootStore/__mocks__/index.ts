import { RouterStore, syncHistoryWithStore } from "mobx-react-router";
import { History, createBrowserHistory } from "history";
import { createContext } from "react";
import { AbstractRootStore } from "../__abstract__";
import { AuthStore } from "../../AuthStore";

export class RootStoreMock extends AbstractRootStore {
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

export const rootStoreMock = new RootStoreMock();
export const rootStoreContextMock = createContext(rootStoreMock);
