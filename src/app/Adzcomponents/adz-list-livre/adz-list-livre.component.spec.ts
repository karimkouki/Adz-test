import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdzListLivreComponent } from './adz-list-livre.component';

describe('AdzListLivreComponent', () => {
  let component: AdzListLivreComponent;
  let fixture: ComponentFixture<AdzListLivreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdzListLivreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdzListLivreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
