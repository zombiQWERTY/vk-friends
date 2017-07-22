import VK_IO from 'vk-io';
import vkConfig from '../../config/vk.json';

export default class VK {
  static _instance = null;

  constructor() {
    VK.instance = new VK_IO();
    VK.instance.setOptions(vkConfig);

    this.setToken();
    this.setSecureRequests()
  }

  setToken() {
    VK.instance.on('serverTokenReady', function(_o) {
      VK.instance.setToken(_o.access_token);
    });
  }

  setSecureRequests() {
    VK.instance.setSecureRequests(true);
  }

  static set instance(instance) {
    this._instance = instance;
  }

  static get instance() {
    return this._instance;
  }
}
