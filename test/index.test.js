const _ = require('../index');

describe('#add', () => {
    test('returns 3', () => {
        expect(_.add(1, 2)).toBe(3);
    })
})