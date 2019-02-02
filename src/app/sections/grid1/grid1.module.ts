import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { Grid1Component } from './grid1.component';

export const COMMON_IMPORTS = [
    FlexLayoutModule
];
export const COMMON_DECLARATIONS = [Grid1Component];

@NgModule({
    imports: COMMON_IMPORTS,
    declarations: COMMON_DECLARATIONS,
    exports: COMMON_DECLARATIONS
})

export class Grid1Module{}
