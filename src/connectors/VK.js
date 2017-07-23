import VK_IO from 'vk-io';
import vkConfig from '../../config/vk.json';

export default class VK {
  static _instance = null;

  constructor() {
    VK.instance = new VK_IO();
    VK.instance.setOptions(vkConfig);

    VK.instance.setToken(vkConfig.token);
  }

  authStandalone() {
    const auth = VK.instance.auth.standalone();
    return auth.run();
  }

  setToken(token) {
    VK.instance.setToken(token);
  }

  static set instance(instance) {
    this._instance = instance;
  }

  static get instance() {
    return this._instance;
  }
}
