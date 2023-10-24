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
			}
		],
		FeatureName: Feature.Dashboard,
		IsHidden: false,
		Order: 1
	}
];
