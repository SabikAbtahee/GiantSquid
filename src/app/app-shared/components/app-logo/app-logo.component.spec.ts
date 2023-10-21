import { ComponentFixture, TestBed } from "@angular/core/testing";

import { AppLogoComponent } from "./app-logo.component";

describe("AppLogoComponent", () => {
	let component: AppLogoComponent;
	let fixture: ComponentFixture<AppLogoComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [AppLogoComponent]
		});
		fixture = TestBed.createComponent(AppLogoComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
