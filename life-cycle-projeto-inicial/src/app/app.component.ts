import { Component, OnInit } from '@angular/core';
import { Item } from './interfaces/iItem';
import { ListaDeCompraService } from './service/lista-de-compra.service';
import { ItemComponent } from "./components/item/item.component";
import { InputComponent } from "./components/input/input.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [ItemComponent, InputComponent]
})
export class AppComponent implements OnInit {
  title = 'app-lista-de-compras';
  listaDeCompra! : Array<Item>
  constructor(private listaService: ListaDeCompraService) { }
  
  ngOnInit(): void {
   this.listaDeCompra = this.listaService.getListaDeCompra();
   console.log(this.listaDeCompra);
  }
}
