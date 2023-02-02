export const BACKEND_URL = "http://localhost:4200";

export interface IModule {
  moduleName: string;
  githubURI: string;
  aptosAddress: string;
  version: string;
  license: string;
  author: string;
  timestamp: number;
}

export const hashtagList = ["aptos", "move", "library"];
