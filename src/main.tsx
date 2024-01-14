import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider, Helmet } from "react-helmet-async";
import Home from "@/routes/Home";
import Post from "@/routes/Post";
import Profile from "@/routes/Profile";
import NotFound from "@/routes/NotFound";
import "@/main.css";
import { siteDomain, siteTitle } from "@/define";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<HelmetProvider>
			<Helmet>
				<title>{siteTitle}</title>
				<link rel="canonical" href={`https://${siteDomain}/`} />
				<meta name="description" content="痒いところに手が届くSNS - SkyStation -" />
			</Helmet>

			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/post/:postId" element={<Post />} />
					<Route path="/:username" element={<Profile />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</HelmetProvider>
	</React.StrictMode>
);
