import Airtable from "airtable";

var base = new Airtable({apiKey: process.env.GATSBY_AIRTABLE_API_KEY}).base(process.env.GATSBY_AIRTABLE_BASE_ID);

const addContact = (data) => {
    base('Contact').create([
        {
          "fields": data
        }
      ], function(err, records) {
        if (err) {
          console.error(err);
          return false;
        }
       
      });
      return true;
}

export default addContact;