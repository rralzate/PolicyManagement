import { TestBed } from '@angular/core/testing';
import { ManagerClientsService } from './manager-clients.service';



describe('ManagerClientsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ManagerClientsService = TestBed.get(ManagerClientsService);
    expect(service).toBeTruthy();
  });
});
