import { NgModule } from '@angular/core'
import { ContadorComponent } from './contador/contador.component';
import { CommonModule } from '@angular/common';


@NgModule({
    declarations: [
        // Aquí van los componentes
        ContadorComponent
    ],
    exports: [
        // Aquí van los componentes que se van a exportar
        ContadorComponent
    ],
    imports: [
        // Aquí van los módulos
        CommonModule
    ],
})
export class ContadorModule { }