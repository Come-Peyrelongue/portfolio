// init Isotope
const $grid = $('.portfolio-gallery').isotope({
  itemSelector: '.portfolio-works-selection',
  layoutMode: 'fitRows',
  getSortData: {
    number: '.number',
    name: '.name',
    condition: '.condition',
    year: '.year'
  }
});

// store filter for each group
const filters = {};

$('.filters').on( 'click', '.button', function() {
  const $this = $(this);
  // get group key
  const $buttonGroup = $this.parents('.button-group');
  const filterGroup = $buttonGroup.attr('filter-button-group');
  // set filter for group
  filters[ filterGroup ] = $this.attr('data-filter');
  // combine filters
  const filterValue = concatValues(filters);
  // set filter for Isotope
  $grid.isotope({ filter: filterValue });
});

// filter functions
const filterFns = {
  // show if condition is Figma
  figma: function () {
    const name = $(this).find('.condition').text();
    return name.match(/^Figma$/);
  },
  // show if condition is Brand
  code: function () {
    const name = $(this).find('.condition').text();
    return name.match(/^Brand/);
  },

};

// bind filter button click
$('.filters-button-group').on( 'click', 'button', function() {
  let filterValue = $(this).attr('data-filter');
  // use filterFn if matches value
  filterValue = filterFns[ filterValue ] || filterValue;
  $grid.isotope({ filter: filterValue });
});

// change is-checked class on buttons
$('.button-group').each( function( i, buttonGroup ) {
  const $buttonGroup = $(buttonGroup);
  $buttonGroup.on( 'click', 'button', function() {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    $( this ).addClass('is-checked');
  });
});

// bind sort button click
$('.sort-by-button-group').on('click', 'button', function() {
  const sortValue = $(this).attr('data-sort-value');
  $grid.isotope({sortBy: sortValue});
	$grid.isotope({sortAscending: {year: false}
	});
});
  
// flatten object by contacting values
function concatValues( obj ) {
  let value = '';
  for (let prop in obj ) {
    value += obj[ prop ];
  }
  return value;
}
