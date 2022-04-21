export const SELECT_BREAD = 'SELECT_BREAD';
export const FILTERED_BREAD = 'FILTERED_BREAD';

export const selectBread = (id) => ({
    type: SELECT_BREAD,
    breadID: id,
}) 

export const filteredBread = (id) => ({
    type: FILTERED_BREAD,
    categoryID: id,
})