module.exports = {
  servers: {
    one: {
      host: '54.93.85.202',
      username: 'ubuntu',
      pem: '~/.ssh/cle-meteor.pem'
      // Password: 'server-password'
      // or neither for authenticate from ssh-agent
    }
  },

  meteor: {
    name: 'Partners',
    path: '../serverMeteor',

    servers: {
      one: {}
    },

    buildOptions: {
      serverOnly: true
    },

    env: {
      ROOT_URL: 'http://kevindidelot.com',
      MONGO_URL: 'mongodb://localhost/meteor'
    },

    docker: {
      // Change to 'kadirahq/meteord' if your app is not using Meteor 1.4
      image: 'abernix/meteord:base'
      // ImagePort: 80, // (default: 80, some images EXPOSE different ports)
    },

    // This is the maximum time in seconds it will wait
    // for your app to start
    // Add 30 seconds if the server has 512mb of ram
    // And 30 more if you have binary npm dependencies.
    deployCheckWaitTime: 60,

    // Show progress bar while uploading bundle to server
    // You might need to disable it on CI servers
    enableUploadProgressBar: false
  },

  mongo: {
    port: 27017,
    version: '3.4.1',
    servers: {
      one: {}
    }
  }
};
