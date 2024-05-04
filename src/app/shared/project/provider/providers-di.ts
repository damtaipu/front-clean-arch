
import { CardImplementationsRepository } from '@data/repositories/card/card-implementation.repository';
import { CardRepository } from '@domain/repositories/card/card.repository';



export const dependencyInversion = {
    card: {
        provide: CardRepository,
        useClass: CardImplementationsRepository,
    }
};
