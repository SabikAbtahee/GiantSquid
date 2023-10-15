import { Component, OnDestroy, OnInit } from "@angular/core";

import { Subject } from "rxjs";
@Component({
	selector: "app-empty-layout",
	templateUrl: "./empty-layout.component.html",
	styleUrls: ["./empty-layout.component.scss"]
})
export class EmptyLayoutComponent implements OnInit, OnDestroy {
	_unsubscribeAll: Subject<void>;
	constructor() {
		this._unsubscribeAll = new Subject();
	}
	ngOnInit(): void {
		console.log("Empty Layout");
	}
	ngOnDestroy(): void {
		this._unsubscribeAll.next();
		this._unsubscribeAll.complete();
		this._unsubscribeAll.unsubscribe();
	}
}
