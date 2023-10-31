import { Feature } from "./navigation.enum";
import { Business } from "./navigation.interface";

export const BusinessList: Array<Business> = [
	{
		Title: "DASHBOARDS",
		SubTitle: "UNIQUE_DASHBOARD_DESIGNS",
		Icon: "home",
		ChildBusinesses: [
			{
				Title: "PROJECT",
				SubTitle: null,
				FeatureName: Feature.Project,
				Icon: "assignment",
				ChildBusinesses: null,
				IsHidden: false,
				Order: 1
			},
			{
				Title: "ANALYTICS",
				SubTitle: null,
				FeatureName: Feature.Analytics,
				Icon: "analytics",
				ChildBusinesses: null,
				IsHidden: false,
				Order: 2
			},
			{
				Title: "FINANCE",
				SubTitle: null,
				FeatureName: Feature.Finance,
				Icon: "payments",
				ChildBusinesses: null,
				IsHidden: false,
				Order: 3
			},
			{
				Title: "CRYPTO",
				SubTitle: null,
				FeatureName: Feature.Crypto,
				Icon: "monetization_on",
				ChildBusinesses: null,
				IsHidden: false,
				Order: 4
			}
		],
		FeatureName: Feature.Dashboard,
		IsHidden: false,
		Order: 1
	}
];
