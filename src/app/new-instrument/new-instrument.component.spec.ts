import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewInstrumentComponent } from './new-instrument.component';

describe('NewInstrumentComponent', () => {
  let component: NewInstrumentComponent;
  let fixture: ComponentFixture<NewInstrumentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewInstrumentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewInstrumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
