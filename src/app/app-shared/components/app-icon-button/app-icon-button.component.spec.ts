import { ComponentFixture, TestBed } from "@angular/core/testing";

import { AppIconButtonComponent } from "./app-icon-button.component";

describe("AppIconButtonComponent", () => {
	let component: AppIconButtonComponent;
	let fixture: ComponentFixture<AppIconButtonComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [AppIconButtonComponent]
		});
		fixture = TestBed.createComponent(AppIconButtonComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
