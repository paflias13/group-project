const productReducer = (state, action) => {
    console.log(action)
    switch (action.type) {
        case 'add':
            {
                return {
                    products: state.products === null ? [action.product]
                        : state.products.filter(product => product.title !== action.product.title).concat([action.product])
                }
            }
        default:
            return state
    }
}

export default productReducer