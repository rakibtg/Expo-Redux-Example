export const getContacts = () => ({
    type: 'GET_CONTACTS'
})

export const addContact = c => {
    return {
        type: 'ADD_CONTACTS',
        payload: {
            name: c.name,
            phone: c.phone,
        }
    }
}