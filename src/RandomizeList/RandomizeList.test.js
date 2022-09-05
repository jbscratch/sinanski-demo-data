import {RandomizeList} from "./RandomizeList";
import {randomRange} from "../randomRange";

jest.mock('../randomRange');

describe('RandomizeList', function () {
    it('should return each entry in a list before repeating one', function () {
        randomRange
            .mockReturnValueOnce(2)
            .mockReturnValueOnce(0)
            .mockReturnValueOnce(0)
            .mockReturnValueOnce(1)
        const mockList = ['mock_first', 'mock_second', 'mock_third'];
        const list = new RandomizeList(mockList);
        expect(list.next()).toEqual('mock_third');
        expect(list.next()).toEqual('mock_first');
        expect(list.next()).toEqual('mock_second');
        expect(list.next()).toEqual('mock_second');
    });
});