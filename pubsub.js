const PubNub = require("pubnub");

const credentials = {
  publishKey: "pub-c-51287be4-d299-47c0-9019-0c8cfb07d23f",
  subscribeKey: "sub-c-7afd8cd6-01d0-11ec-be1c-0664d1b72b66",
  secretKey: "sec-c-YTdlYzBjNDEtMTdiOC00OTIxLWExZDctODIyOThkNmViZmI5",
};

const CHANNELS = {
  TEST: "TEST",
};

class PubSub {
  constructor() {
    this.pubnub = new PubNub(credentials);
    this.pubnub.subscribe({ channels: Object.values(CHANNELS) });
    this.pubnub.addListener(this.listener());
  }

  listener() {
    return {
      message: (messageObject) => {
        const { channel, message } = messageObject;
        console.log(
          `Message received. Channel: ${channel}. Message: ${message}`
        );
      },
    };
  }

  publish({ channel, message }) {
    this.pubnub.publish({ channel, message });
  }
}

module.exports = PubSub;
