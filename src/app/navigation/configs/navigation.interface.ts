import { Feature } from "./navigation.enum";

export interface Business {
	Title: string;
	Icon: string;
	SubTitle: string | null;
	FeatureName: Feature;
	ChildBusinesses: Array<Business> | null;
	IsHidden: boolean;
	Order: number;
	// Maybe route path,module paths etc
}
