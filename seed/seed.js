const { Country } = require("../models/country");
const { Team } = require("../models/team");
const { Venue } = require("../models/venue");
const { Player } = require("../models/player");
const {Match} = require('../models/match')
const {Result}=require('../models/result')


// DB connection
const db = config.get("db");
mongoose.connect(db).then(() => console.log("connected to DB...."));

const india = new Country({
  name: "india",
});
india.save();

const australia = new Country({
  name: "australia",
});
australia.save();

const indianTeam = new Team({
  name: "indian cricket league",
  country: india._id,
  players: [],
  totalMatches: 5,
  playedMatches: 1,
  won: 1,
  tied: 0,
  lost: 0,
});

const australianTeam = new Team({
  name: "australian cricket league",
  country: australia._id,
  players: [],
  totalMatches: 5,
  playedMatches: 1,
  won: 0,
  tied: 0,
  lost: 1,
});

const venue = new Venue({
  name: "wankhede stadium",
  city: "mumbai",
  country: "india",
});
venue.save();

const indianPlayers = [
  new Player({ name: "m dhoni", team: indianTeam._id }),
  new Player({ name: "g gambhir", team: indianTeam._id }),
  new Player({ name: "u yadav", team: indianTeam._id }),
  new Player({ name: "r pant", team: indianTeam._id }),
  new Player({ name: "v kohli", team: indianTeam._id }),
];
const manOfTheMatch =   new Player({ name: "r sharma", team: indianTeam._id })
indianPlayers.push(manOfTheMatch)

indianPlayers.forEach(player=>{
    player.save()
    indianTeam.players.push(player._id)
})
indianTeam.save()

const australianPlayers = [
  new Player({ name: "s smith", team: australianTeam._id }),
  new Player({ name: "d warner", team: australianTeam._id }),
  new Player({ name: "g maxwell", team: australianTeam._id }),
  new Player({ name: "m starc", team: australianTeam._id }),
  new Player({ name: "a zampa", team: australianTeam._id }),
  new Player({ name: "a finch", team: australianTeam._id }),
];
australianPlayers.forEach(player=>{
    player.save()
    australianTeam.players.push(player._id)
})
australianTeam.save()

const match = new Match({
    teamA:indianTeam._id,
    teamB:australianTeam._id,
    venue:venue._id,
    date: new Date()
})

const result = new Result({
    match:match._id,
    winner:indianTeam._id,
    manOfTheMatch: manOfTheMatch._id,
    outcome:'india won by 56 runs'
})
match.save()
result.save()