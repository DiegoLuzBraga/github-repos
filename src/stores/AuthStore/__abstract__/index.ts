export abstract class AbstractAuthStore {
	abstract handleLogin: () => Promise<void>;
}
