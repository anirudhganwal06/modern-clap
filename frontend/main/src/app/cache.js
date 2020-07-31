import { makeVar, InMemoryCache } from '@apollo/client';

export const setLoggedIn = makeVar(false);
export const currentUser = makeVar({});

export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        isLoggedIn: {
          read() {
            return setLoggedIn();
          }
        },
        user: {
          read() {
            return currentUser();
          }
        }
      }
    }
  }
});
