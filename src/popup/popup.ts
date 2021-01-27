class Popup {
  constructor() {
    this.checkVersion();
  }

  private checkVersion(): void {
    const update = document.getElementById('update');

    const manifestVersion = chrome.runtime.getManifest().version;
    const url =
      'https://raw.githubusercontent.com/Lumm1t/anti-testportal/master/public/manifest.json';

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        update.innerText =
          manifestVersion === data.version
            ? `up to date (${manifestVersion})`
            : `update available (${data.version})`;
      });
  }
}

export default new Popup();