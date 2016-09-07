/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ConvertService } from './convert.service';

describe('Service: Convert', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConvertService]
    });
  });

  it('should ...', inject([ConvertService], (service: ConvertService) => {
    expect(service).toBeTruthy();
  }));
});
