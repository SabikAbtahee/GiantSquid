import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subject } from "rxjs";
@Component({
	selector: "app-classic-layout",
	templateUrl: "./classic-layout.component.html",
	styleUrls: ["./classic-layout.component.scss"]
})
export class ClassicLayoutComponent implements OnInit, OnDestroy {
	_unsubscribeAll: Subject<void>;

	constructor() {
		this._unsubscribeAll = new Subject();
	}

	ngOnInit(): void {
		console.log("OnClassic component");
	}

	ngOnDestroy(): void {
		this._unsubscribeAll.next();
		this._unsubscribeAll.complete();
		this._unsubscribeAll.unsubscribe();
	}
}
