exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('fruit')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('fruit').insert([
        { id: 1, name: 'banana' },
        { id: 2, name: 'apple' },
        { id: 3, name: 'feijoa' },
      ])
    })
}

// //Table subscription {
//  id integer
//  userId integer
//  userAuthId varchar
//  image varchar
//  frequency varchar
//  endDate varchar
//  category varchar
//  website varchar
//  price integer
// }
// Table users {
//  id integer
//  firstName varchar
//  lastName varchar
//  userName varchar
//  authId varchar
//  image varchar
// }

// Table calendarEvents {
//  id integer
//  subscriptionId integer
//  scheduleDate varchar
//  createDate varchar
//  isLastDate boolean
// }
