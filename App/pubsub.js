const PubNub = require("pubnub");

const credentials = {
  publishKey: "pub-c-51287be4-d299-47c0-9019-0c8cfb07d23f",
  subscribeKey: "sub-c-7afd8cd6-01d0-11ec-be1c-0664d1b72b66",
  secretKey: "sec-c-YTdlYzBjNDEtMTdiOC00OTIxLWExZDctODIyOThkNmViZmI5",
};

const CHANNELS = {
  TEST: "TEST",
  BLOCKCHAIN: "BLOCKCHAIN",
  TRANSACTION: "TRANSACTION",
};

class PubSub {
  constructor({ blockchain }) {
    this.blockchain = blockchain;
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
        const parsedMessage = JSON.parse(message);
        switch (channel) {
          case CHANNELS.BLOCKCHAIN:
            this.blockchain.replaceChain(parsedMessage);
            break;
          case CHANNELS.TRANSACTION:
            break;
          default:
            return;
        }
      },
    };
  }

  publish({ channel, message }) {
    this.pubnub.publish({ channel, message });
  }

  broadcastChain() {
    this.publish({
      channel: CHANNELS.BLOCKCHAIN,
      message: JSON.stringify(this.blockchain.chain),
    });
  }
}

module.exports = PubSub;