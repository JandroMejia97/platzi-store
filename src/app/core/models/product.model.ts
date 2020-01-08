import { Resource } from './resource.model';

export class Product extends Resource {
  title: string;
  price: number;
  description: string;
  image: string;
}
