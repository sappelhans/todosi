Meteor.startup(function () {

});

ServiceConfiguration.configurations.upsert(
  { service: "meteor-developer" },
  {
    $set: {
      clientId: 'wkHdLcbEEfDcos6mg',
      loginStyle: "popup",
      secret: 'YpkLNMDSMn7ER6YAFca24474oMhjt6MFzx'
  	}
  }
);
console.log('after meteor-developer config');
console.log(process.env.PROCESSOR_LEVEL);
console.log(process.env.ACCOUNTS_METEOR_ID);
console.log(process.env.ACCOUNTS_METEOR_SECRET);