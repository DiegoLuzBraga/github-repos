import { RouterStore, syncHistoryWithStore } from "mobx-react-router";
import { History, createBrowserHistory } from "history";
import { createContext } from "react";
import { AbstractRootStore } from "../__abstract__";

export class RootStoreMock extends AbstractRootStore {
	public routerStore: RouterStore;
	public history: History;

	public constructor() {
		super();
		const browerHistory = createBrowserHistory();
		this.routerStore = new RouterStore();
		this.history = syncHistoryWithStore(browerHistory, this.routerStore);

		return {
			routerStore: this.routerStore,
			history: this.history,
		};
	}
}

export const rootStoreMock = new RootStoreMock();
export const rootStoreContextMock = createContext(rootStoreMock);
