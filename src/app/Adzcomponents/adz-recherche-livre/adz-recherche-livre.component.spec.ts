import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdzRechercheLivreComponent } from './adz-recherche-livre.component';

describe('AdzRechercheLivreComponent', () => {
  let component: AdzRechercheLivreComponent;
  let fixture: ComponentFixture<AdzRechercheLivreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdzRechercheLivreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdzRechercheLivreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
