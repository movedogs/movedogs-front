// export const BACKEND_URL = "http://localhost:4200";
export const BACKEND_URL = "https://api.movedogs.org";
export interface IModule {
  moduleName: string;
  githubURI: string;
  version: string;
  license: string;
  timestamp: number;
  description: string;
  packageName: string;
}

export interface IPackage {
  moduleName: string;
  packageName: string;
}

export const hashtagList = ["aptos", "move", "library"];
