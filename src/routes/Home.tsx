/** @jsxImportSource @emotion/react */
import { siteDomain } from "@/define";
import MainApp from "@/layouts/MainApp";
import { Helmet } from "react-helmet-async";
import { css } from "@emotion/react";
import { useState } from "react";
import GoogleIcon from "@/components/GoogleIcon";

interface TimelineHeaderListItemPropsType {
	children: React.ReactNode;
	selected?: boolean;
	onClick?: () => void;
}

export const TimelineHeaderListItem = ({ children, selected = false, onClick }: TimelineHeaderListItemPropsType) => {
	return (
		<div
			onClick={onClick}
			css={css`
				display: flex;
				align-items: center;
				justify-content: center;
				padding: 0 20px;
				white-space: nowrap;
				font-size: 15px;
				cursor: pointer;
				font-weight: ${selected ? "bold" : "unset"};
				color: ${selected ? "var(--color-blue)" : "unset"};
				transition-duration: 200ms;
				transition-property: background-color;
				width: 100%;
				height: 100%;
				user-select: none;

				&:hover {
					background-color: var(--color-blue-thin);
				}
			`}
		>
			{children}
		</div>
	);
};

interface PostActionPropsType {
	icon: string;
	number?: number;
	hoverColor?: string;
}

const PostAction = ({ icon, number = 0, hoverColor }: PostActionPropsType) => {
	return (
		<div
			css={css`
				position: relative;
				display: flex;
				justify-content: center;
				align-items: center;
				gap: 5px;
				cursor: pointer;
				color: #7c7c7c;
				transition-duration: 200ms;
				transition-property: color;

				&:hover {
					color: ${hoverColor ? hoverColor : "unset"};

					&:before {
						background-color: ${hoverColor ? hoverColor : "unset"};
					}
				}

				&:before {
					display: block;
					content: "";
					position: absolute;
					top: 50%;
					left: 50%;
					transform: translate(-50%, -50%);
					width: calc(100% + 20px);
					height: calc(100% + 10px);
					border-radius: 9999px;
					z-index: -1;
					opacity: 0.1;
					transition-duration: 200ms;
					transition-property: background-color;
				}
			`}
		>
			<GoogleIcon fontSize={20} name={icon} />
			{number !== 0 && (
				<span
					css={css`
						font-size: 13px;
						font-weight: bold;
						line-height: 1;
						color: #7c7c7c;
						user-select: none;
					`}
				>
					{number}
				</span>
			)}
		</div>
	);
};

export default function () {
	const [selectedHeaderNav, setSelectedHeaderNav] = useState<string>("following");

	const headerNavList = [
		{ id: "following", name: "フォロー中" },
		{ id: "recommended", name: "おすすめ" }
	];

	return (
		<MainApp>
			<Helmet>
				<link rel="canonical" href={`https://${siteDomain}/`} />
			</Helmet>
			<header
				css={css`
					display: flex;
					align-items: center;
					justify-content: space-around;
					border-bottom: 1px solid var(--color-gray);
					height: 55px;
				`}
			>
				{headerNavList.map((item) => {
					return (
						<TimelineHeaderListItem
							key={item.id}
							selected={item.id === selectedHeaderNav}
							onClick={() => {
								setSelectedHeaderNav(item.id);
							}}
						>
							{item.name}
						</TimelineHeaderListItem>
					);
				})}
			</header>
			<section>
				<article
					css={css`
						padding: 15px;
					`}
				>
					<div
						css={css`
							display: flex;
							align-items: flex-start;
							gap: 15px;
							margin-bottom: 15px;
						`}
					>
						<div
							css={css`
								width: 40px;
							`}
						>
							<img
								css={css`
									width: 100%;
									aspect-ratio: 1/1;
									vertical-align: bottom;
									border-radius: 9999px;
								`}
								src="https://yt3.googleusercontent.com/21x1Ab6pEffGItAcNTjcYUkG3IzQ1y--5cUUjtEhrUEuz2iCttL08vswnPRe1XvtBaZ0yUAm=s176-c-k-c0x00ffffff-no-rj"
								alt="プロフィール画像"
							/>
						</div>
						<div>
							<div>テキスト</div>
						</div>
					</div>
					<div
						css={css`
							display: flex;
							justify-content: space-between;
							margin-left: calc(40px + 15px);
							gap: 30px;
						`}
					>
						<PostAction icon="mode_comment" number={123} hoverColor="#81D4FA" />
						<PostAction icon="repeat" number={123} hoverColor="#81C784" />
						<PostAction icon="favorite" number={123} hoverColor="#F48FB1" />
						<PostAction icon="bookmark" hoverColor="#42A5F5" />
					</div>
				</article>
			</section>
		</MainApp>
	);
}
