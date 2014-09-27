document.addEventListener("DOMContentLoaded", function(event) {
	var selections = []
	chrome.storage.sync.get(function(data) {
		if (data.showLabels || data.showLabels == undefined) {
			document.getElementById("label").style.display = "block"
		}
		if (data.showCountries || data.showCountries == undefined) {
			selections = selections.concat(countries)
		}
		if (data.showStates) {
			selections = selections.concat(states)
		}
		if (data.showProvinces) {
			selections = selections.concat(provinces)
		}
    if (data.showAustralianStates) {
      selections = selections.concat(australian_states)
    }
    if (data.showSupranationalUnions) {
      selections = selections.concat(supranational_unions)
    }
    if (data.showSovietRepublics) {
      selections = selections.concat(soviet_republics)
    }

	var random_flag = selections[Math.floor(Math.random() * selections.length)]
	document.getElementById("flag").className += random_flag.key
	document.getElementById("label").innerHTML = random_flag.display_name
	document.getElementById("link").setAttribute('href', 'http://en.wikipedia.org' + random_flag.wikiUrl)
	})
});

// document.addEventListener("DOMContentLoaded", function(event) {
// 	document.getElementById("flag").className += 'british_columbia'
// 	document.getElementById("label").innerHTML = 'United Kingdom'
// 	document.getElementById("link").setAttribute('href', 'http://en.wikipedia.org/wiki/United_Kingdom')
// });

// To alphabetize list:
// console.log(countries.sort(function(a, b) {
//    return a.display_name.localeCompare(b.display_name);
// })


var countries = [ { display_name: '&Aring;land Islands', key: 'aland_islands', wikiUrl: '/wiki/%C3%85land_Islands' }, //
  				  { display_name: 'Abkhazia', key: 'abkhazia', wikiUrl: '/wiki/Abkhazia' },
  				  { display_name: 'Afghanistan', key: 'afghanistan', wikiUrl: '/wiki/Afghanistan' },
  				  { display_name: 'Albania', key: 'albania', wikiUrl: '/wiki/Albania' },
  				  { display_name: 'Algeria', key: 'algeria', wikiUrl: '/wiki/Algeria' },
  				  { display_name: 'American Samoa', key: 'american_samoa', wikiUrl: '/wiki/American_Samoa' },
  				  { display_name: 'Andorra', key: 'andorra', wikiUrl: '/wiki/Andorra' },
  				  { display_name: 'Angola', key: 'angola', wikiUrl: '/wiki/Angola' },
  				  { display_name: 'Anguilla', key: 'anguilla', wikiUrl: '/wiki/Anguilla' },
  				  { display_name: 'Antigua and Barbuda', key: 'antigua_and_barbuda', wikiUrl: '/wiki/Antigua_and_Barbuda' },
  				  { display_name: 'Argentina', key: 'argentina', wikiUrl: '/wiki/Argentina' },
  				  { display_name: 'Armenia', key: 'armenia', wikiUrl: '/wiki/Armenia' },
  				  { display_name: 'Aruba', key: 'aruba', wikiUrl: '/wiki/Aruba' },//
  				  { display_name: 'Australia', key: 'australia', wikiUrl: '/wiki/Australia' },
  				  { display_name: 'Austria', key: 'austria', wikiUrl: '/wiki/Austria' },
  				  { display_name: 'Azad Kashmir', key: 'azad_kashmir', wikiUrl: '/wiki/Azad_Kashmir' },
  				  { display_name: 'Azerbaijan', key: 'azerbaijan', wikiUrl: '/wiki/Azerbaijan' },
  				  { display_name: 'Bahrain', key: 'bahrain', wikiUrl: '/wiki/Bahrain' },
  				  { display_name: 'Bangladesh', key: 'bangladesh', wikiUrl: '/wiki/Bangladesh' },
  				  { display_name: 'Barbados', key: 'barbados', wikiUrl: '/wiki/Barbados' },
  				  { display_name: 'Basque', key: 'basque', wikiUrl: '/wiki/Basque_Country_(autonomous_community)' },
  				  { display_name: 'Belarus', key: 'belarus', wikiUrl: '/wiki/Belarus' },
  				  { display_name: 'Belgium', key: 'belgium', wikiUrl: '/wiki/Belgium' },
  				  { display_name: 'Belize', key: 'belize', wikiUrl: '/wiki/Belize' },
  				  { display_name: 'Benin', key: 'benin', wikiUrl: '/wiki/Benin' },
  				  { display_name: 'Bermuda', key: 'bermuda', wikiUrl: '/wiki/Bermuda' },//
  				  { display_name: 'Bhutan', key: 'bhutan', wikiUrl: '/wiki/Bhutan' },
  				  { display_name: 'Bolivia', key: 'bolivia', wikiUrl: '/wiki/Bolivia' },
  				  { display_name: 'Bosnia and Herzegovina', key: 'bosnia_and_herzegovina', wikiUrl: '/wiki/Bosnia_and_Herzegovina' },
  				  { display_name: 'Botswana', key: 'botswana', wikiUrl: '/wiki/Botswana' },
  				  { display_name: 'Bouvet Island', key: 'bouvet_island', wikiUrl: '/wiki/Bouvet_Island' },//
  				  { display_name: 'Brazil', key: 'brazil', wikiUrl: '/wiki/Brazil' },
  				  { display_name: 'British Antarctic Territory', key: 'british_antarctic_territory', wikiUrl: '/wiki/British_Antarctic_Territory' },//
  				  { display_name: 'British Indian Ocean Territory', key: 'british_indian_ocean_territory', wikiUrl: '/wiki/British_Indian_Ocean_Territory' },//
  				  { display_name: 'British Virgin Islands', key: 'british_virgin_islands', wikiUrl: '/wiki/British_Virgin_Islands' },//
  				  { display_name: 'Brunei', key: 'brunei', wikiUrl: '/wiki/Brunei' },
  				  { display_name: 'Bulgaria', key: 'bulgaria', wikiUrl: '/wiki/Bulgaria' },
  				  { display_name: 'Burkina Faso', key: 'burkina_faso', wikiUrl: '/wiki/Burkina_Faso' },
  				  { display_name: 'Burundi', key: 'burundi', wikiUrl: '/wiki/Burundi' },
  				  { display_name: 'C&ocirc;te d\'Ivoire (Ivory Coast)', key: 'ivory_coast', wikiUrl: '/wiki/Ivory_Coast' },//
  				  { display_name: 'Cambodia', key: 'cambodia', wikiUrl: '/wiki/Cambodia' },
  				  { display_name: 'Cameroon', key: 'cameroon', wikiUrl: '/wiki/Cameroon' },
  				  { display_name: 'Canada', key: 'canada', wikiUrl: '/wiki/Canada' },
  				  { display_name: 'Cape Verde', key: 'cape_verde', wikiUrl: '/wiki/Cape_Verde' },
  				  { display_name: 'Catalonia', key: 'catalonia', wikiUrl: '/wiki/Catalonia' },//
  				  { display_name: 'Cayman Islands', key: 'cayman_islands', wikiUrl: '/wiki/Cayman_Islands' },//
  				  { display_name: 'Central African Republic', key: 'central_african_republic', wikiUrl: '/wiki/Central_African_Republic' },
  				  { display_name: 'Chad', key: 'chad', wikiUrl: '/wiki/Chad' },
  				  { display_name: 'Chile', key: 'chile', wikiUrl: '/wiki/Chile' },
  				  { display_name: 'Christmas Island', key: 'christmas_island', wikiUrl: '/wiki/Christmas_Island' },//
  				  { display_name: 'Cocos Islands', key: 'cocos_islands', wikiUrl: '/wiki/Cocos_(Keeling)_Islands' },//
  				  { display_name: 'Colombia', key: 'colombia', wikiUrl: '/wiki/Colombia' },
  				  { display_name: 'Comoros', key: 'comoros', wikiUrl: '/wiki/Comoros' },
  				  { display_name: 'Congo', key: 'congo', wikiUrl: '/wiki/Republic_of_the_Congo' },//
  				  { display_name: 'Cook Islands', key: 'cook_islands', wikiUrl: '/wiki/Cook_Islands' },
  				  { display_name: 'Costa Rica', key: 'costa_rica', wikiUrl: '/wiki/Costa_Rica' },
  				  { display_name: 'Crimea', key: 'crimea', wikiUrl: '/wiki/Republic_of_Crimea' },//
  				  { display_name: 'Croatia', key: 'croatia', wikiUrl: '/wiki/Croatia' },
  				  { display_name: 'Cuba', key: 'cuba', wikiUrl: '/wiki/Cuba' },
  				  { display_name: 'Cura&ccedil;ao', key: 'curacao', wikiUrl: '/wiki/Cura%C3%A7ao' },//
  				  { display_name: 'Cyprus', key: 'cyprus', wikiUrl: '/wiki/Cyprus' },
  				  { display_name: 'Cyrenaica', key: 'cyrenaica', wikiUrl: '/wiki/Cyrenaica' },//
  				  { display_name: 'Czech Republic', key: 'czech_republic', wikiUrl: '/wiki/Czech_Republic' },
  				  { display_name: 'Democratic Republic of the Congo', key: 'democratic_republic_of_the_congo', wikiUrl: '/wiki/Democratic_Republic_of_the_Congo' },
  				  { display_name: 'Denmark', key: 'denmark', wikiUrl: '/wiki/Denmark' },
  				  { display_name: 'Djibouti', key: 'djibouti', wikiUrl: '/wiki/Djibouti' },
  				  { display_name: 'Dominica', key: 'dominica', wikiUrl: '/wiki/Dominica' },
  				  { display_name: 'Dominican Republic', key: 'dominican_republic', wikiUrl: '/wiki/Dominican_Republic' },
  				  { display_name: 'Ecuador', key: 'ecuador', wikiUrl: '/wiki/Ecuador' },
  				  { display_name: 'Egypt', key: 'egypt', wikiUrl: '/wiki/Egypt' },
  				  { display_name: 'El Salvador', key: 'el_salvador', wikiUrl: '/wiki/El_Salvador' },
  				  { display_name: 'England', key: 'england', wikiUrl: '/wiki/England' },//
  				  { display_name: 'Equatorial Guinea', key: 'equatorial_guinea', wikiUrl: '/wiki/Equatorial_Guinea' },
  				  { display_name: 'Eritrea', key: 'eritrea', wikiUrl: '/wiki/Eritrea' },
  				  { display_name: 'Estonia', key: 'estonia', wikiUrl: '/wiki/Estonia' },
  				  { display_name: 'Ethiopia', key: 'ethiopia', wikiUrl: '/wiki/Ethiopia' },
  				  { display_name: 'Falkland Islands', key: 'falkland_islands', wikiUrl: '/wiki/Falkland_Islands' },//
  				  { display_name: 'Faroe Islands', key: 'faroe_islands', wikiUrl: '/wiki/Faroe_Islands' },//
  				  { display_name: 'Federated States of Micronesia', key: 'federated_states_of_micronesia', wikiUrl: '/wiki/Micronesia' },//
  				  { display_name: 'Fiji', key: 'fiji', wikiUrl: '/wiki/Fiji' },
  				  { display_name: 'Finland', key: 'finland', wikiUrl: '/wiki/Finland' },
  				  { display_name: 'France', key: 'france', wikiUrl: '/wiki/France' },
  				  { display_name: 'French Guiana', key: 'french_guiana', wikiUrl: '/wiki/French_Guiana' },
  				  { display_name: 'French Polynesia', key: 'french_polynesia', wikiUrl: '/wiki/French_Polynesia' },
  				  { display_name: 'French Southern and Antarctic Lands', key: 'french_southern_and_antarctic_lands', wikiUrl: '/wiki/French_Southern_and_Antarctic_Lands' },
  				  { display_name: 'Gabon', key: 'gabon', wikiUrl: '/wiki/Gabon' },
  				  { display_name: 'Galicia', key: 'galicia', wikiUrl: '/wiki/Galicia_(Spain)' },
  				  { display_name: 'Georgia', key: 'georgia_country', wikiUrl: '/wiki/Georgia_(country)' },
  				  { display_name: 'Germany', key: 'germany', wikiUrl: '/wiki/Germany' },
  				  { display_name: 'Ghana', key: 'ghana', wikiUrl: '/wiki/Ghana' },
  				  { display_name: 'Gibraltar', key: 'gibraltar', wikiUrl: '/wiki/Gibraltar' },
  				  { display_name: 'Greece', key: 'greece', wikiUrl: '/wiki/Greece' },
  				  { display_name: 'Greenland', key: 'greenland', wikiUrl: '/wiki/Greenland' },
  				  { display_name: 'Grenada', key: 'grenada', wikiUrl: '/wiki/Grenada' },
  				  { display_name: 'Guadeloupe', key: 'guadeloupe', wikiUrl: '/wiki/Guadeloupe' },
  				  { display_name: 'Guam', key: 'guam', wikiUrl: '/wiki/Guam' },
  				  { display_name: 'Guatemala', key: 'guatemala', wikiUrl: '/wiki/Guatemala' },
  				  { display_name: 'Guernsey', key: 'guernsey', wikiUrl: '/wiki/Guernsey' },
  				  { display_name: 'Guinea', key: 'guinea', wikiUrl: '/wiki/Guinea' },
  				  { display_name: 'Guinea-Bissau', key: 'guinea_bissau', wikiUrl: '/wiki/Guinea-Bissau' },
  				  { display_name: 'Guyana', key: 'guyana', wikiUrl: '/wiki/Guyana' },
  				  { display_name: 'Haiti', key: 'haiti', wikiUrl: '/wiki/Haiti' },
  				  { display_name: 'Heard Island and Mcdonald Islands', key: 'heard_island_and_mcdonald_islands', wikiUrl: '/wiki/Heard_Island_and_McDonald_Islands' },
  				  { display_name: 'Honduras', key: 'honduras', wikiUrl: '/wiki/Honduras' },
  				  { display_name: 'Hong Kong', key: 'hong_kong', wikiUrl: '/wiki/Hong_Kong' },
  				  { display_name: 'Hungary', key: 'hungary', wikiUrl: '/wiki/Hungary' },
  				  { display_name: 'Iceland', key: 'iceland', wikiUrl: '/wiki/Iceland' },
  				  { display_name: 'India', key: 'india', wikiUrl: '/wiki/India' },
  				  { display_name: 'Indonesia', key: 'indonesia', wikiUrl: '/wiki/Indonesia' },
  				  { display_name: 'Iran', key: 'iran', wikiUrl: '/wiki/Iran' },
  				  { display_name: 'Iraq', key: 'iraq', wikiUrl: '/wiki/Iraq' },
  				  { display_name: 'Iraqi Kurdistan', key: 'iraqi_kurdistan', wikiUrl: '/wiki/Iraqi_Kurdistan' },
  				  { display_name: 'Ireland', key: 'ireland', wikiUrl: '/wiki/Republic_of_Ireland' },
  				  { display_name: 'Isle of Man', key: 'isle_of_man', wikiUrl: '/wiki/Isle_of_Man' },
  				  { display_name: 'Israel', key: 'israel', wikiUrl: '/wiki/Israel' },
  				  { display_name: 'Italy', key: 'italy', wikiUrl: '/wiki/Italy' },
  				  { display_name: 'Jamaica', key: 'jamaica', wikiUrl: '/wiki/Jamaica' },
  				  { display_name: 'Japan', key: 'japan', wikiUrl: '/wiki/Japan' },
  				  { display_name: 'Jersey', key: 'jersey', wikiUrl: '/wiki/Jersey' },
  				  { display_name: 'Jordan', key: 'jordan', wikiUrl: '/wiki/Jordan' },
  				  { display_name: 'Kazakhstan', key: 'kazakhstan', wikiUrl: '/wiki/Kazakhstan' },
  				  { display_name: 'Kenya', key: 'kenya', wikiUrl: '/wiki/Kenya' },
  				  { display_name: 'Kiribati', key: 'kiribati', wikiUrl: '/wiki/Kiribati' },
  				  { display_name: 'Kosovo', key: 'kosovo', wikiUrl: '/wiki/Kosovo' },
  				  { display_name: 'Kuwait', key: 'kuwait', wikiUrl: '/wiki/Kuwait' },
  				  { display_name: 'Kyrgyzstan', key: 'kyrgyzstan', wikiUrl: '/wiki/Kyrgyzstan' },
  				  { display_name: 'Laos', key: 'laos', wikiUrl: '/wiki/Laos' },
  				  { display_name: 'Latvia', key: 'latvia', wikiUrl: '/wiki/Latvia' },
  				  { display_name: 'Lebanon', key: 'lebanon', wikiUrl: '/wiki/Lebanon' },
  				  { display_name: 'Lesotho', key: 'lesotho', wikiUrl: '/wiki/Lesotho' },
  				  { display_name: 'Liberia', key: 'liberia', wikiUrl: '/wiki/Liberia' },
  				  { display_name: 'Libya', key: 'libya', wikiUrl: '/wiki/Libya' },
  				  { display_name: 'Liechtenstein', key: 'liechtenstein', wikiUrl: '/wiki/Liechtenstein' },
  				  { display_name: 'Lithuania', key: 'lithuania', wikiUrl: '/wiki/Lithuania' },
  				  { display_name: 'Luxembourg', key: 'luxembourg', wikiUrl: '/wiki/Luxembourg' },
  				  { display_name: 'Macau', key: 'macau', wikiUrl: '/wiki/Macau' },
  				  { display_name: 'Macedonia', key: 'macedonia', wikiUrl: '/wiki/Republic_of_Macedonia' },
  				  { display_name: 'Madagascar', key: 'madagascar', wikiUrl: '/wiki/Madagascar' },
  				  { display_name: 'Malawi', key: 'malawi', wikiUrl: '/wiki/Malawi' },
  				  { display_name: 'Malaysia', key: 'malaysia', wikiUrl: '/wiki/Malaysia' },
  				  { display_name: 'Maldives', key: 'maldives', wikiUrl: '/wiki/Maldives' },
  				  { display_name: 'Mali', key: 'mali', wikiUrl: '/wiki/Mali' },
  				  { display_name: 'Malta', key: 'malta', wikiUrl: '/wiki/Malta' },
  				  { display_name: 'Marshall Islands', key: 'marshall_islands', wikiUrl: '/wiki/Marshall_Islands' },
  				  { display_name: 'Martinique', key: 'martinique', wikiUrl: '/wiki/Martinique' },
  				  { display_name: 'Mauritania', key: 'mauritania', wikiUrl: '/wiki/Mauritania' },
  				  { display_name: 'Mauritius', key: 'mauritius', wikiUrl: '/wiki/Mauritius' },
  				  { display_name: 'Mayotte', key: 'mayotte', wikiUrl: '/wiki/Mayotte' },
  				  { display_name: 'Mexico', key: 'mexico', wikiUrl: '/wiki/Mexico' },
  				  { display_name: 'Moldova', key: 'moldova', wikiUrl: '/wiki/Moldova' },
  				  { display_name: 'Monaco', key: 'monaco', wikiUrl: '/wiki/Monaco' },
  				  { display_name: 'Mongolia', key: 'mongolia', wikiUrl: '/wiki/Mongolia' },
  				  { display_name: 'Montenegro', key: 'montenegro', wikiUrl: '/wiki/Montenegro' },
  				  { display_name: 'Montserrat', key: 'montserrat', wikiUrl: '/wiki/Montserrat' },
  				  { display_name: 'Morocco', key: 'morocco', wikiUrl: '/wiki/Morocco' },
  				  { display_name: 'Mozambique', key: 'mozambique', wikiUrl: '/wiki/Mozambique' },
  				  { display_name: 'Myanmar (Burma)', key: 'myanmar', wikiUrl: '/wiki/Burma' },
  				  { display_name: 'Nagorno-Karabakh', key: 'nagorno_karabakh', wikiUrl: '/wiki/Nagorno-Karabakh_Republic' }, //
  				  { display_name: 'Namibia', key: 'namibia', wikiUrl: '/wiki/Namibia' },
  				  { display_name: 'Nauru', key: 'nauru', wikiUrl: '/wiki/Nauru' },
  				  { display_name: 'Nepal', key: 'nepal', wikiUrl: '/wiki/Nepal' },
  				  { display_name: 'Netherlands', key: 'netherlands', wikiUrl: '/wiki/Kingdom_of_the_Netherlands' },
  				  { display_name: 'New Caledonia', key: 'new_caledonia', wikiUrl: '/wiki/New_Caledonia' },
  				  { display_name: 'New Zealand', key: 'new_zealand', wikiUrl: '/wiki/New_Zealand' },
  				  { display_name: 'Nicaragua', key: 'nicaragua', wikiUrl: '/wiki/Nicaragua' },
  				  { display_name: 'Niger', key: 'niger', wikiUrl: '/wiki/Niger' },
  				  { display_name: 'Nigeria', key: 'nigeria', wikiUrl: '/wiki/Nigeria' },
  				  { display_name: 'Niue', key: 'niue', wikiUrl: '/wiki/Niue' },
  				  { display_name: 'Norfolk Island', key: 'norfolk_island', wikiUrl: '/wiki/Norfolk_Island' },
  				  { display_name: 'North Korea', key: 'north_korea', wikiUrl: '/wiki/North_Korea' },
  				  { display_name: 'Northern Cyprus', key: 'northern_cyprus', wikiUrl: '/wiki/Northern_Cyprus' },//
  				  { display_name: 'Northern Mariana Islands', key: 'northern_mariana_islands', wikiUrl: '/wiki/Northern_Mariana_Islands' },
  				  { display_name: 'Norway', key: 'norway', wikiUrl: '/wiki/Norway' },
  				  { display_name: 'Oman', key: 'oman', wikiUrl: '/wiki/Oman' },
  				  { display_name: 'Pakistan', key: 'pakistan', wikiUrl: '/wiki/Pakistan' },
  				  { display_name: 'Palau', key: 'palau', wikiUrl: '/wiki/Palau' },
  				  { display_name: 'Palestine', key: 'palestine', wikiUrl: '/wiki/State_of_Palestine' },
  				  { display_name: 'Panama', key: 'panama', wikiUrl: '/wiki/Panama' },
  				  { display_name: 'Papua New Guinea', key: 'papua_new_guinea', wikiUrl: '/wiki/Papua_New_Guinea' },
  				  { display_name: 'Paraguay', key: 'paraguay', wikiUrl: '/wiki/Paraguay' },
  				  { display_name: 'People\'s Republic of China', key: 'peoples_republic_of_china', wikiUrl: '/wiki/China' },
  				  { display_name: 'Peru', key: 'peru', wikiUrl: '/wiki/Peru' },
  				  { display_name: 'Philippines', key: 'philippines', wikiUrl: '/wiki/Philippines' },
  				  { display_name: 'Pitcairn Islands', key: 'pitcairn_islands', wikiUrl: '/wiki/Pitcairn_Islands' },
  				  { display_name: 'Poland', key: 'poland', wikiUrl: '/wiki/Poland' },
  				  { display_name: 'Portugal', key: 'portugal', wikiUrl: '/wiki/Portugal' },
  				  { display_name: 'Puerto Rico', key: 'puerto_rico', wikiUrl: '/wiki/Puerto_Rico' },
  				  { display_name: 'Qatar', key: 'qatar', wikiUrl: '/wiki/Qatar' },
  				  { display_name: 'R&eacute;union', key: 'reunion', wikiUrl: '/wiki/R%C3%A9union' },
  				  { display_name: 'Republic of China (Taiwan)', key: 'taiwan', wikiUrl: '/wiki/Taiwan' },
  				  { display_name: 'Romania', key: 'romania', wikiUrl: '/wiki/Romania' },
  				  { display_name: 'Russia', key: 'russia', wikiUrl: '/wiki/Russia' },
  				  { display_name: 'Rwanda', key: 'rwanda', wikiUrl: '/wiki/Rwanda' },
  				  { display_name: 'S&atilde;o Tom&eacute; and Pr&iacute;ncipe', key: 'sao_tome_and_principe', wikiUrl: '/wiki/S%C3%A3o_Tom%C3%A9_and_Pr%C3%ADncipe' },
  				  { display_name: 'Sahrawi Arab Democratic Republic', key: 'sahrawi_arab_democratic_republic', wikiUrl: '/wiki/Sahrawi_Arab_Democratic_Republic' },//
  				  { display_name: 'Saint Barth&eacute;lemy', key: 'saint_barthelemy', wikiUrl: '/wiki/Saint_Barth%C3%A9lemy' },//
  				  { display_name: 'Saint Helena', key: 'saint_helena', wikiUrl: '/wiki/Saint_Helena' },
  				  { display_name: 'Saint Kitts and Nevis', key: 'saint_kitts_and_nevis', wikiUrl: '/wiki/Saint_Kitts_and_Nevis' },
  				  { display_name: 'Saint Lucia', key: 'saint_lucia', wikiUrl: '/wiki/Saint_Lucia' },
  				  { display_name: 'Saint Martin', key: 'saint_martin', wikiUrl: '/wiki/Collectivity_of_Saint_Martin' },
  				  { display_name: 'Saint Vincent and the Grenadines', key: 'saint_vincent_and_the_grenadines', wikiUrl: '/wiki/Saint_Vincent_and_the_Grenadines' },
  				  { display_name: 'Saint-Pierre and Miquelon', key: 'saint_pierre_and_miquelon', wikiUrl: '/wiki/Saint_Pierre_and_Miquelon' },
  				  { display_name: 'Samoa', key: 'samoa', wikiUrl: '/wiki/Samoa' },
  				  { display_name: 'San Marino', key: 'san_marino', wikiUrl: '/wiki/San_Marino' },
  				  { display_name: 'Saudi Arabia', key: 'saudi_arabia', wikiUrl: '/wiki/Saudi_Arabia' },
  				  { display_name: 'Scotland', key: 'scotland', wikiUrl: '/wiki/Scotland' },
  				  { display_name: 'Senegal', key: 'senegal', wikiUrl: '/wiki/Senegal' },
  				  { display_name: 'Serbia', key: 'serbia', wikiUrl: '/wiki/Serbia' },
  				  { display_name: 'Seychelles', key: 'seychelles', wikiUrl: '/wiki/Seychelles' },
  				  { display_name: 'Sierra Leone', key: 'sierra_leone', wikiUrl: '/wiki/Sierra_Leone' },
  				  { display_name: 'Singapore', key: 'singapore', wikiUrl: '/wiki/Singapore' },
  				  { display_name: 'Sint Maarten', key: 'sint_maarten', wikiUrl: '/wiki/Sint_Maarten' },//
  				  { display_name: 'Slovakia', key: 'slovakia', wikiUrl: '/wiki/Slovakia' },
  				  { display_name: 'Slovenia', key: 'slovenia', wikiUrl: '/wiki/Slovenia' },
  				  { display_name: 'Solomon Islands', key: 'solomon_islands', wikiUrl: '/wiki/Solomon_Islands' },
  				  { display_name: 'Somalia', key: 'somalia', wikiUrl: '/wiki/Somalia' },
  				  { display_name: 'Somaliland', key: 'somaliland', wikiUrl: '/wiki/Somaliland' },
  				  { display_name: 'South Africa', key: 'south_africa', wikiUrl: '/wiki/South_Africa' },
  				  { display_name: 'South Georgia and the South Sandwich Islands', key: 'south_georgia_and_the_south_sandwich_islands', wikiUrl: '/wiki/South_Georgia_and_the_South_Sandwich_Islands' },
  				  { display_name: 'South Korea', key: 'south_korea', wikiUrl: '/wiki/South_Korea' },
  				  { display_name: 'South Ossetia', key: 'south_ossetia', wikiUrl: '/wiki/South_Ossetia' },//
  				  { display_name: 'South Sudan', key: 'south_sudan', wikiUrl: '/wiki/South_Sudan' },//
  				  { display_name: 'Spain', key: 'spain', wikiUrl: '/wiki/Spain' },
  				  { display_name: 'Sri Lanka', key: 'sri_lanka', wikiUrl: '/wiki/Sri_Lanka' },
  				  { display_name: 'Sudan', key: 'sudan', wikiUrl: '/wiki/Sudan' },
  				  { display_name: 'Suriname', key: 'suriname', wikiUrl: '/wiki/Suriname' },
  				  { display_name: 'Svalbard and Jan Mayen', key: 'svalbard_and_jan_mayen', wikiUrl: '/wiki/Svalbard_and_Jan_Mayen' },
  				  { display_name: 'Swaziland', key: 'swaziland', wikiUrl: '/wiki/Swaziland' },
  				  { display_name: 'Sweden', key: 'sweden', wikiUrl: '/wiki/Sweden' },
  				  { display_name: 'Switzerland', key: 'switzerland', wikiUrl: '/wiki/Switzerland' },
  				  { display_name: 'Syria', key: 'syria', wikiUrl: '/wiki/Syria' },
  				  { display_name: 'Syrian Kurdistan', key: 'syrian_kurdistan', wikiUrl: '/wiki/Syrian_Kurdistan' },
  				  { display_name: 'Tajikistan', key: 'tajikistan', wikiUrl: '/wiki/Tajikistan' },
  				  { display_name: 'Tanzania', key: 'tanzania', wikiUrl: '/wiki/Tanzania' },
  				  { display_name: 'Thailand', key: 'thailand', wikiUrl: '/wiki/Thailand' },
  				  { display_name: 'The Bahamas', key: 'the_bahamas', wikiUrl: '/wiki/The_Bahamas' },
  				  { display_name: 'The Gambia', key: 'the_gambia', wikiUrl: '/wiki/The_Gambia' },
  				  { display_name: 'Timor-Leste (East Timor)', key: 'east_timor', wikiUrl: '/wiki/East_Timor' },//
  				  { display_name: 'Togo', key: 'togo', wikiUrl: '/wiki/Togo' },
  				  { display_name: 'Tokelau', key: 'tokelau', wikiUrl: '/wiki/Tokelau' },
  				  { display_name: 'Tonga', key: 'tonga', wikiUrl: '/wiki/Tonga' },
  				  { display_name: 'Transnistria', key: 'transnistria', wikiUrl: '/wiki/Transnistria' },
  				  { display_name: 'Trinidad and Tobago', key: 'trinidad_and_tobago', wikiUrl: '/wiki/Trinidad_and_Tobago' },
  				  { display_name: 'Tunisia', key: 'tunisia', wikiUrl: '/wiki/Tunisia' },
  				  { display_name: 'Turkey', key: 'turkey', wikiUrl: '/wiki/Turkey' },
  				  { display_name: 'Turkmenistan', key: 'turkmenistan', wikiUrl: '/wiki/Turkmenistan' },
  				  { display_name: 'Turks and Caicos Islands', key: 'turks_and_caicos_islands', wikiUrl: '/wiki/Turks_and_Caicos_Islands' },
  				  { display_name: 'Tuvalu', key: 'tuvalu', wikiUrl: '/wiki/Tuvalu' },
  				  { display_name: 'Uganda', key: 'uganda', wikiUrl: '/wiki/Uganda' },
  				  { display_name: 'Ukraine', key: 'ukraine', wikiUrl: '/wiki/Ukraine' },
  				  { display_name: 'United Arab Emirates', key: 'united_arab_emirates', wikiUrl: '/wiki/United_Arab_Emirates' },
  				  { display_name: 'United Kingdom', key: 'united_kingdom', wikiUrl: '/wiki/United_Kingdom' },
  				  { display_name: 'United States Minor Outlying Islands', key: 'united_states_minor_outlying_islands', wikiUrl: '/wiki/United_States_Minor_Outlying_Islands' },
  				  { display_name: 'United States Virgin Islands', key: 'united_states_virgin_islands', wikiUrl: '/wiki/United_States_Virgin_Islands' },
  				  { display_name: 'United States of America', key: 'united_states', wikiUrl: '/wiki/United_States' },//
  				  { display_name: 'Uruguay', key: 'uruguay', wikiUrl: '/wiki/Uruguay' },
  				  { display_name: 'Uzbekistan', key: 'uzbekistan', wikiUrl: '/wiki/Uzbekistan' },
  				  { display_name: 'Vanuatu', key: 'vanuatu', wikiUrl: '/wiki/Vanuatu' },
  				  { display_name: 'Vatican City', key: 'vatican_city', wikiUrl: '/wiki/Vatican_City' },
  				  { display_name: 'Venezuela', key: 'venezuela', wikiUrl: '/wiki/Venezuela' },
  				  { display_name: 'Vietnam', key: 'vietnam', wikiUrl: '/wiki/Vietnam' },
  				  { display_name: 'Wales', key: 'wales', wikiUrl: '/wiki/Wales' },
  				  { display_name: 'Wallis and Futuna', key: 'wallis_and_futuna', wikiUrl: '/wiki/Wallis_and_Futuna' },
  				  { display_name: 'Yemen', key: 'yemen', wikiUrl: '/wiki/Yemen' },
  				  { display_name: 'Zambia', key: 'zambia', wikiUrl: '/wiki/Zambia' },
            { display_name: 'Zimbabwe', key: 'zimbabwe', wikiUrl: '/wiki/Zimbabwe' },
            { display_name: 'Tristan da Cunha', key: 'tristan_da_cunha', wikiUrl: '/Tristan_da_Cunha' },
            { display_name: 'Ascension Island', key: 'ascension_island', wikiUrl: '/wiki/Ascension_Island' },
  				  { display_name: 'Sovereign Military Order of Malta', key: 'sovereign_military_order_of_malta', wikiUrl: '/wiki/Sovereign_Military_Order_of_Malta' } ]

var states = [{display_name: 'Alabama', key: 'alabama', wikiUrl: '/wiki/Alabama'},
			  {display_name: 'Alaska', key: 'alaska', wikiUrl: '/wiki/Alaska'},
			  {display_name: 'Arizona', key: 'arizona', wikiUrl: '/wiki/Arizona'},
			  {display_name: 'Arkansas', key: 'arkansas', wikiUrl: '/wiki/Arkansas'},
			  {display_name: 'California', key: 'california', wikiUrl: '/wiki/California'},
			  {display_name: 'Colorado', key: 'colorado', wikiUrl: '/wiki/Colorado'},
			  {display_name: 'Connecticut', key: 'connecticut', wikiUrl: '/wiki/Connecticut'},
			  {display_name: 'Delaware', key: 'delaware', wikiUrl: '/wiki/Delaware'},
			  {display_name: 'Florida', key: 'florida', wikiUrl: '/wiki/Florida'},
			  {display_name: 'Georgia', key: 'georgia', wikiUrl: '/wiki/Georgia_(U.S._state)'},
			  {display_name: 'Hawaii', key: 'hawaii', wikiUrl: '/wiki/Hawaii'},
			  {display_name: 'Idaho', key: 'idaho', wikiUrl: '/wiki/Idaho'},
			  {display_name: 'Illinois', key: 'illinois', wikiUrl: '/wiki/Illinois'},
			  {display_name: 'Indiana', key: 'indiana', wikiUrl: '/wiki/Indiana'},
			  {display_name: 'Iowa', key: 'iowa', wikiUrl: '/wiki/Iowa'},
			  {display_name: 'Kansas', key: 'kansas', wikiUrl: '/wiki/Kansas'},
			  {display_name: 'Kentucky', key: 'kentucky', wikiUrl: '/wiki/Kentucky'},
			  {display_name: 'Louisiana', key: 'louisiana', wikiUrl: '/wiki/Louisiana'},
			  {display_name: 'Maine', key: 'maine', wikiUrl: '/wiki/Maine'},
			  {display_name: 'Maryland', key: 'maryland', wikiUrl: '/wiki/Maryland'},
			  {display_name: 'Massachusetts', key: 'massachusetts', wikiUrl: '/wiki/Massachusetts'},
			  {display_name: 'Michigan', key: 'michigan', wikiUrl: '/wiki/Michigan'},
			  {display_name: 'Minnesota', key: 'minnesota', wikiUrl: '/wiki/Minnesota'},
			  {display_name: 'Mississippi', key: 'mississippi', wikiUrl: '/wiki/Mississippi'},
			  {display_name: 'Missouri', key: 'missouri', wikiUrl: '/wiki/Missouri'},
			  {display_name: 'Montana', key: 'montana', wikiUrl: '/wiki/Montana'},
			  {display_name: 'Nebraska', key: 'nebraska', wikiUrl: '/wiki/Nebraska'},
			  {display_name: 'Nevada', key: 'nevada', wikiUrl: '/wiki/Nevada'},
			  {display_name: 'New Hampshire', key: 'new_hampshire', wikiUrl: '/wiki/New_Hampshire'},
			  {display_name: 'New Jersey', key: 'new_jersey', wikiUrl: '/wiki/New_Jersey'},
			  {display_name: 'New Mexico', key: 'new_mexico', wikiUrl: '/wiki/New_Mexico'},
			  {display_name: 'New York', key: 'new_york', wikiUrl: '/wiki/New_York'},
			  {display_name: 'North Carolina', key: 'north_carolina', wikiUrl: '/wiki/North_Carolina'},
			  {display_name: 'North Dakota', key: 'north_dakota', wikiUrl: '/wiki/North_Dakota'},
			  {display_name: 'Ohio', key: 'ohio', wikiUrl: '/wiki/Ohio'},
			  {display_name: 'Oklahoma', key: 'oklahoma', wikiUrl: '/wiki/Oklahoma'},
			  {display_name: 'Oregon', key: 'oregon', wikiUrl: '/wiki/Oregon'},
			  {display_name: 'Pennsylvania', key: 'pennsylvania', wikiUrl: '/wiki/Pennsylvania'},
			  {display_name: 'Rhode Island', key: 'rhode_island', wikiUrl: '/wiki/Rhode_Island'},
			  {display_name: 'South Carolina', key: 'south_carolina', wikiUrl: '/wiki/South_Carolina'},
			  {display_name: 'South Dakota', key: 'south_dakota', wikiUrl: '/wiki/South_Dakota'},
			  {display_name: 'Tennessee', key: 'tennessee', wikiUrl: '/wiki/Tennessee'},
			  {display_name: 'Texas', key: 'texas', wikiUrl: '/wiki/Texas'},
			  {display_name: 'Utah', key: 'utah', wikiUrl: '/wiki/Utah'},
			  {display_name: 'Vermont', key: 'vermont', wikiUrl: '/wiki/Vermont'},
			  {display_name: 'Virginia', key: 'virginia', wikiUrl: '/wiki/Virginia'},
			  {display_name: 'Washington', key: 'washington', wikiUrl: '/wiki/Washington_(state)'},
			  {display_name: 'Washington D.C.', key: 'washington_dc', wikiUrl: '/wiki/Washington%2C_D.C.'},
			  {display_name: 'West Virginia', key: 'west_virginia', wikiUrl: '/wiki/West_Virginia'},
			  {display_name: 'Wisconsin', key: 'wisconsin', wikiUrl: '/wiki/Wisconsin'},
			  {display_name: 'Wyoming', key: 'wyoming', wikiUrl: '/wiki/Wyoming'}]

var provinces = [{display_name: 'Alberta', key: 'alberta', wikiUrl: '/wiki/Alberta'},
				 {display_name: 'British Columbia', key: 'british_columbia', wikiUrl: '/wiki/British_Columbia'},
				 {display_name: 'Manitoba', key: 'manitoba', wikiUrl: '/wiki/Manitoba'},
				 {display_name: 'New Brunswick', key: 'new_brunswick', wikiUrl: '/wiki/New_Brunswick'},
				 {display_name: 'Newfoundland and Labrador', key: 'newfoundland_and_labrador', wikiUrl: '/wiki/Newfoundland_and_Labrador'},
				 {display_name: 'Nova Scotia', key: 'nova_scotia', wikiUrl: '/wiki/Nova_Scotia'},
				 {display_name: 'Ontario', key: 'ontario', wikiUrl: '/wiki/Ontario'},
				 {display_name: 'Prince Edward Island', key: 'prince_edward_island', wikiUrl: '/wiki/Prince_Edward_Island'},
				 {display_name: 'Quebec', key: 'quebec', wikiUrl: '/wiki/Quebec'},
				 {display_name: 'Saskatchewan', key: 'saskatchewan', wikiUrl: '/wiki/Saskatchewan'},
				 {display_name: 'Northwest Territories', key: 'northwest_territories', wikiUrl: '/wiki/Northwest_Territories'},
				 {display_name: 'Yukon', key: 'yukon', wikiUrl: '/wiki/Yukon'},
				 {display_name: 'Nunavut', key: 'nunavut', wikiUrl: '/wiki/Nunavut'}]

var australian_states = [{display_name: '', key: 'australian_capital_territory', wikiUrl: '/wiki/Australian_Capital_Territory'},
                         {display_name: 'New South Wales', key: 'new_south_wales', wikiUrl: '/wiki/New_South_Wales'},
                         {display_name: 'Northern Territory', key: 'northern_territory', wikiUrl: '/wiki/Northern_Territory'},
                         {display_name: 'Queensland', key: 'queensland', wikiUrl: '/wiki/Queensland'},
                         {display_name: 'South Australia', key: 'south_australia', wikiUrl: '/wiki/South_Australia'},
                         {display_name: 'Tasmania', key: 'tasmania', wikiUrl: '/wiki/Tasmania'},
                         {display_name: 'Victoria', key: 'victoria_australia', wikiUrl: '/wiki/Victoria_(Australia)'},
                         {display_name: 'Western Australia', key: 'western_australia', wikiUrl: '/wiki/Western_Australia'}]

var supranational_unions = [{display_name: 'United Nations', key: 'united_nations', wikiUrl: '/wiki/United_Nations'},
                            {display_name: 'European Union', key: 'european_union', wikiUrl: '/wiki/European_Union'},
                            {display_name: 'Arab League', key: 'arab_league', wikiUrl: '/wiki/Arab_League'},
                            {display_name: 'Association of Southeast Asian Nations', key: 'association_of_southeast_asian_nations', wikiUrl: '/wiki/Association_of_Southeast_Asian_Nations'},
                            {display_name: 'Central American Integration System', key: 'central_american_integration_system', wikiUrl: '/wiki/Central_American_Integration_System'},
                            {display_name: 'Cooperation Council for the Arab States of the Gulf', key: 'cooperation_council_for_the_arab_states_of_the_gulf', wikiUrl: '/wiki/Cooperation_Council_for_the_Arab_States_of_the_Gulf'},
                            {display_name: 'African Union', key: 'african_union', wikiUrl: '/wiki/African_Union'},
                            {display_name: 'Union of South American Nations', key: 'union_of_south_american_nations', wikiUrl: '/wiki/Union_of_South_American_Nations'},
                            {display_name: 'Caribbean Community', key: 'caribbean_community', wikiUrl: '/wiki/Caribbean_Community'},
                            {display_name: 'Central European Free Trade Agreement', key: 'central_european_free_trade_agreement', wikiUrl: '/wiki/Central_European_Free_Trade_Agreement'},
                            {display_name: 'North American Free Trade Agreement', key: 'north_american_free_trade_agreement', wikiUrl: '/wiki/North_American_Free_Trade_Agreement'}]

var soviet_republics = [{display_name: 'Russian Soviet Federative Socialist Republic', key: 'russian_soviet_federative_socialist_republic', wikiUrl: '/wiki/Russian_Soviet_Federative_Socialist_Republic'},
                         {display_name: 'Ukrainian Soviet Socialist Republic', key: 'ukrainian_soviet_socialist_republic', wikiUrl: '/wiki/Ukrainian_Soviet_Socialist_Republic'},
                         {display_name: 'Uzbek Soviet Socialist Republic', key: 'uzbek_soviet_socialist_republic', wikiUrl: '/wiki/Uzbek_Soviet_Socialist_Republic'},
                         {display_name: 'Kazakh Soviet Socialist Republic', key: 'kazakh_soviet_socialist_republic', wikiUrl: '/wiki/Kazakh_Soviet_Socialist_Republic'},
                         {display_name: 'Byelorussian Soviet Socialist Republic', key: 'byelorussian_soviet_socialist_republic', wikiUrl: '/wiki/Byelorussian_Soviet_Socialist_Republic'},
                         {display_name: 'Azerbaijan Soviet Socialist Republic', key: 'azerbaijan_soviet_socialist_republic', wikiUrl: '/wiki/Azerbaijan_Soviet_Socialist_Republic'},
                         {display_name: 'Georgian Soviet Socialist Republic', key: 'georgian_soviet_socialist_republic', wikiUrl: '/wiki/Georgian_Soviet_Socialist_Republic'},
                         {display_name: 'Tajik Soviet Socialist Republic', key: 'tajik_soviet_socialist_republic', wikiUrl: '/wiki/Tajik_Soviet_Socialist_Republic'},
                         {display_name: 'Moldavian Soviet Socialist Republic', key: 'moldavian_soviet_socialist_republic', wikiUrl: '/wiki/Moldavian_Soviet_Socialist_Republic'},
                         {display_name: 'Kirghiz Soviet Socialist Republic', key: 'kirghiz_soviet_socialist_republic', wikiUrl: '/wiki/Kirghiz_Soviet_Socialist_Republic'},
                         {display_name: 'Lithuanian Soviet Socialist Republic', key: 'lithuanian_soviet_socialist_republic', wikiUrl: '/wiki/Lithuanian_Soviet_Socialist_Republic'},
                         {display_name: 'Turkmen Soviet Socialist Republic', key: 'turkmen_soviet_socialist_republic', wikiUrl: '/wiki/Turkmen_Soviet_Socialist_Republic'},
                         {display_name: 'Armenian Soviet Socialist Republic', key: 'armenian_soviet_socialist_republic', wikiUrl: '/wiki/Armenian_Soviet_Socialist_Republic'},
                         {display_name: 'Latvian Soviet Socialist Republic', key: 'latvian_soviet_socialist_republic', wikiUrl: '/wiki/Latvian_Soviet_Socialist_Republic'},
                         {display_name: 'Estonian Soviet Socialist Republic', key: 'estonian_soviet_socialist_republic', wikiUrl: '/wiki/Estonian_Soviet_Socialist_Republic'},
                         {display_name: 'Soviet Union', key: 'soviet_union', wikiUrl: '/wiki/Soviet_Union'}]

// {display_name: '', key: ''}



