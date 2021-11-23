import { EstadosBrService } from './estadosBr.service';
import { TestBed } from '@angular/core/testing';


describe('EstadosBrService', () => {
  let service: EstadosBrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EstadosBrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
