# Default Pagination Component

---

### Propriedades do Componente

| Propriedade       | Tipo         | Descrição                                       | Valor                    | Padrão |
| ----------------- | ------------ | ----------------------------------------------- | ------------------------ | ------ |
| paginacao         | Pagination   | Objeto pagination                               | Pagination               | `null` |
| pageSizes         | number[]     | Numero de elementos da pagina                   | qualquer array de number | `null` |
| maxButtons        | number       | Define o numero maximo de botões antes do "..." | qualquer number          | `null` |
| paginationChanged | EventEmitter | Output quando o numero da pagina muda           | numero atual da pagina   | `null` |
| pageSizeChanged   | EventEmitter | Output quando o tamanh da pagina muda           | tamanho atual da pagina  | `null` |

## Como Usar

### Básico

```ts
 interface Pagination {
  totalDePaginas: number;
  totalDeElementos: number;
  temProxima: boolean;
  primeiraPagina: boolean;
  ultimaPagina: boolean;
  numero: number;
  tamanho: number;
}


@Component({
  ...
})
export class Example {
  list: Pagination = {
    totalDePaginas: 10,
    totalDeElementos: 100,
    temProxima: true,
    primeiraPagina: true,
    ultimaPagina: false,
    numero: 10,
    tamanho: 10,
  };

  pageSize: number[] = [5, 10, 15, 20, 50]
}
```

<br>

```html
<app-default-pagination
  (pageSizeChanged)="exampleEmitEvent($event)"
  (paginationChanged)="exampleEmitEvent($event)"
  [pageSizes]="pageSize"
  [maxButtons]="3"
  [paginacao]="list"
></app-default-pagination>
```
