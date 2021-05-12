// Hey Carolina Code School Hackers! Enjoy!
// Make sure to open your js consoles!

//          __  _ ___ __  _
//   __  __/ /_(_) (_) /_(_)__  _____
//  / / / / __/ / / / __/ / _ \/ ___/
// / /_/ / /_/ / / / /_/ /  __(__  )
// \__,_/\__/_/_/_/\__/_/\___/____/

// a simple "it" function for naming groups of expectations
function it(description, contents){
  console.log('\n\n"It '+ description + '"');
  contents();
}

// A simple function for expecting values
// Ex: expect(oz.color).toBe('red'); // should return true
function expect(target) {
  return {
    toBe: function(expectation) {
      if (target === expectation) {
        console.log('\n     %cPASSED', 'color:green;', 'Expected', target, 'to be', expectation );
        return true;
      } else {
        console.log('\n     %cFAILED', 'color:red;', 'Expected', target, 'to be', expectation );
        return false;
      }
    }
  }
}

//                          __                  __
//   _________  ____  _____/ /________  _______/ /_____  __________
//  / ___/ __ \/ __ \/ ___/ __/ ___/ / / / ___/ __/ __ \/ ___/ ___/
// / /__/ /_/ / / / (__  ) /_/ /  / /_/ / /__/ /_/ /_/ / /  (__  )
// \___/\____/_/ /_/____/\__/_/   \__,_/\___/\__/\____/_/  /____/
//
// ONLY ADD CODE TO THIS SECTION



//     __
//    / /_  __  ______ ___  ____ _____  _____
//   / __ \/ / / / __ `__ \/ __ `/ __ \/ ___/
//  / / / / /_/ / / / / / / /_/ / / / (__  )
// /_/ /_/\__,_/_/ /_/ /_/\__,_/_/ /_/____/

let mady = new Human({
  name: 'Mady',
});

let faith = new Human({
  name: 'Faith',
  cool: true,
});

//        __
//   ____/ /___  ____ ______
//  / __  / __ \/ __ `/ ___/
// / /_/ / /_/ / /_/ (__  )
// \__,_/\____/\__, /____/
//            /____/

let oz = new Dog({
  color: "red",
  hungry: false
});

let moonshine = new Dog({
  color: "blue-red",
  owner: faith,
});

let charlie = new Dog();

//                     __           __  __    _                             __
//    ____ ___  ____ _/ /_____     / /_/ /_  (_)____   _      ______  _____/ /__
//   / __ `__ \/ __ `/ //_/ _ \   / __/ __ \/ / ___/  | | /| / / __ \/ ___/ //_/
//  / / / / / / /_/ / ,< /  __/  / /_/ / / / (__  )   | |/ |/ / /_/ / /  / ,<
// /_/ /_/ /_/\__,_/_/|_|\___/   \__/_/ /_/_/____/    |__/|__/\____/_/  /_/|_|
//
// Don't edit this section. Instead make these tests pass by writing
// constructors in the constructor section above ;D

it("should make Oz happy when Mady pets him", function(){
  expect(oz.status).toBe('normal');
  mady.pet(oz);
  expect(oz.status).toBe('happy');
});

it("should make Oz red", function(){
  expect(oz.color).toBe('red');
});

it("should be make Moonshine hungry and Oz not hungry", function(){
  expect(moonshine.hungry).toBe(true);
  expect(oz.hungry).toBe(false);
});

it("should make Moonshine no longer hungry when you feed her", function(){
  faith.feed(moonshine);
  expect(moonshine.hungry).toBe(false);
});

it("should not affect Charlie's or Moonshine's owner properties when setting Mady as Oz's owner ", function(){
  oz.owner = mady;
  expect(moonshine.owner?.name).toBe('Faith');
  expect(charlie.owner?.name).toBe(undefined);
});

it("should make Faith cool and Mady not cool", function(){
  expect(faith.cool).toBe(true);
  expect(mady.cool).toBe(false);
});
