import { gql } from '@apollo/client';


export const SAVE_SELECTED_BEDROOM_MUTATION = gql`
  mutation SaveSelectedBedroom($selectedBedroom: String!) {
    saveSelectedBedroom(selectedBedroom: $selectedBedroom) {
      _id
      selectedBedroom
    }
  } `

  


  export const SAVE_SELECTED_PICKUP_MUTATION = gql`
  mutation SavePickUpAccess($pickUpAccess: PickUpAccessInput!) {
    savePickUpAccess(pickUpAccess: $pickUpAccess) {
      _id
      title
      answer {
        Single
        Double
        ThreeOrMore
        Storage
        Appartment
      }
    }
  }
`
