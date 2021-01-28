import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatEditProntuarioComponent } from './creat-edit-prontuario.component';

describe('CreatEditProntuarioComponent', () => {
  let component: CreatEditProntuarioComponent;
  let fixture: ComponentFixture<CreatEditProntuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatEditProntuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatEditProntuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
