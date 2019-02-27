import { iterateAllParents, iterateAllChildren, isEqual, PARENT, CHILDREN } from './helpers'

test(`iterateAllParents iterates recursively over all ${PARENT}`, () => {
    const mock = jest.fn()

    const tree = {
        key: '1',
        [PARENT]: {
            key: '2',
            [PARENT]: {
                key: '3',
                [PARENT]: {
                    key: '4'
                }
            }
        }
    }

    iterateAllParents(tree, mock)
    expect(mock).toHaveBeenCalledTimes(3)
})

test(`iterateAllChildren iterates recursively over all ${CHILDREN}`, () => {
    const mock = jest.fn()

    const tree = {
        key: '1',
        [CHILDREN]: [{
            key: '2',
            [CHILDREN]: [ { key: '3' }, { key: '4' }]
        }, {
            key: '5',
            [CHILDREN]: [ { key: '6' }, { key: '7' }]
        }]
    }

    iterateAllChildren(tree, mock)
    expect(mock).toHaveBeenCalledTimes(6)
})

test('isEqual returns true if first and thirth argument are unchanged', () => {
    const one = {}
    const two = {}
    const three = {}

    const args = [
        one,
        two,
        three
    ]

    const newArgs = [
        one,
        two,
        three
    ]

    expect(isEqual(args, newArgs)).toBe(true)
})

test('isEqual returns false if first argument is changed', () => {
    const one = {}
    const two = {}
    const three = {}

    const args = [
        one,
        two,
        three
    ]

    const newArgs = [
        {},
        two,
        three
    ]

    expect(isEqual(args, newArgs)).toBe(false)
})

test('isEqual returns false if thirth argument is changed', () => {
    const one = {}
    const two = {}
    const three = {}

    const args = [
        one,
        two,
        three
    ]

    const newArgs = [
        one,
        two,
        {}
    ]

    expect(isEqual(args, newArgs)).toBe(false)
})

test('isEqual returns true if second argument is changed', () => {
    const one = {}
    const two = {}
    const three = {}

    const args = [
        one,
        two,
        three
    ]

    const newArgs = [
        one,
        {},
        three
    ]

    expect(isEqual(args, newArgs)).toBe(true)
})

test('isEqual returns false if first and second argument is changed', () => {
    const one = {}
    const two = {}
    const three = {}

    const args = [
        one,
        two,
        three
    ]

    const newArgs = [
        {},
        two,
        {}
    ]

    expect(isEqual(args, newArgs)).toBe(false)
})