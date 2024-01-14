/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

interface Props {
	name: string;
	fontSize?: number;
	fill?: boolean;
	color?: string;
}

export default function ({ name, fontSize, fill = false, color = "unset" }: Props) {
	return (
		<span
			className="material-symbols-outlined"
			css={css`
				font-variation-settings:
					"FILL" ${fill ? 1 : 0},
					"wght" ${name === "search" && fill ? "700" : "400"},
					"GRAD" 0,
					"opsz" 24;
				font-size: ${fontSize ?? 18}px;
				color: ${color};
				user-select: none;
			`}
		>
			{name}
		</span>
	);
}
