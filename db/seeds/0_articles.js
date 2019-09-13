exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("articles")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("articles").insert([
        {
          urlTitle: "What-is-Lorem-Ipsum",
          title: "What is Lorem Ipsum",
          body: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictumst quisque sagittis purus sit amet volutpat. Blandit libero volutpat sed cras ornare arcu dui vivamus. Purus ut faucibus pulvinar elementum integer enim neque volutpat ac. Tellus molestie nunc non blandit massa enim nec dui nunc. Nibh venenatis cras sed felis eget velit aliquet sagittis. Nibh praesent tristique magna sit amet purus. In tellus integer feugiat scelerisque varius morbi. Quis varius quam quisque id diam vel quam. Varius sit amet mattis vulputate enim nulla. Sit amet facilisis magna etiam tempor orci eu lobortis elementum. Mattis rhoncus urna neque viverra justo nec. Aliquet risus feugiat in ante metus dictum at tempor. Enim facilisis gravida neque convallis a cras semper auctor.

        Eu volutpat odio facilisis mauris sit amet massa vitae tortor. Dui accumsan sit amet nulla facilisi morbi tempus iaculis urna. Varius sit amet mattis vulputate. Arcu felis bibendum ut tristique et egestas quis. Eget dolor morbi non arcu risus quis varius quam quisque. Tempus imperdiet nulla malesuada pellentesque elit eget. Consequat id porta nibh venenatis cras. Eu augue ut lectus arcu bibendum. Sodales neque sodales ut etiam sit amet. Ornare quam viverra orci sagittis eu. Massa enim nec dui nunc.
        
        Ornare aenean euismod elementum nisi quis eleifend quam adipiscing vitae. Dictum at tempor commodo ullamcorper. In massa tempor nec feugiat nisl pretium fusce id. Mattis enim ut tellus elementum sagittis vitae et leo duis. A pellentesque sit amet porttitor eget dolor. Pellentesque pulvinar pellentesque habitant morbi. Metus dictum at tempor commodo ullamcorper a lacus vestibulum. Pretium aenean pharetra magna ac placerat vestibulum. Quis vel eros donec ac odio tempor orci dapibus ultrices. Arcu dictum varius duis at. Platea dictumst quisque sagittis purus sit amet. Tellus in hac habitasse platea dictumst vestibulum rhoncus est. Tellus molestie nunc non blandit massa enim. Ut ornare lectus sit amet est placerat in egestas. Nisl nunc mi ipsum faucibus vitae aliquet. Dolor sit amet consectetur adipiscing elit. Tempor id eu nisl nunc mi. Sit amet mauris commodo quis imperdiet.
        
        Mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan. Egestas dui id ornare arcu odio ut. A diam sollicitudin tempor id eu. Sed id semper risus in hendrerit gravida rutrum. Donec pretium vulputate sapien nec sagittis aliquam malesuada. Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque. Quam viverra orci sagittis eu volutpat. Leo vel orci porta non pulvinar. Sed cras ornare arcu dui. Et sollicitudin ac orci phasellus egestas. Elit sed vulputate mi sit amet mauris. Commodo sed egestas egestas fringilla.
        
        Arcu dictum varius duis at consectetur lorem donec massa sapien. A diam maecenas sed enim ut sem. Quis lectus nulla at volutpat diam. Ornare lectus sit amet est. Commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend. Eros in cursus turpis massa tincidunt dui ut ornare. Nisl rhoncus mattis rhoncus urna neque viverra justo nec ultrices. Consequat nisl vel pretium lectus quam id leo in. Et sollicitudin ac orci phasellus egestas tellus rutrum. Cum sociis natoque penatibus et magnis dis. Cursus metus aliquam eleifend mi. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras. Aliquet lectus proin nibh nisl condimentum id venenatis a.
        
        `,
          author: "Cicero"
        },
        {
          urlTitle: "The-the-Impotence-of-Proofreading",
          title: "The the Impotence of Proofreading",
          body: `
        Has this ever happened to you?
        You work very horde on a paper for English clash
        And then get a very glow raid (like a D or even a D=)
        and all because you are the word1s liverwurst spoiler.
        Proofreading your peppers is a matter of the the utmost impotence.
        
        This is a problem that affects manly, manly students.
        I myself was such a bed spiller once upon a term
        that my English teacher in my sophomoric year,
        Mrs. Myth, said I would never get into a good colleague.
        And that1s all I wanted, just to get into a good colleague.
        Not just anal community colleague,
        because I wouldn1t be happy at anal community colleague.
        I needed a place that would offer me intellectual simulation,
        I really need to be challenged, challenged dentally.
        I know this makes me sound like a stereo,
        but I really wanted to go to an ivory legal collegue.
        So I needed to improvement
        or gone would be my dream of going to Harvard, Jail, or Prison
        (in Prison, New Jersey).
        
        So I got myself a spell checker
        and figured I was on Sleazy Street.
        
        But there are several missed aches
        that a spell chukker can1t can1t catch catch.
        For instant, if you accidentally leave a word
        your spell exchequer won1t put it in you.
        And God for billing purposes only
        you should have serial problems with Tori Spelling
        your spell Chekhov might replace a word
        with one you had absolutely no detention of using.
        Because what do you want it to douch?
        It only does what you tell it to douche.
        You1re the one with your hand on the mouth going clit, clit, clit.
        It just goes to show you how embargo
        one careless clit of the mouth can be.
        
        Which reminds me of this one time during my Junior Mint.
        The teacher read my entire paper on A Sale of Two Titties
        out loud to all of my assmates.
        I1m not joking, I1m totally cereal.
        It was the most humidifying experience of my life,
        being laughed at pubically.
        
        So do yourself a flavor and follow these two Pisces of advice:
        One: There is no prostitute for careful editing.
        And three: When it comes to proofreading,
        the red penis your friend.
        
        `,
          author: "Taylor Mali"
        }
      ]);
    });
};
