import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EjNgIFComponent } from './ej-ng-if.component';

describe('EjNgIFComponent', () => {
  let component: EjNgIFComponent;
  let fixture: ComponentFixture<EjNgIFComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EjNgIFComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EjNgIFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
