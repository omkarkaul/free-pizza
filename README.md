# Free Pizza!

~~I haven't built anything in React for a while, so here's a pizza coupon generator. In NZ, Pizza Hut is usually always running a promotion that gives you a free regular size pizza with every purchase. The only caveat is that it requires a coupon code from submitting a boring survey from a previous purchase (LAME!!!).~~

~~The coupon is always a 5 digit number that is divisible by 3. You really want to figure that out yourself? Of course not. Make a machine do it for you.~~

EDIT 23/03/2022: Turns out Pizza Hut has caught on to my hijinks and changed the code format. The new format *seems* to be a 4 digit number divisble by 3, incremented by 1, then prepended by a number 2, and wholly divisible by 3 (e.g. 29082). Basically, only SOME 5 digit numbers that are divisble by 3 but must also start with a 2. From the small amount of investigation I did do, this seems correct, but there may be more to it - feel free to make a PR if you find something else.

Also, from my testing, it looks like some of these numbers have also been manually blocked/removed (i.e. they satisfy the criteria stated earlier, but still don't work). So if a code doesn't work, just generate another.

Here: https://free-pizza.now.sh/