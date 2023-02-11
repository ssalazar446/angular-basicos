import { NgModule } from '@angular/core'
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';
import { CommonModule } from '@angular/common';


@NgModule ({
    declarations: [
        // Aquí van los componentes
        HeroeComponent,
        ListadoComponent
    ],
    exports: [
        // Aquí van los componentes que quiero que sean visibles fuera de este módulo
        ListadoComponent //Por ejemplo este esta en el html de app.component
    ],
    imports: [
        // Aquí van los módulos
        CommonModule 
    ]

})
export class HeroesModule { }