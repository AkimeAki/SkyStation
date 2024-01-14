/** @jsxImportSource @emotion/react */
import GoogleIcon from "@/components/GoogleIcon";
import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

interface SidebarLinkPropsType {
	url: string;
	children: React.ReactNode;
	icon: React.ReactNode;
	onClick?: () => void;
}

const SidebarLink = ({ url, children, icon, onClick }: SidebarLinkPropsType) => {
	return (
		<Link
			onClick={onClick}
			css={css`
				display: flex;
				gap: 10px;
				align-items: center;
				padding: 10px 20px;
				text-decoration: none;
				color: var(--color-black);
				border-radius: 9999px;
				transition-duration: 200ms;
				transition-property: background-color;

				&:hover {
					background-color: var(--color-blue-thin);
				}
			`}
			to={url}
		>
			{icon}
			{children}
		</Link>
	);
};

interface Props {
	children: React.ReactNode;
}

export default function ({ children }: Props) {
	const [selectedSidebarNav, setSelectedSidebarNav] = useState<string | undefined>(undefined);
	const location = useLocation();

	useEffect(() => {
		setSelectedSidebarNav(location.pathname);
	}, [location]);

	const sidebarNavList = [
		{ name: "ホーム", icon: "home", url: "/" },
		{ name: "検索", icon: "search", url: "/search" },
		{ name: "通知", icon: "notifications", url: "/notifications" },
		{ name: "DM", icon: "mail", url: "/messages" },
		{ name: "リスト", icon: "stacks", url: "/lists" },
		{ name: "ブックマーク", icon: "bookmark", url: "/bookmarks" },
		{ name: "プロフィール", icon: "person", url: "/" },
		{ name: "設定", icon: "settings", url: "/settings" }
	];

	return (
		<div
			css={css`
				display: grid;
				grid-template-columns: 300px 1fr 300px;
				width: 100%;
				max-width: 1200px;
				margin: 0 auto;
				padding: 0 20px;
			`}
		>
			<aside
				css={css`
					display: flex;
					flex-direction: column;
					gap: 10px;
					width: 250px;
					padding: 20px 0;
				`}
			>
				<h1
					css={css`
						padding: 10px 20px;
						font-weight: bold;
						font-size: 25px;
						line-height: 1;
						user-select: none;
					`}
				>
					SkyStation
				</h1>
				{sidebarNavList.map((item) => {
					return (
						<SidebarLink
							key={item.url}
							url={item.url}
							icon={
								<GoogleIcon
									fontSize={33}
									name={item.icon}
									fill={selectedSidebarNav === item.url}
									color={selectedSidebarNav === item.url ? "var(--color-blue)" : undefined}
								/>
							}
						>
							<div
								css={css`
									font-weight: bold;
									font-size: 20px;
									line-height: 1;
									color: ${selectedSidebarNav === item.url ? "var(--color-blue)" : "unset"};
									user-select: none;
								`}
							>
								{item.name}
							</div>
						</SidebarLink>
					);
				})}
			</aside>
			<main>{children}</main>
			<aside></aside>
		</div>
	);
}
