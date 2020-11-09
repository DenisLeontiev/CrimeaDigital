import { FLIP_TILE, FLIP_BACK } from "../types";

export function checkTile(tile) {
  return {
    type: FLIP_TILE,
    payload: tile
  };
}

export function flipBack() {
  console.log(123);
}
