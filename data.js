    var units =
    [
	//length
	[{name: 'angstrom', conv: 1E-10 },
	{name: 'astronomical unit', conv: 149597870691},	
	{name: 'centimeter', conv: 0.01},
	{name: 'chain' , conv: 20.1168},
	{name: 'decimeter', conv: 0.1},
	{name: 'fathom', conv: 1.8288},
	{name: 'foot', conv: 0.3048},
	{name: 'furlong' , conv: 201.168},
	{name: 'inch', conv: 0.0254},
	{name: 'kilometer', conv: 1000},
	{name: 'league', conv: 4828.032},
	{name: 'light year', conv: 9460730472581000},
	{name: 'meter', conv: 1},
	{name: 'mile' , conv: 1609.344},
	{name: 'millimeter', conv: 0.001},
	{name: 'micrometer', conv: 0.000001},
	{name: 'micron', conv: 0.000001},
	{name: 'nanometer', conv: 1E-9 },
	{name: 'nautical mile', conv: 1852},
	{name: 'parsec' , conv: 30856775813060000},
	{name: 'rod', conv: 5.0292},
	{name: 'yard', conv: 0.9144}],
	
	//area
	[{name: 'acre', conv: 4046.8564224},
	{name: 'are (a)', conv: 100},	
	{name: 'barn (b)', conv: 1E-28},
	{name: 'hectare (ha)' , conv: 10000},
	{name: 'homestead', conv: 647497.027584 },
	{name: 'rood', conv: 1011.7141056 },
	{name: 'square centimeter', conv: 0.0001},
	{name: 'square foot', conv: 0.09290304},
	{name: 'square inch', conv: 0.00064516},	
	{name: 'square kilometer', conv: 1000000},
	{name: 'square meter' , conv: 1},
	{name: 'square mile', conv: 2589988.110336},
	{name: 'square millimeter', conv: 0.000001},
	{name: 'square rod', conv: 25.29285264},
	{name: 'square yard', conv: 0.83612736},
	{name: 'township', conv: 93239571.9721}],
	
	
	//volume
	[{name: 'barrel', conv: 158.987294928},
	{name: 'bushel (UK)', conv: 36.36872},	
	{name: 'bushel (US dry)', conv: 35.23907016688},
	{name: 'centiliter' , conv: 0.01},
	{name: 'cubic centimeter', conv: 0.001 },
	{name: 'cubic decimeter', conv: 1 },
	{name: 'cubic foot', conv: 28.316846592},
	{name: 'cubic inch', conv: 0.016387064},
	{name: 'cubic meter', conv: 1000},	
	{name: 'cubic millimeter', conv: 0.000001},
	{name: 'cubic yard' , conv: 764.554857984},
	{name: 'dekaliter', conv: 10},
	{name: 'fluid dram', conv: 0.003696691195313},
	{name: 'fluid ounce (UK)', conv: 0.0284130625},
	{name: 'gallon (fluid)', conv: 3.785411784},
	{name: 'gallon (UK)', conv: 4.54609},
	{name: 'gill', conv: 0.11829411825},	
	{name: 'hectoliter', conv: 100},
	{name: 'liter' , conv: 1},
	{name: 'microliter', conv: 0.000001},
	{name: 'milliliter', conv: 0.001},
	{name: 'minim', conv: 0.00006161151992187},
	{name: 'peck (US dry)', conv: 8.80976754172},
	{name: 'pint (fluid)', conv: 0.473176473},
	{name: 'pint (UK)' , conv: 0.56826125},
	{name: 'pint (US dry)', conv: 0.5506104713575},
	{name: 'quart (fluid)', conv: 0.946352946},
	{name: 'quart UK', conv: 1.1365225},
	{name: 'quart (US dry)', conv: 1.101220942715}],
	
	
	//pressure
	[{name: 'atmosphere', conv: 1.01325},
	{name: 'bar', conv: 1},	
	{name: 'hectopascal', conv: 0.001},
	{name: 'kilogram per sq. cm' , conv: 0.980665},
	{name: 'kilogram per sq. meter', conv: 0.0000980665 },
	{name: 'kilopascal', conv: 0.01 },
	{name: 'millibar', conv: 0.001},
	{name: 'millimeter of mercury', conv: 0.001333223684211},
	{name: 'pascal', conv: 0.00001},	
	{name: 'pounds per square foot', conv: 0.0004788020833333},
	{name: 'pounds per square inch' , conv: 0.0689475},
	{name: 'torr', conv: 0.001333223684211}],
	
	
	//flow
	[{name: 'cubic meter/second', conv: 1},
	{name: 'cubic meter/day', conv: 0.000011574},	
	{name: 'cubic meter/hour', conv: 0.000277778},
	{name: 'cubic meter/minute' , conv: 0.016666667},
	{name: 'cubic centimeter/day', conv: 1.157407407e-11 },
	{name: 'cubic centimeter/hour', conv: 2.777777778e-10 },
	{name: 'cubic centimeter/minute', conv: 0.000000017},
	{name: 'cubic centimeter/second', conv: 0.000001},
	{name: 'liter/day', conv: 0.000000012},	
	{name: 'liter/hour ', conv: 0.000000278},
	{name: 'liter/minute ' , conv: 0.000016667},
	{name: 'liter/second', conv: 0.001},
	{name: 'milliliter/day ', conv: 1.157407407e-11},
	{name: 'milliliter/hour ', conv: 2.777777778e-10},
	{name: 'milliliter/second ', conv: 0.000001},
	{name: 'gallon (US)/day ', conv: 0.000000044},
	{name: 'gallon (US)/hour ', conv:0.000001052 },	
	{name: 'gallon (US)/minute ', conv: 0.00006309},
	{name: 'gallon (US)/second ' , conv:0.003785412},
	{name: 'gallon (UK)/day ', conv: 0.000000053},
	{name: 'gallon (UK)/hour ', conv: 0.000001263},
	{name: 'gallon (UK)/minute ', conv: 0.000075768},
	{name: 'gallon (UK)/second ', conv:0.00454609},
	{name: 'kilobarrel (US)/day', conv: 0.001840131},
	{name: 'barrel (US)/day' , conv: 0.00000184},
	{name: 'barrel (US)/hour ', conv: 0.000044163},
	{name: 'barrel (US)/minute ', conv: 0.002649788},
	{name: 'barrel (US)/second ', conv: 0.158987295},
	{name: 'acre-foot/year ', conv: 0.000039114},
	{name: 'acre-foot/day ', conv: 0.014276467},
	{name: 'acre-foot/hour', conv: 0.342635214},
	{name: 'hunderd-cubic foot/day', conv: 0.000032774},	
	{name: 'hunderd-cubic foot/hour ', conv: 0.000786579},
	{name: 'hunderd-cubic foot/minute' , conv: 0.047194744},
	{name: 'ounce/hour ', conv:0.000000008 },
	{name: 'ounce/minute', conv: 0.000000493},
	{name: 'ounce/second ', conv: 0.000029574},
	{name: 'ounce (UK)/hour ', conv: 0.000000008},
	{name: 'ounce (UK)/minute', conv: 0.000000474},
	{name: 'ounce (UK)/second' , conv: 0.000028413},
	{name: 'cubic yard/hour', conv: 0.000212376},
	{name: 'cubic yard/minute', conv:0.012742581},
	{name: 'cubic yard/second ', conv:0.764554858 },
	{name: 'cubic foot/day' , conv: 3.2774128472e-7},
	{name: 'cubic foot/hour' , conv: 0.000007866},
	{name: 'cubic foot/minute ', conv: 0.000471947},
	{name: 'cubic foot/second', conv: 0.028316847},
	{name: 'cubic inch/day ', conv:1.8966509533e-10 },
	{name: 'cubic inch/hour ', conv:0.000000005 },
	{name: 'cubic inch/minute  ', conv: 0.000000273},
	{name: 'cubic inch/second ', conv: 0.000016387},
	{name: 'pound/second (gasoline at 15.5C)' , conv:0.000613519 },
	{name: 'pound/minute (gasoline at 15.5C)', conv:0.000010225 },
	{name: 'pound/hour (gasoline at 15.5C)', conv: 0.00000017},
	{name: 'pound/day (gasoline at 15.5C) ', conv: 0.000000007},
	{name: 'kilogram/second (gasoline at 15.5C)' , conv: 0.001352578},
	{name: 'kilogram/minute (gasoline at 15.5C) ', conv: 0.000022543},
	{name: 'kilogram/hour (gasoline at 15.5C)', conv: 0.000000376},
	{name: 'kilogram/day (gasoline at 15.5C) ', conv: 0.000000016}],
	
	//temperature
	[{name: 'degree celcius ', conv: 1},
	{name: 'degree fahrenheit', conv: 2},
	{name: 'degree rankine' , conv: 3 },
	{name: 'degree reaumur', conv: 4},
	{name: 'kelvin', conv:(-272.15)}],
	
	//currency
	[{name: 'WIP ', conv: 1}]
	
	
	

    ];

