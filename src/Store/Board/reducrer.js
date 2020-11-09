import { FLIP_TILE } from "../types";

const boardColors = [
  "red",
  "green",
  "yellow",
  "white",
  "black",
  "blue",
  "gray",
  "orange",
  "red",
  "green",
  "yellow",
  "white",
  "black",
  "blue",
  "gray",
  "orange"
];
const boardItems = boardColors.map((color, index) => {
  return {
    id: index,
    color: color,
    open: false,
    complete: false
  };
});
const shuffledBoard = boardItems.sort(function (a, b) {
  return 0.5 - Math.random();
});
const initialState = {
  step: 0,
  board: shuffledBoard,
  checkedTiles: {},
  finish: false
};

export const boardReducer = (state = initialState, action) => {
  switch (action.type) {
    case FLIP_TILE:
      let updatedCheckedTiles = {};
      let updatedBoard = null;
      const updatedStep = state.step + 1;

      const flipedTile = state.board.find(
        (tile) => tile.id === action.payload.id
      );

      if (updatedStep % 2) {
        updatedCheckedTiles = flipedTile;
        updatedBoard = state.board.map((item) => {
          if (item.id === action.payload.id) {
            return Object.assign({}, item, { open: true });
          } else {
            return Object.assign({}, item, { open: false });
          }
        });
      } else {
        if (flipedTile.color === state.checkedTiles.color) {
          updatedBoard = state.board.map((item) => {
            if (
              item.color === action.payload.color ||
              item.id === state.checkedTiles
            ) {
              return Object.assign({}, item, { open: true, complete: true });
            } else {
              return item;
            }
          });
        } else {
          updatedBoard = state.board.map((item) => {
            if (item.id === action.payload.id) {
              return Object.assign({}, item, { open: true });
            } else {
              return item;
            }
          });
        }
      }
      const updateFinish = updatedBoard.filter(
        (item) => item.complete === false
      ).length
        ? false
        : true;

      return {
        ...state,
        board: updatedBoard,
        step: updatedStep,
        checkedTiles: updatedCheckedTiles,
        finish: updateFinish
      };
    default:
      return state;
  }
};
