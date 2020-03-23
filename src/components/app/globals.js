

export const GH_BASE_URL = "https://github.com";
export const GIST_BASE_URL = "https://gist.github.com";
export const SEARCH_BASE_URL = `${GH_BASE_URL}/search?`;
export const USER_BASE_URL = `${GH_BASE_URL}/search?type=Users&q=user%3A`;
export const REPO_SEARCH_URL = `${GH_BASE_URL}/search?type=Repositories&q=`; // org%3Agithub+user%3Adata


export const TAB_JUMP = "Quick Jump";
export const TAB_REPO = "Repo";
export const TAB_ORG = "Org";
export const TAB_ISSUES = "Issues";
export const TAB_PATH = "Path";
export const TAB_ALL = "Search All";

export const JUMP_ROOT = "github.com";
export const JUMP_PAGES = "github.io";
export const JUMP_GIST = "gist.github.com"

export const SEARCH_TYPE_USER = "Users";
export const SEARCH_TYPE_CODE = "Code";
export const SEARCH_TYPE_REPO = "Repositories";
export const SEARCH_TYPE_COMMITS = "Commits";
export const SEARCH_TYPE_ISSUES = "Issues";
export const SEARCH_TYPE_PACKAGES = "Packages";
export const SEARCH_TYPE_MARKETPLACE = "Marketplace";
export const SEARCH_TYPE_TOPICS = "Topics";
export const SEARCH_TYPE_WIKIS = "Wikis";

export const SEARCH_TYPE_ARRAY = [
         SEARCH_TYPE_REPO,
         SEARCH_TYPE_USER,
         SEARCH_TYPE_CODE,
         SEARCH_TYPE_COMMITS,
         SEARCH_TYPE_ISSUES,
         SEARCH_TYPE_PACKAGES,
         SEARCH_TYPE_MARKETPLACE,
         SEARCH_TYPE_TOPICS,
         SEARCH_TYPE_WIKIS
       ];


export function trimStr(s){
  return s.replace(/^\/|^\@|\/$/g, "");
}


