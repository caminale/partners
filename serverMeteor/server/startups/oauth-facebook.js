import {ServiceConfiguration} from 'meteor/service-configuration';
import {Meteor} from 'meteor/meteor';
import {Accounts} from 'meteor/accounts-base';
import {HTTP} from 'meteor/http';
import {_} from 'meteor/underscore';

const settings = Meteor.settings.oauth.facebook;

const init = () => {
  if (!settings) {
    return;
  }
  ServiceConfiguration.configurations.upsert(
    {service: 'facebook'},
    {
      $set: {
        appId: settings.appId,
        secret: settings.secret
      }
    }
  );
  registerHandler();
};

const registerHandler = () => {
  Accounts.registerLoginHandler('facebook', params => {
    const data = params.facebook;

    // If this isn't facebook login then we don't care about it.
    // No need to proceed.
    if (!data) {
      return undefined;
    }

    // The fields we care about (same as Meteor's)
    const whitelisted = ['email', 'name', 'first_name',
      'last_name', 'link', 'gender', 'locale', 'age_range'];

    // Get our user's identifying information.
    // This also checks if the accessToken
    // is valid. If not it will error out.
    const identity = getIdentity(data.accessToken, whitelisted.join());
    console.log(identity);
    // Build our actual data object.
    const serviceData = {
      accessToken: data.accessToken,
      expiresAt: (Number(new Date())) + (1000 * data.expirationTime)
    };
    const facebookFields = {
      ...serviceData,
      ...identity
    };

    // Search for an existing user with that facebook id
    const existingUser =
      Meteor.users.findOne({'services.facebook.id': identity.id});

    let userId;
    if (existingUser) {
      userId = existingUser._id;

      // Update our data to be in line with the latest from Facebook
      const prefixedData = {};
      _.each(facebookFields, (val, key) => {
        prefixedData[`services.facebook.${key}`] = val;
      });

      Meteor.users.update({_id: userId}, {
        $set: prefixedData,
        $addToSet: {emails: {address: identity.email, verified: true}}
      });
    } else {

      // Create our user
      userId = Meteor.users.insert({
        services: {
          facebook: facebookFields
        },
        emails: [{
          address: identity.email,
          verified: true
        }],
        profile: {
          firstName: identity.first_name,
          lastName: identity.last_name,
          gender: identity.gender,
          locale: identity.locale,
          age: identity.age_range.min
        }
      });

    }

    return {userId};
  });
};

// Gets the identity of our user and by extension checks if
// our access token is valid.
const getIdentity = (accessToken, fields) => {
  try {
    return HTTP.get('https://graph.facebook.com/me', {
      params: {
        access_token: accessToken,
        fields
      }
    }).data;
  } catch (err) {
    throw _.extend(
      new Error('Failed to fetch identity from Facebook. ' + err.message),
      {response: err.response}
    );
  }
};

export default init;
