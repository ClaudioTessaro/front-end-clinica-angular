# Table Componente

---

### Propriedades do Componente

| Propriedade              | Tipo         | Descrição                                         | Valor                     | Padrão  |
| ------------------------ | ------------ | ------------------------------------------------- | ------------------------- | ------- |
| headerArray              | string[]     | Array com os nomes das colunas                    | qualquer array de strings | `null`  |
| propertyArray            | string[]     | Array com os nomes das propriedades do objeto     | qualquer array de strings | `null`  |
| contentArray             | T[]          | Lista de objetos da tabela                        | qualquer array de objetos | `null`  |
| showEdit                 | Boolean      | Mostra o botão de edição                          | `true` or `false`         | `false` |
| emitEditButtonEvent      | EventEmitter | Output quando o botão de edição é clicado         | Conteúdo da linha         | `null`  |
| showDelete               | Boolean      | Mostra o botão de exclusão                        | `true` or `false`         | `false` |
| emitDeleteButtonEvent    | EventEmitter | Output quando o botão de exclusão é clicado       | Conteúdo da linha         | `null`  |
| srcGenericButton         | string       | Src com o caminho do icone que você quer no botão | qualquer caminho valido   | `null`  |
| emitGenericButtonEvent   | EventEmitter | Output quando o botão generico é clicado          | Conteúdo da linha         | `null`  |
| textTooltipGenericButton | string       | Texto do tooltip do botão generico                | qualquer string           | ``      |
| loading                  | boolean      | Mostra o loader                                   | `true` or `false`         | `false` |
| multiselect              | boolean      | Multiseleção                                      | `true` or `false`         | `false` |
| multiselectEvent         | boolean      | Output quando multiselect é acionado              | Itens selecionados        | `[]`    |

## Como Usar

### Basico

```html
<app-table
  [headerArray]="['Name','Age','Address']"
  [propertyArray]="['peopleName','peopleAge','peopleAddress']"
  [contentArray]="peopleObject"
></app-table>
```

### Com botões de ações

```html
<app-table
  [headerArray]="['Name','Age','Address']"
  [propertyArray]="['peopleName','peopleAge','peopleAddress']"
  [contentArray]="peopleObject"
  [showEdit]="true"
  (emitEditButtonEvent)="exempleFunctionEdit($event)"
  [showDelete]="true"
  (emitDeleteButtonEvent)="exempleFunctionDelete($event)"
  [srcGenericButton]="'assets/images/icons/star.svg'"
  (emitGenericButtonEvent)="exempleFunctionGeneric($event)"
  textTooltipGenericButton="Generic button tooltip"
></app-table>
```

### Com multiselect

```html
<app-table
  id="Tabela_Exemplo"
  [headerArray]="['cabeçalho1','cabeçalho2','cabeçalho3']"
  [propertyArray]="['nome','idade','cargo']"
  [contentArray]="list"
  [multiselect]="true"
  (multiselectEvent)="exampleEmitEvent($event)"
></app-table>
```


#### Importante ⚠️
- Para usar o multiselect é obrigatório que cada linha do objeto passado para a tabela possua uma key nomeada 'id' e ele precisa ser unico.