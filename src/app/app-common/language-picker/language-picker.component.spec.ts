import { ComponentFixture, TestBed } from "@angular/core/testing";

import { LanguagePickerComponent } from "./language-picker.component";

describe("LanguagePickerComponent", () => {
	let component: LanguagePickerComponent;
	let fixture: ComponentFixture<LanguagePickerComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [LanguagePickerComponent]
		});
		fixture = TestBed.createComponent(LanguagePickerComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
