import { PokemonObject } from './pokemon-object';

describe('Pokemon', () => {
  it('should create an instance', () => {
    expect(new PokemonObject()).toBeTruthy();
  });
});
