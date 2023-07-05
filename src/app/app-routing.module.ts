import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './componentes/book/book.component';
import { AutorComponent } from './componentes/autor/autor.component';

const routes: Routes = [
  {path: "",redirectTo:"book", pathMatch:"full"},
  { path: "book", component: BookComponent},
  { path: "autor", component: AutorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
