import { Deserializable } from './deserializable.interface';
import { Abilities } from './abilities';

export class PokemonDetail implements Deserializable {
	abilities?: Abilities[];
    base_experience?: number;
    forms?: any[];
    game_indices?: [];
    height?: number;
    held_items?: any[];
    id?: number;
    is_default?: boolean;
    location_area_encounters?:string;
    moves?: any[];
    name?: string;
    order?:number;
    past_types?: any[];
    species?: object;
    sprites: object={};
    stats?: any[];
    types?: any[];
    weight?: number;
    imageUrl?:any;

    
    addUrlImage(){
		this.imageUrl=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.id}.svg`
	}

	deserialize(input: any) {

	    /* Assign input to our object
	     * BEFORE deserialize our address
	     * to prevent already deserialized address
	     * from being overwritten.
	     */
	    Object.assign(this, input);

	    return this;
	}
}
