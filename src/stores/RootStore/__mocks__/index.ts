import { RouterStore, syncHistoryWithStore } from "mobx-react-router";
import { History, createBrowserHistory } from "history";
import { createContext } from "react";
import { AbstractRootStore } from "../__abstract__";
import { ReposStore } from "../../ReposStore";

export class RootStoreMock extends AbstractRootStore {
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

export const rootStoreMock = new RootStoreMock();
export const rootStoreContextMock = createContext(rootStoreMock);
