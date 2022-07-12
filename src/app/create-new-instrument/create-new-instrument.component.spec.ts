import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewInstrumentComponent } from './create-new-instrument.component';

describe('CreateNewInstrumentComponent', () => {
  let component: CreateNewInstrumentComponent;
  let fixture: ComponentFixture<CreateNewInstrumentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateNewInstrumentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNewInstrumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
