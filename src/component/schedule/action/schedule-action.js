export const ADD = 'ADD';
export const REMOVE = 'REMOVE';

export function add(event) {
  return {
    type: ADD,
    payload: event
  };
}

export function remove(event) {
  return {
    type: REMOVE,
    payload: event
  };
}
