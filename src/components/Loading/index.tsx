import React from "react";
import s from "./style.scss";
import { BlurLayer } from "../BlurLayer";

export const Loading = () => {
	return (
		<>
			<BlurLayer />
			<div className={s.loadingContent}>
				<div className={s.loadingBar}>
					<div className={s.blueBar} />
				</div>
			</div>
		</>
	);
};
