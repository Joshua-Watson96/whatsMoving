import { gql } from '@apollo/client';


export const SAVE_SELECTED_BEDROOM_MUTATION = gql`
  mutation SaveSelectedBedroom($selectedBedroom: String!) {
    saveSelectedBedroom(selectedBedroom: $selectedBedroom) {
      _id
      selectedBedroom
    }
  }
`;