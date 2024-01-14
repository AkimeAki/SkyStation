/** @jsxImportSource @emotion/react */
import { Helmet } from "react-helmet-async";
import { siteTitle } from "@/define";
import MainApp from "@/layouts/MainApp";

export default function () {
	return (
		<MainApp>
			<Helmet>
				<title>ページが見つかりませんでした - {siteTitle}</title>
				<meta name="description" content="サイトの説明文です" />
			</Helmet>
			<div>ページが見つかりませんでした。</div>
		</MainApp>
	);
}
