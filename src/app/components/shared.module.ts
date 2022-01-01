import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import * as _atoms from './atoms';
import * as _molecules from './molecules';
import * as _organisms from './organisms';
import * as _templates from './template';
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {RouterModule} from "@angular/router";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {MatTabsModule} from "@angular/material/tabs";

const ATOMS = [
  _atoms.AtomsButtonComponent
];

const MOLECULES = [
  _molecules.MoleculesHeaderComponent,
  _molecules.MoleculesFooterComponent,
  _molecules.MoleculesNavComponent
]

const ORGANISMS = [
  _organisms.OrganismsTableComponent,
  _organisms.OrganismsSidebarComponent,
]

const TEMPLATE = [
  _templates.TemplatesHomeComponent,
 ]

@NgModule({
  declarations: [...ATOMS, ...MOLECULES, ...ORGANISMS, ...TEMPLATE],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    RouterModule,
    FontAwesomeModule,
    MatTabsModule
  ],
  exports: [
    ...ATOMS,
    ...MOLECULES,
    ...ORGANISMS,
    ...TEMPLATE
  ]
})
export class SharedModule {
}
