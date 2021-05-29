var sortNumberBackward = function (a,b) {
    return b-a;
};
var sortNumberForward = function (a,b) {
    return a-b;
};

var sortStringBackward = function (a,b) {
    return b.localeCompare(a);
};
var sortStringForward = function (a,b) {
    return a.localeCompare(b);
};

var sortObjectByNameForward = function (a,b) {
    return a.name.localeCompare(b.name);
};

var sortObjectByNameBackwards = function (a,b) {
    return b.name.localeCompare(a.name);
};

var createObjectSortingFunction = function (propertyName, sortingFunction) {
  return function(a,b) {
    var aValue = a[propertyName];
    var bValue = b[propertyName];
    return sortingFunction(aValue, bValue);
  }
}

var tableColumns = [
  'name',
  'stamina',
  'attack',
  'defense',
];

var tableSortingMethods = {
  id:{
    forward:createObjectSortingFunction('id', sortNumberForward),
    backward:createObjectSortingFunction('id', sortNumberBackward),
  },
  name:{
    forward:createObjectSortingFunction('name', sortStringForward),
    backward:createObjectSortingFunction('name', sortStringBackward),
  },
  stamina:{
    forward:createObjectSortingFunction('stamina', sortNumberForward),
    backward:createObjectSortingFunction('stamina', sortNumberBackward),
  },
  attack:{
    forward:createObjectSortingFunction('attack', sortNumberForward),
    backward:createObjectSortingFunction('attack', sortNumberBackward),
  },
  defense:{
    forward:createObjectSortingFunction('defense', sortNumberForward),
    backward:createObjectSortingFunction('defense', sortNumberBackward),
  },
  speed:{
    forward:createObjectSortingFunction('speed', sortNumberForward),
    backward:createObjectSortingFunction('speed', sortNumberBackward),
  },
  specialAttack:{
    forward:createObjectSortingFunction('specialAttack', sortNumberForward),
    backward:createObjectSortingFunction('specialAttack', sortNumberBackward),
  },
  specialDefense:{
    forward:createObjectSortingFunction('specialDefense', sortNumberForward),
    backward:createObjectSortingFunction('specialDefense', sortNumberBackward),
  },
}
