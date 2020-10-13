import { RouterStore, syncHistoryWithStore } from "mobx-react-router";
import { History, createBrowserHistory } from "history";
import { createContext } from "react";
import { AbstractRootStore } from "../__abstract__";
import { AuthStore } from "../../AuthStore";
import { NewsStore } from "../../NewsStore";

export class RootStoreMock extends AbstractRootStore {
	public routerStore: RouterStore;
	public history: History;
	public authStore: AuthStore;
	public newsStore: NewsStore;

	public constructor() {
		super();
		const browerHistory = createBrowserHistory();
		this.routerStore = new RouterStore();
		this.history = syncHistoryWithStore(browerHistory, this.routerStore);
		this.authStore = new AuthStore();
		this.newsStore = new NewsStore();

		return {
			routerStore: this.routerStore,
			history: this.history,
			authStore: this.authStore,
			newsStore: this.newsStore,
		};
	}
}

export const rootStoreMock = new RootStoreMock();
export const rootStoreContextMock = createContext(rootStoreMock);
