// Ratings follow the ranked order supplied for Impossible CCL.
export const impossibleRatings = ["rate","rate","rate","featured","rate","featured","featured","epic","featured","rate","epic","featured","featured","legendary","featured","epic","epic","epic","epic","featured","featured","epic","featured","legendary","legendary","legendary","legendary","featured","featured","featured","mythic","rate","featured","featured","featured","epic","legendary"];
export const platformerRatings = ["featured", "rate"];
export function getImpossibleRating(index, platformer = false) {
    return (platformer ? platformerRatings : impossibleRatings)[index] || null;
}
