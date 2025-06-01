


const culturalFestivalsByState= {
    "Andhra Pradesh": [
      { name: "Ugadi", month: "March-April", description: "New Year celebration based on the Hindu lunisolar calendar." },
      { name: "Pongal", month: "January", description: "Harvest festival dedicated to the Sun God." },
      { name: "Tirupati Brahmotsavam", month: "September-October", description: "Grand festival at the Tirumala Venkateswara Temple." },
      { name: "Makara Sankranti", month: "January", description: "Harvest festival marking the end of winter solstice." },
      { name: "Vinayaka Chaviti", month: "August-September", description: "Festival dedicated to Lord Ganesha." }
    ],
    "Arunachal Pradesh": [
      { name: "Losar Festival", month: "February", description: "Tibetan New Year celebrated by the Monpa tribe." },
      { name: "Ziro Music Festival", month: "September", description: "Indie music festival held in Ziro Valley." },
      { name: "Solung", month: "September", description: "Harvest festival of the Adi tribe." },
      { name: "Mopin", month: "March-April", description: "Festival to appease spirits and bring prosperity." }
    ],
    "Assam": [
      { name: "Bihu", month: "April, October, January", description: "Trio of festivals marking sowing, harvest, and New Year." },
      { name: "Ambubachi Mela", month: "June", description: "Fertility festival at Kamakhya Temple." },
      { name: "Majuli Raas", month: "November", description: "Recreation of Lord Krishna's life through dance drama." },
      { name: "Bhogali Bihu", month: "January", description: "Harvest festival celebrated with feasts and bonfires." }
    ],
    "Bihar": [
      { name: "Chhath Puja", month: "October-November", description: "Worship of the Sun God with rituals by riverbanks." },
      { name: "Sonepur Mela", month: "November", description: "Asia’s largest cattle fair." },
      { name: "Sama-Chakeva", month: "November", description: "Sibling festival celebrated with clay idols." },
      { name: "Makar Sankranti", month: "January", description: "Harvest festival marking the transition of the sun." }
    ],
    "Chhattisgarh": [
      { name: "Bastar Dussehra", month: "September-October", description: "Longest Dussehra celebration in India with tribal rituals." },
      { name: "Madai Festival", month: "December-March", description: "Tribal celebration with fairs and processions." },
      { name: "Goncha Festival", month: "July", description: "Wooden gun festival celebrated by tribals." },
      { name: "Hareli", month: "July", description: "Agricultural festival celebrating farmers and their tools." }
    ],
    "Goa": [
      { name: "Carnival", month: "February", description: "Portuguese tradition with parades and dancing." },
      { name: "Sao Joao", month: "June", description: "Feast of St. John the Baptist with water games." },
      { name: "Shigmo", month: "March", description: "Spring festival with folk dances and parades." },
      { name: "Feast of St. Francis Xavier", month: "December", description: "Religious festival honoring the patron saint of Goa." }
    ],
    "Gujarat": [
      { name: "Navratri", month: "October", description: "Nine-night dance and worship celebration." },
      { name: "Rann Utsav", month: "November-February", description: "Cultural desert festival in Kutch." },
      { name: "International Kite Festival", month: "January", description: "Kite flying event during Makar Sankranti." },
      { name: "Modhera Dance Festival", month: "January", description: "Classical dance festival held at Modhera Sun Temple." }
    ],
    "Haryana": [
      { name: "Surajkund Mela", month: "February", description: "Handicrafts fair showcasing Indian art and craft." },
      { name: "Teej", month: "August", description: "Women's monsoon festival with swings and songs." },
      { name: "Gugga Naumi", month: "August-September", description: "Festival to worship Gugga Pir." },
      { name: "Lohri", month: "January", description: "Harvest festival celebrated with bonfires and folk songs." }
    ],
    "Himachal Pradesh": [
      { name: "Kullu Dussehra", month: "October", description: "Procession of local deities in Kullu Valley." },
      { name: "Halda Festival", month: "January", description: "New Year festival of Lahaul community." },
      { name: "Phulaich", month: "September", description: "Floral festival celebrated in Kinnaur." },
      { name: "Minjar Mela", month: "July", description: "Harvest festival celebrated in Chamba." }
    ],
    "Jharkhand": [
      { name: "Sarhul", month: "April", description: "Nature worship festival by tribal communities." },
      { name: "Karma", month: "September", description: "Worship of Karma tree and tribal dances." },
      { name: "Rohini", month: "August", description: "Local folk festival." },
      { name: "Tusu Festival", month: "January", description: "Harvest festival celebrated by tribal women." }
    ],
    "Karnataka": [
      { name: "Mysore Dasara", month: "October", description: "Royal celebration with parades in Mysore." },
      { name: "Ugadi", month: "March-April", description: "Kannada New Year celebration." },
      { name: "Karaga Festival", month: "April", description: "Dramatic night-time temple procession in Bangalore." },
      { name: "Hampi Festival", month: "November", description: "Cultural festival showcasing heritage of Hampi." }
    ],
    "Kerala": [
      { name: "Onam", month: "August-September", description: "Harvest festival celebrated with boat races and feasts." },
      { name: "Vishu", month: "April", description: "Malayali New Year marked by rituals and fireworks." },
      { name: "Thrissur Pooram", month: "April-May", description: "Elephant festival featuring traditional percussion ensembles." },
      { name: "Theyam", month: "December-April", description: "Ritual dance worship performed in temples." }
    ],
    "Madhya Pradesh": [
      { name: "Lokrang Festival", month: "October", description: "Folk arts and crafts festival." },
      { name: "Khajuraho Dance Festival", month: "February-March", description: "Classical dance festival near the Khajuraho temples." },
      { name: "Bhagoria Haat Festival", month: "February", description: "Tribal festival involving courtship dances." },
      { name: "Teej", month: "August", description: "Festival celebrating the monsoon season." }
    ],
    "Maharashtra": [
      { name: "Ganesh Chaturthi", month: "August-September", description: "Festival honoring Lord Ganesha with public installations." },
      { name: "Gudi Padwa", month: "March-April", description: "Marathi New Year celebration." },
      { name: "Ellora Festival", month: "February", description: "Classical music and dance festival at Ellora Caves." },
      { name: "Shimga", month: "March", description: "Folk festival marking the beginning of spring." }
    ],
    "Manipur": [
      { name: "Yaoshang", month: "March", description: "Spring festival involving traditional sports and dance." },
      { name: "Lai Haraoba", month: "May-June", description: "Traditional ritualistic festival of the Meitei people." },
      { name: "Ningol Chakouba", month: "October-November", description: "Festival celebrating the bond between brothers and sisters." }
    ],
    "Meghalaya": [
      { name: "Wangala", month: "October-November", description: "Harvest festival of the Garo tribe." },
      { name: "Shad Suk Mynsiem", month: "April", description: "Flower festival of the Khasi tribe." },
      { name: "Behdienkhlam", month: "July", description: "Jain pilgrimage festival to drive away evil spirits." }
    ],
    "Mizoram": [
      { name: "Chapchar Kut", month: "March", description: "Spring festival marking the end of jhum cultivation." },
      { name: "Mim Kut", month: "September", description: "Festival of thanksgiving for a good harvest." },
      { name: "Pawl Kut", month: "December", description: "Harvest festival of the Mizos." }
    ],
    "Nagaland": [
      { name: "Hornbill Festival", month: "December", description: "Showcase of Naga cultural heritage." },
      { name: "Moatsu", month: "April-May", description: "Rice planting festival." },
      { name: "Sekrenyi", month: "February", description: "Purification festival of the Angami Nagas." }
    ],
    "Odisha": [
      { name: "Rath Yatra", month: "June-July", description: "Chariot festival of Lord Jagannath." },
      { name: "Durga Puja", month: "September-October", description: "Worship of Goddess Durga with grandeur." },
      { name: "Konark Dance Festival", month: "December", description: "Classical dance festival near Sun Temple." }
    ],
    "Punjab": [
      { name: "Lohri", month: "January", description: "Harvest festival marked by bonfires and folk songs." },
      { name: "Baisakhi", month: "April", description: "Harvest festival and Sikh New Year." },
      { name: "Hola Mohalla", month: "March", description: "Sikh festival with martial arts demonstrations." }
    ],
    "Rajasthan": [
      { name: "Pushkar Mela", month: "November", description: "Camel fair and cultural festival." },
      { name: "Teej", month: "August", description: "Monsoon festival for women." },
      { name: "Desert Festival", month: "February", description: "Cultural festival in Jaisalmer featuring folk performances." }
    ],
    "Sikkim": [
      { name: "Losar", month: "February", description: "Tibetan New Year festival." },
      { name: "Saga Dawa", month: "May-June", description: "Buddhist festival marking Buddha's birth and enlightenment." },
      { name: "Pang Lhabsol", month: "September", description: "Festival honoring Mount Khangchendzonga." }
    ],
    "Tamil Nadu": [
      { name: "Pongal", month: "January", description: "Harvest festival thanking the Sun God." },
      { name: "Natyanjali Festival", month: "February", description: "Dance festival at Chidambaram." },
      { name: "Chithirai Festival", month: "April-May", description: "Temple festival in Madurai." }
    ],
    "Telangana": [
      { name: "Bonalu", month: "July-August", description: "Festival dedicated to Goddess Mahakali." },
      { name: "Bathukamma", month: "September-October", description: "Floral festival celebrated by women." },
      { name: "Medaram Jatara", month: "February", description: "Tribal festival honoring deity Sammakka." }
    ],
    "Tripura": [
      { name: "Kharchi Puja", month: "July", description: "Worship of 14 deities to cleanse sins." },
      { name: "Garia Puja", month: "April", description: "Agricultural festival seeking blessings." },
      { name: "Ker Puja", month: "August", description: "Festival seeking protection from evil spirits." }
    ],
    "Uttar Pradesh": [
      { name: "Kumbh Mela", month: "January-February", description: "Mass Hindu pilgrimage and bathing festival." },
      { name: "Taj Mahotsav", month: "February", description: "Cultural festival near Taj Mahal." },
      { name: "Ram Navami", month: "March-April", description: "Celebration of Lord Rama's birth." }
    ],
    "Uttarakhand": [
      { name: "Nanda Devi Raj Jat Yatra", month: "August-September", description: "Pilgrimage and festival honoring goddess Nanda Devi." },
      { name: "Kumbh Mela", month: "April", description: "Mass Hindu pilgrimage and bathing festival at Haridwar." },
      { name: "Ganga Dussehra", month: "May-June", description: "Festival celebrating the descent of the Ganges River." }
    ],
    "West Bengal": [
      { name: "Durga Puja", month: "September-October", description: "Grand worship and celebration of Goddess Durga." },
      { name: "Poila Boishakh", month: "April", description: "Bengali New Year festival." },
      { name: "Rath Yatra", month: "June-July", description: "Chariot festival dedicated to Lord Jagannath." }
    ]
  };
  
module.exports = culturalFestivalsByState;
   
    