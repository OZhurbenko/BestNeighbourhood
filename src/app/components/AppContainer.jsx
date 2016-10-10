import React, {PropTypes, Component} from 'react';
import App from './App.jsx';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const defaultProps = {
  neighbourhoods_names_centres: [
    {area_s_cd:1,area_name:"West Humber-Clairville",center:"43.716106, -79.592093"},
    {area_s_cd:108,area_name:"Briar Hill-Belgravia",center:"43.699220,-79.452905"},
    {area_s_cd:56,area_name:"Leaside-Bennington",center:"43.701244,-79.365593"},
    {area_s_cd:94,area_name:"Wychwood",center:"43.676586, -79.425032"},
    {area_s_cd:46,area_name:"Pleasant View",center:"43.787230, -79.334537"},
    {area_s_cd:130,area_name:"Milliken",center:"43.822432, -79.277823"},
    {area_s_cd:50,area_name:"Newtonbrook East",center:"43.791260, -79.405747"},
    {area_s_cd:64,area_name:"Woodbine Corridor",center:"43.676319, -79.314881"},
    {area_s_cd:84,area_name:"Little Portugal",center:"43.647457, -79.430015"},
    {area_s_cd:73,area_name:"Moss Park",center:"43.655112, -79.367648"},
    {area_s_cd:135,area_name:"Morningside",center:"43.780597, -79.204347"},
    {area_s_cd:17,area_name:"Mimico (includes Humber Bay Shores)",center:"43.616559, -79.494613"},
    {area_s_cd:100,area_name:"Yonge-Eglinton",center:"43.705052, -79.403826"},
    {area_s_cd:105,area_name:"Lawrence Park North",center:"43.730251, -79.403550"},
    {area_s_cd:116,area_name:"Steeles",center:"43.812945, -79.320500"},
    {area_s_cd:12,area_name:"Markland Wood",center:"43.633784, -79.572890"},
    {area_s_cd:29,area_name:"Maple Leaf",center:"43.714820, -79.480140"},
    {area_s_cd:83,area_name:"Dufferin Grove",center:"43.655189, -79.437096"},
    {area_s_cd:132,area_name:"Malvern",center:"43.804192, -79.220699"},
    {area_s_cd:19,area_name:"Long Branch",center:"43.592914, -79.533370"},
    {area_s_cd:30,area_name:"Brookhaven-Amesbury",center:"43.701357, -79.485161"},
    {area_s_cd:103,area_name:"Lawrence Park South",center:"43.717562, -79.404244"},
    {area_s_cd:113,area_name:"Weston",center:"43.703155, -79.517348"},
    {area_s_cd:47,area_name:"Don Valley Village",center:"43.784063, -79.352856"},
    {area_s_cd:41,area_name:"Bridle Path-Sunnybrook-York Mills",center:"43.731152, -79.376309"},
    {area_s_cd:111,area_name:"Rockcliffe-Smythe",center:"43.675292, -79.493078"},
    {area_s_cd:39,area_name:"Bedford Park-Nortown",center:"43.732621, -79.421990"},
    {area_s_cd:52,area_name:"Bayview Village",center:"43.777515, -79.376909"},
    {area_s_cd:60,area_name:"Woodbine-Lumsden",center:"43.693892, -79.310437"},
    {area_s_cd:137,area_name:"Woburn",center:"43.765062, -79.227390"},
    {area_s_cd:7,area_name:"Willowridge-Martingrove-Richview",center:"43.681712, -79.552924"},
    {area_s_cd:23,area_name:"Pelmo Park-Humberlea",center:"43.711622, -79.523998"}, //an actual center: 43.719253, -79.525929
    {area_s_cd:45,area_name:"Parkwoods-Donalda",center:"43.755626, -79.333906"},
    {area_s_cd:80,area_name:"Palmerston-Little Italy",center:"43.658990, -79.418829"},
    {area_s_cd:18,area_name:"New Toronto",center:"43.600686, -79.512290"},
    {area_s_cd:62,area_name:"East End-Danforth",center:"43.683907, -79.300101"},
    {area_s_cd:4,area_name:"Rexdale-Kipling",center:"43.724125, -79.567194"},
    {area_s_cd:69,area_name:"Blake-Jones",center:"43.676047, -79.337456"},
    {area_s_cd:104,area_name:"Mount Pleasant West",center:"43.704851,-79.39442"},
    {area_s_cd:99,area_name:"Mount Pleasant East",center:"43.703797,-79.38316"},
    {area_s_cd:67,area_name:"Playter Estates-Danforth",center:"43.679793, -79.355514"},
    {area_s_cd:2,area_name:"Mount Olive-Silverstone-Jamestown",center:"43.745790, -79.587475"},
    {area_s_cd:131,area_name:"Rouge",center:"43.819151, -79.189024"},
    {area_s_cd:37,area_name:"Willowdale West",center:"43.770684, -79.428063"},
    {area_s_cd:51,area_name:"Willowdale East",center:"43.770095, -79.400683"},
    {area_s_cd:24,area_name:"Black Creek",center:"43.765076, -79.523264"},
    {area_s_cd:114,area_name:"Lambton Baby Point",center:"43.657673, -79.496834"},
    {area_s_cd:26,area_name:"Downsview-Roding-CFB",center:"43.730635,-79.492721"},
    {area_s_cd:91,area_name:"Weston-Pellam Park",center:"43.674344, -79.460893"},
    {area_s_cd:76,area_name:"Bay Street Corridor",center:"43.656911, -79.386185"},
    {area_s_cd:71,area_name:"Cabbagetown-South St.James Town",center:"43.667917, -79.367477"},
    {area_s_cd:122,area_name:"Birchcliffe-Cliffside",center:"43.695061, -79.263203"},
    {area_s_cd:127,area_name:"Bendale",center:"43.760459, -79.257474"},
    {area_s_cd:72,area_name:"Regent Park",center:"43.659979, -79.360449"},
    {area_s_cd:20,area_name:"Alderwood",center:"43.603369, -79.542346"},
    {area_s_cd:34,area_name:"Bathurst Manor",center:"43.762741,-79.456325"},
    {area_s_cd:42,area_name:"Banbury-Don Mills",center:"43.738487, -79.347310"},
    {area_s_cd:117,area_name:"L'Amoreaux",center:"43.797051, -79.313393"},
    {area_s_cd:11,area_name:"Eringate-Centennial-West Deane",center:"43.659042, -79.580033"},
    {area_s_cd:32,area_name:"Englemount-Lawrence",center:"43.720696, -79.438815"},
    {area_s_cd:128,area_name:"Agincourt South-Malvern West",center:"43.785283, -79.277307"},
    {area_s_cd:129,area_name:"Agincourt North",center:"43.804892, -79.267645"},
    {area_s_cd:5,area_name:"Elms-Old Rexdale",center:"43.722171, -79.548612"},
    {area_s_cd:138,area_name:"Eglinton East",center:"43.740798, -79.247099"},
    {area_s_cd:119,area_name:"Wexford/Maryvale",center:"43.748590, -79.299603"},
    {area_s_cd:107,area_name:"Oakwood Village",center:"43.688279, -79.440011"},
    {area_s_cd:98,area_name:"Rosedale-Moore Park",center:"43.682548, -79.379289"},
    {area_s_cd:121,area_name:"Oakridge",center:"43.698130, -79.279468"},
    {area_s_cd:74,area_name:"North St.James Town",center:"43.669617, -79.375250"},
    {area_s_cd:134,area_name:"Highland Creek",center:"43.790953, -79.175188"},
    {area_s_cd:87,area_name:"High Park-Swansea",center:"43.643663, -79.470393"},
    {area_s_cd:88,area_name:"High Park North",center:"43.657730, -79.464524"},
    {area_s_cd:112,area_name:"Beechborough-Greenbrook",center:"43.692530, -79.479389"},
    {area_s_cd:82,area_name:"Niagara",center:"43.636783, -79.412241"},
    {area_s_cd:36,area_name:"Newtonbrook West",center:"43.785839, -79.430723"},
    {area_s_cd:93,area_name:"Dovercourt-Wallace Emerson-Junction",center:"43.666040, -79.439971"},
    {area_s_cd:9,area_name:"Edenbridge-Humber Valley",center:"43.668835, -79.521202"},
    {area_s_cd:126,area_name:"Dorset Park",center:"43.757515, -79.278022"},
    {area_s_cd:115,area_name:"Mount Dennis",center:"43.688697, -79.500246"},
    {area_s_cd:48,area_name:"Hillcrest Village",center:"43.801877, -79.354997"},
    {area_s_cd:79,area_name:"University",center:"43.662713, -79.401504"},
    {area_s_cd:86,area_name:"Roncesvalles",center:"43.646686, -79.443538"},
    {area_s_cd:8,area_name:"Humber Heights-Westmount",center:"43.691178, -79.520100"},
    {area_s_cd:109,area_name:"Caledonia-Fairbank",center:"43.688644, -79.455185"},
    {area_s_cd:95,area_name:"Annex",center:"43.671593, -79.403836"},
    {area_s_cd:53,area_name:"Henry Farm",center:"43.771744, -79.342311"},
    {area_s_cd:101,area_name:"Forest Hill South",center:"43.694607, -79.413252"},
    {area_s_cd:89,area_name:"Runnymede-Bloor West Village",center:"43.659138, -79.484308"},
    {area_s_cd:15,area_name:"Kingsway South",center:"43.653671, -79.510207"},
    {area_s_cd:78,area_name:"Kensington-Chinatown",center:"43.653608, -79.397857"},
    {area_s_cd:96,area_name:"Casa Loma",center:"43.682444, -79.407255"},
    {area_s_cd:58,area_name:"Old East York",center:"43.697151, -79.335001"},
    {area_s_cd:54,area_name:"O'Connor-Parkview",center:"43.706929, -79.315764"},
    {area_s_cd:110,area_name:"Keelesdale-Eglinton West",center:"43.685858, -79.470956"},
    {area_s_cd:33,area_name:"Clanton Park",center:"43.741769, -79.445615"},
    {area_s_cd:49,area_name:"Bayview Woods-Steeles",center:"43.796889, -79.381143"},
    {area_s_cd:6,area_name:"Kingsview Village-The Westway",center:"43.699400, -79.548658"},
    {area_s_cd:124,area_name:"Kennedy Park",center:"43.725859, -79.259105"},
    {area_s_cd:35,area_name:"Westminster-Branson",center:"43.776728, -79.452836"},
    {area_s_cd:136,area_name:"West Hill",center:"43.768582, -79.175334"},
    {area_s_cd:43,area_name:"Victoria Village",center:"43.727869, -79.314386"},
    {area_s_cd:81,area_name:"Trinity-Bellwoods",center:"43.650727, -79.415264"},
    {area_s_cd:140,area_name:"Guildwood",center:"43.748809, -79.192672"},
    {area_s_cd:65,area_name:"Greenwood-Coxwell",center:"43.673267, -79.324031"},
    {area_s_cd:102,area_name:"Forest Hill North",center:"43.704446, -79.427925"},
    {area_s_cd:68,area_name:"North Riverdale",center:"43.671856, -79.351992"},
    {area_s_cd:10,area_name:"Princess-Rosethorn",center:"43.664939, -79.543295"},
    {area_s_cd:57,area_name:"Broadview North",center:"43.688745, -79.355388"},
    {area_s_cd:125,area_name:"Ionview",center:"43.735971, -79.272029"},
    {area_s_cd:92,area_name:"Corso Italia-Davenport",center:"43.677209, -79.447174"},
    {area_s_cd:44,area_name:"Flemingdon Park",center:"43.715416, -79.333562"},
    {area_s_cd:123,area_name:"Cliffcrest",center:"43.722668, -79.234831"},
    {area_s_cd:120,area_name:"Clairlea-Birchmount",center:"43.713799, -79.279682"},
    {area_s_cd:75,area_name:"Church-Yonge Corridor",center:"43.660061, -79.378788"},
    {area_s_cd:133,area_name:"Centennial Scarborough",center:"43.782796, -79.152781"},
    {area_s_cd:22,area_name:"Humbermede",center:"43.744931, -79.547625"},
    {area_s_cd:25,area_name:"Glenfield-Jane Heights",center:"43.746029, -79.512048"},
    {area_s_cd:77,area_name:"Waterfront Communities-The Island",center:"43.636261, -79.375032"},
    {area_s_cd:13,area_name:"Etobicoke West Mall",center:"43.644578, -79.568010"},
    {area_s_cd:90,area_name:"Junction Area",center:"43.668725, -79.471064"},
    {area_s_cd:21,area_name:"Humber Summit",center:"43.759189, -79.556016"},
    {area_s_cd:40,area_name:"St.Andrew-Windfields",center:"43.757768, -79.376310"},
    {area_s_cd:70,area_name:"South Riverdale",center:"43.644083, -79.335577"},
    {area_s_cd:85,area_name:"South Parkdale",center:"43.636866, -79.441388"},
    {area_s_cd:139,area_name:"Scarborough Village",center:"43.739552, -79.217069"},
    {area_s_cd:28,area_name:"Rustic",center:"43.712401, -79.497467"},
    {area_s_cd:14,area_name:"Islington-City Centre West",center:"43.633024, -79.542303"},
    {area_s_cd:106,area_name:"Humewood-Cedarvale",center:"43.691562, -79.427505"},
    {area_s_cd:55,area_name:"Thorncliffe Park",center:"43.708590, -79.348898"},
    {area_s_cd:3,area_name:"Thistletown-Beaumond Heights",center:"43.738098, -79.563952"},
    {area_s_cd:63,area_name:"The Beaches",center:"43.670427, -79.301382"},
    {area_s_cd:118,area_name:"Tam O'Shanter-Sullivan",center:"43.781755, -79.303951"},
    {area_s_cd:16,area_name:"Stonegate-Queensway",center:"43.635453, -79.499495"},
    {area_s_cd:31,area_name:"Yorkdale-Glen Park",center:"43.715112, -79.455153"},
    {area_s_cd:38,area_name:"Lansing-Westgate",center:"43.752263, -79.424573"},
    {area_s_cd:27,area_name:"York University Heights",center:"43.766139, -79.490640"},
    {area_s_cd:97,area_name:"Yonge-St.Clair",center:"43.687203,-79.397688"},
    {area_s_cd:61,area_name:"Taylor-Massey",center:"43.695563, -79.296347"},
    {area_s_cd:66,area_name:"Danforth",center:"43.684012, -79.329690"},
    {area_s_cd:59,area_name:"Danforth East York",center:"43.689690, -79.330913"}
  ]
};

export default class AppContainer extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <App neighbourhoods_names_centres={this.props.neighbourhoods_names_centres} />
    );
  }
}

AppContainer.propTypes = {
  neighbourhoods_names_centres: PropTypes.array
};

AppContainer.defaultProps = defaultProps;

ReactDOM.render(
  <AppContainer />,
  document.getElementById('app')
);
