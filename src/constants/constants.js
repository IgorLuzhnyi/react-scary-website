// Constants
const SCREAM_AVATAR =
  "https://pyxis.nymag.com/v1/imgs/b73/d51/f4991a746cedf9801c8c6a1b656d5c579b-scream.rsquare.w700.jpg";
const IMAGE_1 =
  "https://www.themoviedb.org/t/p/w500/1m3W6cpgwuIyjtg5nSnPx7yFkXW.jpg";
const IMAGE_2 =
  "https://i.etsystatic.com/30966863/r/il/f6a56e/3427806176/il_fullxfull.3427806176_3ec3.jpg";

export { SCREAM_AVATAR, IMAGE_1, IMAGE_2 };

export const fav_movies_posters = [
  {
    keyNumber: 1,
    imgPath:
      "http://s.gamer-info.com/gl/t/h/e/t/the-texas-chainsaw-massacre_ba.jpg",
  },
  {
    keyNumber: 2,
    imgPath:
      "https://upload.wikimedia.org/wikipedia/ru/thumb/a/ac/F13th-2009-ost.jpg/274px-F13th-2009-ost.jpg",
  },
  {
    keyNumber: 3,
    imgPath: "https://m.media-amazon.com/images/I/817iy6NQJIL._SL1500_.jpg",
  },
  {
    keyNumber: 4,
    imgPath:
      "https://vinyla.com/files/products/original-soundtrack-house-of-wax-limited-edition.800x800.jpg?4fb79adc9a1ce4a535b8d66e767a59ab",
  },
  {
    keyNumber: 5,
    imgPath:
      "https://upload.wikimedia.org/wikipedia/ru/8/8f/April_Fool%27s_Day.jpg",
  },
  {
    keyNumber: 6,
    imgPath:
      "https://is1-ssl.mzstatic.com/image/thumb/Music123/v4/8c/53/e4/8c53e4f3-9529-0cf9-db55-080614449669/883316248591.jpg/600x600bf-60.jpg",
  },
  {
    keyNumber: 7,
    imgPath:
      "https://cdn.hmv.com/r/w-640/hmv/files/aa/aa8b9ee1-0849-4889-ac13-2f5ec9c80f6d.jpg",
  },
  {
    keyNumber: 8,
    imgPath:
      "https://img4.hulu.com/user/v3/artwork/6c6bcebe-59c4-4486-b019-58b4d4d5a962?base_image_bucket_name=image_manager&base_image=a1e75c58-cae5-46bf-ba11-6d236e1c74ec&region=US&format=jpeg&size=952x536",
  },
];

const MALE_COLOR = "rgb(77, 17, 173)";
const FEMALE_COLOR = "rgb(199, 52, 15)";
const DARK_GREY = "rgb(80, 80, 80)";

export { MALE_COLOR, FEMALE_COLOR, DARK_GREY };

// Data
export const posts_data = [
  {
    author: {
      name: "Scream",
      photo: SCREAM_AVATAR,
      nickname: "@chilling_killing",
    },
    content:
      "So hyped for the new Scream movie! Can't wait to get to the cinema.",
    image: IMAGE_1,
    date: "Feb 26",
    reactions: {
      comments: 482,
      shares: 146,
      likes: 887,
    },
    id: 645687,
  },
  {
    author: {
      name: "Scream",
      photo: SCREAM_AVATAR,
      nickname: "@chilling_killing",
    },
    content: "Upd.: got covid, no killing for the next month :((",
    image: IMAGE_2,
    date: "Feb 27",
    reactions: {
      comments: 324,
      shares: 302,
      likes: 1002,
    },
    id: 535578,
  },
];

export const contacts = [
  {
    firstName: "Barney",
    lastName: "Stynsovskii",
    phone: "+380956319521",
    gender: "male",
    avatarImg: "https://ychef.files.bbci.co.uk/976x549/p03n0ylf.jpg",
    id: 324,
    username: "barney",
    description:
      "Egoistic fallen with himself in love psychopath, perfectionist. Proficient in business card designs though.",
    chat_history: [
      {
        msgId: 1,
        sender: "Scream",
        text: "Hey buddy! Remember that axe I lent u? Can I have it back?",
      },
      {
        msgId: 2,
        sender: "Barney",
        text: "Hi! Yeah, I remember, but I want to keep it for music party. Besides, you don't use it anyway, don't you?",
      },
      {
        msgId: 3,
        sender: "Scream",
        text: "It's been a month by now. Ok, will dial you later.",
      },
    ],
  },
  {
    firstName: "Robin",
    lastName: "Shcherbatska",
    phone: "+380931460123",
    gender: "female",
    avatarImg:
      "https://www.pinkvilla.com/imageresize/margot_robbie_calls_harley_quinn_exhausting.jpg?width=752&format=webp&t=pvorg",
    id: 876,
    username: "robin",
    description:
      "Irresponsible girlie with impulsive behavior, 10x times dangerous if has even a toothpick. Not John Wick, but even worse, because cute and beautiful.",
    chat_history: [
      {
        msgId: 1,
        sender: "Scream",
        text: "Hey! Wanna have some night walk under the moon with scaring some folks?",
      },
      {
        msgId: 2,
        sender: "Robin",
        text: "Baby, you know you are out of my league, do you?",
      },
      {
        msgId: 3,
        sender: "Scream",
        text: "Well, I have more movies than you do :P",
      },
      {
        msgId: 4,
        sender: "Robin",
        text: "Touche. Meet you at 8pm near old brickhouse",
      },
    ],
  },
  {
    firstName: "Anonymous",
    lastName: "Anonymous",
    phone: "+380666666666",
    avatarImg:
      "https://avatars.mds.yandex.net/get-kinopoisk-post-thumb/1348084/55bc496bfc084fcc7c23d13bc4368bdc/320x180",
    id: 667,
    username: "anonimous",
    description:
      "Thanks to this guy Scream 5 was leaked into pirate sources long before premiere. Unpleasant geek.",
    chat_history: [
      {
        msgId: 1,
        sender: "Anonymous",
        text: "Remove me from your list, I know I'm there. Or I'll let everyone know that you still listen to Pussycat Dolls.",
      },
      {
        msgId: 2,
        sender: "Scream",
        text: "No problem with that, I wear a MASK you fool",
      },
    ],
  },
  {
    firstName: "Lilia",
    lastName: "Oldrovna",
    phone: "+380504691254",
    gender: "female",
    avatarImg:
      "https://www.stylist.co.uk/images/app/uploads/2020/05/02114108/harry-potter-dolores-umbridge-256x256.jpg?w=256&h=256&fit=max&auto=format%2Ccompress",
    id: 789,
    username: "lilia",
    description:
      "A minger I got expelled from Hogwarts because of. How do you think I can move so fast? Still got some skills",
    chat_history: [
      {
        msgId: 1,
        sender: "Scream",
        text: "I will be among Death Eaters, you won't even notice me.",
      },
      {
        msgId: 2,
        sender: "Lilia",
        text: "I think everyone would notice your goofy walk.",
      },
    ],
  },
  {
    firstName: "Marshen",
    lastName: "Erichsonyan",
    phone: "+380739432123",
    gender: "male",
    avatarImg:
      "https://upload.wikimedia.org/wikipedia/commons/b/b0/RammsteinFlake.jpg",
    id: 376,
    username: "marshen",
    description:
      "I have always loved the music of this guy's band, but last album sucked.",
    chat_history: [
      {
        msgId: 1,
        sender: "Scream",
        text: "Can you ask Till to dedicate next album to moi? I will send you a cover for the album. Please please please",
      },
      {
        msgId: 2,
        sender: "Marshen",
        text: "Who the hell is this?",
      },
    ],
  },
  {
    firstName: "Teodor",
    lastName: "Motsbes",
    phone: "+380956319521",
    gender: "male",
    avatarImg:
      "https://pyxis.nymag.com/v1/imgs/34c/cae/ce8997338cbad42766ca705559b6e0ad6f-elon-musk-.rsquare.w700.jpg",
    id: 591,
    username: "teodor",
    description: "Added him to this list just in case he wouldn't buy Twitter",
    chat_history: [
      {
        msgId: 1,
        sender: "Scream",
        text: "I guarantee you, that would be great, Scream in space! Just imagine that! Let's talk with Hollywood and we'll make a movie. I only need you shuttle and crew.",
      },
      {
        msgId: 2,
        sender: "Teodor",
        text: "I guess that would end bad for the CREW",
      },
      {
        msgId: 3,
        sender: "Scream",
        text: "I got some Mary Jane brother. I watched all Joe Rogan's with you :)",
      },
      {
        msgId: 4,
        sender: "Teodor",
        text: "This user has blocked you.",
      },
    ],
  },
];
