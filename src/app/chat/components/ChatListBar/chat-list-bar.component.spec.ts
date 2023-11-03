import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ChatListBarComponent } from "./chat-list-bar.component";

describe("ChatListBarComponent", () => {
	let component: ChatListBarComponent;
	let fixture: ComponentFixture<ChatListBarComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ChatListBarComponent]
		}).compileComponents();

		fixture = TestBed.createComponent(ChatListBarComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
