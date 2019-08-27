import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdzPopupLivreComponent } from './adz-popup-livre.component';

describe('AdzPopupLivreComponent', () => {
  let component: AdzPopupLivreComponent;
  let fixture: ComponentFixture<AdzPopupLivreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdzPopupLivreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdzPopupLivreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
