let initialState = [
    { id: 10, name: 'pizza', cost: 10, category: 'food' },
    { id: 32, name: 'apples', cost: 5, category: 'food' },
    { id: 53, name: 'tv', cost: 100, category: 'eletronics' },
    { id: 74, name: 'phone', cost: 120, category: 'eletronics' }
];
export default function products(state = initialState, action) {
    switch (action.type) {
        default: return state
    }
}