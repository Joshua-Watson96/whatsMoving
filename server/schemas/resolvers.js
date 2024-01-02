const Bedroom = require('../models/Bedroom')
const PickUp = require('../models/Access')

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
    saveSelectedPickUp: async (_, { SelectedPickUp }) => {
        try {
             const pickUp = new PickUp({ SelectedPickUp });
             await pickUp.save();
             return pickUp
        } catch (error) {
            throw new Error('Failed to save pick up')
        }
    },
},

}


module.exports = resolvers