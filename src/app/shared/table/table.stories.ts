import { storiesOf, moduleMetadata } from '@storybook/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { action } from '@storybook/addon-actions';
import notes from './table.doc.md';
import { TableComponent } from './table.component';
import { TooltipComponent } from '../tooltip/tooltip.component';
import { listTableMock as list } from '@app/mocks';
import star from '../../../assets/images/ic-star.svg';

storiesOf('Table Component', module)
  .addParameters({ notes })
  .addDecorator(storyFn => ({
    template: `<div style="width: 610px">${storyFn().template}<div>`,
    props: {
      list: [...list],
      pathSVG: star,
      exampleEmitEvent: action('Row'),
    },
  }))
  .addDecorator(
    moduleMetadata({
      declarations: [TableComponent, TooltipComponent],
      imports: [BrowserAnimationsModule],
    }),
  )
  .add('Basic', () => ({
    template: `
    <app-table id="Tabela_Exemplo"
    [headerArray]="['cabeçalho1','cabeçalho2','cabeçalho3']"
    [propertyArray]="['nome','idade','cargo']"
    [contentArray]="list"
    ></app-table>`,
  }))
  .add('With Buttons', () => ({
    template: `
    <app-table id="Tabela_Exemplo"
    [headerArray]="['Nome','Idade','Cargo']"
    [propertyArray]="['nome','idade','cargo']"
    [contentArray]="list"
    [showEdit]="true"
    (emitEditButtonEvent)="exampleEmitEvent($event)"
    [showDelete]="true"
    (emitDeleteButtonEvent)="exampleEmitEvent($event)"
    (emitGenericButtonEvent)="exampleEmitEvent($event)"
    [srcGenericButton]="pathSVG"
    textTooltipGenericButton="Texto dica"
    ></app-table>`,
  }))
  .add('With Loader', () => ({
    template: `
    <app-table id="Tabela_Exemplo"
    [headerArray]="['Nome','Idade','Cargo']"
    [propertyArray]="['nome','idade','cargo']"
    [contentArray]="list"
    [showEdit]="true"
    (emitEditButtonEvent)="exampleEmitEvent($event)"
    [showDelete]="true"
    (emitDeleteButtonEvent)="exampleEmitEvent($event)"
    (emitGenericButtonEvent)="exampleEmitEvent($event)"
    [srcGenericButton]="pathSVG"
    textTooltipGenericButton="Texto dica"
    [loading]="true"
    ></app-table>`,
  }))
  .add('Multiselect', () => ({
    template: `
    <app-table
      id="Tabela_Exemplo"
      [headerArray]="['cabeçalho1','cabeçalho2','cabeçalho3']"
      [propertyArray]="['nome','idade','cargo']"
      [contentArray]="list"
      [multiselect]="true"
      (multiselectEvent)="exampleEmitEvent($event)"
    ></app-table>`,
  }));
