import { AbstractAuthStore } from "./__abstract__";

export class AuthStore extends AbstractAuthStore {
	public handleLogin = async () => {
		await new Promise((resolve) => {
			setTimeout(() => {
				resolve();
			}, 2000);
		});
	};
}
