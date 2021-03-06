const songData = [
    [
        {
            id: 1,
            artist: "Halsey",
            songName: "Without Me",
            genre: "Pop",
            description: "“Without Me” is the first new song released by Halsey since her 2017 album, hopeless fountain kingdom. The track is directed at her ex G-Eazy after she was “cheated on in front of the entire world, like, a billion times.”",
            image: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f1/Without_Me_%E2%80%93_Halsey.png/220px-Without_Me_%E2%80%93_Halsey.png",
            audio: "https://cdn1.muzgoo.net/uploads/files/2018-10/halsey-without-me_456253154.mp3",
            video: "https://www.youtube.com/watch?v=J6enOG547lk",
        },
        {
            id: 2,
            artist: "Jonas Brothers",
            songName: "Sucker",
            genre: "Pop",
            description: `"Sucker" is a song by American pop rock band Jonas Brothers. The song, released on March 1, 2019, through Republic Records, is the group's first single together in six years.`,
            image: "https://upload.wikimedia.org/wikipedia/en/thumb/8/87/Jonas_Brothers_-_Sucker.png/220px-Jonas_Brothers_-_Sucker.png",
            audio: "https://cdn3.muzgoo.net/uploads/files/2019-03/jonas-brothers-sucker_456259093.mp3",
            video: "https://www.youtube.com/watch?v=CnAmeh0-E-U",
        },
        {
            id: 3,
            artist: "benny blanco, Halsey & Khalids",
            songName: "Eastside",
            genre: "Pop",
            description: `"Eastside" is a song by American record producer Benny Blanco and American singers Halsey and Khalid. The song was released on July 12, 2018 as Blanco's debut single.`,
            image: "https://upload.wikimedia.org/wikipedia/en/thumb/2/21/Benny_Blanco%2C_Halsey_and_Khalid_Eastside.png/220px-Benny_Blanco%2C_Halsey_and_Khalid_Eastside.png",
            audio: "https://cdn3.muzgoo.net/uploads/files/2018-08/1533571068_benny-blanco-feat_-halsey-khalid-eastside.mp3",
            video: "https://www.youtube.com/watch?v=56WBK4ZK_cw",
        },
        {
            id: 4,
            artist: "Ed Sheeran & Justin Bieber",
            songName: "I Don't Care",
            genre: "Pop",
            description: `"I Don't Care" is a song by English singer-songwriter Ed Sheeran and Canadian singer Justin Bieber. It was released on 10 May 2019 as the lead single from Sheeran's fourth studio album, No.6 Collaborations Project.`,
            image: "https://upload.wikimedia.org/wikipedia/en/thumb/6/69/Ed_Sheeran_%26_Justin_Bieber_-_I_Don%27t_Care.png/220px-Ed_Sheeran_%26_Justin_Bieber_-_I_Don%27t_Care.png",
            audio: "https://cdn3.muzgoo.net/uploads/files/2019-05/ed-sheeran-justin-bieber-i-dont-care_456262696.mp3",
            video: "https://www.youtube.com/watch?v=y83x7MgzWOA",
        },
        {
            id: 5,
            artist: "Sam Smith & Normani",
            songName: "Dancing With A Stranger",
            genre: "Pop",
            description: `"Dancing with a Stranger" is a song by English singer Sam Smith and American singer Normani. It was written by Smith, Normani, Jimmy Napes, Mikkel S. Eriksen, Tor Hermansen, and produced by Stargate and Napes.`,
            image: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a6/Dancing_with_a_Stranger_%28official_single_cover%29.png/220px-Dancing_with_a_Stranger_%28official_single_cover%29.png",
            audio: "https://cdn3.muzgoo.net/uploads/files/2019-01/sam-smith-normani-dancing-with-a-stranger_456256457.mp3",
            video: "https://www.youtube.com/watch?v=av5JD1dfj_c",
        },
        {
            id: 6,
            artist: "Billie Eilish",
            songName: "Bad Guy",
            genre: "Pop",
            description: `"Bad Guy" (stylized in all lowercase) is a song recorded by American singer Billie Eilish. It was released by Darkroom and Interscope Records as the fifth single from Eilish's debut studio album When We All Fall Asleep, Where Do We Go?`,
            image: "https://pesnigoo.ru/uploads/posts/2019-04/1555164292_20t.jpg",
            audio: "https://cdn3.muzgoo.net/uploads/files/2019-03/billie-eilish-bad-guy_456259776.mp3",
            video: "https://www.youtube.com/watch?v=DyDfgMOUjCI",
        }
    ],
    [
        {
            id: 1,
            artist: "Lil Nas X Featuring Billy Ray Cyrus",
            songName: "Old Town Road",
            genre: "R&B/HIP-HOP",
            description: `"Old Town Road" is a song by American rapper Lil Nas X, first released independently in December 2018. After gaining popularity, the single was re-released by Columbia Records in March 2019.`,
            image: "https://pesnigoo.ru/uploads/posts/2019-05/1558542715_200x200-14.jpg",
            audio: "https://cdn3.muzgoo.net/uploads/files/2019-05/lil-nas-x-billy-ray-cyrus-diplo-old-town-road_456262213.mp3",
            video: "https://www.youtube.com/watch?v=w2Ov5jzm3j8",
        },
        {
            id: 2,
            artist: "Post Malone & Swae Lee",
            songName: "Sunflower",
            genre: "R&B/HIP-HOP",
            description: `"Sunflower" (alternatively titled "Sunflower is a song performed by American rapper Post Malone and American singer Swae Lee. It was released as a single from the soundtrack to the film Spider-Man: Into the Spider-Verse`,
            image: "https://pesnigoo.ru/uploads/posts/2018-10/1540141510_200.jpg",
            audio: "https://cdn1.muzgoo.net/uploads/files/2018-10/post-malone-swae-lee-sunflower_456253610.mp3",
            video: "https://www.youtube.com/watch?v=ApXoWvfEYVU",
        },
        {
            id: 3,
            artist: "Lizzo",
            songName: "Truth Hurts",
            genre: "R&B/HIP-HOP",
            description: `"Truth Hurts" is a song released by American singer and rapper Lizzo. It was originally released on September 19, 2017, by Nice Life Recording Company and Atlantic Records, but then re-released as a radio single in 2019.`,
            image: "https://pesnigoo.ru/uploads/posts/2019-12/1576003806_200x200-1.jpg",
            audio: "https://muzgoo.net/uploads/files/2019-12/1575290028_lizzo-feat-ab6ix-truth-hurts-feat-ab6ix.mp3",
            video: "https://www.youtube.com/watch?v=P00HMxdsVZI",
        },
        {
            id: 4,
            artist: "Travis Scott",
            songName: "Sicko Mode",
            genre: "R&B/HIP-HOP",
            description: `"Sicko Mode" (stylized in all caps) is a song by American rapper Travis Scott, released by Epic Records on August 3, 2018, as the third track from Scott's third studio album, Astroworld (2018).`,
            image: "https://pesnigoo.ru/uploads/posts/2018-12/1543950341_200x200-3.jpg",
            audio: "https://cdn3.muzgoo.net/uploads/files/2019-06/1561638456_travis-scott-sicko-mode.mp3",
            video: "https://www.youtube.com/watch?v=6ONRf7h3Mdk",
        },
        {
            id: 5,
            artist: "Chris Brown Featuring Drake",
            songName: "No Guidance",
            genre: "R&B/HIP-HOP",
            description: `"No Guidance" is a song by American singer Chris Brown featuring vocals from Canadian rapper Drake. It was released on June 8, 2019 as the fourth single from Brown's ninth studio album, Indigo (2019).`,
            image: "https://pesnigoo.ru/uploads/posts/2019-06/1560116368_chris-brown-feat-drake-no-guidance.jpg",
            audio: "https://cdn3.muzgoo.net/uploads/files/2019-06/1560116286_chris-brown-feat-drake-no-guidance.mp3",
            video: "https://www.youtube.com/watch?v=6L_k74BOLag",
        },
        {
            id: 6,
            artist: "J. Cole",
            songName: "Middle Child",
            genre: "R&B/HIP-HOP",
            description: `"Middle Child" (stylized in all caps) is a song by American rapper J. Cole. The song was released on January 23, 2019, through Dreamville Records, Roc Nation and Interscope Records, as the first single from Dreamville's 2019 compilation album`,
            image: "https://pesnigoo.ru/uploads/no_poster200.jpg",
            audio: "https://cdn3.muzgoo.net/uploads/files/2019-01/j.-cole-middle-child_456256959.mp3",
            video: "https://www.youtube.com/watch?v=e8CLsYzE5wk",
        }
    ],
    [
        {
            id: 1,
            artist: "Panic! At The Disco",
            songName: "High Hopes",
            genre: "Rock",
            description: `"High Hopes" is a song by American pop rock band Panic! at the Disco. The song was released through Fueled by Ramen and DCD2 Records on May 23, 2018 as the second single from their sixth studio album, Pray for the Wicked (2018).`,
            image: "https://pesnigoo.ru/uploads/posts/2018-12/1543878199_200x200-16.jpg",
            audio: "https://cdn3.muzgoo.net/uploads/files/2018-11/panic-at-the-disco-high-hopes_456239801.mp3",
            video: "https://www.youtube.com/watch?v=IPXIgEAGe4U",
        },
        {
            id: 2,
            artist: "Imagine Dragons",
            songName: "Natural",
            genre: "Rock",
            description: `"Natural" is a song by American pop band Imagine Dragons, whose members co-wrote the song with Justin Tranter, Klinsmann Lucas S. Bernardo and their producers Mattman & Robin.`,
            image: "https://pesnigoo.ru/uploads/posts/2018-07/1531920112_200x200.jpg",
            audio: "https://cdn1.muzgoo.net/uploads/files/2018-07/1531920227_imagine_dragons_-_natural.mp3",
            video: "https://www.youtube.com/watch?v=0I647GU3Jsc",
        },
        {
            id: 3,
            artist: "twenty one pilots",
            songName: "Chlorine",
            genre: "Rock",
            description: `"Chlorine" is a song written and recorded by the American musical duo Twenty One Pilots. The song was released on October 5, 2018 as part of their fifth studio album.`,
            image: "https://pesnigoo.ru/uploads/posts/2018-10/1539271168_200x200-3.jpg",
            audio: "https://cdn1.muzgoo.net/uploads/files/2018-10/twenty-one-pilots-chlorine_456288785.mp3",
            video: "https://www.youtube.com/watch?v=eJnQBXmZ7Ek",
        },
        {
            id: 4,
            artist: "Machine Gun Kelly, Yungblud & Travis Barker",
            songName: "I Think I'm OKAY",
            genre: "Rock",
            description: `"I Think I'm Okay" is a song by American music artist Machine Gun Kelly, English alternative rock musician Yungblud and American musician and drummer Travis Barker.`,
            image: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b3/Machine_Gun_Kelly_-_I_Think_I%27m_Okay.png/220px-Machine_Gun_Kelly_-_I_Think_I%27m_Okay.png",
            audio: "http://uzmuzon.net/files/zarubezhnye-pesni/Machine_Gun_Kelly_and_Yungblud_and_Travis_Barker_-_I_Think_Im_OKAY_.mp3",
            video: "https://www.youtube.com/watch?v=ALIN85DsULY",
        },
        {
            id: 5,
            artist: "Matt Maeson",
            songName: "Cringe",
            genre: "Rock",
            description: `In November 2016, Maeson released his debut single "Cringe". In 2018, Maeson performed at festivals such as Bonnaroo, Lollapalooza, and Forecastle.`,
            image: "https://crown-music.ru/uploads/posts/2019-04/5cc607aff1b79.jpg",
            audio: "https://download.mp3free-is.fun/k/Matt-Maeson-Cringe.mp3",
            video: "https://www.youtube.com/watch?v=eoJtlPQzqkQ",
        },
        {
            id: 6,
            artist: "Slipknot",
            songName: "Unsainted",
            genre: "Rock",
            description: `"Unsainted" is a song by American heavy metal band Slipknot. It was released as the lead single from their sixth studio album We Are Not Your Kind on May 16, 2019, accompanied by its music video.`,
            image: "https://pesnigoo.ru/uploads/posts/2019-05/1559001824_200x200.jpg",
            audio: "https://cdn3.muzgoo.net/uploads/files/2019-05/slipknot-unsainted_456263231.mp3",
            video: "https://www.youtube.com/watch?v=VpATBBRajP8",
        }
    ],
    [
        {
            id: 1,
            artist: "Gorgon City, Kaskade, ROMÉO",
            songName: "Go Slow",
            genre: "Dance",
            description: `"Go Slow" is a song by English production duo Gorgon City, American DJ Kaskade and American singer Roméo. It was released on 9 May 2019 through Virgin EMI Records. It reached number one on the US Dance Club Songs chart in August 2019`,
            image: "https://pesnigoo.ru/uploads/posts/2019-05/1557655776_z.jpg",
            audio: "https://cdn3.muzgoo.net/uploads/files/2019-05/gorgon-city-kaskade-rom201o-go-slow_456262617.mp3",
            video: "https://www.youtube.com/watch?v=Qngp4ZMVXAQ",
        },
        {
            id: 2,
            artist: "Avicii Featuring Aloe Blacc",
            songName: "SOS",
            genre: "Dance",
            description: `"SOS" is the first posthumous single by Swedish DJ Avicii featuring co-production from Albin Nedler and Kristoffer Fogelmark, and vocals from American singer Aloe Blacc.`,
            image: "https://pesnigoo.ru/uploads/posts/2019-04/1555085693_20t.jpg",
            audio: "https://cdn1.muzgoo.net/uploads/files/2019-04/avicii-feat.-aloe-blacc-sos_456260598.mp3",
            video: "https://www.youtube.com/watch?v=Vd3Y7Dg4JV8",
        },
        {
            id: 3,
            artist: "Dimitri Vegas & Like Mike ft. Era Istrefi",
            songName: "Selfish",
            genre: "Dance",
            description: `Belgian DJ and record producer duo Dimitri Vegas & Like Mike released their first compilation album in 2014.`,
            image: "https://charts-static.billboard.com/img/2019/04/dimitri-vegas-like-mike-yen-87x87.jpg?1",
            audio: "https://cdn3.muzgoo.net/uploads/files/2019-02/dimitri-vegas-like-mike-era-istrefi-selfish_456257808.mp3",
            video: "https://www.youtube.com/watch?v=OdTMyWnlSjg",
        },
        {
            id: 4,
            artist: "Gryffin, ZOHARA",
            songName: "Remember",
            genre: "Dance",
            description: `"Remember" is a song by American producer Gryffin and Israeli singer Zohara, released on October 26, 2018, through Darkroom and Geffen Records.`,
            image: "https://pesnigoo.ru/uploads/posts/2019-03/1552223769_1.jpg",
            audio: "https://cdn3.muzgoo.net/uploads/files/2019-02/gryffin-zohara-remember_456291722.mp3",
            video: "https://www.youtube.com/watch?v=9c2M4XY4cbE",
        },
        {
            id: 5,
            artist: "Fisher",
            songName: "You Little Beauty",
            genre: "Dance",
            description: `You Little Beauty" is a song by Australian producer Fisher, released as a single on 10 May 2019 through Catch & Release and Etcetc.`,
            image: "https://upload.wikimedia.org/wikipedia/en/thumb/6/63/Fisher_-_You_Little_Beauty.png/220px-Fisher_-_You_Little_Beauty.png",
            audio: "https://cdn3.muzgoo.net/uploads/files/2019-08/fisher-you-little-beauty_456360056.mp3",
            video: "https://www.youtube.com/watch?v=kFqCiw3Kbsc",
        },
        {
            id: 6,
            artist: "Calvin Harris, Rag'n'Bone Man",
            songName: "Giant",
            genre: "Dance",
            description: `"Giant" is a song by Scottish DJ and record producer Calvin Harris and English singer-songwriter Rag'n'Bone Man. The song was released through Columbia Records on 11 January 2019.`,
            image: "https://pesnigoo.ru/uploads/posts/2019-07/1562510091_l2i.jpg",
            audio: "https://cdn3.muzgoo.net/uploads/files/2019-01/calvin-harris-ragnbone-man-giant_456256426.mp3",
            video: "https://www.youtube.com/watch?v=ir6nk2zrMG0",
        }
    ],
    [
        {
            id: 1,
            artist: "Nirvana",
            songName: "Smells Like Teen Spirit",
            genre: "90's",
            description: `"Smells Like Teen Spirit" is a song by American rock band Nirvana. It is the opening track and lead single from the band's second album, Nevermind (1991), released on DGC Records.`,
            image: "https://pesnigoo.ru/uploads/posts/2018-11/1543363114_200x200-3.jpg",
            audio: "https://cdn3.muzgoo.net/uploads/files/2018-11/nirvana-smells-like-teen-spirit_456375773.mp3",
            video: "https://www.youtube.com/watch?v=hTWKbfoikeg",
        },
        {
            id: 2,
            artist: "No Doubt",
            songName: "Don't Speak",
            genre: "90's",
            description: `"Don't Speak" is a song by American rock band No Doubt from their third studio album Tragic Kingdom (1995). It was released as the third single from Tragic Kingdom in the United States on April 15, 1996.`,
            image: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5e/Don%27t_Speak.jpg/220px-Don%27t_Speak.jpg",
            audio: "https://cdn1.muzgoo.net/uploads/files/2018-09/1536002685_no-doubt-dont-speak.mp3",
            video: "https://www.youtube.com/watch?v=TR3Vdo5etCQ",
        },
        {
            id: 3,
            artist: "Spice Girls",
            songName: "Wannabe",
            genre: "90's",
            description: `"Wannabe" is the debut single by British girl group the Spice Girls. It was produced by Rowe and Stannard for the group's debut album, Spice, released in November 1996.`,
            image: "https://pesnigoo.ru/uploads/posts/2020-06/cover_5eeba351e632e.jpg",
            audio: "https://muzgoo.net/uploads/files/2020-06/1592501074_spice-girls-wannabe.mp3",
            video: "https://www.youtube.com/watch?v=gJLIiF15wjQ",
        },
        {
            id: 4,
            artist: "Backstreet Boys",
            songName: "I Want It That Way",
            genre: "90's",
            description: `"I Want It That Way" is a song by American boy band the Backstreet Boys. It was released on April 12, 1999, as the lead single from their third studio album, Millennium.`,
            image: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b9/Iwantitthatwaycd.jpg/220px-Iwantitthatwaycd.jpg",
            audio: "https://mp3name.net/download.php?id=8933",
            video: "https://www.youtube.com/watch?v=4fndeDfaWCg",
        },
        {
            id: 5,
            artist: "Toni Braxton",
            songName: "Un-Break My Heart",
            genre: "90's",
            description: `"Un-Break My Heart" is a song performed by American singer Toni Braxton, from her second studio album, Secrets (1996). The song was written by Diane Warren and produced by David Foster.`,
            image: "https://pesnigoo.ru/uploads/posts/2018-09/1536852090_117664998.jpg",
            audio: "https://cdn1.muzgoo.net/uploads/files/2018-09/1536003908_toni-braxton-un-break-my-heart.mp3",
            video: "https://www.youtube.com/watch?v=p2Rch6WvPJE",
        },
        {
            id: 6,
            artist: "Ricky Martin",
            songName: "Livin' La Vida Loca",
            genre: "90's",
            description: `"Livin' la Vida Loca" is a song performed by Ricky Martin. It was released on March 23, 1999, from Martin's self-titled debut English-language album (he had previously released several albums in Spanish).`,
            image: "https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/Livin%27_la_vida_loca_cover.png/220px-Livin%27_la_vida_loca_cover.png",
            audio: "https://download.mp3ru.download/k/Ricky-Martin-Livin-la-Vida-Loca.mp3",
            video: "https://www.youtube.com/watch?v=p47fEXGabaY",
        }
    ],
    [
        {
            id: 1,
            artist: "Lady Gaga, Bradley Cooper",
            songName: "Shallow",
            genre: "Soundtracks",
            description: `"Shallow" is a song performed by American singer Lady Gaga and American actor and filmmaker Bradley Cooper. It was released through Interscope Records on September 27, 2018 as the lead single from the soundtrack to the 2018 musical romantic drama film, A Star Is Born.`,
            image: "https://pesnigoo.ru/uploads/posts/2018-10/1539463445_200x200-73.jpg",
            audio: "https://cdn1.muzgoo.net/uploads/files/2018-10/lady-gaga-bradley-cooper-shallow_456288608.mp3",
            video: "https://www.youtube.com/watch?v=JPJjwHAIny4",
        },
        {
            id: 2,
            artist: "Panic! At The Disco",
            songName: "The Greatest Show",
            genre: "Soundtracks",
            description: `"The Greatest Show" is a song performed by Hugh Jackman, Keala Settle, Zac Efron and Zendaya for the film The Greatest Showman (2017). It is the opening track from The Greatest Showman: Original Motion Picture Soundtrack (2017).`,
            image: "https://pesnigoo.ru/uploads/posts/2018-11/1541612512_1541612488.png",
            audio: "https://cdn3.muzgoo.net/uploads/files/2018-11/panic-at-the-disco-the-greatest-show_456254026.mp3",
            video: "https://www.youtube.com/watch?v=jpJ8CbrWX_Y",
        },
        {
            id: 3,
            artist: "Kendrick Lamar",
            songName: "Black Panther",
            genre: "Soundtracks",
            description: `The soundtrack for the 2018 American superhero film Black Panther, based on the Marvel Comics character of the same name and produced by Marvel Studios, consists of an original score composed by Ludwig Göransson and original songs performed by Kendrick Lamar.`,
            image: "https://upload.wikimedia.org/wikipedia/en/thumb/6/65/Black_Panther_-_The_Album.png/220px-Black_Panther_-_The_Album.png",
            audio: "http://mp3m.всесаундтреки.рф/lidown.php?&hash=b83566a77067345484955e01bc2216f1sThIamqMjAxOC1jaGVybmF5YS1wYW50ZXJhLXNvdW5kdHJhY2svT1NULzAxMDEubXAz",
            video: "https://www.youtube.com/watch?v=ITFlSa4cI6Y",
        },
        {
            id: 4,
            artist: "Will Smith",
            songName: "Arabian Nights",
            genre: "Soundtracks",
            description: `"Arabian Nights" is a soundtrack for the film of the same name, released by Walt Disney Records on May 17, 2019.`,
            image: "https://upload.wikimedia.org/wikipedia/en/thumb/8/86/Aladdin2019soundtrack.jpg/220px-Aladdin2019soundtrack.jpg",
            audio: "https://freemuzon.net/up/files/2019-09/will-smith-arabian-nights_(freemuzon.net).mp3",
            video: "https://www.youtube.com/watch?v=T9GmO_WFhjQ",
        },
        {
            id: 5,
            artist: "A$ton Wyld",
            songName: "Next Level",
            genre: "Soundtracks",
            description: `"Next Level" is a soundtrack for Fast & Furious Presents: Hobbs & Shaw (2019).`,
            image: "https://s.mxmcdn.net/images-storage/albums4/3/4/2/4/5/0/45054243_800_800.jpg",
            audio: "https://cdn3.muzgoo.net/uploads/files/2019-09/a036ton-wyld-next-level_456241200.mp3",
            video: "https://www.youtube.com/watch?v=ucFEl3kQBjg",
        },
        {
            id: 6,
            artist: "Queen",
            songName: "Bohemian Rhapsody",
            genre: "Soundtracks",
            description: `Bohemian Rhapsody is the soundtrack album to the 2018 biographical film of the same name. The soundtrack features several Queen songs and unreleased recordings including several tracks from their legendary concert at Live Aid in 1985.`,
            image: "https://upload.wikimedia.org/wikipedia/en/thumb/6/6c/Bohemian_Rhapsody_soundtrack.jpg/220px-Bohemian_Rhapsody_soundtrack.jpg",
            audio: "https://cdn1.muzgoo.net/uploads/files/2018-09/queen-bohemian-rhapsody_456360871.mp3",
            video: "https://www.youtube.com/watch?v=fJ9rUzIMcZQ",
        }
    ]
]

export default songData;