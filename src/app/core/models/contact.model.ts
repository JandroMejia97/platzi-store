import { Resource } from './resource.model';
import { Message } from './message.model';

export class Contact extends Resource {
  name: string;
  email: string;
  messages: Message[];
}
