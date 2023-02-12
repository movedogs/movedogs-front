// export const BACKEND_URL = "http://localhost:4200";
export const BACKEND_URL = "https://api.movedogs.org";
export interface IPackage {
  packageName: string;
  githubURI: string;
  version: string;
  license: string;
  timestamp: number;
  description: string;
}

export interface IModule {
  packageName: string;
  moduleName: string;
}

export const hashtagList = ["aptos", "move", "library"];
