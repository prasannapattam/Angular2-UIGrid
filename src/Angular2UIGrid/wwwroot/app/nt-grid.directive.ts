

export const ntGrid: ng.IComponentOptions = {
    bindings: {
        data: "<"
    },
    template: `<div ui-grid="{ data: $ctrl.data }"></div>`
}

angular.module("ng2uigrid").component("ntGrid", ntGrid);

//export const heroDetail = {
//    bindings: {
//        hero: '<',
//        deleted: '&'
//    },
//    template: `
//    <h2>{{$ctrl.hero.name}} details!</h2>
//    <div><label>id: </label>{{$ctrl.hero.id}}</div>
//    <button ng-click="$ctrl.onDelete()">Delete</button>
//  `,
//    controller: function () {
//        this.onDelete = () => {
//            this.deleted(this.hero);
//        };
//    }
//};

import { Directive, ElementRef, Injector, Input, Output, EventEmitter } from '@angular/core';
import { UpgradeComponent } from '@angular/upgrade/static';

@Directive({
    selector: 'nt-grid'
})
export class NtGridDirective extends UpgradeComponent {
    @Input() data: any;

    constructor(elementRef: ElementRef, injector: Injector) {
        super('ntGrid', elementRef, injector);
    }
}