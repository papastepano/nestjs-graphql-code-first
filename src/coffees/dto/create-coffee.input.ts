import { Field, InputType } from '@nestjs/graphql';

@InputType({ description: 'Create cofee input object type.' })
export class CreateCoffeeInput {
  @Field(() => String, { description: 'A new coffee name' })
  name: string;
  brand: string;
  flavours: string[];
}
