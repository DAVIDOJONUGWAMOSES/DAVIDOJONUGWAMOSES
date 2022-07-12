import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfInstrumentsComponent } from './list-of-instruments.component';

describe('ListOfInstrumentsComponent', () => {
  let component: ListOfInstrumentsComponent;
  let fixture: ComponentFixture<ListOfInstrumentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOfInstrumentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfInstrumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
