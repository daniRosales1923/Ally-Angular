import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { ServicesComponent } from './services.component';

export const COMMON_IMPORTS = [
    FlexLayoutModule
];
export const COMMON_DECLARATIONS = [ServicesComponent];

@NgModule({
    imports: COMMON_IMPORTS,
    declarations: COMMON_DECLARATIONS,
    exports: COMMON_DECLARATIONS
})

export class ServicesModule{}
