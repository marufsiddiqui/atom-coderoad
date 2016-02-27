import * as Type from '../../actions/actionTypes';


export default function tutorialsReducer(tutorials = [], action): string[] {
  switch (action.type) {
    case Type.LOAD_TUTORIALS:
      return action.payload.tutorials;
    default:
      return tutorials;
  }
}
