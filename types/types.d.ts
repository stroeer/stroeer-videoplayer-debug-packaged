interface IConstructedRegisteredUI {
  init: (svp: any, opts?: any) => void
  deinit: (svp: any, opts?: any) => void
}
interface IRegisteredUI {
  uiName: string
  new (): IConstructedRegisteredUI
}
interface IVideoData {
  playlists?: string[]
  poster?: string
}
interface IConstructedRegisteredPlugin {
  init: (svp: any, opts?: any) => void
  deinit: (svp: any) => void
}
interface IRegisteredPlugin {
  pluginName: string
  new (): IConstructedRegisteredPlugin
}
export interface IStroeerVideoplayerDataStore {
  isInitialized: boolean
  isPaused: boolean
  videoEl: HTMLVideoElement
  rootEl: HTMLDivElement
  containmentEl: HTMLDivElement
  uiEl: HTMLDivElement
  contentVideoInitialSrc: string
  videoFirstPlay: boolean
  contentVideoStarted: boolean
  contentVideoEnded: boolean
  contentVideoFirstOctile: boolean
  contentVideoSecondOctile: boolean
  contentVideoThirdOctile: boolean
  contentVideoMidpoint: boolean
  contentVideoFifthOctile: boolean
  contentVideoSixthOctile: boolean
  contentVideoSeventhOctile: boolean
  contentVideoSixSecondsBeforeEnd: boolean
  isContentVideo: boolean
  wasPlayingOnTabLeave: boolean
  uiName: string | undefined
  uiOptions: any
  activeUI: IConstructedRegisteredUI | undefined
  activePlugins: Map<string, IConstructedRegisteredPlugin>
}
interface StroeerVideoplayerVideoElement extends HTMLVideoElement {
  getSVP?: () => StroeerVideoplayer
}

declare class StroeerVideoplayer {
  _dataStore: IStroeerVideoplayerDataStore
  version: string
  constructor (videoEl: StroeerVideoplayerVideoElement, hlsConfig?: Object)
  getUIName: () => string | undefined
  getUIOptions: () => any
  getUIEl: () => HTMLDivElement
  getRootEl: () => HTMLDivElement
  getVideoEl: () => HTMLVideoElement
  setNoContentVideo: () => void
  setContentVideo: () => void
  hasActivePlugin: (pluginName: string) => boolean
  static hasRegisteredPlugin: (pluginName: string) => boolean
  static setDefaultUIName: (uiName: string) => typeof StroeerVideoplayer
  static getDefaultUIName: () => string
  static setDefaultUIOptions: (opts: any) => typeof StroeerVideoplayer
  static getDefaultUIOptions: () => any
  static isLoggingEnabled: () => boolean
  static log: (type?: string | undefined) => any
  static disableLogging: () => void
  static enableLogging: () => void
  static registerUI: (ui: IRegisteredUI) => boolean
  initUI: (uiName: string, opts?: any) => boolean
  deinitUI: (uiName: string, opts?: any) => boolean
  static registerPlugin: (plugin: IRegisteredPlugin) => boolean
  initPlugin: (pluginName: string, opts?: any) => boolean
  deinitPlugin: (pluginName: string) => boolean
  getDataStore: () => IStroeerVideoplayerDataStore
  play: () => void
  getSource: () => string
  loadStreamSource: () => void
  setAutoplay: (autoplay: boolean) => void
  getPosterImage: () => string
  setPosterImage: (url: string) => void
  setSrc: (playlist: string) => void
  setMetaData: (videoData: IVideoData) => void
  replaceAndPlay: (videoData: IVideoData, autoplay?: boolean) => void
}
