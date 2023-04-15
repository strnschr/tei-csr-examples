declare module 'CETEIcean' {
  export default class CETEI {
    constructor();
    makeHTML(doc: any): any;
    getHTML5(
      url: string,
      callback?: (data: any) => void,
      perElementFn?: () => void
    ): any;
  }
}
