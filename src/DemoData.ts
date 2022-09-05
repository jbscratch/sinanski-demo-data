import {generateName} from "./randomName";
import {addThousandSeparator} from "./price";
import {loremIpsum} from "./loremIpsum";
import {randomRange} from "./randomRange";
import {images} from "./images";
import {RandomizeList} from "./RandomizeList/RandomizeList";

type Range = number | [number, number];
type ImageTypes = keyof typeof images;
type RandomImages = Record<ImageTypes, RandomizeList>;

export class DemoData {
    private readonly randomImage: RandomImages;

    constructor() {
        // This uses RandomizeList to enforce random images, that do not repeat before necessary.
        this.randomImage = Object.entries(images).reduce((result, [key, list]) => ({
            ...result,
            [key]: new RandomizeList(list),
        }), {} as RandomImages)
    }

    public readonly id = id;

    public readonly image = (type: ImageTypes) => this.randomImage[type].next();

    public readonly number = (range: Range) => typeof range === 'number'
        ? randomRange(0, range)
        : randomRange(range[0], range[1]);

    public readonly currency = (
        range: Range,
        currency = '€',
        thousand_separator = '.'
    ) =>
        addThousandSeparator(this.number(range), thousand_separator) + currency

    public readonly chance = (chance = 0.5) => Math.random() <= chance;

    public readonly name = generateName;

    public readonly date = (
      start = new Date(2018, 0, 1),
      end = new  Date()
    ) => randomDate(start, end);

    public readonly formattedDate = (start?: Date, end?: Date) =>
      formatDateEuropean(this.date(start, end));

    public readonly text = (length: Range, ending?: string) => {
        const realLength = typeof length === 'number'
            ? length
            : randomRange(length[0], length[1]);

        return loremIpsum(realLength, ending);
    }

    public readonly createArray = (amount: number, value?: (index: number) => string): string[] =>
      new Array(amount).fill('').map((a, i) => value ? value(i) : this.id());

    // public readonly createList = (item: {[index: string | number]: any}) =>
    //     Array.apply(null, Array(7)).map(mockNoteSingle)
}

const formatDateEuropean = (date: Date) =>
  `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`

const randomDate = (start: Date, end: Date) =>
    new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));

export const id = (): string =>
  '_' + Math.random().toString(36).substr(2, 9);
