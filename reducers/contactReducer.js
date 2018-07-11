export default (state = [], action) => {
  
  switch( action.type ) {

    case 'GET_CONTACTS':
      return state

    case 'ADD_CONTACTS':
      return [
        ...state,
        {
          name: action.payload.name,
          phone: action.payload.phone
        } 
      ]

    default:
      return state

  }

}