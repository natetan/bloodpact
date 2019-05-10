import fetch from 'node-fetch'

export async function getDrives(zipcode) {
  let zips = await fetch(`https://infocapstone2019-server.herokuapp.com/drives/${zipcode}`);
  return zips.json();
}