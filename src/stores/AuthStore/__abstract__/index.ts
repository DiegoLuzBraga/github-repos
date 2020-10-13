import { action, observable } from "mobx";
import { UserData } from "../../../@types/interfaces";

export abstract class AbstractAuthStore {
	abstract handleLogin: () => Promise<void>;

	@observable
	public userData: UserData = {
		userName: "",
		password: "",
	};

	@observable
	public hasError: boolean = false;

	@action
	public setUserData = (field: keyof UserData, value: string) => {
		this.userData = {
			...this.userData,
			[field]: value,
		};
	};

	@action
	public setHasError = (value: boolean) => {
		this.hasError = value;
	};
}
