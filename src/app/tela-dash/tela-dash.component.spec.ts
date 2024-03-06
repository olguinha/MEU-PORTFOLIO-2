import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaDashComponent } from './tela-dash.component';

describe('TelaDashComponent', () => {
  let component: TelaDashComponent;
  let fixture: ComponentFixture<TelaDashComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TelaDashComponent]
    });
    fixture = TestBed.createComponent(TelaDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
