import { TestBed } from '@angular/core/testing';

import { AdzlivreService } from './AdzLivre.service';

describe('LivreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdzlivreService = TestBed.get(AdzlivreService);
    expect(service).toBeTruthy();
  });
});
