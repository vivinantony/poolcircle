/**
* bootstrap-formhelpers.js v2.3.0 by @vincentlamanna
* Copyright 2013 Vincent Lamanna
* http://www.apache.org/licenses/LICENSE-2.0
*/
if (!jQuery) { throw new Error("Bootstrap Form Helpers requires jQuery"); }

/* ==========================================================
 * bootstrap-formhelpers-countries.en_US.js
 * https://github.com/vlamanna/BootstrapFormHelpers
 * ==========================================================
 * Copyright 2012 Vincent Lamanna
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */
 
var BFHCountriesList = {
  'AF': 'Afghanistan',
  'AL': 'Albania',
  'DZ': 'Algeria',
  'AS': 'American Samoa',
  'AD': 'Andorra',
  'AO': 'Angola',
  'AI': 'Anguilla',
  'AQ': 'Antarctica',
  'AG': 'Antigua and Barbuda',
  'AR': 'Argentina',
  'AM': 'Armenia',
  'AW': 'Aruba',
  'AU': 'Australia',
  'AT': 'Austria',
  'AZ': 'Azerbaijan',
  'BH': 'Bahrain',
  'BD': 'Bangladesh',
  'BB': 'Barbados',
  'BY': 'Belarus',
  'BE': 'Belgium',
  'BZ': 'Belize',
  'BJ': 'Benin',
  'BM': 'Bermuda',
  'BT': 'Bhutan',
  'BO': 'Bolivia',
  'BA': 'Bosnia and Herzegovina',
  'BW': 'Botswana',
  'BV': 'Bouvet Island',
  'BR': 'Brazil',
  'IO': 'British Indian Ocean Territory',
  'VG': 'British Virgin Islands',
  'BN': 'Brunei',
  'BG': 'Bulgaria',
  'BF': 'Burkina Faso',
  'BI': 'Burundi',
  'CI': 'Côte d\'Ivoire',
  'KH': 'Cambodia',
  'CM': 'Cameroon',
  'CA': 'Canada',
  'CV': 'Cape Verde',
  'KY': 'Cayman Islands',
  'CF': 'Central African Republic',
  'TD': 'Chad',
  'CL': 'Chile',
  'CN': 'China',
  'CX': 'Christmas Island',
  'CC': 'Cocos (Keeling) Islands',
  'CO': 'Colombia',
  'KM': 'Comoros',
  'CG': 'Congo',
  'CK': 'Cook Islands',
  'CR': 'Costa Rica',
  'HR': 'Croatia',
  'CU': 'Cuba',
  'CY': 'Cyprus',
  'CZ': 'Czech Republic',
  'CD': 'Democratic Republic of the Congo',
  'DK': 'Denmark',
  'DJ': 'Djibouti',
  'DM': 'Dominica',
  'DO': 'Dominican Republic',
  'TP': 'East Timor',
  'EC': 'Ecuador',
  'EG': 'Egypt',
  'SV': 'El Salvador',
  'GQ': 'Equatorial Guinea',
  'ER': 'Eritrea',
  'EE': 'Estonia',
  'ET': 'Ethiopia',
  'FO': 'Faeroe Islands',
  'FK': 'Falkland Islands',
  'FJ': 'Fiji',
  'FI': 'Finland',
  'MK': 'Former Yugoslav Republic of Macedonia',
  'FR': 'France',
  'FX': 'France, Metropolitan',
  'GF': 'French Guiana',
  'PF': 'French Polynesia',
  'TF': 'French Southern Territories',
  'GA': 'Gabon',
  'GE': 'Georgia',
  'DE': 'Germany',
  'GH': 'Ghana',
  'GI': 'Gibraltar',
  'GR': 'Greece',
  'GL': 'Greenland',
  'GD': 'Grenada',
  'GP': 'Guadeloupe',
  'GU': 'Guam',
  'GT': 'Guatemala',
  'GN': 'Guinea',
  'GW': 'Guinea-Bissau',
  'GY': 'Guyana',
  'HT': 'Haiti',
  'HM': 'Heard and Mc Donald Islands',
  'HN': 'Honduras',
  'HK': 'Hong Kong',
  'HU': 'Hungary',
  'IS': 'Iceland',
  'IN': 'India',
  'ID': 'Indonesia',
  'IR': 'Iran',
  'IQ': 'Iraq',
  'IE': 'Ireland',
  'IL': 'Israel',
  'IT': 'Italy',
  'JM': 'Jamaica',
  'JP': 'Japan',
  'JO': 'Jordan',
  'KZ': 'Kazakhstan',
  'KE': 'Kenya',
  'KI': 'Kiribati',
  'KW': 'Kuwait',
  'KG': 'Kyrgyzstan',
  'LA': 'Laos',
  'LV': 'Latvia',
  'LB': 'Lebanon',
  'LS': 'Lesotho',
  'LR': 'Liberia',
  'LY': 'Libya',
  'LI': 'Liechtenstein',
  'LT': 'Lithuania',
  'LU': 'Luxembourg',
  'MO': 'Macau',
  'MG': 'Madagascar',
  'MW': 'Malawi',
  'MY': 'Malaysia',
  'MV': 'Maldives',
  'ML': 'Mali',
  'MT': 'Malta',
  'MH': 'Marshall Islands',
  'MQ': 'Martinique',
  'MR': 'Mauritania',
  'MU': 'Mauritius',
  'YT': 'Mayotte',
  'MX': 'Mexico',
  'FM': 'Micronesia',
  'MD': 'Moldova',
  'MC': 'Monaco',
  'MN': 'Mongolia',
  'ME': 'Montenegro',
  'MS': 'Montserrat',
  'MA': 'Morocco',
  'MZ': 'Mozambique',
  'MM': 'Myanmar',
  'NA': 'Namibia',
  'NR': 'Nauru',
  'NP': 'Nepal',
  'NL': 'Netherlands',
  'AN': 'Netherlands Antilles',
  'NC': 'New Caledonia',
  'NZ': 'New Zealand',
  'NI': 'Nicaragua',
  'NE': 'Niger',
  'NG': 'Nigeria',
  'NU': 'Niue',
  'NF': 'Norfolk Island',
  'KP': 'North Korea',
  'MP': 'Northern Marianas',
  'NO': 'Norway',
  'OM': 'Oman',
  'PK': 'Pakistan',
  'PW': 'Palau',
  'PS': 'Palestine',
  'PA': 'Panama',
  'PG': 'Papua New Guinea',
  'PY': 'Paraguay',
  'PE': 'Peru',
  'PH': 'Philippines',
  'PN': 'Pitcairn Islands',
  'PL': 'Poland',
  'PT': 'Portugal',
  'PR': 'Puerto Rico',
  'QA': 'Qatar',
  'RE': 'Reunion',
  'RO': 'Romania',
  'RU': 'Russia',
  'RW': 'Rwanda',
  'ST': 'São Tomé and Príncipe',
  'SH': 'Saint Helena',
  'PM': 'St. Pierre and Miquelon',
  'KN': 'Saint Kitts and Nevis',
  'LC': 'Saint Lucia',
  'VC': 'Saint Vincent and the Grenadines',
  'WS': 'Samoa',
  'SM': 'San Marino',
  'SA': 'Saudi Arabia',
  'SN': 'Senegal',
  'RS': 'Serbia',
  'SC': 'Seychelles',
  'SL': 'Sierra Leone',
  'SG': 'Singapore',
  'SK': 'Slovakia',
  'SI': 'Slovenia',
  'SB': 'Solomon Islands',
  'SO': 'Somalia',
  'ZA': 'South Africa',
  'GS': 'South Georgia and the South Sandwich Islands',
  'KR': 'South Korea',
  'ES': 'Spain',
  'LK': 'Sri Lanka',
  'SD': 'Sudan',
  'SR': 'Suriname',
  'SJ': 'Svalbard and Jan Mayen Islands',
  'SZ': 'Swaziland',
  'SE': 'Sweden',
  'CH': 'Switzerland',
  'SY': 'Syria',
  'TW': 'Taiwan',
  'TJ': 'Tajikistan',
  'TZ': 'Tanzania',
  'TH': 'Thailand',
  'BS': 'The Bahamas',
  'GM': 'The Gambia',
  'TG': 'Togo',
  'TK': 'Tokelau',
  'TO': 'Tonga',
  'TT': 'Trinidad and Tobago',
  'TN': 'Tunisia',
  'TR': 'Turkey',
  'TM': 'Turkmenistan',
  'TC': 'Turks and Caicos Islands',
  'TV': 'Tuvalu',
  'VI': 'US Virgin Islands',
  'UG': 'Uganda',
  'UA': 'Ukraine',
  'AE': 'United Arab Emirates',
  'GB': 'United Kingdom',
  'US': 'United States',
  'UM': 'United States Minor Outlying Islands',
  'UY': 'Uruguay',
  'UZ': 'Uzbekistan',
  'VU': 'Vanuatu',
  'VA': 'Vatican City',
  'VE': 'Venezuela',
  'VN': 'Vietnam',
  'WF': 'Wallis and Futuna Islands',
  'EH': 'Western Sahara',
  'YE': 'Yemen',
  'ZM': 'Zambia',
  'ZW': 'Zimbabwe'
};

 /* ==========================================================
 * bootstrap-formhelpers-currencies.en_US.js
 * https://github.com/vlamanna/BootstrapFormHelpers
 * ==========================================================
 * Copyright 2013 Vincent Lamanna
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */
 
var BFHCurrenciesList = {
  'AED':{'label':'United Arab Emirates dirham','currencyflag':'','symbol':'د.إ'},
  'AFN':{'label':'Afghan afghani','currencyflag':'','symbol':'؋'},
  'ALL':{'label':'Albanian lek','currencyflag':'','symbol':'L'},
  'AMD':{'label':'Armenian dram','currencyflag':'','symbol':'դր'},
  'AOA':{'label':'Angolan kwanza','currencyflag':'','symbol':'Kz'},
  'ARS':{'label':'Argentine peso','currencyflag':'','symbol':'$'},
  'AUD':{'label':'Australian dollar','currencyflag':'AUD','symbol':'$'},
  'AWG':{'label':'Aruban florin','currencyflag':'','symbol':'ƒ'},
  'AZN':{'label':'Azerbaijani manat','currencyflag':'','symbol':''},
  'BAM':{'label':'Bosnia and Herzegovina convertible mark','currencyflag':'','symbol':'KM'},
  'BBD':{'label':'Barbadian dollar','currencyflag':'','symbol':'$'},
  'BDT':{'label':'Bangladeshi taka','currencyflag':'','symbol':'৳'},
  'BGN':{'label':'Bulgarian lev','currencyflag':'','symbol':'лв'},
  'BHD':{'label':'Bahraini dinar','currencyflag':'','symbol':'.د.ب'},
  'BIF':{'label':'Burundian franc','currencyflag':'','symbol':'Fr'},
  'BMD':{'label':'Bermudian dollar','currencyflag':'','symbol':'$'},
  'BND':{'label':'Brunei dollar','currencyflag':'','symbol':'$'},
  'BOB':{'label':'Bolivian boliviano','currencyflag':'','symbol':'Bs'},
  'BRL':{'label':'Brazilian real','currencyflag':'','symbol':'R$'},
  'BSD':{'label':'Bahamian dollar','currencyflag':'','symbol':'$'},
  'BTN':{'label':'Bhutanese ngultrum','currencyflag':'','symbol':'Nu'},
  'BWP':{'label':'Botswana pula','currencyflag':'','symbol':'P'},
  'BYR':{'label':'Belarusian ruble','currencyflag':'','symbol':'Br'},
  'BZD':{'label':'Belize dollar','currencyflag':'','symbol':'$'},
  'CAD':{'label':'Canadian dollar','currencyflag':'','symbol':'$'},
  'CDF':{'label':'Congolese franc','currencyflag':'','symbol':'Fr'},
  'CHF':{'label':'Swiss franc','currencyflag':'CHF','symbol':'Fr'},
  'CLP':{'label':'Chilean peso','currencyflag':'','symbol':'$'},
  'CNY':{'label':'Chinese yuan','currencyflag':'','symbol':'¥'},
  'COP':{'label':'Colombian peso','currencyflag':'','symbol':'$'},
  'CRC':{'label':'Costa Rican colón','currencyflag':'','symbol':'₡'},
  'CUP':{'label':'Cuban convertible peso','currencyflag':'','symbol':'$'},
  'CVE':{'label':'Cape Verdean escudo','currencyflag':'','symbol':'$'},
  'CZK':{'label':'Czech koruna','currencyflag':'','symbol':'Kč'},
  'DJF':{'label':'Djiboutian franc','currencyflag':'','symbol':'Fr'},
  'DKK':{'label':'Danish krone','currencyflag':'DKK','symbol':'kr'},
  'DOP':{'label':'Dominican peso','currencyflag':'','symbol':'$'},
  'DZD':{'label':'Algerian dinar','currencyflag':'','symbol':'د.ج'},
  'EGP':{'label':'Egyptian pound','currencyflag':'','symbol':'ج.م'},
  'ERN':{'label':'Eritrean nakfa','currencyflag':'','symbol':'Nfk'},
  'ETB':{'label':'Ethiopian birr','currencyflag':'','symbol':'Br'},
  'EUR':{'label':'Euro','currencyflag':'EUR','symbol':'€'},
  'FJD':{'label':'Fijian dollar','currencyflag':'','symbol':'$'},
  'FKP':{'label':'Falkland Islands pound','currencyflag':'','symbol':'£'},
  'GBP':{'label':'British pound','currencyflag':'','symbol':'£'},
  'GEL':{'label':'Georgian lari','currencyflag':'','symbol':'ლ'},
  'GHS':{'label':'Ghana cedi','currencyflag':'','symbol':'₵'},
  'GMD':{'label':'Gambian dalasi','currencyflag':'','symbol':'D'},
  'GNF':{'label':'Guinean franc','currencyflag':'','symbol':'Fr'},
  'GTQ':{'label':'Guatemalan quetzal','currencyflag':'','symbol':'Q'},
  'GYD':{'label':'Guyanese dollar','currencyflag':'','symbol':'$'},
  'HKD':{'label':'Hong Kong dollar','currencyflag':'','symbol':'$'},
  'HNL':{'label':'Honduran lempira','currencyflag':'','symbol':'L'},
  'HRK':{'label':'Croatian kuna','currencyflag':'','symbol':'kn'},
  'HTG':{'label':'Haitian gourde','currencyflag':'','symbol':'G'},
  'HUF':{'label':'Hungarian forint','currencyflag':'','symbol':'Ft'},
  'IDR':{'label':'Indonesian rupiah','currencyflag':'','symbol':'Rp'},
  'ILS':{'label':'Israeli new shekel','currencyflag':'','symbol':'₪'},
  'IMP':{'label':'Manx pound','currencyflag':'','symbol':'£'},
  'INR':{'label':'Indian rupee','currencyflag':'','symbol':''},
  'IQD':{'label':'Iraqi dinar','currencyflag':'','symbol':'ع.د'},
  'IRR':{'label':'Iranian rial','currencyflag':'','symbol':'﷼'},
  'ISK':{'label':'Icelandic króna','currencyflag':'','symbol':'kr'},
  'JEP':{'label':'Jersey pound','currencyflag':'','symbol':'£'},
  'JMD':{'label':'Jamaican dollar','currencyflag':'','symbol':'$'},
  'JOD':{'label':'Jordanian dinar','currencyflag':'','symbol':'د.ا'},
  'JPY':{'label':'Japanese yen','currencyflag':'','symbol':'¥'},
  'KES':{'label':'Kenyan shilling','currencyflag':'','symbol':'Sh'},
  'KGS':{'label':'Kyrgyzstani som','currencyflag':'','symbol':'лв'},
  'KHR':{'label':'Cambodian riel','currencyflag':'','symbol':'៛'},
  'KMF':{'label':'Comorian franc','currencyflag':'','symbol':'Fr'},
  'KPW':{'label':'North Korean won','currencyflag':'','symbol':'₩'},
  'KRW':{'label':'South Korean won','currencyflag':'','symbol':'₩'},
  'KWD':{'label':'Kuwaiti dinar','currencyflag':'','symbol':'د.ك'},
  'KYD':{'label':'Cayman Islands dollar','currencyflag':'','symbol':'$'},
  'KZT':{'label':'Kazakhstani tenge','currencyflag':'','symbol':'₸'},
  'LAK':{'label':'Lao kip','currencyflag':'','symbol':'₭'},
  'LBP':{'label':'Lebanese pound','currencyflag':'','symbol':'ل.ل'},
  'LKR':{'label':'Sri Lankan rupee','currencyflag':'','symbol':'Rs'},
  'LRD':{'label':'Liberian dollar','currencyflag':'','symbol':'$'},
  'LSL':{'label':'Lesotho loti','currencyflag':'','symbol':'L'},
  'LTL':{'label':'Lithuanian litas','currencyflag':'','symbol':'Lt'},
  'LVL':{'label':'Latvian lats','currencyflag':'','symbol':'Ls'},
  'LYD':{'label':'Libyan dinar','currencyflag':'','symbol':'ل.د'},
  'MAD':{'label':'Moroccan dirham','currencyflag':'','symbol':'د.م.'},
  'MDL':{'label':'Moldovan leu','currencyflag':'','symbol':'L'},
  'MGA':{'label':'Malagasy ariary','currencyflag':'','symbol':'Ar'},
  'MKD':{'label':'Macedonian denar','currencyflag':'','symbol':'ден'},
  'MMK':{'label':'Burmese kyat','currencyflag':'','symbol':'Ks'},
  'MNT':{'label':'Mongolian tögrög','currencyflag':'','symbol':'₮'},
  'MOP':{'label':'Macanese pataca','currencyflag':'','symbol':'P'},
  'MRO':{'label':'Mauritanian ouguiya','currencyflag':'','symbol':'UM'},
  'MUR':{'label':'Mauritian rupee','currencyflag':'','symbol':'Rs'},
  'MVR':{'label':'Maldivian rufiyaa','currencyflag':'','symbol':'.ރ'},
  'MWK':{'label':'Malawian kwacha','currencyflag':'','symbol':'MK'},
  'MXN':{'label':'Mexican peso','currencyflag':'','symbol':'$'},
  'MYR':{'label':'Malaysian ringgit','currencyflag':'','symbol':'MR'},
  'MZN':{'label':'Mozambican metical','currencyflag':'','symbol':'MT'},
  'NAD':{'label':'Namibian dollar','currencyflag':'','symbol':'$'},
  'NGN':{'label':'Nigerian naira','currencyflag':'','symbol':'₦'},
  'NIO':{'label':'Nicaraguan córdoba','currencyflag':'','symbol':'C$'},
  'NOK':{'label':'Norwegian krone','currencyflag':'','symbol':'kr'},
  'NPR':{'label':'Nepalese rupee','currencyflag':'','symbol':'Rs'},
  'NZD':{'label':'New Zealand dollar','currencyflag':'','symbol':'$'},
  'OMR':{'label':'Omani rial','currencyflag':'','symbol':'ر.ع.'},
  'PAB':{'label':'Panamanian balboa','currencyflag':'','symbol':'B/.'},
  'PEN':{'label':'Peruvian nuevo sol','currencyflag':'','symbol':'S/.'},
  'PGK':{'label':'Papua New Guinean kina','currencyflag':'','symbol':'K'},
  'PHP':{'label':'Philippine peso','currencyflag':'','symbol':'₱'},
  'PKR':{'label':'Pakistani rupee','currencyflag':'','symbol':'Rs'},
  'PLN':{'label':'Polish złoty','currencyflag':'','symbol':'zł'},
  'PRB':{'label':'Transnistrian ruble','currencyflag':'','symbol':'р.'},
  'PYG':{'label':'Paraguayan guaraní','currencyflag':'','symbol':'₲'},
  'QAR':{'label':'Qatari riyal','currencyflag':'','symbol':'ر.ق'},
  'RON':{'label':'Romanian leu','currencyflag':'','symbol':'L'},
  'RSD':{'label':'Serbian dinar','currencyflag':'','symbol':'дин'},
  'RUB':{'label':'Russian ruble','currencyflag':'','symbol':'руб.'},
  'RWF':{'label':'Rwandan franc','currencyflag':'','symbol':'Fr'},
  'SAR':{'label':'Saudi riyal','currencyflag':'','symbol':'ر.س'},
  'SBD':{'label':'Solomon Islands dollar','currencyflag':'','symbol':'$'},
  'SCR':{'label':'Seychellois rupee','currencyflag':'','symbol':'Rs'},
  'SDG':{'label':'Singapore dollar','currencyflag':'','symbol':'$'},
  'SEK':{'label':'Swedish krona','currencyflag':'','symbol':'kr'},
  'SGD':{'label':'Singapore dollar','currencyflag':'','symbol':'$'},
  'SHP':{'label':'Saint Helena pound','currencyflag':'','symbol':'£'},
  'SLL':{'label':'Sierra Leonean leone','currencyflag':'','symbol':'Le'},
  'SOS':{'label':'Somali shilling','currencyflag':'','symbol':'Sh'},
  'SRD':{'label':'Surinamese dollar','currencyflag':'','symbol':'$'},
  'SSP':{'label':'South Sudanese pound','currencyflag':'','symbol':'£'},
  'STD':{'label':'São Tomé and Príncipe dobra','currencyflag':'','symbol':'Db'},
  'SVC':{'label':'Salvadoran colón','currencyflag':'','symbol':'₡'},
  'SYP':{'label':'Syrian pound','currencyflag':'','symbol':'£'},
  'SZL':{'label':'Swazi lilangeni','currencyflag':'','symbol':'L'},
  'THB':{'label':'Thai baht','currencyflag':'','symbol':'฿'},
  'TJS':{'label':'Tajikistani somoni','currencyflag':'','symbol':'SM'},
  'TMT':{'label':'Turkmenistan manat','currencyflag':'','symbol':'m'},
  'TND':{'label':'Tunisian dinar','currencyflag':'','symbol':'د.ت'},
  'TOP':{'label':'Tongan paʻanga','currencyflag':'','symbol':'T$'},
  'TRY':{'label':'Turkish lira','currencyflag':'','symbol':'&#8378;'},
  'TTD':{'label':'Trinidad and Tobago dollar','currencyflag':'','symbol':'$'},
  'TWD':{'label':'New Taiwan dollar','currencyflag':'','symbol':'$'},
  'TZS':{'label':'Tanzanian shilling','currencyflag':'','symbol':'Sh'},
  'UAH':{'label':'Ukrainian hryvnia','currencyflag':'','symbol':'₴'},
  'UGX':{'label':'Ugandan shilling','currencyflag':'','symbol':'Sh'},
  'USD':{'label':'United States dollar','currencyflag':'','symbol':'$'},
  'UYU':{'label':'Uruguayan peso','currencyflag':'','symbol':'$'},
  'UZS':{'label':'Uzbekistani som','currencyflag':'','symbol':'лв'},
  'VEF':{'label':'Venezuelan bolívar','currencyflag':'','symbol':'Bs F'},
  'VND':{'label':'Vietnamese đồng','currencyflag':'','symbol':'₫'},
  'VUV':{'label':'Vanuatu vatu','currencyflag':'','symbol':'Vt'},
  'WST':{'label':'Samoan tālā','currencyflag':'','symbol':'T'},
  'XAF':{'label':'Central African CFA franc','currencyflag':'XAF','symbol':'Fr'},
  'XCD':{'label':'East Caribbean dollar','currencyflag':'XCD','symbol':'$'},
  'XOF':{'label':'West African CFA franc','currencyflag':'XOF','symbol':'Fr'},
  'XPF':{'label':'CFP franc','currencyflag':'XPF','symbol':'Fr'},
  'YER':{'label':'Yemeni rial','currencyflag':'','symbol':'﷼'},
  'ZAR':{'label':'South African rand','currencyflag':'ZAR','symbol':'R'},
  'ZMW':{'label':'Zambian kwacha','currencyflag':'','symbol':'ZK'},
  'ZWL':{'label':'Zimbabwean dollar','currencyflag':'','symbol':'$'}
};


/* ==========================================================
 * bootstrap-formhelpers-phone.en_US.js
 * https://github.com/vlamanna/BootstrapFormHelpers
 * ==========================================================
 * Copyright 2012 Vincent Lamanna
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file edcept in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either edpress or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */
 
var BFHPhoneFormatList = {
  'AF': '+93 0dd ddd dddd',
  'AL': '+355 0dd ddd ddd',
  'DZ': '+213 0ddd dd dd dd',
  'AS': '+1 (ddd) ddd-dddd',
  'AD': '+376 ddddddddd',
  'AO': '+244 ddd ddd ddd',
  'AI': '+1 (ddd) ddd-dddd',
  'AQ': '+672 ddddddddd',
  'AG': '+1 (ddd) ddd-dddd',
  'AR': '+54 ddddddddd',
  'AM': '+374 0dd dddddd',
  'AW': '+297 ddd dddd',
  'AU': '+61 ddd ddd ddd',
  'AT': '+43 0dddd ddddddddd',
  'AZ': '+994 ddddddddd',
  'BH': '+973 ddddddddd',
  'BD': '+880 ddddddddd',
  'BB': '+1 ddddddddd',
  'BY': '+375 ddddddddd',
  'BE': '+32 ddddddddd',
  'BZ': '+501 ddddddddd',
  'BJ': '+229 ddddddddd',
  'BM': '+1 (ddd) ddd-dddd',
  'BT': '+975 ddddddddd',
  'BO': '+591 ddddddddd',
  'BA': '+387 ddddddddd',
  'BW': '+267 ddddddddd',
  'BV': '+0 ddddddddd',
  'BR': '+55 ddddddddd',
  'IO': '+0 ddddddddd',
  'VG': '+1 (ddd) ddd-dddd',
  'BN': '+673 ddddddddd',
  'BG': '+359 ddddddddd',
  'BF': '+226 ddddddddd',
  'BI': '+257 ddddddddd',
  'CI': '+225 ddddddddd',
  'KH': '+855 ddddddddd',
  'CM': '+237 ddddddddd',
  'CA': '+1 (ddd) ddd-dddd',
  'CV': '+238 ddddddddd',
  'KY': '+1 (ddd) ddd-dddd',
  'CF': '+236 ddddddddd',
  'TD': '+235 ddddddddd',
  'CL': '+56 ddddddddd',
  'CN': '+86 ddddddddddd',
  'CX': '+61 ddddddddd',
  'CC': '+61 ddddddddd',
  'CO': '+57 ddddddddd',
  'KM': '+269 ddddddddd',
  'CG': '+242 ddddddddd',
  'CK': '+682 ddddddddd',
  'CR': '+506 ddddddddd',
  'HR': '+385 ddddddddd',
  'CU': '+53 ddddddddd',
  'CY': '+357 ddddddddd',
  'CZ': '+420 ddddddddd',
  'CD': '+243 ddddddddd',
  'DK': '+45 ddddddddd',
  'DJ': '+253 ddddddddd',
  'DM': '+1 (ddd) ddd-dddd',
  'DO': '+1 (ddd) ddd-dddd',
  'TL': '+670 ddddddddd',
  'EC': '+593 ddddddddd',
  'EG': '+20 ddddddddd',
  'SV': '+503 ddddddddd',
  'GQ': '+240 ddddddddd',
  'ER': '+291 ddddddddd',
  'EE': '+372 ddddddddd',
  'ET': '+251 ddddddddd',
  'FO': '+298 ddddddddd',
  'FK': '+500 ddddddddd',
  'FJ': '+679 ddddddddd',
  'FI': '+358 ddddddddd',
  'MK': '+389 ddddddddd',
  'FR': '+33 d dd dd dd dd',
  'GF': '+594 ddddddddd',
  'PF': '+689 ddddddddd',
  'TF': '+262 ddddddddd',
  'GA': '+241 ddddddddd',
  'GE': '+995 ddddddddd',
  'DE': '+49 ddddddddd',
  'GH': '+233 ddddddddd',
  'GI': '+350 ddddddddd',
  'GR': '+30 ddddddddd',
  'GL': '+299 ddddddddd',
  'GD': '+1 (ddd) ddd-dddd',
  'GP': '+590 ddddddddd',
  'GU': '+1 (ddd) ddd-dddd',
  'GT': '+502 ddddddddd',
  'GN': '+224 ddddddddd',
  'GW': '+245 ddddddddd',
  'GY': '+592 ddddddddd',
  'HT': '+509 ddddddddd',
  'HM': '+0 ddddddddd',
  'HN': '+504 ddddddddd',
  'HK': '+852 ddddddddd',
  'HU': '+36 ddddddddd',
  'IS': '+354 ddddddddd',
  'IN': '+91 dddddddddd',
  'ID': '+62 ddddddddd',
  'IR': '+98 ddddddddd',
  'IQ': '+964 ddddddddd',
  'IE': '+353 ddddddddd',
  'IL': '+972 ddddddddd',
  'IT': '+39 ddddddddd',
  'JM': '+1 (ddd) ddd-dddd',
  'JP': '+81 ddddddddd',
  'JO': '+962 ddddddddd',
  'KZ': '+7 ddddddddd',
  'KE': '+254 ddddddddd',
  'KI': '+686 ddddddddd',
  'KW': '+965 ddddddddd',
  'KG': '+996 ddddddddd',
  'LA': '+856 ddddddddd',
  'LV': '+371 ddddddddd',
  'LB': '+961 ddddddddd',
  'LS': '+266 ddddddddd',
  'LR': '+231 ddddddddd',
  'LY': '+218 ddddddddd',
  'LI': '+423 ddddddddd',
  'LT': '+370 ddddddddd',
  'LU': '+352 ddddddddd',
  'MO': '+853 ddddddddd',
  'MG': '+261 ddddddddd',
  'MW': '+265 ddddddddd',
  'MY': '+60 ddddddddd',
  'MV': '+960 ddddddddd',
  'ML': '+223 ddddddddd',
  'MT': '+356 ddddddddd',
  'MH': '+692 ddddddddd',
  'MQ': '+596 ddddddddd',
  'MR': '+222 ddddddddd',
  'MU': '+230 ddddddddd',
  'YT': '+262 ddddddddd',
  'MX': '+52 ddddddddd',
  'FM': '+691 ddddddddd',
  'MD': '+373 ddddddddd',
  'MC': '+377 ddddddddd',
  'MN': '+976 ddddddddd',
  'MS': '+1 (ddd) ddd-dddd',
  'MA': '+212 ddddddddd',
  'MZ': '+258 ddddddddd',
  'MM': '+95 ddddddddd',
  'NA': '+264 ddddddddd',
  'NR': '+674 ddddddddd',
  'NP': '+977 ddddddddd',
  'NL': '+31 ddddddddd',
  'AN': '+599 ddddddddd',
  'NC': '+687 ddddddddd',
  'NZ': '+64 ddddddddd',
  'NI': '+505 ddddddddd',
  'NE': '+227 ddddddddd',
  'NG': '+234 ddddddddd',
  'NU': '+683 ddddddddd',
  'NF': '+672 ddddddddd',
  'KP': '+850 ddddddddd',
  'MP': '+1 (ddd) ddd-dddd',
  'NO': '+47 ddddddddd',
  'OM': '+968 ddddddddd',
  'PK': '+92 ddddddddd',
  'PW': '+680 ddddddddd',
  'PA': '+507 ddddddddd',
  'PG': '+675 ddddddddd',
  'PY': '+595 ddddddddd',
  'PE': '+51 ddddddddd',
  'PH': '+63 ddddddddd',
  'PN': '+870 ddddddddd',
  'PL': '+48 ddddddddd',
  'PT': '+351 ddddddddd',
  'PR': '+1 (ddd) ddd-dddd',
  'QA': '+974 ddddddddd',
  'RE': '+262 ddddddddd',
  'RO': '+40 ddddddddd',
  'RU': '+7 ddddddddd',
  'RW': '+250 ddddddddd',
  'ST': '+239 ddddddddd',
  'SH': '+290 ddddddddd',
  'KN': '+1 (ddd) ddd-dddd',
  'LC': '+1 (ddd) ddd-dddd',
  'PM': '+508 ddddddddd',
  'VC': '+1 (ddd) ddd-dddd',
  'WS': '+685 ddddddddd',
  'SM': '+378 ddddddddd',
  'SA': '+966 ddddddddd',
  'SN': '+221 ddddddddd',
  'SC': '+248 ddddddddd',
  'SL': '+232 ddddddddd',
  'SG': '+65 ddddddddd',
  'SK': '+421 ddddddddd',
  'SI': '+386 ddddddddd',
  'SB': '+677 ddddddddd',
  'SO': '+252 ddddddddd',
  'ZA': '+27 ddddddddd',
  'GS': '+0 ddddddddd',
  'KR': '+82 ddddddddd',
  'ES': '+34 ddddddddd',
  'LK': '+94 ddddddddd',
  'SD': '+249 ddddddddd',
  'SR': '+597 ddddddddd',
  'SJ': '+0 ddddddddd',
  'SZ': '+268 ddddddddd',
  'SE': '+46 ddddddddd',
  'CH': '+41 ddddddddd',
  'SY': '+963 ddddddddd',
  'TW': '+886 ddddddddd',
  'TJ': '+992 ddddddddd',
  'TZ': '+255 ddddddddd',
  'TH': '+66 ddddddddd',
  'BS': '+1 (ddd) ddd-dddd',
  'GM': '+220 ddddddddd',
  'TG': '+228 ddddddddd',
  'TK': '+690 ddddddddd',
  'TO': '+676 ddddddddd',
  'TT': '+1 (ddd) ddd-dddd',
  'TN': '+216 ddddddddd',
  'TR': '+90 ddddddddd',
  'TM': '+993 ddddddddd',
  'TC': '+1 (ddd) ddd-dddd',
  'TV': '+688 ddddddddd',
  'VI': '+1 (ddd) ddd-dddd',
  'UG': '+256 ddddddddd',
  'UA': '+380 ddddddddd',
  'AE': '+971 ddddddddd',
  'GB': '+44 (ddd) dddd dddd',
  'US': '+1 (ddd) ddd-dddd',
  'UM': '+0 ddddddddd',
  'UY': '+598 ddddddddd',
  'UZ': '+998 ddddddddd',
  'VU': '+678 ddddddddd',
  'VA': '+39 ddddddddd',
  'VE': '+58 ddddddddd',
  'VN': '+84 ddddddddd',
  'WF': '+681 ddddddddd',
  'EH': '+0 ddddddddd',
  'YE': '+967 ddddddddd',
  'YU': '+0 ddddddddd',
  'ZM': '+260 ddddddddd',
  'ZW': '+263 ddddddddd'
};


/* ==========================================================
 * bootstrap-formhelpers-countries.js
 * https://github.com/vlamanna/BootstrapFormHelpers
 * ==========================================================
 * Copyright 2012 Vincent Lamanna
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */

+function ($) {

  'use strict';


  /* COUNTRIES CLASS DEFINITION
   * ====================== */

  var BFHCountries = function (element, options) {
    this.options = $.extend({}, $.fn.bfhcountries.defaults, options);
    this.$element = $(element);

    if (this.$element.is('select')) {
      this.addCountries();
    }

    if (this.$element.hasClass('bfh-selectbox')) {
      this.addBootstrapCountries();
    }

    if (this.$element.is('span')) {
      this.displayCountry();
    }
  };

  BFHCountries.prototype = {

    constructor: BFHCountries,

    getCountries: function() {
      var country,
          countries;

      if (this.options.available) {
        if (typeof this.options.available === 'string') {
          countries = [];
  
          this.options.available = this.options.available.split(',');
  
          for (country in BFHCountriesList) {
            if (BFHCountriesList.hasOwnProperty(country)) {
              if ($.inArray(country, this.options.available) >= 0) {
                countries[country] = BFHCountriesList[country];
              }
            }
          }
        } else {
          countries = this.options.available;
        }

        return countries;
      } else {
        return BFHCountriesList;
      }
    },

    addCountries: function () {
      var value,
          country,
          countries;

      value = this.options.country;
      countries = this.getCountries();

      this.$element.html('');

      if (this.options.blank === true) {
        this.$element.append('<option value=""></option>');
      }

      for (country in countries) {
        if (countries.hasOwnProperty(country)) {
          this.$element.append('<option value="' + country + '">' + countries[country] + '</option>');
        }
      }

      this.$element.val(value);
    },

    addBootstrapCountries: function() {
      var $input,
          $toggle,
          $options,
          value,
          country,
          countries;

      value = this.options.country;
      $input = this.$element.find('input[type="hidden"]');
      $toggle = this.$element.find('.bfh-selectbox-option');
      $options = this.$element.find('[role=option]');
      countries = this.getCountries();

      $options.html('');

      if (this.options.blank === true) {
        $options.append('<li><a tabindex="-1" href="#" data-option=""></a></li>');
      }

      for (country in countries) {
        if (countries.hasOwnProperty(country)) {
          if (this.options.flags === true) {
            $options.append('<li><a tabindex="-1" href="#" data-option="' + country + '"><i class="glyphicon bfh-flag-' + country + '"></i>' + countries[country] + '</a></li>');
          } else {
            $options.append('<li><a tabindex="-1" href="#" data-option="' + country + '">' + countries[country] + '</a></li>');
          }
        }
      }

      this.$element.val(value);
    },

    displayCountry: function () {
      var value;

      value = this.options.country;

      if (this.options.flags === true) {
        this.$element.html('<i class="glyphicon bfh-flag-' + value + '"></i> ' + BFHCountriesList[value]);
      } else {
        this.$element.html(BFHCountriesList[value]);
      }
    }

  };


  /* COUNTRY PLUGIN DEFINITION
   * ======================= */

  var old = $.fn.bfhcountries;

  $.fn.bfhcountries = function (option) {
    return this.each(function () {
      var $this,
          data,
          options;

      $this = $(this);
      data = $this.data('bfhcountries');
      options = typeof option === 'object' && option;

      if (!data) {
        $this.data('bfhcountries', (data = new BFHCountries(this, options)));
      }
      if (typeof option === 'string') {
        data[option].call($this);
      }
    });
  };

  $.fn.bfhcountries.Constructor = BFHCountries;

  $.fn.bfhcountries.defaults = {
    country: '',
    available: '',
    flags: false,
    blank: true
  };


  /* COUNTRY NO CONFLICT
   * ========================== */

  $.fn.bfhcountries.noConflict = function () {
    $.fn.bfhcountries = old;
    return this;
  };


  /* COUNTRY DATA-API
   * ============== */

  $(document).ready( function () {
    $('form select.bfh-countries, span.bfh-countries, div.bfh-countries').each(function () {
      var $countries;

      $countries = $(this);

      if ($countries.hasClass('bfh-selectbox')) {
        $countries.bfhselectbox($countries.data());
      }
      $countries.bfhcountries($countries.data());
    });
  });

}(window.jQuery);

/* ==========================================================
 * bootstrap-formhelpers-currencies.js
 * https://github.com/vlamanna/BootstrapFormHelpers
 * ==========================================================
 * Copyright 2013 Vincent Lamanna
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */

+function ($) {

  'use strict';


  /* COUNTRIES CLASS DEFINITION
   * ====================== */

  var BFHCurrencies = function (element, options) {
    this.options = $.extend({}, $.fn.bfhcurrencies.defaults, options);
    this.$element = $(element);

    if (this.$element.is('select')) {
      this.addCurrencies();
    }

    if (this.$element.hasClass('bfh-selectbox')) {
      this.addBootstrapCurrencies();
    }

    if (this.$element.is('span')) {
      this.displayCurrency();
    }
  };

  BFHCurrencies.prototype = {

    constructor: BFHCurrencies,

    getCurrencies: function () {
      var currency,
          currencies;

      if (this.options.available) {
        currencies = [];

        this.options.available = this.options.available.split(',');

        for (currency in BFHCurrenciesList) {
          if (BFHCurrenciesList.hasOwnProperty(currency)) {
            if ($.inArray(currency, this.options.available) >= 0) {
              currencies[currency] = BFHCurrenciesList[currency];
            }
          }
        }

        return currencies;
      } else {
        return BFHCurrenciesList;
      }
    },

    addCurrencies: function () {
      var value,
          currency,
          currencies;

      value = this.options.currency;
      currencies = this.getCurrencies();

      this.$element.html('');

      if (this.options.blank === true) {
        this.$element.append('<option value=""></option>');
      }

      for (currency in currencies) {
        if (currencies.hasOwnProperty(currency)) {
          this.$element.append('<option value="' + currency + '">' + currencies[currency].label + '</option>');
        }
      }

      this.$element.val(value);
    },


    addBootstrapCurrencies: function() {
      var $input,
          $toggle,
          $options,
          value,
          currency,
          currencies,
          flag;

      value = this.options.currency;
      $input = this.$element.find('input[type="hidden"]');
      $toggle = this.$element.find('.bfh-selectbox-option');
      $options = this.$element.find('[role=option]');
      currencies = this.getCurrencies();

      $options.html('');

      if (this.options.blank === true) {
        $options.append('<li><a tabindex="-1" href="#" data-option=""></a></li>');
      }

      for (currency in currencies) {
        if (currencies.hasOwnProperty(currency)) {
          if (this.options.flags === true) {
            if (currencies[currency].currencyflag) {
              flag = currencies[currency].currencyflag;
            } else {
              flag = currency.substr(0,2);
            }
            $options.append('<li><a tabindex="-1" href="#" data-option="' + currency +  '"><i class="glyphicon bfh-flag-' + flag + '"></i>' + currencies[currency].label + '</a></li>');
          } else {
            $options.append('<li><a tabindex="-1" href="#" data-option="' + currency + '">' + currencies[currency].label + '</a></li>');
          }
        }
      }

      this.$element.val(value);
    },

    displayCurrency: function () {
      var value,
          flag;

      value = this.options.currency;

      if (this.options.flags === true) {
        if (BFHCurrenciesList[value].currencyflag) {
          flag = BFHCurrenciesList[value].currencyflag;
        } else {
          flag = value.substr(0,2);
        }
        this.$element.html('<i class="glyphicon bfh-flag-' + flag + '"></i> ' + BFHCurrenciesList[value].label);
      } else {
        this.$element.html(BFHCurrenciesList[value].label);
      }
    }

  };


  /* CURRENCY PLUGIN DEFINITION
   * ======================= */

  var old = $.fn.bfhcurrencies;

  $.fn.bfhcurrencies = function (option) {
    return this.each(function () {
      var $this,
          data,
          options;

      $this = $(this);
      data = $this.data('bfhcurrencies');
      options = typeof option === 'object' && option;

      if (!data) {
        $this.data('bfhcurrencies', (data = new BFHCurrencies(this, options)));
      }
      if (typeof option === 'string') {
        data[option].call($this);
      }
    });
  };

  $.fn.bfhcurrencies.Constructor = BFHCurrencies;

  $.fn.bfhcurrencies.defaults = {
    currency: '',
    available: '',
    flags: false,
    blank: true
  };


  /* CURRENCY NO CONFLICT
   * ========================== */

  $.fn.bfhcurrencies.noConflict = function () {
    $.fn.bfhcurrencies = old;
    return this;
  };


  /* CURRENCY DATA-API
   * ============== */

  $(document).ready( function () {
    $('form select.bfh-currencies, span.bfh-currencies, div.bfh-currencies').each(function () {
      var $currencies;

      $currencies = $(this);

      if ($currencies.hasClass('bfh-selectbox')) {
        $currencies.bfhselectbox($currencies.data());
      }
      $currencies.bfhcurrencies($currencies.data());
    });
  });


}(window.jQuery);


/* ==========================================================
 * bootstrap-formhelpers-phone.js
 * https://github.com/vlamanna/BootstrapFormHelpers
 * ==========================================================
 * Copyright 2012 Vincent Lamanna
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */

+function ($) {

  'use strict';


  /* PHONE CLASS DEFINITION
   * ====================== */

  var BFHPhone = function (element, options) {
    this.options = $.extend({}, $.fn.bfhphone.defaults, options);
    this.$element = $(element);

    if (this.$element.is('input[type="text"]') || this.$element.is('input[type="tel"]')) {
      this.addFormatter();
    }

    if (this.$element.is('span')) {
      this.displayFormatter();
    }
  };

  BFHPhone.prototype = {

    constructor: BFHPhone,

    addFormatter: function() {
      var $country;

      if (this.options.country !== '') {
        $country = $(document).find('#' + this.options.country);

        if ($country.length !== 0) {
          this.options.format = BFHPhoneFormatList[$country.val()];
          $country.on('change', {phone: this}, this.changeCountry);
        } else {
          this.options.format = BFHPhoneFormatList[this.options.country];
        }
      }
      
      this.$element.on('keyup.bfhphone.data-api', BFHPhone.prototype.change);

      this.loadFormatter();
    },

    loadFormatter: function () {
      var formattedNumber;

      formattedNumber = formatNumber(this.options.format, this.$element.val());

      this.$element.val(formattedNumber);
    },

    displayFormatter: function () {
      var formattedNumber;

      if (this.options.country !== '') {
        this.options.format = BFHPhoneFormatList[this.options.country];
      }

      formattedNumber = formatNumber(this.options.format, this.options.number);

      this.$element.html(formattedNumber);
    },

    changeCountry: function (e) {
      var $this,
          $phone;

      $this = $(this);
      $phone = e.data.phone;

      $phone.$element.val(String($phone.$element.val()).replace(/\+\d*/g, ''));
      $phone.options.format = BFHPhoneFormatList[$this.val()];

      $phone.loadFormatter();
    },

    change: function(e) {
      var $this,
          cursorPosition,
          cursorEnd,
          formattedNumber;

      $this = $(this).data('bfhphone');

      if ($this.$element.is('.disabled') || $this.$element.attr('disabled') !== undefined) {
        return true;
      }

      cursorPosition = getCursorPosition($this.$element[0]);

      cursorEnd = false;
      if (cursorPosition === $this.$element.val().length) {
        cursorEnd = true;
      }
      
      if (e.which === 8 && $this.options.format.charAt($this.$element.val().length) !== 'd') {
        $this.$element.val(String($this.$element.val()).substring(0, $this.$element.val().length - 1));
      }

      formattedNumber = formatNumber($this.options.format, $this.$element.val());
      
      if (formattedNumber === $this.$element.val()) {
        return true;
      }
      
      $this.$element.val(formattedNumber);

      if (cursorEnd) {
        cursorPosition = $this.$element.val().length;
      }

      setCursorPosition($this.$element[0], cursorPosition);

      return true;
    }

  };

  function formatNumber(format, number) {
    var formattedNumber,
        indexFormat,
        indexNumber,
        lastCharacter;

    formattedNumber = '';
    number = String(number).replace(/\D/g, '');

    for (indexFormat = 0, indexNumber = 0; indexFormat < format.length; indexFormat = indexFormat + 1) {
      if (/\d/g.test(format.charAt(indexFormat))) {
        if (format.charAt(indexFormat) === number.charAt(indexNumber)) {
          formattedNumber += number.charAt(indexNumber);
          indexNumber = indexNumber + 1;
        } else {
          formattedNumber += format.charAt(indexFormat);
        }
      } else if (format.charAt(indexFormat) !== 'd') {
        if (number.charAt(indexNumber) !== '' || format.charAt(indexFormat) === '+') {
          formattedNumber += format.charAt(indexFormat);
        }
      } else {
        if (number.charAt(indexNumber) === '') {
          formattedNumber += '';
        } else {
          formattedNumber += number.charAt(indexNumber);
          indexNumber = indexNumber + 1;
        }
      }
    }
    
    lastCharacter = format.charAt(formattedNumber.length);
    if (lastCharacter !== 'd') {
      formattedNumber += lastCharacter;
    }

    return formattedNumber;
  }

  function getCursorPosition($element) {
    var position = 0,
        selection;

    if (document.selection) {
      // IE Support
      $element.focus();
      selection = document.selection.createRange();
      selection.moveStart ('character', -$element.value.length);
      position = selection.text.length;
    } else if ($element.selectionStart || $element.selectionStart === 0) {
      position = $element.selectionStart;
    }

    return position;
  }

  function setCursorPosition($element, position) {
    var selection;

    if (document.selection) {
      // IE Support
      $element.focus ();
      selection = document.selection.createRange();
      selection.moveStart ('character', -$element.value.length);
      selection.moveStart ('character', position);
      selection.moveEnd ('character', 0);
      selection.select ();
    } else if ($element.selectionStart || $element.selectionStart === 0) {
      $element.selectionStart = position;
      $element.selectionEnd = position;
      $element.focus ();
    }
  }

  /* PHONE PLUGIN DEFINITION
   * ======================= */

  var old = $.fn.bfhphone;

  $.fn.bfhphone = function (option) {
    return this.each(function () {
      var $this,
          data,
          options;

      $this = $(this);
      data = $this.data('bfhphone');
      options = typeof option === 'object' && option;

      if (!data) {
        $this.data('bfhphone', (data = new BFHPhone(this, options)));
      }
      if (typeof option === 'string') {
        data[option].call($this);
      }
    });
  };

  $.fn.bfhphone.Constructor = BFHPhone;

  $.fn.bfhphone.defaults = {
    format: '',
    number: '',
    country: ''
  };


  /* PHONE NO CONFLICT
   * ========================== */

  $.fn.bfhphone.noConflict = function () {
    $.fn.bfhphone = old;
    return this;
  };


  /* PHONE DATA-API
   * ============== */

  $(document).ready( function () {
    $('form input[type="text"].bfh-phone, form input[type="tel"].bfh-phone, span.bfh-phone').each(function () {
      var $phone;

      $phone = $(this);

      $phone.bfhphone($phone.data());
    });
  });

}(window.jQuery);

/* ==========================================================
 * bootstrap-formhelpers-selectbox.js
 * https://github.com/vlamanna/BootstrapFormHelpers
 * ==========================================================
 * Copyright 2012 Vincent Lamanna
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */

+function ($) {

  'use strict';


  /* SELECTBOX CLASS DEFINITION
   * ========================= */

  var toggle = '[data-toggle=bfh-selectbox]',
      BFHSelectBox = function (element, options) {
        this.options = $.extend({}, $.fn.bfhselectbox.defaults, options);
        this.$element = $(element);

        this.initSelectBox();
      };

  BFHSelectBox.prototype = {

    constructor: BFHSelectBox,

    initSelectBox: function () {
      var options;

      options = '';
      this.$element.find('div').each(function() {
        options = options + '<li><a tabindex="-1" href="#" data-option="' + $(this).data('value') + '">' + $(this).html() + '</a></li>';
      });

      this.$element.html(
        '<input type="hidden" name="' + this.options.name + '" value="">' +
		'<a class="bfh-selectbox-toggle ' + this.options.input + '" role="button" data-toggle="bfh-selectbox" href="#">' +
		'<span class="bfh-selectbox-option"></span>' +
		'<span class="' + this.options.icon + ' selectbox-caret"></span>' +
		'</a>' +
		'<div class="bfh-selectbox-options">' +
		'<div role="listbox">' +
		'<ul role="option">' +
		'</ul>' +
		'</div>' +
		'</div>'
      );

      this.$element.find('[role=option]').html(options);

      if (this.options.filter === true) {
        this.$element.find('.bfh-selectbox-options').prepend('<div class="bfh-selectbox-filter-container"><input type="text" class="bfh-selectbox-filter form-control"></div>');
      }

      this.$element.val(this.options.value);

      this.$element
        .on('click.bfhselectbox.data-api touchstart.bfhselectbox.data-api', toggle, BFHSelectBox.prototype.toggle)
		.on('keydown.bfhselectbox.data-api', toggle + ', [role=option]' , BFHSelectBox.prototype.keydown)
		.on('mouseenter.bfhselectbox.data-api', '[role=option] > li > a', BFHSelectBox.prototype.mouseenter)
		.on('click.bfhselectbox.data-api', '[role=option] > li > a', BFHSelectBox.prototype.select)
		.on('click.bfhselectbox.data-api', '.bfh-selectbox-filter', function () { return false; })
		.on('propertychange.bfhselectbox.data-api change.bfhselectbox.data-api input.bfhselectbox.data-api paste.bfhselectbox.data-api', '.bfh-selectbox-filter', BFHSelectBox.prototype.filter);
    },

    toggle: function (e) {
      var $this,
          $parent,
          isActive;

      $this = $(this);
      $parent = getParent($this);

      if ($parent.is('.disabled') || $parent.attr('disabled') !== undefined) {
        return true;
      }

      isActive = $parent.hasClass('open');

      clearMenus();

      if (!isActive) {
        $parent.trigger(e = $.Event('show.bfhselectbox'));

        if (e.isDefaultPrevented()) {
          return true;
        }

        $parent
          .toggleClass('open')
          .trigger('shown.bfhselectbox')
          .find('[role=option] > li > [data-option="' + $parent.val() + '"]').focus();
      }

      return false;
    },

    filter: function() {
      var $this,
          $parent,
          $items;

      $this = $(this);
      $parent = getParent($this);

      $items = $('[role=option] li a', $parent);
      $items
        .hide()
        .filter(function() {
          return ($(this).text().toUpperCase().indexOf($this.val().toUpperCase()) !== -1);
        })
        .show();
    },

    keydown: function (e) {
      var $this,
          $items,
          $parent,
          $subItems,
          isActive,
          index,
          selectedIndex;

      if (!/(38|40|27)/.test(e.keyCode)) {
        return true;
      }

      $this = $(this);

      e.preventDefault();
      e.stopPropagation();

      $parent = getParent($this);
      isActive = $parent.hasClass('open');

      if (!isActive || (isActive && e.keyCode === 27)) {
        if (e.which === 27) {
          $parent.find(toggle).focus();
        }

        return $this.click();
      }

      $items = $('[role=option] li:not(.divider) a:visible', $parent);

      if (!$items.length) {
        return true;
      }

      $('body').off('mouseenter.bfh-selectbox.data-api', '[role=option] > li > a', BFHSelectBox.prototype.mouseenter);
      index = $items.index($items.filter(':focus'));

      if (e.keyCode === 38 && index > 0) {
        index = index - 1;
      }

      if (e.keyCode === 40 && index < $items.length - 1) {
        index = index + 1;
      }

      if (!index) {
        index = 0;
      }

      $items.eq(index).focus();
      $('body').on('mouseenter.bfh-selectbox.data-api', '[role=option] > li > a', BFHSelectBox.prototype.mouseenter);
    },

    mouseenter: function () {
      var $this;

      $this = $(this);

      $this.focus();
    },

    select: function (e) {
      var $this,
          $parent,
          $span,
          $input;

      $this = $(this);

      e.preventDefault();
      e.stopPropagation();

      if ($this.is('.disabled') || $this.attr('disabled') !== undefined) {
        return true;
      }

      $parent = getParent($this);

      $parent.val($this.data('option'));
      $parent.trigger('change.bfhselectbox');

      clearMenus();
    }

  };

  function clearMenus() {
    var $parent;

    $(toggle).each(function (e) {
      $parent = getParent($(this));

      if (!$parent.hasClass('open')) {
        return true;
      }

      $parent.trigger(e = $.Event('hide.bfhselectbox'));

      if (e.isDefaultPrevented()) {
        return true;
      }

      $parent
        .removeClass('open')
        .trigger('hidden.bfhselectbox');
    });
  }

  function getParent($this) {
    return $this.closest('.bfh-selectbox');
  }


  /* SELECTBOX PLUGIN DEFINITION
   * ========================== */

  var old = $.fn.bfhselectbox;

  $.fn.bfhselectbox = function (option) {
    return this.each(function () {
      var $this,
          data,
          options;

      $this = $(this);
      data = $this.data('bfhselectbox');
      options = typeof option === 'object' && option;
      this.type = 'bfhselectbox';

      if (!data) {
        $this.data('bfhselectbox', (data = new BFHSelectBox(this, options)));
      }
      if (typeof option === 'string') {
        data[option].call($this);
      }
    });
  };

  $.fn.bfhselectbox.Constructor = BFHSelectBox;

  $.fn.bfhselectbox.defaults = {
    icon: 'caret',
    input: 'form-control',
    name: '',
    value: '',
    filter: false
  };


  /* SELECTBOX NO CONFLICT
   * ========================== */

  $.fn.bfhselectbox.noConflict = function () {
    $.fn.bfhselectbox = old;
    return this;
  };


  /* SELECTBOX VALHOOKS
   * ========================== */

  var origHook;
  if ($.valHooks.div){
    origHook = $.valHooks.div;
  }
  $.valHooks.div = {
    get: function(el) {
      if ($(el).hasClass('bfh-selectbox')) {
        return $(el).find('input[type="hidden"]').val();
      } else if (origHook) {
        return origHook.get(el);
      }
    },
    set: function(el, val) {
      var $el,
          html;

      if ($(el).hasClass('bfh-selectbox')) {

        $el = $(el);
        if ($el.find('li a[data-option=\'' + val + '\']').length > 0) {
          html = $el.find('li a[data-option=\'' + val + '\']').html();
        } else if ($el.find('li a').length > 0) {
          html = $el.find('li a').eq(0).html();
        } else {
          val = '';
          html = '';
        }

        $el.find('input[type="hidden"]').val(val);
        $el.find('.bfh-selectbox-option').html(html);
      } else if (origHook) {
        return origHook.set(el,val);
      }
    }
  };


  /* SELECTBOX DATA-API
   * ============== */

  $(document).ready( function () {
    $('div.bfh-selectbox').each(function () {
      var $selectbox;

      $selectbox = $(this);

      $selectbox.bfhselectbox($selectbox.data());
    });
  });


  /* APPLY TO STANDARD SELECTBOX ELEMENTS
   * =================================== */

  $(document)
    .on('click.bfhselectbox.data-api', clearMenus);

}(window.jQuery);


/* ==========================================================
 * bootstrap-formhelpers-states.js
 * https://github.com/vlamanna/BootstrapFormHelpers
 * ==========================================================
 * Copyright 2012 Vincent Lamanna
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */

+function ($) {

  'use strict';


  /* STATES CLASS DEFINITION
   * ====================== */

  var BFHStates = function (element, options) {
    this.options = $.extend({}, $.fn.bfhstates.defaults, options);
    this.$element = $(element);

    if (this.$element.is('select')) {
      this.addStates();
    }

    if (this.$element.hasClass('bfh-selectbox')) {
      this.addBootstrapStates();
    }

    if (this.$element.is('span')) {
      this.displayState();
    }
  };

  BFHStates.prototype = {

    constructor: BFHStates,

    addStates: function () {
      var country,
          $country;

      country = this.options.country;

      if (country !== '') {
        $country = $(document).find('#' + country);

        if ($country.length !== 0) {
          country = $country.val();
          $country.on('change', {state: this}, this.changeCountry);
        }
      }

      this.loadStates(country);
    },

    loadStates: function (country) {
      var value,
          state;

      value = this.options.state;

      this.$element.html('');

      if (this.options.blank === true) {
        this.$element.append('<option value=""></option>');
      }

      for (state in BFHStatesList[country]) {
        if (BFHStatesList[country].hasOwnProperty(state)) {
          this.$element.append('<option value="' + BFHStatesList[country][state].code + '">' + BFHStatesList[country][state].name + '</option>');
        }
      }

      this.$element.val(value);
    },

    changeCountry: function (e) {
      var $this,
          $state,
          country;

      $this = $(this);
      $state = e.data.state;
      country = $this.val();

      $state.loadStates(country);
    },

    addBootstrapStates: function() {
      var country,
          $country;

      country = this.options.country;

      if (country !== '') {
        $country = $(document).find('#' + country);

        if ($country.length !== 0) {
          country = $country.find('input[type="hidden"]').val();
          $country.on('change.bfhselectbox', {state: this}, this.changeBootstrapCountry);
        }
      }

      this.loadBootstrapStates(country);
    },

    loadBootstrapStates: function(country) {
      var $input,
          $toggle,
          $options,
          stateCode,
          stateName,
          state;

      stateCode = this.options.state;
      stateName = '';
      $input = this.$element.find('input[type="hidden"]');
      $toggle = this.$element.find('.bfh-selectbox-option');
      $options = this.$element.find('[role=option]');

      $options.html('');

      if (this.options.blank === true) {
        $options.append('<li><a tabindex="-1" href="#" data-option=""></a></li>');
      }

      for (state in BFHStatesList[country]) {
        if (BFHStatesList[country].hasOwnProperty(state)) {
          $options.append('<li><a tabindex="-1" href="#" data-option="' + BFHStatesList[country][state].code + '">' + BFHStatesList[country][state].name + '</a></li>');

          if (BFHStatesList[country][state].code === stateCode) {
            stateName = BFHStatesList[country][state].name;
          }
        }
      }

      this.$element.val(stateCode);
    },

    changeBootstrapCountry: function (e) {
      var $this,
          $state,
          country;

      $this = $(this);
      $state = e.data.state;
      country = $this.val();

      $state.loadBootstrapStates(country);
    },

    displayState: function () {
      var country,
          stateCode,
          stateName,
          state;

      country = this.options.country;
      stateCode = this.options.state;
      stateName = '';

      for (state in BFHStatesList[country]) {
        if (BFHStatesList[country].hasOwnProperty(state)) {
          if (BFHStatesList[country][state].code === stateCode) {
            stateName = BFHStatesList[country][state].name;
            break;
          }
        }
      }
      this.$element.html(stateName);
    }

  };


  /* STATES PLUGIN DEFINITION
   * ======================= */

  var old = $.fn.bfhstates;

  $.fn.bfhstates = function (option) {
    return this.each(function () {
      var $this,
          data,
          options;

      $this = $(this);
      data = $this.data('bfhstates');
      options = typeof option === 'object' && option;

      if (!data) {
        $this.data('bfhstates', (data = new BFHStates(this, options)));
      }
      if (typeof option === 'string') {
        data[option].call($this);
      }
    });
  };

  $.fn.bfhstates.Constructor = BFHStates;

  $.fn.bfhstates.defaults = {
    country: '',
    state: '',
    blank: true
  };


  /* STATES NO CONFLICT
   * ========================== */

  $.fn.bfhstates.noConflict = function () {
    $.fn.bfhstates = old;
    return this;
  };


  /* STATES DATA-API
   * ============== */

  $(document).ready( function () {
    $('form select.bfh-states, span.bfh-states, div.bfh-states').each(function () {
      var $states;

      $states = $(this);

      if ($states.hasClass('bfh-selectbox')) {
        $states.bfhselectbox($states.data());
      }
      $states.bfhstates($states.data());
    });
  });

}(window.jQuery);