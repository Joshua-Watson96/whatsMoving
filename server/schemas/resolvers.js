const Bedroom = require('../models/Bedroom')

const resolvers = {
   Query: {
    getBedroom: async () => {
        try {
            const bedroom = await Bedroom.findOne();
            return bedroom;
        } catch (error) {
            throw new Error('Failed to fetch bedroom data')
        }
    }
   },

   Mutation: {
    saveSelectedBedroom: async (_, { selectedBedroom }) => {
        try {
            const bedroom = new Bedroom({ selectedBedroom });
            await bedroom.save();
            return bedroom;
        } catch (error) {
            throw new Error('Failed to save selected answer');
        }
    },
},

}


module.exports = resolvers