/** @jsxImportSource @emotion/react */
import { Helmet } from "react-helmet-async";
import { css } from "@emotion/react";
import { useParams } from "react-router-dom";
import { siteTitle } from "@/define";
import NotFound from "@/routes/NotFound";

export default function () {
	const { username } = useParams();

	if (username === undefined || !username.startsWith("@")) {
		return <NotFound />;
	}

	return (
		<>
			<Helmet>
				<title>
					{username} - {siteTitle}
				</title>
				<meta name="description" content="サイトの説明文です" />
			</Helmet>
			<div
				css={css`
					color: red;
				`}
			>
				プロフィール
			</div>
		</>
	);
}
