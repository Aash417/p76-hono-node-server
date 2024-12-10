const axios2 = require('axios');

const BACKEND_URL = 'http://localhost:3000';

function sum(a, b) {
   return a + b;
}

describe('sum module', () => {
   it('adds 1 + 2 to equal 3', () => {
      expect(sum(1, 2)).toBe(3);
   });
});

const axios = {
   post: async (...args) => {
      try {
         const res = await axios2.post(...args);
         return res;
      }
      catch (e) {
         return e.response;
      }
   },
   get: async (...args) => {
      try {
         const res = await axios2.get(...args);
         return res;
      }
      catch (e) {
         return e.response;
      }
   },
   put: async (...args) => {
      try {
         const res = await axios2.put(...args);
         return res;
      }
      catch (e) {
         return e.response;
      }
   },
   delete: async (...args) => {
      try {
         const res = await axios2.delete(...args);
         return res;
      }
      catch (e) {
         return e.response;
      }
   },
};

describe('authentication', () => {
   it('user is able to sign up only once', async () => {
      const response = await axios.get(`${BACKEND_URL}`);

      console.log(response);
      expect(response.status).toBe(200);
   });
});
