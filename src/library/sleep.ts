/**
 * Sleep function
 *
 * @param ms time in milliseconds
 */

export default function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}