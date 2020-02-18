import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { ProductsService } from './products.service';
import { MessageService } from './message.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { Product } from '@core/models/product.model';
import { environment } from 'src/environments/environment';

fdescribe('ProductsService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let messageService: MessageService;
  let service: ProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, MatSnackBarModule]
    });
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    messageService = TestBed.inject(MessageService);
    service = TestBed.inject(ProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  fdescribe('tests for getList', () => {
    // Arrange
    const expectData: Product[] = [
      {
        id: 1,
        image: 'assets/images/camiseta.png',
        title: 'Camiseta',
        price: 80000,
        description: 'bla bla bla bla bla'
      },
      {
        id: 2,
        image: 'assets/images/hoodie.png',
        title: 'Hoodie',
        price: 80000,
        description: 'bla bla bla bla bla'
      },
      {
        id: 3,
        image: 'assets/images/mug.png',
        title: 'Mug',
        price: 80000,
        description: 'bla bla bla bla bla'
      },
      {
        id: 4,
        image: 'assets/images/pin.png',
        title: 'Pin',
        price: 80000,
        description: 'bla bla bla bla bla'
      }
    ];
    let dataError: HttpErrorResponse;
    let dataResponse: Product[];

    // Assert
    it('should be request method \'GET\'', () => {
      // Act
      service.getList().subscribe(
        response => dataResponse = response,
        error => dataError = error
      );
      const req = httpTestingController.expectOne(`${environment.apiUrl}/products`);
      req.flush(expectData);
      expect(req.request.method).toEqual('GET');
    });

    it('should be return a products array', () => {
      expect(dataResponse instanceof Array).toBeTruthy();
    });

    it('should be return an array of products of length 4', () => {
      expect(dataResponse.length).toEqual(4);
    });

    it('should be undefined', () => {
      expect(dataError).toBeUndefined();
    });

  });
});
