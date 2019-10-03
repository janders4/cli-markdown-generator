export interface Answer {
  files: Object;
  provider: ProviderValue;
}

export interface Choice {
  name: string;
  value: GithubChoiceValue | GitlabChoiceValue | ProviderValue;
}

export enum GithubChoiceValue {
  FEATURE_REQUEST = "FEATURE_REQUEST"
}

export enum GitlabChoiceValue {
  MERGE_REQUEST = "MERGE_REQUEST"
}

export enum ProviderValue {
  GITHUB = "Github",
  GITLAB = "Gitlab"
}
