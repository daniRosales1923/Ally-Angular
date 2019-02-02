import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { NavbarComponent } from './navbar.component';
import { FragmentScrollModule } from 'src/app/directives/fragment-scroll/fragment-scroll.module';

export const COMMON_IMPORTS = [
    FlexLayoutModule,
    FragmentScrollModule
];
export const COMMON_DECLARATIONS = [NavbarComponent];

@NgModule({
    imports: COMMON_IMPORTS,
    declarations: COMMON_DECLARATIONS,
    exports: COMMON_DECLARATIONS
})
export class NavbarModule{}
