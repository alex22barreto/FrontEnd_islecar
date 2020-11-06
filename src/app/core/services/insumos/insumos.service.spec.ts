import { TestBed } from '@angular/core/testing';

import { InsumosService } from './insumos.service';

describe('InsumosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InsumosService = TestBed.get(InsumosService);
    expect(service).toBeTruthy();
  });
});
