import moment from 'moment';

function greet() {
  let day = moment().format('dddd');
  console.log(`Have a nice ${day}!`);
}

export default greet;
