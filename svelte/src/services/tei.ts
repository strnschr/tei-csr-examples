import CETEI from "CETEIcean";

const tei = new CETEI();

export const addBehaviors = (behaviors: any): void => {
  tei.addBehaviors({ tei: behaviors });
};

export const getTeiAsHtml5 = (url: string): Promise<Node> => {
  return new Promise((resolve) => tei.getHTML5(url, resolve));
};
