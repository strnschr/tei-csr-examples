declare module "CETEIcean" {
  export default class CETEI {
    constructor(options?: { ignoreFragmentId: boolean });
    addBehaviors(behaviors: any): void;
    getHTML5(
      url: string,
      callback?: (data: Node) => void,
      perElementFn?: () => void
    ): any;
  }
}
