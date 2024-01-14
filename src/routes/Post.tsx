/** @jsxImportSource @emotion/react */
import { Helmet } from "react-helmet-async";
import { css } from "@emotion/react";
import { useParams } from "react-router-dom";
import { siteTitle } from "@/define";

export default function () {
	const { postId } = useParams();

	return (
		<>
			<Helmet>
				<title>
					{postId} - {siteTitle}
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
