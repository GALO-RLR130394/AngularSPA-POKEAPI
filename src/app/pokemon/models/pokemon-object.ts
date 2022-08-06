import { Deserializable } from './deserializable.interface';
import { Pokemon } from './pokemon-detail.interface';

export class PokemonObject implements Deserializable {
	count:number=0;
	next?:string;
	previous?:string;
	results:Pokemon[]=[];

	deserialize(input: any) {

	    /* Assign input to our object
	     * BEFORE deserialize our address
	     * to prevent already deserialized address
	     * from being overwritten.
	     */
	    Object.assign(this, input);

	    return this;
	}

	addUrlImage(offset:number){
		this.results.map((pokemon,index:number)=>{
			pokemon.imageUrl=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index+1+offset}.svg`;
		});
	}
}
