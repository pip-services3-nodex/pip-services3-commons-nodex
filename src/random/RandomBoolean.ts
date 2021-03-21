/** @module random */

/**
 * Random generator for boolean values.
 * 
 * ### Example ###
 * 
 *     let value1 = RandomBoolean.nextBoolean();    // Possible result: true
 *     let value2 = RandomBoolean.chance(1,3);      // Possible result: false
 */
export class RandomBoolean {

    /**
     * Calculates "chance" out of "max chances".
     * Example: 1 chance out of 3 chances (or 33.3%)
     * 
     * @param chance       a chance proportional to maxChances.
     * @param maxChances   a maximum number of chances
     */
    public static chance(chance: number, maxChances: number): boolean {
    	chance = chance >= 0 ? chance : 0;
    	maxChances = maxChances >= 0 ? maxChances : 0;
    	if (chance == 0 && maxChances == 0) {
        	return false;
        }
    	
        maxChances = Math.max(maxChances, chance);
        let start = (maxChances - chance) / 2;
        let end = start + chance;
        let hit = Math.random() * maxChances;
        return hit >= start && hit <= end;
    }

    /**
     * Generates a random boolean value.
     * 
     * @returns a random boolean.
     */
    public static nextBoolean(): boolean {
        return Math.random() * 100 < 50;
    }
}
