import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProntuarioComponent } from './list-prontuario.component';

describe('ListProntuarioComponent', () => {
  let component: ListProntuarioComponent;
  let fixture: ComponentFixture<ListProntuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListProntuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListProntuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
