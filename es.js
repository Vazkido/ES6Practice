const people = [{name: 'Max'}, {name: 'Jack'}, {name: 'Marry'}];
let i = 0;
while (i < people.length && people[i].name != 'Jack') {
    i++;
}
if (i !== people.length) {
    alert('Jack is in ' + i);
} else {
    alert ('Cannot find Jack')
}

// This array is meant to find Jack inside variable people, if not, cannot find jack. Open this in life server.