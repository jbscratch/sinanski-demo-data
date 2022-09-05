import {randomRange} from "../randomRange";

export class RandomizeList {
  public decliningList: string[];
  constructor(public readonly list: string[]) {
    this.decliningList = list;
  }
  public readonly next = () => {
    const index = randomRange(0, this.decliningList.length - 1);
    const entry = this.decliningList[index];
    const cleanedList = this.decliningList.filter(e => e !== entry);
    if (!cleanedList.length) {
      this.decliningList = this.list;
    } else {
      this.decliningList = cleanedList
    }
    return entry;
  }
}
