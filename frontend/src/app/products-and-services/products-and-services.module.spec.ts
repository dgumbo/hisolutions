import { ProductsAndServicesModule } from './products-and-services.module';

describe('ProductsAndServicesModule', () => {
  let productsAndServicesModule: ProductsAndServicesModule;

  beforeEach(() => {
    productsAndServicesModule = new ProductsAndServicesModule();
  });

  it('should create an instance', () => {
    expect(productsAndServicesModule).toBeTruthy();
  });
});
