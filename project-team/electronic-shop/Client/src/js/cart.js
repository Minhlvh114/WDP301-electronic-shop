const cart = []
let total = 0
const subscribers = []

// const notify = (action) => {
//     const snapshot = cart.slice()
//     subscribers.forEach((cb) => {
//         try { cb(action, snapshot) } catch (e) { console.error('cart subscriber error', e) }
//     })
// }

const addCart = (p) => {
    cart.push(p)
    // notify('add')
    return cart
}

const deleteCart = (p) => {
    const idx = cart.findIndex((c) => c === p)
    if (idx !== -1) cart.splice(idx, 1)
    // notify('delete')
    return cart
}

const showCart = () => {
    console.log(cart);
    
    return cart.slice()
}

const setTotal = (t) => {
    total = t
    return total
}

const getTotal = () => {
    return total
}

const subscribe = (cb, options = {}) => {
    if (typeof cb !== 'function') return () => {}
    const { emitInitial = true } = options
    subscribers.push(cb)
    // emit current value if requested
    if (emitInitial) {
        try { cb('init', cart.slice()) } catch (e) { console.error('cart subscriber error', e) }
    }
    return () => {
        const i = subscribers.indexOf(cb)
        if (i !== -1) subscribers.splice(i, 1)
    }
}

export default {addCart, deleteCart, showCart, setTotal, getTotal, subscribe}