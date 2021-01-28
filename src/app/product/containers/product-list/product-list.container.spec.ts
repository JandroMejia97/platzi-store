import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ProductListContainer } from './product-list.container';

describe('ProductListContainer', () => {
  let component: ProductListContainer;
  let fixture: ComponentFixture<ProductListContainer>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductListContainer ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
