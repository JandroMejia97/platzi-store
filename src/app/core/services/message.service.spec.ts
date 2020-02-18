import { TestBed } from '@angular/core/testing';

import { MessageService } from './message.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

fdescribe('MessageService', () => {
  let snack: MatSnackBar;
  let service: MessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MatSnackBarModule]
    });
    snack = TestBed.inject(MatSnackBar);
    service = TestBed.inject(MessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
