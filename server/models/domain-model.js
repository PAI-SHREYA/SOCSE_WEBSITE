const {mongoose} = require('mongoose');
const Schema = mongoose.Schema;

const domainclubSchema =  new Schema({
    title: { type: String, require: true },
    description: { type: String, require:true },
    image: { type: String, require:true},
    type: { type: String, require:true},
    path: { type: String, require:true}
},
{
    timestamp: true
});

const DomainsClubs = mongoose.model('Domain', domainclubSchema);

module.exports = DomainsClubs;