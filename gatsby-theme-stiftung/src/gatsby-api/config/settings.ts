import settings from "../../util/site.json"

export interface Settings {
  meta: {
    title: string
    titleTemplate: string
    description: string
    siteUrl: string
    image: string
    twitterUsername: string
  }
  ga: string
}

export default settings as Settings
