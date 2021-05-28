
var pokemonTableRow = Vue.component(
  //convention for naming Vue components
  //note line template and table row class name
  'pokemon-table-row',
  {
    props: {
      pokemon: {
        type: Object,
        required: true
      }
    },
    template: `
      <tr class="pokemon-table-row">
        <td>{{pokemon.name}}</td>
        <td>{{pokemon.id}}</td>
        <td>{{pokemon.stamina}}</td>
        <td>{{pokemon.attack}}</td>
        <td>{{pokemon.defense}}</td>
      </tr>
    `
  }
);

var pokemonTableColumnHeader = Vue.component(
  //convention for naming Vue components
  //note line template and table row class name
  'pokemon-table-column-header',
  {
    props: {
      label: {
        type: String,
        required: true
      },
      name: {
        type: String,
        required: true
      },
    },
    methods: {
      emitSort: function(name, direction){
        console.log("tableColumnHeader button was clicked", name, direction);
        this.$emit('sort', {name, direction});
      },
    },
    template: `
      <th>
        <span>{{label}}</span>
        <button
          @click="emitSort(name,'forward')"
        >Up</button>
        <button
          @click="emitSort(name,'backward')"
        >Down</button>
      </th>
    `
  }
);

var pokemonTable = Vue.component(
  //convention for naming Vue components
  //note line template and table row class name
  'pokemon-table',
  {
    props: {
      list: {
        //root level Object that everything is
        //extrapolated from
        type: Array,
        required: true
      },
      title: {
        type: String,
        required: false,
        default: 'Pokemon table'
      }
    },
    methods: {
      emitSort: function(value){
        console.log("pokemonTable emitted Sort!", value);
        this.$emit('sort', value);
      },
    },
    template: `
      <table
        class="pokemon-table"
        border="1"
      >
        <thead>
          <tr>
            <th
              colspan="4"
              align="center"
            >{{title}}</th>
          </tr>
          <tr>
            <pokemon-table-column-header
              label="Pokemon Name"
              name="name"
              @sort="emitSort"
            ></pokemon-table-column-header>
            <pokemon-table-column-header
              label="ID"
              name="id"
              @sort="emitSort"
            ></pokemon-table-column-header>
            <pokemon-table-column-header
              label="Stamina"
              name="stamina"
              @sort="emitSort"
            ></pokemon-table-column-header>
            <pokemon-table-column-header
              label="Attack"
              name="attack"
              @sort="emitSort"
            ></pokemon-table-column-header>
            <pokemon-table-column-header
              label="Defense"
              name="defense"
              @sort="emitSort"
            ></pokemon-table-column-header>
          </tr>
        </thead>
        <tbody>
          <pokemon-table-row
            v-for="pokemon in list"
            :key="pokemon.id"
            :pokemon="pokemon"
            :data-pokemon-name="pokemon.name"
          ></pokemon-table-row>
        </tbody>
      </table>
    `
  }
);

var pokemonList = [
  {
    id: 25,
    name: 'Pikachu',
    stamina: 111,
    attack: 112,
    defense: 96
  },
  {
    id: 150,
    name: 'Mewtwo',
    stamina: 214,
    attack: 300,
    defense: 182
  },
  {
    id: 145,
    name: 'Zapados',
    stamina: 207,
    attack: 253,
    defense: 185
  },
]

var app = new Vue({
  el: '#app',
  data: {
    pokemonList: JSON.parse(JSON.stringify(pokemonList))
  },
  methods: {
    handleSortEvent: function (sortValues) {
      var sortingMethod = tableSortingMethods[sortValues.name][sortValues.direction];
      this.pokemonList.sort(sortingMethod);
      console.log('OMG the parent is listening', arguments);
    }
  },
  template: `
    <div class="app">
      <h1>Pokemon App!</h1>
      <pokemon-table
        :list="pokemonList"
        title="Best Pokemon Ever"
        @sort="handleSortEvent"
      ></pokemon-table>
    </div>
  `,
});
