import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GastosAddComponent } from './gastos-add.component';

describe('GastosAddComponent', () => {
  let component: GastosAddComponent;
  let fixture: ComponentFixture<GastosAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GastosAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GastosAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
