import { NgModule } from "@angular/core";
import {
  MatButtonModule,
  MatIconModule,
  MatTableModule,
  MatDialogModule,
  MatSidenavModule,
} from "@angular/material";

const Material = [
  MatButtonModule,
  MatIconModule,
  MatTableModule,
  MatDialogModule,
  MatSidenavModule,
];
@NgModule({
  imports: [Material],
  exports: [Material],
})
export class MaterialModule {}
