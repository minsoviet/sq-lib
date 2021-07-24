//  Module:     Constants
//  Project:    sq-lib
//  Author:     soviet
//  E-mail:     soviet@s0viet.ru
//  Web:        https://s0viet.ru/

module.exports = ({
	Constants: {
		ProtocolData: {
			PACKET_HEADER_SIZE: 0x4,
			PACKET_MAX_SIZE: 0x500000,
			POLICY_FILE_REQUEST: '<policy-file-request/>\0',
			POLICY_FILE_CONTENT: '<?xml version="1.0"?>\n<cross-domain-policy>\n\t<site-control permitted-cross-domain-policies="all" />\n\t<allow-access-from domain="*" to-ports="%0,21,80" />\n</cross-domain-policy>\n',
		},
		PacketClient: {
			AB_GUI_SHOW: 0,
			AB_GUI_USE: 1,
			BUY_ENERGY_BIG: 3,
			BUY_MANA_BIG: 5,
			BUY_SHAMAN: 6,
			BUY_HARE: 10,
			BUY_ITEMS: 14,
			BUY_ITEM_SET: 15,
			BUY_CLAN_ROOM: 17,
			BUY_DRAGON: 18,
			BUY_ITEMS_FAST: 19,
			BUY_DAILY_REJECT: 25,
			BUY_CLAN_PLACE: 27,
			BUY_CLAN_TOTEM: 29,
			BUY_COLLECTION_ITEM: 30,
			BUY_MISC: 40,
			BUY_VIP: 45,
			BUY_DISCOUNT: 46,
			BUY_DECORATION: 47,
			BUY_SHAMAN_SKILL: 48,
			BUY_SHAMAN_BRANCH_RESET: 49,
			BUY_SHAMAN_BRANCH: 50,
			BUY_MANA_REGENERATION: 60,
			BUY_ACCESSORY: 61,
			BUY_SKIN: 62,
			BUY_PACKAGE: 63,
			BUY_PACKAGE_DAY: 64,
			SYNC_ALL: 0,
			SYNC_PLAYER: 1,
			NUT_PICK: 0,
			NUT_LOST: 1,
			BAN_REASON_WARNING: 1,
			BAN_REASON_CHAT_SWEARING: 2,
			BAN_REASON_PROFILE_SWEARING: 3,
			MAP_VIOLATION: 4,
			BAN_REASON_SOFTWARE_USING: 5,
			AUTO_BAN: 6,
			COLLECTION_AUTOBAN: 7,
			BROKEN_WORLD_AUTOBAN: 8,
			CHAT_VIOLATION: 9,
			CHECKPOINTS_AUTOBAN: 10,
			REPLAY_BAN: 11,
			BAN_TYPE_NONE: 0,
			BAN_TYPE_GAG: 1,
			BAN_TYPE_BAN: 2,
			CAST_SHAMAN: 0,
			CAST_SQUIRREL: 1,
			CLAN_ACCEPT_REJECT: 0,
			CLAN_ACCEPT_INVITE: 1,
			CHAT_ROOM: 0,
			CHAT_CLAN: 1,
			CHAT_COMMON: 2,
			CHAT_NEWBIE: 3,
			CHAT_COMMAND_ENTER: 0,
			CHAT_COMMAND_LEAVE: 1,
			COUNT_BANK_OPENS: 36,
			COUNT_BANK_PURCHASE: 37,
			FULLSCREEN: 68,
			CHANGE_ROOM: 91,
			SHOP: 212,
			INVITE_FRIENDS: 216,
			FPS_ROUND: 229,
			FPS_LOCATION: 230,
			FPS_MAP: 231,
			LEVEL_REPOST: 244,
			SHAMAN_LEVEL_REPOST: 245,
			CLICK_CHAT_BUTTON: 266,
			CAN_REPOST: 273,
			MAKE_REPOST: 274,
			REPOST_FOLLOW: 275,
			COUNT_OFFER_OK: 285,
			VIRALITY_REPOST: 326,
			TRAINING_POINTS: 345,
			EXCHANGE_USED: 356,
			MAP_DUPLICATE: 359,
			PLANET_SHOW: 360,
			DIALOG_CTR: 361,
			NEWS_SITE_REDIRECT: 376
		},
		PacketServer: {
			LOGIN_SUCCESS: 0,
			LOGIN_FAILED: 1,
			LOGIN_EXIST: 2,
			LOGIN_BLOCKED: 3,
			LOGIN_WRONG_VERSION: 4,
			EDITOR_NONE: 0,
			EDITOR_FULL: 1,
			EDITOR_APPROVAL: 3,
			EDITOR_APPROVAL_PLUS: 4,
			EDITOR_SUPER: 5,
			PLAY_OFFLINE: 0,
			PLAY_FAILED: 1,
			NOT_EXIST: 2,
			FULL_ROOM: 3,
			NOT_IN_CLAN: 4,
			UNAVAIABLE_LOCATION: 5,
			LOW_ENERGY: 7,
			BUY_SUCCESS: 0,
			BUY_PRICE_CHANGED: 1,
			BUY_NO_BALANCE: 2,
			BUY_FAIL: 3,
			ROUND_WAITING: 0,
			ROUND_STARTING: 1,
			ROUND_PLAYING: 2,
			ROUND_RESULTS: 3,
			ROUND_START: 4,
			ROUND_CUT: 5,
			MAIL_DEMO: -1,
			MAP_APPROVED: 0,
			MAP_REJECTED: 1,
			CLAN_ACCEPT: 4,
			CLAN_REJECT: 5,
			CLAN_INVITE: 6,
			CLAN_KICK: 7,
			CLAN_CLOSE_EVENT: 8,
			CLAN_NEWS_EVENT: 9,
			CLAN_BLOCK_EVENT: 10,
			FRIEND_QUEST_EVENT: 11,
			EXCHANGE_EVENT: 12,
			RETURNER_AWARD: 19,
			MAP_RETURN: 21,
			AMUR_MAIL: 22,
			EXCHANGE_SUCCESS: 0,
			EXCHANGE_FAIL: 1,
			ASSEMBLE_SUCCESS: 0,
			ASSEMBLE_FAIL: 1,
			OFFER_GOLDEN_CUP: 20,
			ROOM_NOT_EXIST_CLAN: 0,
			ROOM_NOT_EXIST: 1,
			ROOM_EXPIRED: 2,
			ROOM_FULL: 3,
			SKILL_DEACTIVATE: 0,
			SKILL_ACTIVATE: 1,
			SKILL_ERROR: 2,
			CLAN_STATE_SUCCESS: 0,
			CLAN_STATE_ERROR: 1,
			CLAN_STATE_NO_BALANCE: 2,
			CLAN_STATE_CLOSED: 3,
			CLAN_STATE_BLOCKED: 4,
			CLAN_STATE_BANNED: 6,
			CLAN_BLACKLIST: 7,
			CLAN_LOW_LEVEL: 8,
			CLAN_TRANSACTION_DONATION: 0,
			CLAN_TRANSACTION_ROOM: 1,
			CLAN_TRANSACTION_RENAME: 2,
			CLAN_TRANSACTION_PLACES: 3,
			CLAN_TRANSACTION_BOOSTER: 4,
			CLAN_TRANSACTION_TOTEM: 5,
			CLAN_SUBSTITUTE_FIRE: 0,
			CLAN_SUBSTITUTE_ADDED: 1,
			RESPAWN_CLAN_TOTEM: 0,
			RESPAWN_LOW_LEVEL: 1,
			RESPAWN_DRAGON: 2,
			RESPAWN_DEATH: 3,
			RESPAWN_FREE_HARD: 6,
			RESPAWN_VIP: 7,
			RESPAWN_HEAVENS_GATE: 9,
			RESPAWN_IMMORTAL: 10,
			RESPAWN_SUCCESS: 0,
			RESPAWN_FAIL: 1,
			JOIN_PLAYING: 0,
			JOIN_START: 1,
			BEAST_DRAGON: 0,
			BEAST_HARE: 1,
			SHAMAN_COMPENSATION: 0,
			DRAGON_COMPENSATION: 1,
			REASON_FRIEND_GIFT: 14,
			REASON_HIPSTER_AWARDING: 15,
			REASON_INVITER_REWARDING: 16,
			REASON_NURSE_AWARDING: 20,
			REASON_QUEST: 21,
			REASON_RABBIT_KILLING: 22,
			REASON_REFILLING: 24,
			REASON_RETURNER_REWARDING: 25,
			REASON_SHAMAN_KILLING: 30,
			REASON_SHAMAN_RESCUING: 31,
			REASON_SPENT: 33,
			REASON_TRAINING: 34,
			REASON_WINNING: 35,
			REASON_ENERGY_RETURN: 36,
			REASON_LEPRECHAUN_AWARDING: 38,
			REASON_SHAMAN_SURRENDER: 43,
			REASON_DAILY: 48,
			REASON_DISCOUNT: 49,
			REASON_GOLDEN_CUP: 50,
			REASON_HOLIDAY_LOTTERY: 57,
			REASON_HOLIDAY_TICKETS: 58,
			REASON_GIFT: 60,
			REASON_AMUR: 61,
			REASON_CELEBRATE: 62,
			REASON_HOT_WEEKEND: 63,
			REASON_HOLIDAY_BOOSTER: 64,
			REASON_HOT_WHEELS: 65,
			ROUND_DEFAULT_TIME: 600,
			ROUND_MIN_TIME: 20,
			LEVEL_TO_OPEN_STORAGE: 4,
			LEVEL_TO_OPEN_ADVERTISING: 4,
			LEVEL_TO_OPEN_DRAGON: 4,
			LEVEL_TO_LEAVE_SANDBOX: 4,
			LEVEL_TO_NEWBIE_BUNDLE: 6,
			LEVEL_TO_NEWBIE_BUNDLE_END: 12,
			LEVEL_TO_FREE_RESPAWN: 5,
			LEVEL_REQUEST_LEFT_MENU: 5,
			LEVEL_TO_OPEN_CLANS: 7,
			LEVEL_TO_INVITE: 7,
			LEVEL_TO_OPEN_SHAMAN: 7,
			LEVEL_TO_SHOW_TV: 10,
			LEVEL_TO_PAY_FOR_NICK: 10,
			LEVEL_TO_FRIEND_INVITE: 16,
			LEVEL_TO_SHOW_CHAT_ALL: 20,
			CLAN_CREATE_COST: 50,
			COLLECTION_EXCHANGE_COST: 100,
			SHAMAN_ACORNS_COST: 300,
			SHAMAN_COINS_COST: 1,
			HARE_ACORNS_COST: 500,
			HARE_COINS_COST: 1,
			DRAGON_ACORNS_COST: 100,
			DRAGON_COINS_COST: 1,
			COINS_FOR_INVITE: 15,
			NICKNAME_CHANGE_COST: 50
		},
		AwardManager: {
			GENERAL: 0,
			GAME: 1,
			SHAMAN: 2,
			EPIC: 3,
			MAX_TYPE: 4
		},
		BundleManager: {
			HOLIDAY_BOOSTER_TIME: 1462147200,
			WOODEN: 16,
			SILVER: 17,
			GOLDEN: 18,
			NEWBIE_RICH: 23,
			NEWBIE_POOR: 24,
			LEGENDARY: 5,
			WIZARD: 6,
			COLLECTION: 7,
			VETERAN: 19,
			CARRIER: 9,
			HOLIDAY_100: 10,
			HOLIDAY_500: 11,
			HOLIDAY_1000: 12,
			HOLIDAY_1500: 13,
			HOLIDAY_2000: 14,
			CLOSEOUT: 15,
			AMUR: 20,
			AMUR_PACK: 21,
			HOLIDAY_BOOSTER: 22,
			GOLDEN_CUP: 2147483647,
			HOT_WEEKEND: 2147483645,
			WOODEN_OFFER: 119,
			SILVER_OFFER: 120,
			GOLDEN_OFFER: 121,
			NEWBIE_RICH_OFFER: 125,
			NEWBIE_POOR_OFFER: 126,
			LEGENDARY_OFFER: 105,
			WIZARD_OFFER: 106,
			COLLECTION_OFFER: 107,
			VETERAN_OFFER: 122,
			CARRIER_OFFER: 109,
			GOLDEN_CUP_OFFER: 4,
			HOT_WEEKEND_OFFER: 5,
			HOLIDAY_BOOSTER_OFFER: 113,
			HOLIDAY_100_OFFER: 114,
			HOLIDAY_500_OFFER: 115,
			HOLIDAY_1000_OFFER: 116,
			HOLIDAY_1500_OFFER: 117,
			HOLIDAY_2000_OFFER: 118,
			AMUR_OFFER: 123,
			AMUR_PACK_OFFER: 124
		},
		CloseoutManager: {
			DISCOUNT: 0.8
		},
		ClothesManager: {
			KIND_PACKAGES: 0,
			KIND_ACCESSORIES: 1
		},
		CollectionData: {
			TYPE_REGULAR: 0,
			TYPE_UNIQUE: 1,
			TYPE_TROPHY: 2,
			COLLECTION_BUTTERFLY: 3,
			COLLECTION_FEATHER: 4,
			COLLECTION_MARK: 5,
			COLLECTION_BONE: 6,
			COLLECTION_BEETLE: 7,
			COLLECTION_FUNGUS: 8,
			COLLECTION_SHELL: 9,
			COLLECTION_FISH: 10,
			COLLECTION_CRYSTAL: 11,
			COLLECTION_BACTERIUM: 12,
			REMOVED_1: 13,
			COLLECTION_AIRCRAFT: 14,
			COLLECTION_ANCHOR: 15,
			REMOVED_2: 16,
			REMOVED_3: 17,
			REMOVED_4: 18,
			REMOVED_5: 19,
			REMOVED_6: 20,
			COLLECTION_EGYPTIAN: 21,
			COLLECTION_ARABIC: 22,
			COLLECTION_COLD_WEAPON: 23,
			COLLECTION_FIREARM: 24,
			COLLECTION_ROBOTS: 25,
			COLLECTION_AFV: 26,
			COLLECTION_BERRIES: 27,
			COLLECTION_HIKE: 28,
			COLLECTION_EXTREME: 29,
			COLLECTION_LAKE: 30,
			COLLECTION_DESERT_ANIMAL: 31,
			COLLECTION_DESERT_PLANT: 32,
			COLLECTION_SPACESHIP: 33,
			COLLECTION_ALIEN: 34,
			COLLECTION_SEA: 35,
			COLLECTION_ICE_ANIMAL: 36,
			COLLECTION_ITEM_END: 150
		},
		ConfigData: {
			payments: {
				GOLDENCUP_DURATION: 2592000,
				GOLDENCUP_COINS_AWARD: 12,
				CHEETOS_NUTS: 100,
				CHEETOS_COINS: 5,
				CHEETOS_COINS_DURATION: 604800
			},
			player: {
				MAX_LEVEL: 200,
				MAX_FREE_GAMES_LEVEL: 3,
				levels: [{
					experience: 0,
					title: "Новичок"
				}, {
					experience: 10,
					title: "Новичок"
				}, {
					experience: 50,
					title: "Новичок"
				}, {
					experience: 110,
					title: "Новичок"
				}, {
					experience: 200,
					title: "Обаяшка"
				}, {
					experience: 300,
					title: "Обаяшка"
				}, {
					experience: 425,
					title: "Обаяшка"
				}, {
					experience: 590,
					title: "Надежда племени"
				}, {
					experience: 1090,
					title: "Надежда племени"
				}, {
					experience: 2565,
					title: "Надежда племени"
				}, {
					experience: 5015,
					title: "Любитель орехов"
				}, {
					experience: 8640,
					title: "Любитель орехов"
				}, {
					experience: 13340,
					title: "Любитель орехов"
				}, {
					experience: 19115,
					title: "Упрямец"
				}, {
					experience: 25965,
					title: "Упрямец"
				}, {
					experience: 33890,
					title: "Упрямец"
				}, {
					experience: 42890,
					title: "Исследователь"
				}, {
					experience: 50640,
					title: "Исследователь"
				}, {
					experience: 57230,
					title: "Исследователь"
				}, {
					experience: 62840,
					title: "Орехбургер"
				}, {
					experience: 67610,
					title: "Орехбургер"
				}, {
					experience: 71670,
					title: "Орехбургер"
				}, {
					experience: 75125,
					title: "Виртуоз"
				}, {
					experience: 78065,
					title: "Виртуоз"
				}, {
					experience: 80565,
					title: "Виртуоз"
				}, {
					experience: 83065,
					title: "Гордость семьи"
				}, {
					experience: 86055,
					title: "Гордость семьи"
				}, {
					experience: 89635,
					title: "Гордость семьи"
				}, {
					experience: 93915,
					title: "Любимец племени"
				}, {
					experience: 99035,
					title: "Любимец племени"
				}, {
					experience: 105165,
					title: "Любимец племени"
				}, {
					experience: 112500,
					title: "Герой"
				}, {
					experience: 121275,
					title: "Герой"
				}, {
					experience: 131775,
					title: "Герой"
				}, {
					experience: 139515,
					title: "Ураган"
				}, {
					experience: 147580,
					title: "Ураган"
				}, {
					experience: 155985,
					title: "Ураган"
				}, {
					experience: 164740,
					title: "Старожил"
				}, {
					experience: 173860,
					title: "Старожил"
				}, {
					experience: 183360,
					title: "Старожил"
				}, {
					experience: 193260,
					title: "Чемпион"
				}, {
					experience: 203575,
					title: "Чемпион"
				}, {
					experience: 214325,
					title: "Чемпион"
				}, {
					experience: 225525,
					title: "Славный воин"
				}, {
					experience: 237195,
					title: "Славный воин"
				}, {
					experience: 249350,
					title: "Славный воин"
				}, {
					experience: 262015,
					title: "Матерая белка"
				}, {
					experience: 275210,
					title: "Матерая белка"
				}, {
					experience: 288955,
					title: "Матерая белка"
				}, {
					experience: 303275,
					title: "Рыжий зверь"
				}, {
					experience: 318195,
					title: "Рыжий зверь"
				}, {
					experience: 333740,
					title: "Рыжий зверь"
				}, {
					experience: 349935,
					title: "Избранный"
				}, {
					experience: 366805,
					title: "Избранный"
				}, {
					experience: 384385,
					title: "Избранный"
				}, {
					experience: 402700,
					title: "Красная масть"
				}, {
					experience: 421780,
					title: "Красная масть"
				}, {
					experience: 441660,
					title: "Красная масть"
				}, {
					experience: 462370,
					title: "Звезда"
				}, {
					experience: 483950,
					title: "Звезда"
				}, {
					experience: 506430,
					title: "Звезда"
				}, {
					experience: 529850,
					title: "Огненный смерч"
				}, {
					experience: 554250,
					title: "Огненный смерч"
				}, {
					experience: 579670,
					title: "Огненный смерч"
				}, {
					experience: 606160,
					title: "Комета"
				}, {
					experience: 633755,
					title: "Комета"
				}, {
					experience: 662505,
					title: "Комета"
				}, {
					experience: 691255,
					title: "Игроман"
				}, {
					experience: 719795,
					title: "Игроман"
				}, {
					experience: 748130,
					title: "Игроман"
				}, {
					experience: 776260,
					title: "Неуловимый"
				}, {
					experience: 804185,
					title: "Неуловимый"
				}, {
					experience: 831905,
					title: "Неуловимый"
				}, {
					experience: 859425,
					title: "Молниеносный"
				}, {
					experience: 886745,
					title: "Молниеносный"
				}, {
					experience: 913865,
					title: "Молниеносный"
				}, {
					experience: 940790,
					title: "Властитель"
				}, {
					experience: 967520,
					title: "Властитель"
				}, {
					experience: 994055,
					title: "Властитель"
				}, {
					experience: 1020395,
					title: "Космобелка"
				}, {
					experience: 1046545,
					title: "Космобелка"
				}, {
					experience: 1072745,
					title: "Космобелка"
				}, {
					experience: 1099120,
					title: "Орехоман"
				}, {
					experience: 1125670,
					title: "Орехоман"
				}, {
					experience: 1152400,
					title: "Орехоман"
				}, {
					experience: 1179310,
					title: "Смельчак"
				}, {
					experience: 1206400,
					title: "Смельчак"
				}, {
					experience: 1233670,
					title: "Смельчак"
				}, {
					experience: 1261125,
					title: "Бывалый"
				}, {
					experience: 1288765,
					title: "Бывалый"
				}, {
					experience: 1316590,
					title: "Бывалый"
				}, {
					experience: 1344600,
					title: "Весельчак"
				}, {
					experience: 1372800,
					title: "Весельчак"
				}, {
					experience: 1401190,
					title: "Весельчак"
				}, {
					experience: 1429770,
					title: "Гончий"
				}, {
					experience: 1458540,
					title: "Гончий"
				}, {
					experience: 1487500,
					title: "Гончий"
				}, {
					experience: 1516660,
					title: "Неистовый"
				}, {
					experience: 1546010,
					title: "Неистовый"
				}, {
					experience: 1575560,
					title: "Неистовый"
				}, {
					experience: 1605310,
					title: "Шумахер"
				}, {
					experience: 1635260,
					title: "Шумахер"
				}, {
					experience: 1665410,
					title: "Шумахер"
				}, {
					experience: 1695760,
					title: "Стремительный"
				}, {
					experience: 1726310,
					title: "Стремительный"
				}, {
					experience: 1757070,
					title: "Стремительный"
				}, {
					experience: 1788035,
					title: "Просветленный"
				}, {
					experience: 1819205,
					title: "Просветленный"
				}, {
					experience: 1850585,
					title: "Просветленный"
				}, {
					experience: 1882175,
					title: "Долгожитель"
				}, {
					experience: 1913975,
					title: "Долгожитель"
				}, {
					experience: 1945990,
					title: "Долгожитель"
				}, {
					experience: 1978220,
					title: "Знаток"
				}, {
					experience: 2010665,
					title: "Знаток"
				}, {
					experience: 2043330,
					title: "Знаток"
				}, {
					experience: 2076215,
					title: "Ветеран"
				}, {
					experience: 2109320,
					title: "Ветеран"
				}, {
					experience: 2142645,
					title: "Ветеран"
				}, {
					experience: 2176195,
					title: "Непоседа"
				}, {
					experience: 2209970,
					title: "Непоседа"
				}, {
					experience: 2243970,
					title: "Непоседа"
				}, {
					experience: 2278370,
					title: "Профессионал"
				}, {
					experience: 2314270,
					title: "Профессионал"
				}, {
					experience: 2351735,
					title: "Профессионал"
				}, {
					experience: 2390830,
					title: "Следопыт"
				}, {
					experience: 2431630,
					title: "Следопыт"
				}, {
					experience: 2474210,
					title: "Следопыт"
				}, {
					experience: 2518645,
					title: "Хвастунишка"
				}, {
					experience: 2565015,
					title: "Хвастунишка"
				}, {
					experience: 2613405,
					title: "Хвастунишка"
				}, {
					experience: 2663905,
					title: "Экстремал"
				}, {
					experience: 2716605,
					title: "Экстремал"
				}, {
					experience: 2771605,
					title: "Экстремал"
				}, {
					experience: 2828995,
					title: "МегаБелка"
				}, {
					experience: 2888890,
					title: "МегаБелка"
				}, {
					experience: 2951395,
					title: "МегаБелка"
				}, {
					experience: 3016625,
					title: "Вождь"
				}, {
					experience: 3084695,
					title: "Вождь"
				}, {
					experience: 3155735,
					title: "Вождь"
				}, {
					experience: 3229865,
					title: "Просвещенный"
				}, {
					experience: 3307225,
					title: "Просвещенный"
				}, {
					experience: 3387960,
					title: "Просвещенный"
				}, {
					experience: 3472210,
					title: "Царь-Белка"
				}, {
					experience: 3560130,
					title: "Царь-Белка"
				}, {
					experience: 3651885,
					title: "Царь-Белка"
				}, {
					experience: 3747635,
					title: "Самая лучшая белка"
				}, {
					experience: 3847560,
					title: "Самая лучшая белка"
				}, {
					experience: 3951840,
					title: "Самая лучшая белка"
				}, {
					experience: 4060665,
					title: "Чак Норрис"
				}, {
					experience: 4174230,
					title: "Чак Норрис"
				}, {
					experience: 4292745,
					title: "Чак Норрис"
				}, {
					experience: 4416425,
					title: "Чудесный"
				}, {
					experience: 4545495,
					title: "Чудесный"
				}, {
					experience: 4680190,
					title: "Чудесный"
				}, {
					experience: 4820755,
					title: "Неустрашимый"
				}, {
					experience: 4967445,
					title: "Неустрашимый"
				}, {
					experience: 5120525,
					title: "Неустрашимый"
				}, {
					experience: 5280275,
					title: "Терпеливый"
				}, {
					experience: 5446985,
					title: "Терпеливый"
				}, {
					experience: 5620960,
					title: "Терпеливый"
				}, {
					experience: 5799935,
					title: "Суровый"
				}, {
					experience: 5989405,
					title: "Суровый"
				}, {
					experience: 6187135,
					title: "Суровый"
				}, {
					experience: 6393480,
					title: "Созерцатель"
				}, {
					experience: 6608815,
					title: "Созерцатель"
				}, {
					experience: 6833535,
					title: "Созерцатель"
				}, {
					experience: 7068045,
					title: "Проницательный"
				}, {
					experience: 7312775,
					title: "Проницательный"
				}, {
					experience: 7568175,
					title: "Проницательный"
				}, {
					experience: 7834700,
					title: "Обожаемый"
				}, {
					experience: 8112840,
					title: "Обожаемый"
				}, {
					experience: 8403100,
					title: "Обожаемый"
				}, {
					experience: 8706010,
					title: "Неукротимый"
				}, {
					experience: 9022120,
					title: "Неукротимый"
				}, {
					experience: 9352005,
					title: "Неукротимый"
				}, {
					experience: 9696265,
					title: "Магистр"
				}, {
					experience: 10055525,
					title: "Магистр"
				}, {
					experience: 10430440,
					title: "Магистр"
				}, {
					experience: 10733350,
					title: "Необузданный"
				}, {
					experience: 11084726,
					title: "Необузданный"
				}, {
					experience: 11492322,
					title: "Необузданный"
				}, {
					experience: 11965133,
					title: "Магистр"
				}, {
					experience: 12513594,
					title: "Магистр"
				}, {
					experience: 13149808,
					title: "Магистр"
				}, {
					experience: 13887817,
					title: "Искатель"
				}, {
					experience: 14743907,
					title: "Искатель"
				}, {
					experience: 15736972,
					title: "Искатель"
				}, {
					experience: 16888927,
					title: "Бесстрашный"
				}, {
					experience: 18225195,
					title: "Бесстрашный"
				}, {
					experience: 19775266,
					title: "Бесстрашный"
				}, {
					experience: 21573348,
					title: "Неумолимый"
				}, {
					experience: 23659123,
					title: "Неумолимый"
				}, {
					experience: 26078622,
					title: "Неумолимый"
				}, {
					experience: 28885241,
					title: "Бессмертный"
				}, {
					experience: 32140919,
					title: "Бессмертный"
				}, {
					experience: 35917505,
					title: "Бессмертный"
				}, {
					experience: 40298345,
					title: "Испытанный"
				}, {
					experience: 45380120,
					title: "Испытанный"
				}, {
					experience: 51274979,
					title: "Испытанный"
				}, {
					experience: 58113015,
					title: "Божественный"
				}, {
					experience: 66045137,
					title: "Чокнутый"
				}],
				vip: [{
					coins_price: 10,
					duration: 86400
				}, {
					coins_price: 56,
					duration: 604800
				}, {
					coins_price: 199,
					duration: 2592000
				}, {
					coins_price: 0,
					duration: 3600
				}, {
					coins_price: 0,
					duration: 86400
				}],
				skills: [0, 5, 10, 20, 30, 20, 10, 20, 50, 40, 15, 10, 5, 20, 15, 20, 15, 15, 20, 20, 5, 30, 20, 10, 20, 15, 10, 25, 20, 15, 20, 25, 25, 10, 20, 25, 5, 15, 5, 10, 20, 20, 25, 15, 15, 15, 20, 15, 15, 15, 15, 20, 5, 25, 20, 10, 0, 20, 10, 10, 5, 25, 10, 15, 15, 25, 10, 10, 20, 20, 15, 10, 25, 5, 15, 10, 25, 15, 20, 15, 10, 10, 5, 20, 20, 15, 10, 15, 15, 20, 15, 15, 5, 10, 5, 20, 20, 15, 15, 5, 10, 20, 20, 5, 20, 20, 5, 15, 5, 15, 10, 5, 5, 5, 5, 15, 10, 5]
			},
			virality: {
				quests: [5, 2, 3, 4, 0, 1],
				bonuses: [{
					energy: 4,
					mana: 5
				}, {
					energy: 6,
					mana: 5
				}, {
					energy: 5,
					mana: 5
				}, {
					energy: 5,
					mana: 5
				}, {
					energy: 10,
					mana: 10
				}]
			},
			items: {
				info: [{
					nuts_price: 300,
					coins_set_price: 5,
					fast_coins_price: 3,
					fast_count: 5
				}, {
					nuts_price: 0,
					coins_set_price: 0,
					fast_coins_price: 0,
					fast_count: 0
				}, {
					nuts_price: 300,
					coins_set_price: 5,
					fast_coins_price: 3,
					fast_count: 5
				}, {
					nuts_price: 0,
					coins_set_price: 0,
					fast_coins_price: 0,
					fast_count: 0
				}, {
					nuts_price: 0,
					coins_set_price: 0,
					fast_coins_price: 0,
					fast_count: 0
				}, {
					nuts_price: 0,
					coins_set_price: 0,
					fast_coins_price: 0,
					fast_count: 0
				}, {
					nuts_price: 0,
					coins_set_price: 0,
					fast_coins_price: 0,
					fast_count: 0
				}, {
					nuts_price: 0,
					coins_set_price: 0,
					fast_coins_price: 0,
					fast_count: 0
				}, {
					nuts_price: 300,
					coins_set_price: 5,
					fast_coins_price: 3,
					fast_count: 5
				}, {
					nuts_price: 600,
					coins_set_price: 10,
					fast_coins_price: 5,
					fast_count: 5
				}, {
					nuts_price: 0,
					coins_set_price: 0,
					fast_coins_price: 0,
					fast_count: 0
				}, {
					nuts_price: 600,
					coins_set_price: 10,
					fast_coins_price: 5,
					fast_count: 5
				}, {
					nuts_price: 600,
					coins_set_price: 10,
					fast_coins_price: 5,
					fast_count: 5
				}, {
					nuts_price: 600,
					coins_set_price: 10,
					fast_coins_price: 5,
					fast_count: 5
				}, {
					nuts_price: 0,
					coins_set_price: 0,
					fast_coins_price: 0,
					fast_count: 0
				}, {
					nuts_price: 0,
					coins_set_price: 0,
					fast_coins_price: 0,
					fast_count: 0
				}, {
					nuts_price: 150,
					coins_set_price: 5,
					fast_coins_price: 3,
					fast_count: 5
				}, {
					nuts_price: 0,
					coins_set_price: 0,
					fast_coins_price: 0,
					fast_count: 0
				}, {
					nuts_price: 600,
					coins_set_price: 10,
					fast_coins_price: 5,
					fast_count: 5
				}, {
					nuts_price: 0,
					coins_set_price: 0,
					fast_coins_price: 0,
					fast_count: 0
				}, {
					nuts_price: 0,
					coins_set_price: 0,
					fast_coins_price: 0,
					fast_count: 0
				}, {
					nuts_price: 0,
					coins_set_price: 0,
					fast_coins_price: 0,
					fast_count: 0
				}, {
					nuts_price: 0,
					coins_set_price: 0,
					fast_coins_price: 0,
					fast_count: 0
				}, {
					nuts_price: 0,
					coins_set_price: 0,
					fast_coins_price: 0,
					fast_count: 0
				}, {
					nuts_price: 0,
					coins_set_price: 0,
					fast_coins_price: 0,
					fast_count: 0
				}, {
					nuts_price: 0,
					coins_set_price: 0,
					fast_coins_price: 0,
					fast_count: 0
				}, {
					nuts_price: 0,
					coins_set_price: 0,
					fast_coins_price: 0,
					fast_count: 0
				}, {
					nuts_price: 150,
					coins_set_price: 5,
					fast_coins_price: 3,
					fast_count: 5
				}, {
					nuts_price: 0,
					coins_set_price: 0,
					fast_coins_price: 0,
					fast_count: 0
				}, {
					nuts_price: 0,
					coins_set_price: 0,
					fast_coins_price: 0,
					fast_count: 0
				}, {
					nuts_price: 0,
					coins_set_price: 0,
					fast_coins_price: 0,
					fast_count: 0
				}, {
					nuts_price: 0,
					coins_set_price: 0,
					fast_coins_price: 0,
					fast_count: 0
				}]
			},
			clothes: {
				accessories: [{
					coins_price: 49,
					place: 1,
					character: 0
				}, {
					coins_price: 49,
					place: 1
				}, {
					coins_price: 49,
					place: 1,
					character: 0
				}, {
					coins_price: 0,
					place: 1
				}, {
					coins_price: 49,
					place: 1
				}, {
					coins_price: 49,
					place: 1,
					character: 0
				}, {
					coins_price: 49,
					place: 0
				}, {
					coins_price: 49,
					place: 0
				}, {
					coins_price: 49,
					place: 0
				}, {
					coins_price: 49,
					place: 0,
					character: 0
				}, {
					coins_price: 49,
					place: 0
				}, {
					coins_price: 49,
					place: 2
				}, {
					coins_price: 49,
					place: 2
				}, {
					coins_price: 49,
					place: 2
				}, {
					coins_price: 49,
					place: 2
				}, {
					coins_price: 49,
					place: 2
				}, {
					coins_price: 49,
					place: 2
				}, {
					coins_price: 0,
					place: 2,
					character: 0
				}, {
					coins_price: 49,
					place: 2
				}, {
					coins_price: 49,
					place: 2
				}, {
					coins_price: 49,
					place: 2
				}, {
					coins_price: 49,
					place: 2
				}, {
					coins_price: 49,
					place: 2
				}, {
					coins_price: 49,
					place: 2
				}, {
					coins_price: 49,
					place: 2,
					character: 0
				}, {
					coins_price: 49,
					place: 2
				}, {
					coins_price: 49,
					place: 2
				}, {
					coins_price: 49,
					place: 2
				}, {
					coins_price: 49,
					place: 2,
					character: 0
				}, {
					coins_price: 49,
					place: 2
				}, {
					coins_price: 49,
					place: 2
				}, {
					coins_price: 49,
					place: 2
				}, {
					coins_price: 49,
					place: 2
				}, {
					coins_price: 49,
					place: 2
				}, {
					coins_price: 49,
					place: 2
				}, {
					coins_price: 49,
					place: 2
				}, {
					coins_price: 49,
					place: 2
				}, {
					coins_price: 49,
					place: 2
				}, {
					coins_price: 49,
					place: 2
				}, {
					coins_price: 49,
					place: 2,
					character: 0
				}, {
					coins_price: 49,
					place: 4
				}, {
					coins_price: 49,
					place: 4
				}, {
					coins_price: 0,
					place: 4,
					character: 0
				}, {
					coins_price: 49,
					place: 4
				}, {
					coins_price: 0,
					place: 4
				}, {
					coins_price: 49,
					place: 4
				}, {
					coins_price: 49,
					place: 4
				}, {
					coins_price: 49,
					place: 4
				}, {
					coins_price: 49,
					place: 4
				}, {
					coins_price: 49,
					place: 4,
					character: 0
				}, {
					coins_price: 49,
					place: 4
				}, {
					coins_price: 49,
					place: 4
				}, {
					coins_price: 49,
					place: 4
				}, {
					coins_price: 49,
					place: 4,
					character: 0
				}, {
					coins_price: 49,
					place: 4
				}, {
					coins_price: 0,
					place: 4,
					character: 0
				}, {
					coins_price: 49,
					place: 4
				}, {
					coins_price: 0,
					place: 4,
					character: 0
				}, {
					coins_price: 49,
					place: 4
				}, {
					coins_price: 49,
					place: 4
				}, {
					coins_price: 49,
					place: 4
				}, {
					coins_price: 49,
					place: 4,
					character: 0
				}, {
					coins_price: 49,
					place: 4
				}, {
					coins_price: 49,
					place: 4
				}, {
					coins_price: 49,
					place: 4
				}, {
					coins_price: 49,
					place: 4
				}, {
					coins_price: 49,
					place: 4
				}, {
					coins_price: 49,
					place: 4
				}, {
					coins_price: 0,
					place: 4
				}, {
					coins_price: 49,
					place: 4
				}, {
					coins_price: 49,
					place: 4
				}, {
					coins_price: 49,
					place: 4
				}, {
					coins_price: 49,
					place: 4
				}, {
					coins_price: 49,
					place: 4
				}, {
					coins_price: 49,
					place: 4,
					character: 0
				}, {
					coins_price: 49,
					place: 4
				}, {
					coins_price: 49,
					place: 4
				}, {
					coins_price: 49,
					place: 4
				}, {
					coins_price: 49,
					place: 4
				}, {
					coins_price: 49,
					place: 4
				}, {
					coins_price: 49,
					place: 4
				}, {
					coins_price: 49,
					place: 4
				}, {
					coins_price: 49,
					place: 4
				}, {
					coins_price: 49,
					place: 4
				}, {
					coins_price: 49,
					place: 4
				}, {
					coins_price: 0,
					place: 3
				}, {
					coins_price: 49,
					place: 3
				}, {
					coins_price: 0,
					place: 3,
					character: 0
				}, {
					coins_price: 49,
					place: 3,
					character: 0
				}, {
					coins_price: 49,
					place: 3,
					character: 0
				}, {
					coins_price: 49,
					place: 3,
					character: 0
				}, {
					coins_price: 0,
					place: 3
				}, {
					coins_price: 49,
					place: 5
				}, {
					coins_price: 49,
					place: 3
				}, {
					coins_price: 49,
					place: 3,
					character: 0
				}, {
					coins_price: 49,
					place: 4
				}, {
					coins_price: 49,
					place: 0
				}, {
					coins_price: 0,
					place: 2
				}, {
					coins_price: 0,
					place: 0
				}, {
					coins_price: 0,
					place: 4
				}, {
					coins_price: 0,
					place: 0
				}, {
					coins_price: 0,
					place: 3
				}, {
					coins_price: 0,
					place: 2
				}, {
					coins_price: 0,
					place: 2
				}, {
					coins_price: 0,
					place: 2,
					character: 0
				}, {
					coins_price: 0,
					place: 3,
					character: 0
				}, {
					coins_price: 49,
					place: 2,
					character: 0
				}, {
					coins_price: 49,
					place: 4,
					character: 0
				}, {
					coins_price: 0,
					place: 4,
					character: 0
				}, {
					coins_price: 0,
					place: 2,
					character: 0
				}, {
					coins_price: 0,
					place: 0
				}, {
					coins_price: 0,
					place: 0
				}, {
					coins_price: 0,
					place: 0,
					character: 0
				}, {
					coins_price: 0,
					place: 5,
					character: 0
				}, {
					coins_price: 49,
					place: 0
				}, {
					coins_price: 49,
					place: 2
				}, {
					coins_price: 0,
					place: 2
				}, {
					coins_price: 0,
					place: 5
				}, {
					coins_price: 0,
					place: 4
				}, {
					coins_price: 0,
					place: 2
				}, {
					coins_price: 0,
					place: 0
				}, {
					coins_price: 0,
					place: 4
				}, {
					coins_price: 0,
					place: 2
				}, {
					coins_price: 0,
					place: 3
				}, {
					coins_price: 0,
					place: 0
				}, {
					coins_price: 0,
					place: 5,
					character: 0
				}, {
					coins_price: 0,
					place: 1,
					character: 0
				}, {
					coins_price: 0,
					place: 1,
					character: 0
				}, {
					coins_price: 0,
					place: 0,
					character: 0
				}, {
					coins_price: 0,
					place: 1,
					character: 0
				}, {
					coins_price: 0,
					place: 2,
					character: 0
				}, {
					coins_price: 0,
					place: 4,
					character: 0
				}, {
					coins_price: 0,
					place: 5,
					character: 0
				}, {
					coins_price: 0,
					place: 2
				}, {
					coins_price: 0,
					place: 4
				}, {
					coins_price: 0,
					place: 5
				}, {
					coins_price: 0,
					place: 0
				}, {
					coins_price: 0,
					place: 2
				}, {
					coins_price: 0,
					place: 4
				}, {
					coins_price: 0,
					place: 1
				}, {
					coins_price: 0,
					place: 2
				}, {
					coins_price: 0,
					place: 4
				}, {
					coins_price: 0,
					place: 3
				}, {
					coins_price: 0,
					place: 4
				}, {
					coins_price: 0,
					place: 5
				}, {
					coins_price: 0,
					place: 0,
					character: 0
				}, {
					coins_price: 0,
					place: 1,
					character: 0
				}, {
					coins_price: 0,
					place: 4,
					character: 0
				}, {
					coins_price: 0,
					place: 5,
					character: 0
				}, {
					coins_price: 0,
					place: 5,
					character: 0
				}, {
					coins_price: 49,
					place: 3
				}, {
					coins_price: 49,
					place: 2
				}, {
					coins_price: 49,
					place: 4
				}, {
					coins_price: 49,
					place: 5
				}, {
					coins_price: 49,
					place: 2
				}, {
					coins_price: 0,
					place: 2,
					character: 0
				}, {
					coins_price: 0,
					place: 4,
					character: 0
				}, {
					coins_price: 0,
					place: 3,
					character: 0
				}, {
					coins_price: 0,
					place: 5,
					character: 0
				}, {
					coins_price: 0,
					place: 1,
					character: 0
				}, {
					coins_price: 0,
					place: 2,
					character: 0
				}, {
					coins_price: 0,
					place: 3,
					character: 0
				}, {
					coins_price: 0,
					place: 4,
					character: 0
				}, {
					coins_price: 0,
					place: 5,
					character: 0
				}, {
					coins_price: 0,
					place: 0,
					character: 0
				}, {
					coins_price: 0,
					place: 1,
					character: 0
				}, {
					coins_price: 0,
					place: 2,
					character: 0
				}, {
					coins_price: 0,
					place: 4,
					character: 0
				}, {
					coins_price: 0,
					place: 0,
					character: 0
				}, {
					coins_price: 0,
					place: 1,
					character: 0
				}, {
					coins_price: 0,
					place: 2,
					character: 0
				}, {
					coins_price: 0,
					place: 4,
					character: 0
				}],
				packages: [{
					coins_price: 149,
					max_level: 0,
					accessories: [54],
					skills: {
						"11": 0
					}
				}, {
					coins_price: 149,
					max_level: 0,
					accessories: [],
					skills: {
						"14": 0
					}
				}, {
					coins_price: 149,
					max_level: 0,
					accessories: [],
					skills: {
						"13": 0
					}
				}, {
					coins_price: 99,
					max_level: 0,
					accessories: [76],
					skills: {
						"12": 0
					}
				}, {
					coins_price: 349,
					max_level: 0,
					accessories: [66],
					skills: {
						"15": 0
					}
				}, {
					coins_price: 149,
					max_level: 0,
					accessories: [],
					skills: {
						"16": 0
					}
				}, {
					coins_price: 349,
					max_level: 0,
					accessories: [],
					skills: {
						"17": 0
					}
				}, {
					coins_price: 349,
					max_level: 0,
					accessories: [],
					skills: {
						"18": 0
					}
				}, {
					coins_price: 349,
					max_level: 0,
					accessories: [],
					skills: {
						"19": 0
					}
				}, {
					coins_price: 99,
					max_level: 0,
					accessories: [],
					skills: {
						"20": 0
					}
				}, {
					coins_price: 349,
					max_level: 0,
					accessories: [],
					skills: {
						"21": 0
					}
				}, {
					coins_price: 349,
					max_level: 0,
					accessories: [],
					skills: {
						"22": 0
					}
				}, {
					coins_price: 349,
					max_level: 0,
					accessories: [],
					skills: {
						"23": 0
					}
				}, {
					coins_price: 0,
					max_level: 0,
					accessories: [142, 143, 144],
					skills: {
						"24": 0
					}
				}, {
					coins_price: 0,
					max_level: 0,
					accessories: [],
					skills: {}
				}, {
					coins_price: 0,
					max_level: 0,
					accessories: [],
					skills: {}
				}, {
					coins_price: 999,
					max_level: 0,
					accessories: [26, 64],
					skills: {
						"27": 0
					}
				}, {
					coins_price: 999,
					max_level: 0,
					accessories: [27, 65],
					skills: {
						"28": 0
					}
				}, {
					coins_price: 999,
					max_level: 0,
					accessories: [],
					skills: {
						"29": 0
					}
				}, {
					coins_price: 0,
					max_level: 0,
					accessories: [],
					skills: {}
				}, {
					coins_price: 349,
					max_level: 0,
					accessories: [],
					skills: {
						"31": 0
					}
				}, {
					coins_price: 349,
					max_level: 0,
					accessories: [],
					skills: {
						"32": 0
					}
				}, {
					coins_price: 349,
					max_level: 0,
					accessories: [],
					skills: {
						"34": 0
					}
				}, {
					coins_price: 349,
					max_level: 0,
					accessories: [],
					skills: {
						"33": 0
					}
				}, {
					coins_price: 349,
					max_level: 0,
					accessories: [8, 30, 71],
					skills: {
						"35": 0
					}
				}, {
					coins_price: 99,
					max_level: 0,
					accessories: [7, 16, 51],
					skills: {
						"36": 0
					}
				}, {
					coins_price: 349,
					max_level: 0,
					accessories: [12, 40],
					skills: {
						"37": 0
					}
				}, {
					coins_price: 149,
					max_level: 0,
					accessories: [34],
					skills: {
						"38": 0
					}
				}, {
					coins_price: 349,
					max_level: 0,
					accessories: [],
					skills: {
						"40": 0
					}
				}, {
					coins_price: 149,
					max_level: 0,
					accessories: [77],
					skills: {
						"39": 0
					}
				}, {
					coins_price: 349,
					max_level: 0,
					accessories: [45],
					skills: {
						"41": 0
					}
				}, {
					coins_price: 349,
					max_level: 0,
					accessories: [25, 63],
					skills: {
						"42": 0
					}
				}, {
					coins_price: 349,
					max_level: 0,
					accessories: [19, 56],
					skills: {
						"43": 0
					}
				}, {
					coins_price: 349,
					max_level: 0,
					accessories: [],
					skills: {
						"44": 0
					}
				}, {
					coins_price: 149,
					max_level: 0,
					accessories: [50],
					skills: {
						"45": 0
					}
				}, {
					coins_price: 149,
					max_level: 0,
					accessories: [37, 82],
					skills: {
						"46": 0
					}
				}, {
					coins_price: 149,
					max_level: 0,
					accessories: [52],
					skills: {
						"47": 0
					}
				}, {
					coins_price: 349,
					max_level: 0,
					accessories: [],
					skills: {
						"50": 0
					}
				}, {
					coins_price: 349,
					max_level: 0,
					accessories: [],
					skills: {
						"51": 0
					}
				}, {
					coins_price: 99,
					max_level: 0,
					accessories: [],
					skills: {
						"52": 0
					}
				}, {
					coins_price: 349,
					max_level: 0,
					accessories: [10, 79],
					skills: {
						"53": 0
					}
				}, {
					coins_price: 349,
					max_level: 0,
					accessories: [],
					skills: {
						"54": 0
					}
				}, {
					coins_price: 149,
					max_level: 0,
					accessories: [],
					skills: {
						"55": 0
					}
				}, {
					coins_price: 99,
					max_level: 0,
					accessories: [],
					skills: {
						"56": 0
					}
				}, {
					coins_price: 99,
					max_level: 0,
					accessories: [],
					skills: {
						"57": 0
					}
				}, {
					coins_price: 149,
					max_level: 0,
					accessories: [4],
					skills: {
						"58": 0
					}
				}, {
					coins_price: 99,
					max_level: 0,
					accessories: [],
					skills: {
						"59": 0
					}
				}, {
					coins_price: 99,
					max_level: 0,
					accessories: [],
					skills: {
						"60": 0
					}
				}, {
					coins_price: 149,
					max_level: 0,
					accessories: [46],
					skills: {
						"61": 0
					}
				}, {
					coins_price: 149,
					max_level: 0,
					accessories: [],
					skills: {
						"62": 0
					}
				}, {
					coins_price: 149,
					max_level: 0,
					accessories: [1],
					skills: {
						"63": 0
					}
				}, {
					coins_price: 49,
					max_level: 0,
					accessories: [62],
					skills: {}
				}, {
					coins_price: 49,
					max_level: 0,
					accessories: [],
					skills: {}
				}, {
					coins_price: 49,
					max_level: 0,
					accessories: [32, 48],
					skills: {}
				}, {
					coins_price: 99,
					max_level: 0,
					accessories: [44, 85],
					skills: {
						"67": 0
					}
				}, {
					coins_price: 0,
					max_level: 0,
					accessories: [38, 83],
					skills: {
						"68": 0,
						"69": 0
					}
				}, {
					coins_price: 349,
					max_level: 0,
					accessories: [36, 81],
					skills: {
						"70": 0
					}
				}, {
					coins_price: 149,
					max_level: 0,
					accessories: [23, 60],
					skills: {
						"71": 0
					}
				}, {
					coins_price: 149,
					max_level: 0,
					accessories: [78],
					skills: {
						"72": 0
					}
				}, {
					coins_price: 99,
					max_level: 0,
					accessories: [72],
					skills: {
						"73": 0
					}
				}, {
					coins_price: 349,
					max_level: 0,
					accessories: [29, 69],
					skills: {
						"74": 0
					}
				}, {
					coins_price: 0,
					max_level: 0,
					accessories: [80],
					skills: {
						"76": 0
					}
				}, {
					coins_price: 349,
					max_level: 0,
					accessories: [47],
					skills: {
						"75": 0
					}
				}, {
					coins_price: 149,
					max_level: 0,
					accessories: [35, 96],
					skills: {
						"77": 0
					}
				}, {
					coins_price: 349,
					max_level: 0,
					accessories: [13],
					skills: {
						"78": 0
					}
				}, {
					coins_price: 349,
					max_level: 0,
					accessories: [75],
					skills: {
						"79": 0
					}
				}, {
					coins_price: 149,
					max_level: 0,
					accessories: [],
					skills: {
						"80": 0
					}
				}, {
					coins_price: 149,
					max_level: 0,
					accessories: [22, 59],
					skills: {
						"81": 0
					}
				}, {
					coins_price: 99,
					max_level: 0,
					accessories: [73, 84],
					skills: {
						"82": 0
					}
				}, {
					coins_price: 149,
					max_level: 0,
					accessories: [86],
					skills: {
						"83": 0
					}
				}, {
					coins_price: 349,
					max_level: 0,
					accessories: [70, 92, 93],
					skills: {
						"84": 0
					}
				}, {
					coins_price: 349,
					max_level: 0,
					accessories: [],
					skills: {
						"85": 0
					}
				}, {
					coins_price: 349,
					max_level: 0,
					accessories: [6, 41],
					skills: {
						"86": 0
					}
				}, {
					coins_price: 349,
					max_level: 0,
					accessories: [14],
					skills: {}
				}, {
					coins_price: 149,
					max_level: 0,
					accessories: [15, 43],
					skills: {
						"88": 0
					}
				}, {
					coins_price: 349,
					max_level: 0,
					accessories: [],
					skills: {
						"89": 0
					}
				}, {
					coins_price: 349,
					max_level: 0,
					accessories: [],
					skills: {
						"90": 0
					}
				}, {
					coins_price: 149,
					max_level: 0,
					accessories: [31],
					skills: {
						"91": 0
					}
				}, {
					coins_price: 49,
					max_level: 0,
					accessories: [18],
					skills: {
						"92": 0
					}
				}, {
					coins_price: 149,
					max_level: 0,
					accessories: [21, 58],
					skills: {
						"93": 0
					}
				}, {
					coins_price: 99,
					max_level: 0,
					accessories: [67],
					skills: {
						"94": 0
					}
				}, {
					coins_price: 0,
					max_level: 10,
					accessories: [11, 95],
					skills: {
						"95": 0,
						"96": 5
					}
				}, {
					coins_price: 349,
					max_level: 0,
					accessories: [33],
					skills: {
						"97": 0
					}
				}, {
					coins_price: 149,
					max_level: 0,
					accessories: [20],
					skills: {
						"98": 0
					}
				}, {
					coins_price: 0,
					max_level: 0,
					accessories: [],
					skills: {}
				}, {
					coins_price: 0,
					max_level: 0,
					accessories: [],
					skills: {}
				}, {
					coins_price: 0,
					max_level: 0,
					accessories: [],
					skills: {}
				}, {
					coins_price: 0,
					max_level: 0,
					accessories: [],
					skills: {}
				}, {
					coins_price: 0,
					max_level: 0,
					accessories: [],
					skills: {}
				}, {
					coins_price: 0,
					max_level: 0,
					accessories: [],
					skills: {}
				}, {
					coins_price: 0,
					max_level: 0,
					accessories: [],
					skills: {}
				}, {
					coins_price: 0,
					max_level: 0,
					accessories: [],
					skills: {}
				}, {
					coins_price: 0,
					max_level: 0,
					accessories: [],
					skills: {}
				}, {
					coins_price: 0,
					max_level: 0,
					accessories: [],
					skills: {}
				}, {
					coins_price: 0,
					max_level: 0,
					accessories: [],
					skills: {}
				}, {
					coins_price: 0,
					max_level: 0,
					accessories: [],
					skills: {}
				}, {
					coins_price: 0,
					max_level: 0,
					accessories: [],
					skills: {}
				}, {
					coins_price: 0,
					max_level: 0,
					accessories: [],
					skills: {}
				}, {
					coins_price: 0,
					max_level: 0,
					accessories: [],
					skills: {}
				}, {
					coins_price: 0,
					max_level: 0,
					accessories: [],
					skills: {}
				}, {
					coins_price: 99,
					max_level: 0,
					accessories: [],
					skills: {}
				}, {
					coins_price: 49,
					max_level: 0,
					accessories: [],
					skills: {}
				}, {
					coins_price: 49,
					max_level: 0,
					accessories: [],
					skills: {}
				}, {
					coins_price: 349,
					max_level: 0,
					accessories: [],
					skills: {}
				}, {
					coins_price: 149,
					max_level: 0,
					accessories: [],
					skills: {}
				}, {
					coins_price: 349,
					max_level: 0,
					accessories: [],
					skills: {}
				}, {
					coins_price: 349,
					max_level: 0,
					accessories: [],
					skills: {}
				}, {
					coins_price: 149,
					max_level: 0,
					accessories: [],
					skills: {}
				}, {
					coins_price: 149,
					max_level: 0,
					accessories: [],
					skills: {}
				}, {
					coins_price: 149,
					max_level: 0,
					accessories: [],
					skills: {}
				}, {
					coins_price: 0,
					max_level: 0,
					accessories: [3, 68, 91],
					skills: {}
				}, {
					coins_price: 0,
					max_level: 0,
					accessories: [],
					skills: {}
				}, {
					coins_price: 0,
					max_level: 0,
					accessories: [],
					skills: {}
				}, {
					coins_price: 0,
					max_level: 0,
					accessories: [],
					skills: {}
				}, {
					coins_price: 0,
					max_level: 0,
					accessories: [97, 98],
					skills: {
						"0": 0,
						"99": 1,
						"100": 5,
						"101": 10,
						"102": 13
					}
				}, {
					coins_price: 0,
					max_level: 0,
					accessories: [99],
					skills: {
						"0": 0
					}
				}, {
					coins_price: 0,
					max_level: 0,
					accessories: [103],
					skills: {
						"0": 0
					}
				}, {
					coins_price: 0,
					max_level: 0,
					accessories: [],
					skills: {
						"0": 0
					}
				}, {
					coins_price: 0,
					max_level: 0,
					accessories: [100, 101, 102],
					skills: {
						"0": 0
					}
				}, {
					coins_price: 99,
					max_level: 0,
					accessories: [106],
					skills: {
						"103": 0
					}
				}, {
					coins_price: 349,
					max_level: 0,
					accessories: [107],
					skills: {
						"104": 0
					}
				}, {
					coins_price: 0,
					max_level: 0,
					accessories: [110, 108, 109, 113],
					skills: {
						"105": 0
					}
				}, {
					coins_price: 0,
					max_level: 0,
					accessories: [111, 108, 109, 113],
					skills: {}
				}, {
					coins_price: 0,
					max_level: 0,
					accessories: [112, 108, 109, 113],
					skills: {}
				}, {
					coins_price: 0,
					max_level: 0,
					accessories: [112, 108, 109, 113],
					skills: {}
				}, {
					coins_price: 149,
					max_level: 0,
					accessories: [114, 115],
					skills: {
						"106": 0
					}
				}, {
					coins_price: 349,
					max_level: 0,
					accessories: [],
					skills: {
						"107": 0
					}
				}, {
					coins_price: 0,
					max_level: 0,
					accessories: [],
					skills: {}
				}, {
					coins_price: 0,
					max_level: 0,
					accessories: [116, 117, 118],
					skills: {
						"108": 0
					}
				}, {
					coins_price: 0,
					max_level: 0,
					accessories: [119, 120, 121],
					skills: {
						"109": 0
					}
				}, {
					coins_price: 0,
					max_level: 0,
					accessories: [122, 123, 124],
					skills: {
						"110": 0
					}
				}, {
					coins_price: 0,
					max_level: 0,
					accessories: [],
					skills: {
						"111": 0
					}
				}, {
					coins_price: 349,
					max_level: 0,
					accessories: [],
					skills: {
						"112": 0
					}
				}, {
					coins_price: 0,
					max_level: 0,
					accessories: [133, 134, 135],
					skills: {
						"113": 0
					}
				}, {
					coins_price: 0,
					max_level: 0,
					accessories: [136, 137, 138],
					skills: {
						"114": 0
					}
				}, {
					coins_price: 0,
					max_level: 0,
					accessories: [139, 140, 141],
					skills: {
						"115": 0
					}
				}, {
					coins_price: 349,
					max_level: 0,
					accessories: [150, 151, 152],
					skills: {
						"116": 0
					}
				}, {
					coins_price: 149,
					max_level: 0,
					accessories: [153, 154],
					skills: {
						"117": 0
					}
				}],
				outfits: [{
					rent_coins_price: 0,
					character: 0,
					packages: [110, 115, 133]
				}, {
					rent_coins_price: 14,
					character: 0,
					packages: [0, 1, 2, 3]
				}, {
					rent_coins_price: 34,
					character: 0,
					packages: [4, 5, 6, 134]
				}, {
					rent_coins_price: 34,
					character: 0,
					packages: [7, 8, 9, 10]
				}, {
					rent_coins_price: 34,
					character: 0,
					packages: [11, 12, 13, 14, 15]
				}, {
					rent_coins_price: 99,
					character: 0,
					packages: [16, 17, 18, 19, 118]
				}, {
					rent_coins_price: 99,
					character: 0,
					packages: [20, 21, 22, 23]
				}, {
					rent_coins_price: 34,
					character: 0,
					packages: [24, 25]
				}, {
					rent_coins_price: 34,
					character: 0,
					packages: [26, 27, 119]
				}, {
					rent_coins_price: 34,
					character: 0,
					packages: [28, 29, 126, 128]
				}, {
					rent_coins_price: 34,
					character: 0,
					packages: [30, 31, 120]
				}, {
					rent_coins_price: 34,
					character: 0,
					packages: [32, 33, 137]
				}, {
					rent_coins_price: 14,
					character: 0,
					packages: [34, 129, 136]
				}, {
					rent_coins_price: 14,
					character: 0,
					packages: [35, 36]
				}, {
					rent_coins_price: 34,
					character: 0,
					packages: [37, 117, 132]
				}, {
					rent_coins_price: 34,
					character: 0,
					packages: [38, 39, 40, 41]
				}, {
					rent_coins_price: 14,
					character: 0,
					packages: [42, 43, 44]
				}, {
					rent_coins_price: 14,
					character: 0,
					packages: [45, 46, 47]
				}, {
					rent_coins_price: 14,
					character: 0,
					packages: [48, 49, 131]
				}, {
					rent_coins_price: 14,
					character: 0,
					packages: [50, 51, 52, 53, 54]
				}, {
					rent_coins_price: 0,
					character: 0,
					packages: [55]
				}, {
					rent_coins_price: 34,
					character: 0,
					packages: [56, 57, 58, 59, 60, 116]
				}, {
					rent_coins_price: 99,
					character: 0,
					packages: [62, 135]
				}, {
					rent_coins_price: 14,
					character: 0,
					packages: [63]
				}, {
					rent_coins_price: 34,
					character: 0,
					packages: [64, 65, 66, 125]
				}, {
					rent_coins_price: 14,
					character: 0,
					packages: [67, 68, 69]
				}, {
					rent_coins_price: 34,
					character: 0,
					packages: [70, 71, 130]
				}, {
					rent_coins_price: 34,
					character: 0,
					packages: [72, 73, 74, 75, 76]
				}, {
					rent_coins_price: 14,
					character: 0,
					packages: [77, 78, 79, 80]
				}, {
					rent_coins_price: 0,
					character: 0,
					packages: [81]
				}, {
					rent_coins_price: 34,
					character: 0,
					packages: [82, 83]
				}, {
					rent_coins_price: 0,
					character: 0,
					packages: [111, 84, 85, 86, 87, 88, 89, 90, 91]
				}, {
					rent_coins_price: 0,
					character: 0,
					packages: [112, 92, 93, 94, 95, 96, 97, 98, 99]
				}, {
					rent_coins_price: 9,
					character: 1,
					packages: [100, 101, 102]
				}, {
					rent_coins_price: 34,
					character: 1,
					packages: [103, 104]
				}, {
					rent_coins_price: 34,
					character: 1,
					packages: [106, 107, 108, 109]
				}, {
					rent_coins_price: 34,
					character: 1,
					packages: [105]
				}, {
					rent_coins_price: 0,
					character: 0,
					packages: [113]
				}, {
					rent_coins_price: 0,
					character: 0,
					packages: [114]
				}, {
					rent_coins_price: 0,
					character: 0,
					packages: [121, 122, 123, 124]
				}, {
					rent_coins_price: 0,
					character: 1,
					packages: [127]
				}, {
					rent_coins_price: 0,
					character: 0,
					packages: [61]
				}]
			},
			smiles: {
				packages: [{
					coins_price: 49,
					nuts_price: 0,
					elements: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 25, 26, 27, 28]
				}, {
					coins_price: 0,
					nuts_price: 0,
					elements: [10, 11, 12, 13, 14]
				}, {
					coins_price: 50,
					nuts_price: 0,
					elements: [15, 16, 17, 18, 19, 20, 21, 22, 23, 24]
				}]
			},
			bans: {
				bans: [{
					title: "Нет бана",
					hide: true
				}, {
					title: "Флуд",
					hide: false
				}, {
					title: "Нарушение в чате",
					hide: false
				}, {
					title: "Ненорматив в имени",
					hide: false
				}, {
					title: "Грубое нарушение на карте",
					hide: false
				}, {
					title: "Использование стороннего ПО",
					hide: false
				}, {
					title: "Использование стороннего ПО",
					hide: true
				}, {
					title: "Использование стороннего ПО",
					hide: true
				}, {
					title: "Использование стороннего ПО",
					hide: true
				}, {
					title: "Грубое нарушение в чате",
					hide: true
				}, {
					title: "Использование стороннего ПО",
					hide: true
				}, {
					title: "Использование стороннего ПО",
					hide: true
				}, {
					title: "Оскорбление администрации",
					hide: true
				}, {
					title: "Покупка/Продажа аккаунта",
					hide: true
				}]
			},
			maps: {
				ADDITION_NUTS_PRICE: 200,
				locations: [{
					energy_price: 10,
					energy_refund_ratio: 0.5,
					min_level: 0,
					addition_nuts_award: 3500,
					is_gaming: true
				}, {
					energy_price: 10,
					energy_refund_ratio: 0.5,
					min_level: 8,
					addition_nuts_award: 3500,
					is_gaming: true
				}, {
					energy_price: 10,
					energy_refund_ratio: 0.5,
					min_level: 14,
					addition_nuts_award: 5000,
					is_gaming: true
				}, {
					energy_price: 10,
					energy_refund_ratio: 1,
					min_level: 21,
					addition_nuts_award: 7500,
					is_gaming: true
				}, {
					energy_price: 10,
					energy_refund_ratio: 1,
					min_level: 32,
					addition_nuts_award: 6500,
					is_gaming: true
				}, {
					energy_price: 0,
					energy_refund_ratio: 0,
					min_level: 0,
					addition_nuts_award: 0,
					is_gaming: false
				}, {
					energy_price: 0,
					energy_refund_ratio: 0,
					min_level: 0,
					addition_nuts_award: 0,
					is_gaming: false
				}, {
					energy_price: 0,
					energy_refund_ratio: 0,
					min_level: 0,
					addition_nuts_award: 0,
					is_gaming: false
				}, {
					energy_price: 0,
					energy_refund_ratio: 0,
					min_level: 0,
					addition_nuts_award: 0,
					is_gaming: false
				}, {
					energy_price: 10,
					energy_refund_ratio: 1,
					min_level: 18,
					addition_nuts_award: 10000,
					is_gaming: true
				}, {
					energy_price: 15,
					energy_refund_ratio: 0.5,
					min_level: 0,
					addition_nuts_award: 10000,
					is_gaming: true
				}, {
					energy_price: 0,
					energy_refund_ratio: 0,
					min_level: 0,
					addition_nuts_award: 0,
					is_gaming: false
				}, {
					energy_price: 0,
					energy_refund_ratio: 0,
					min_level: 0,
					addition_nuts_award: 0,
					is_gaming: false
				}, {
					energy_price: 10,
					energy_refund_ratio: 1,
					min_level: 27,
					addition_nuts_award: 6500,
					is_gaming: true
				}, {
					energy_price: 0,
					energy_refund_ratio: 0,
					min_level: 0,
					addition_nuts_award: 0,
					is_gaming: false
				}, {
					energy_price: 10,
					energy_refund_ratio: 0,
					min_level: 7,
					addition_nuts_award: 0,
					is_gaming: true
				}, {
					energy_price: 0,
					energy_refund_ratio: 0,
					min_level: 0,
					addition_nuts_award: 0,
					is_gaming: false
				}, {
					energy_price: 0,
					energy_refund_ratio: 0,
					min_level: 0,
					addition_nuts_award: 0,
					is_gaming: false
				}, {
					energy_price: 10,
					energy_refund_ratio: 0.5,
					min_level: 0,
					addition_nuts_award: 0,
					is_gaming: true
				}],
				location_round_info: [{
					valid: true,
					has_shaman: true,
					has_buying_dragon: true,
					has_buying_rabbit: false,
					has_buying_shaman: true,
					has_many_rabbits: false
				}, {
					valid: false,
					has_shaman: false,
					has_buying_dragon: false,
					has_buying_rabbit: false,
					has_buying_shaman: false,
					has_many_rabbits: false
				}, {
					valid: false,
					has_shaman: false,
					has_buying_dragon: false,
					has_buying_rabbit: false,
					has_buying_shaman: false,
					has_many_rabbits: false
				}, {
					valid: false,
					has_shaman: false,
					has_buying_dragon: false,
					has_buying_rabbit: false,
					has_buying_shaman: false,
					has_many_rabbits: false
				}, {
					valid: false,
					has_shaman: false,
					has_buying_dragon: false,
					has_buying_rabbit: false,
					has_buying_shaman: false,
					has_many_rabbits: false
				}, {
					valid: false,
					has_shaman: false,
					has_buying_dragon: false,
					has_buying_rabbit: false,
					has_buying_shaman: false,
					has_many_rabbits: false
				}, {
					valid: false,
					has_shaman: false,
					has_buying_dragon: false,
					has_buying_rabbit: false,
					has_buying_shaman: false,
					has_many_rabbits: false
				}, {
					valid: false,
					has_shaman: false,
					has_buying_dragon: false,
					has_buying_rabbit: false,
					has_buying_shaman: false,
					has_many_rabbits: false
				}, {
					valid: false,
					has_shaman: false,
					has_buying_dragon: false,
					has_buying_rabbit: false,
					has_buying_shaman: false,
					has_many_rabbits: false
				}, {
					valid: false,
					has_shaman: false,
					has_buying_dragon: false,
					has_buying_rabbit: false,
					has_buying_shaman: false,
					has_many_rabbits: false
				}, {
					valid: false,
					has_shaman: false,
					has_buying_dragon: false,
					has_buying_rabbit: false,
					has_buying_shaman: false,
					has_many_rabbits: false
				}, {
					valid: false,
					has_shaman: false,
					has_buying_dragon: false,
					has_buying_rabbit: false,
					has_buying_shaman: false,
					has_many_rabbits: false
				}, {
					valid: false,
					has_shaman: false,
					has_buying_dragon: false,
					has_buying_rabbit: false,
					has_buying_shaman: false,
					has_many_rabbits: false
				}, {
					valid: false,
					has_shaman: false,
					has_buying_dragon: false,
					has_buying_rabbit: false,
					has_buying_shaman: false,
					has_many_rabbits: false
				}, {
					valid: false,
					has_shaman: false,
					has_buying_dragon: false,
					has_buying_rabbit: false,
					has_buying_shaman: false,
					has_many_rabbits: false
				}, {
					valid: true,
					has_shaman: false,
					has_buying_dragon: false,
					has_buying_rabbit: false,
					has_buying_shaman: false,
					has_many_rabbits: false
				}, {
					valid: false,
					has_shaman: false,
					has_buying_dragon: false,
					has_buying_rabbit: false,
					has_buying_shaman: false,
					has_many_rabbits: false
				}, {
					valid: false,
					has_shaman: false,
					has_buying_dragon: false,
					has_buying_rabbit: false,
					has_buying_shaman: false,
					has_many_rabbits: false
				}, {
					valid: false,
					has_shaman: false,
					has_buying_dragon: false,
					has_buying_rabbit: false,
					has_buying_shaman: false,
					has_many_rabbits: false
				}],
				mode_round_info: [{
					valid: true,
					has_shaman: true,
					has_buying_dragon: true,
					has_buying_rabbit: true,
					has_buying_shaman: true,
					has_many_rabbits: false
				}, {
					valid: false,
					has_shaman: false,
					has_buying_dragon: false,
					has_buying_rabbit: false,
					has_buying_shaman: false,
					has_many_rabbits: false
				}, {
					valid: true,
					has_shaman: false,
					has_buying_dragon: false,
					has_buying_rabbit: true,
					has_buying_shaman: false,
					has_many_rabbits: false
				}, {
					valid: false,
					has_shaman: false,
					has_buying_dragon: false,
					has_buying_rabbit: false,
					has_buying_shaman: false,
					has_many_rabbits: false
				}, {
					valid: true,
					has_shaman: true,
					has_buying_dragon: true,
					has_buying_rabbit: false,
					has_buying_shaman: true,
					has_many_rabbits: false
				}, {
					valid: true,
					has_shaman: true,
					has_buying_dragon: true,
					has_buying_rabbit: false,
					has_buying_shaman: true,
					has_many_rabbits: false
				}, {
					valid: true,
					has_shaman: true,
					has_buying_dragon: false,
					has_buying_rabbit: false,
					has_buying_shaman: true,
					has_many_rabbits: false
				}, {
					valid: true,
					has_shaman: true,
					has_buying_dragon: true,
					has_buying_rabbit: true,
					has_buying_shaman: true,
					has_many_rabbits: false
				}, {
					valid: true,
					has_shaman: true,
					has_buying_dragon: false,
					has_buying_rabbit: false,
					has_buying_shaman: true,
					has_many_rabbits: false
				}, {
					valid: true,
					has_shaman: true,
					has_buying_dragon: true,
					has_buying_rabbit: false,
					has_buying_shaman: true,
					has_many_rabbits: false
				}, {
					valid: true,
					has_shaman: true,
					has_buying_dragon: true,
					has_buying_rabbit: true,
					has_buying_shaman: true,
					has_many_rabbits: false
				}, {
					valid: true,
					has_shaman: false,
					has_buying_dragon: false,
					has_buying_rabbit: false,
					has_buying_shaman: false,
					has_many_rabbits: false
				}, {
					valid: true,
					has_shaman: true,
					has_buying_dragon: true,
					has_buying_rabbit: false,
					has_buying_shaman: true,
					has_many_rabbits: false
				}, {
					valid: true,
					has_shaman: true,
					has_buying_dragon: true,
					has_buying_rabbit: false,
					has_buying_shaman: true,
					has_many_rabbits: false
				}, {
					valid: true,
					has_shaman: true,
					has_buying_dragon: true,
					has_buying_rabbit: false,
					has_buying_shaman: true,
					has_many_rabbits: false
				}],
				default_round_info: {
					valid: false,
					has_shaman: false,
					has_buying_dragon: false,
					has_buying_rabbit: false,
					has_buying_shaman: false,
					has_many_rabbits: false
				}
			},
			room: {
				respawns_duration: [0, 0, 3, 0, 5, 3, 3, 3, 0, 0, 0, 0]
			},
			searching: {},
			quest: {
				MIN_LEVEL: 4,
				quests: [
					[
						[5, 4, 4, 3, 2, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0],
						[5, 5, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
						[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
						[20, 18, 15, 8, 5, 0, 0, 0, 0, 0, 0, 0, 0, 7, 0, 0, 0, 0, 0],
						[6, 5, 4, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0],
						[5, 4, 4, 3, 1, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0],
						[20, 18, 15, 8, 5, 0, 0, 0, 0, 0, 0, 0, 0, 7, 0, 0, 0, 0, 0],
						[5, 4, 4, 3, 1, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0],
						[20, 18, 15, 8, 4, 0, 0, 0, 0, 0, 0, 0, 0, 7, 0, 0, 0, 0, 0],
						[7, 6, 6, 5, 4, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0],
						[5, 4, 4, 3, 1, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0],
						[5, 4, 4, 3, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
						[5, 4, 4, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0],
						[0, 5, 5, 10, 10, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0]
					],
					[
						[10, 8, 8, 6, 4, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 0, 0],
						[10, 10, 10, 10, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
						[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0],
						[30, 28, 25, 18, 14, 0, 0, 0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0],
						[15, 12, 8, 6, 3, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 0, 0],
						[10, 8, 8, 6, 2, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 0, 0],
						[30, 28, 25, 18, 14, 0, 0, 0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0],
						[10, 8, 8, 6, 2, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 0, 0],
						[40, 36, 34, 28, 20, 0, 0, 0, 0, 0, 0, 0, 0, 26, 0, 0, 0, 0, 0],
						[15, 12, 12, 10, 8, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0],
						[10, 8, 8, 6, 2, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 0, 0],
						[10, 8, 8, 6, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
						[10, 8, 8, 5, 3, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0],
						[0, 15, 15, 30, 30, 0, 0, 0, 0, 0, 0, 0, 0, 30, 0, 0, 0, 0, 0]
					]
				],
				awards: [{
					nuts: 50,
					mana: 30,
					experience: [{
						min_level: 0,
						experience: 30
					}, {
						min_level: 8,
						experience: 50
					}, {
						min_level: 14,
						experience: 70
					}, {
						min_level: 18,
						experience: 120
					}]
				}, {
					nuts: 80,
					mana: 40,
					experience: [{
						min_level: 0,
						experience: 60
					}, {
						min_level: 8,
						experience: 100
					}, {
						min_level: 14,
						experience: 140
					}, {
						min_level: 18,
						experience: 240
					}]
				}]
			},
			interior: {
				decorations: [{
					type: 0,
					coins_price: 0,
					nuts_price: 0
				}, {
					type: 0,
					coins_price: 32,
					nuts_price: 5000
				}, {
					type: 0,
					coins_price: 35,
					nuts_price: 0
				}, {
					type: 1,
					coins_price: 0,
					nuts_price: 0
				}, {
					type: 1,
					coins_price: 23,
					nuts_price: 3000
				}, {
					type: 1,
					coins_price: 25,
					nuts_price: 0
				}, {
					type: 2,
					coins_price: 9,
					nuts_price: 1000
				}, {
					type: 2,
					coins_price: 15,
					nuts_price: 2000
				}, {
					type: 2,
					coins_price: 19,
					nuts_price: 0
				}, {
					type: 3,
					coins_price: 0,
					nuts_price: 0
				}, {
					type: 3,
					coins_price: 35,
					nuts_price: 5000
				}, {
					type: 3,
					coins_price: 39,
					nuts_price: 0
				}, {
					type: 4,
					coins_price: 29,
					nuts_price: 4000
				}, {
					type: 4,
					coins_price: 32,
					nuts_price: 5000
				}, {
					type: 4,
					coins_price: 35,
					nuts_price: 0
				}, {
					type: 5,
					coins_price: 0,
					nuts_price: 0
				}, {
					type: 5,
					coins_price: 15,
					nuts_price: 2000
				}, {
					type: 5,
					coins_price: 15,
					nuts_price: 0
				}, {
					type: 6,
					coins_price: 9,
					nuts_price: 1000
				}, {
					type: 6,
					coins_price: 15,
					nuts_price: 2000
				}, {
					type: 6,
					coins_price: 19,
					nuts_price: 0
				}, {
					type: 7,
					coins_price: 0,
					nuts_price: 0
				}, {
					type: 7,
					coins_price: 46,
					nuts_price: 6000
				}, {
					type: 7,
					coins_price: 49,
					nuts_price: 0
				}, {
					type: 8,
					coins_price: 8,
					nuts_price: 1000
				}, {
					type: 8,
					coins_price: 15,
					nuts_price: 2000
				}, {
					type: 8,
					coins_price: 19,
					nuts_price: 0
				}, {
					type: 9,
					coins_price: 7,
					nuts_price: 1000
				}, {
					type: 9,
					coins_price: 7,
					nuts_price: 1000
				}, {
					type: 9,
					coins_price: 9,
					nuts_price: 0
				}, {
					type: 10,
					coins_price: 15,
					nuts_price: 2000
				}, {
					type: 10,
					coins_price: 23,
					nuts_price: 3000
				}, {
					type: 10,
					coins_price: 25,
					nuts_price: 0
				}, {
					type: 11,
					coins_price: 23,
					nuts_price: 3000
				}, {
					type: 11,
					coins_price: 29,
					nuts_price: 4000
				}, {
					type: 11,
					coins_price: 29,
					nuts_price: 0
				}, {
					type: 12,
					coins_price: 29,
					nuts_price: 4000
				}, {
					type: 12,
					coins_price: 39,
					nuts_price: 5000
				}, {
					type: 12,
					coins_price: 39,
					nuts_price: 0
				}],
				default_set: [0, 3, 9, 15, 21]
			},
			shaman: {
				MAX_LEVEL: 50,
				SKILL_FREE_LEVELS: 3,
				SKILL_PAID_LEVELS: 3,
				PAID_PER_FEATHERS: 2,
				levels: [80, 300, 720, 1400, 2400, 3780, 5600, 7920, 10800, 14300, 18480, 23400, 29120, 35700, 40044, 45408, 52152, 60636, 71220, 84264, 100128, 119172, 141756, 168240, 198984, 234348, 274692, 320376, 371760, 403274, 436469, 471883, 510058, 551532, 596846, 646541, 701155, 761230, 827304, 899918, 979613, 1066927, 1162402, 1266576, 1330905, 1399713, 1474442, 1556531, 1647419, 1748548],
				learn_coins_price: [
					[35, 35, 5],
					[35, 35, 5],
					[35, 35, 5],
					[35, 35, 5],
					[35, 35, 5],
					[35, 35, 5],
					[35, 35, 5],
					[35, 35, 5],
					[35, 35, 5],
					[35, 35, 5],
					[50, 50, 5],
					[50, 50, 5],
					[50, 50, 5],
					[70, 70, 5],
					[70, 70, 5],
					[70, 70, 5],
					[70, 70, 5],
					[35, 35, 5],
					[35, 35, 5],
					[35, 35, 5],
					[35, 35, 5],
					[35, 35, 5],
					[35, 35, 5],
					[35, 35, 5],
					[35, 35, 5],
					[35, 35, 5],
					[35, 35, 5],
					[50, 50, 5],
					[50, 50, 5],
					[50, 50, 5],
					[70, 70, 5],
					[70, 70, 5],
					[70, 70, 5],
					[70, 70, 5],
					[35, 35, 5],
					[35, 35, 5],
					[35, 35, 5],
					[35, 35, 5],
					[35, 35, 5],
					[35, 35, 5],
					[0, 0, 0],
					[35, 35, 5],
					[35, 35, 5],
					[35, 35, 5],
					[35, 35, 5],
					[50, 50, 5],
					[50, 50, 5],
					[50, 50, 5],
					[70, 70, 5],
					[70, 70, 5],
					[70, 70, 5],
					[70, 70, 5]
				]
			},
			achievements: {},
			collections: {
				unique_set: [
					[0, 1, 2, 3, 4],
					[5, 6, 7, 8, 9],
					[10, 11, 12, 13, 14],
					[15, 16, 17, 18, 19],
					[20, 21, 22, 23, 24],
					[25, 26, 27, 28, 29],
					[30, 31, 32, 33, 34],
					[35, 36, 37, 38, 39],
					[40, 41, 42, 43, 44],
					[45, 46, 47, 48, 49],
					[],
					[55, 56, 57, 58, 59],
					[60, 61, 62, 63, 64],
					[],
					[],
					[],
					[],
					[],
					[70, 71, 72, 73, 74],
					[75, 76, 77, 78, 79],
					[80, 81, 82, 83, 84],
					[85, 86, 87, 88, 89],
					[90, 91, 92, 93, 94],
					[95, 96, 97, 98, 99],
					[100, 101, 102, 103, 104],
					[105, 106, 107, 108, 109],
					[110, 111, 112, 113, 114],
					[115, 116, 117, 118, 119],
					[120, 121, 122, 123, 124],
					[125, 126, 127, 128, 129],
					[130, 131, 132, 133, 134],
					[135, 136, 137, 138, 139],
					[140, 141, 142, 143, 144],
					[145, 146, 147, 148, 149]
				],
				trophy_set: [
					[0, 1, 2, 3, 4, 5, 6, 7, 24, 25, 20, 21],
					[],
					[0, 1, 2, 3, 4, 5, 6, 7, 26, 27, 22, 23],
					[6, 7, 28, 29, 32, 33, 30, 31, 26, 27, 20, 21],
					[6, 7, 28, 29, 32, 33, 30, 31, 26, 27, 20, 21],
					[5, 6, 19, 28, 12, 32, 9, 30, 24, 27, 20, 23],
					[5, 6, 19, 28, 12, 32, 9, 30, 24, 27, 20, 23],
					[4, 7, 18, 29, 11, 33, 8, 31, 24, 25, 22, 23],
					[4, 7, 18, 29, 11, 33, 8, 31, 24, 25, 22, 23],
					[6, 7, 28, 29, 32, 33, 30, 31, 25, 26, 21, 22],
					[6, 7, 28, 29, 32, 33, 30, 31, 25, 26, 21, 22],
					[6, 7, 28, 29, 11, 12, 8, 9, 26, 27, 22, 23],
					[6, 7, 28, 29, 11, 12, 8, 9, 26, 27, 22, 23],
					[4, 5, 18, 19, 32, 33, 30, 31, 24, 25, 20, 21],
					[4, 5, 18, 19, 32, 33, 30, 31, 24, 25, 20, 21],
					[5, 6, 19, 28, 12, 32, 9, 30, 25, 26, 20, 23],
					[5, 6, 19, 28, 12, 32, 9, 30, 25, 26, 20, 23],
					[5, 6, 19, 28, 12, 32, 9, 30, 24, 27, 21, 22],
					[5, 6, 19, 28, 12, 32, 9, 30, 24, 27, 21, 22]
				],
				regular_coins_price: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 0, 0, 0, 0, 0, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 0, 0, 0, 0, 0, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30],
				unique_experience: [500, 500, 750, 750, 1000, 1000, 1000, 1000, 2500, 2500, 0, 2000, 2000, 0, 0, 0, 0, 0, 1500, 1500, 500, 500, 500, 500, 1500, 1500, 1500, 1500, 1500, 1500, 2500, 2500, 2000, 2000]
			},
			replays: {},
			chat: {},
			training: {},
			ratings: {
				leagues: [
					[{
						name: "Нет",
						min_scores: 0
					}, {
						name: "Бронза",
						min_scores: 500
					}, {
						name: "Серебро",
						min_scores: 2500
					}, {
						name: "Золото",
						min_scores: 6000
					}, {
						name: "Мастер",
						min_scores: 10000
					}, {
						name: "Алмаз",
						min_scores: 50000
					}, {
						name: "Чемпион",
						min_scores: 100000
					}],
					[{
						name: "Нет",
						min_scores: 0
					}, {
						name: "Бронза",
						min_scores: 500
					}, {
						name: "Серебро",
						min_scores: 2500
					}, {
						name: "Золото",
						min_scores: 6000
					}, {
						name: "Мастер",
						min_scores: 10000
					}, {
						name: "Алмаз",
						min_scores: 50000
					}, {
						name: "Чемпион",
						min_scores: 100000
					}]
				]
			}
		},
		DailyBonusManager: {
			TIME: 24 * 60 * 60 - 1,
			VIP: 4,
			PACKAGE: 6,
			LAST_DAY: 6
		},
		DeferredBonusManager: {
			COINS: 1,
			NUTS: 2,
			MANA: 3,
			ENERGY: 4,
			EXPERIENCE: 5,
			ITEMS: 6,
			COLLECTIONS: 7,
			GOLD_COLLECTIONS: 8,
			VIP: 9,
			MIGTHY_POTION: 10,
			TEMPORARY_CLOTHES: 11,
			TEMPORARY_PACKAGES: 12,
			HOLIDAY_RATING: 13,
			HOLIDAY_TICKET: 14,
			PACKAGE_FOREVER: 15,
			SKIN: 16,
			ACCESSORY: 17,
			PACKAGE_LEVEL_UP: 18
		},
		DialogOfferManager: {
			SHOWED: 0,
			USED: 1,
			VIP_GAME: 0,
			VIP_REBUY: 1,
			PACKAGE_REBUY: 2,
			NEWS: 3,
			VIP_GAME_STATUS: 4,
			INVITE_TIMEOUT: 5,
			NAMES: ["vip_game"],
			TIMEOUT: [24 * 60 * 60]
		},
		EducationQuestManager: {
			MAX_COUNT: 3,
			NONE: 0,
			DONE: 1,
			COMPLETE: 2,
			TRAINING_COMPLETE: 0,
			FIRST_GAME: 1,
			LEVEL_UP: 2,
			MAGIC: 3,
			SHOP: 4,
			NEWS: 5,
			RATING: 6,
			WARDROBE: 7,
			MAIL: 8,
			COLLECTIONS: 9,
			ACHIEVE: 10,
			SWAMP: 11,
			SCHOOL: 12,
			SHAMAN: 13,
			BATTLE: 14,
			HOME: 15,
			SHAMAN_TREE: 16
		},
		ExpirationsManager: {
			MANA: 0,
			SUBSCRIBE: 1,
			VIP: 2,
			CHEST: 4,
			RETURN_BONUS: 5,
			FRIEND_BONUS: 6,
			GOLDEN_CUP: 7,
			MANA_FOR_OBJECT: 8,
			UNLIMITED_MANA: 9,
			FREE_FIRST_PERK: 10,
			UNLIMITED_ENERGY: 11,
			SHAMAN_FREEPLAY: 12,
			MANA_REGENERATION: 13,
			BUNDLE_NEWBIE_RICH: 14,
			BUNDLE_NEWBIE_POOR: 15,
			BUNDLE_LEGENDARY: 16,
			HOLIDAY_BOOSTER: 17,
			BIRTHDAY_2015: 18,
			HOT_WEEKEND: 19,
			MANA_REGENERATION_PERIOD: 60
		},
		HolidayManager: {
			HOLIDAY_END: 0,
			SPIN_PRICE: 10,
			TICKETS_TO_PACKAGE: 5,
			MAX_TICKETS: 20,
			CLOTHES: [133,134,135,13]
		},
		HotWeekendManager: {
			WEEKEND_START: 1459555200
		},
		NotificationManager: {
			COLLECTION: 1,
			LEPRECHAUN: 2,
			SHOP: 4,
			RETURN: 8,
			MAIL: 16,
			NEWS: 32,
			DAILY_QUEST: 64
		},
		OutfitData: {
			OWNER_SQUIRREL: 0,
			OWNER_SHAMAN: 1,
			OWNER_SCRAT: 2,
			OWNER_SCRATTY: 3,
			OWNER_MAX_TYPE: 4,
			CHARACTER_SQUIRREL: 0,
			CHARACTER_SHAMAN: 1,
			CHARACTER_RABBIT: 2,
			CHARACTER_DRAGON: 3,
			CHARACTER_MAX_TYPE: 4,
			ACCESSORY_CLOAK: 0,
			ACCESSORY_GLASSES: 1,
			ACCESSORY_HANDS: 2,
			ACCESSORY_NECK: 3,
			ACCESSORY_TAIL: 4,
			ACCESSORY_HAIRBAND: 5,
			SHAMAN_BLUE: -1,
			SHAMAN_RED: -2,
			SHAMAN_BLACK: -3,
			TEAM_BLUE: -4,
			TEAM_RED: -5,
			CONTUSED_SQUIRREL: -6,
			PERSIAN_MAN_ROCK: -7,
			PERSIAN_WOMAN_ROCK: -8,
			GRAVY: -9,
			SLOW_FALL: -10,
			SNOWBALL: -11,
			UNDEAD: -12,
			IRONMAN: 0,
			ROBOCOP: 1,
			ALTRONE: 2,
			SUPERMAN_MAN: 3,
			PIRATE: 4,
			BLACK_BEARD: 5,
			AMELIA: 6,
			FLASH: 7,
			PIKACHU: 8,
			THRONE: 9,
			ZOOM: 10,
			CHESHIRE_CAT: 11,
			BLACK_CAT: 12,
			FAIRY_CAT: 13,
			MYSTERIO: 14,
			DORMAMMU: 15,
			PHARAON_MAN: 16,
			PHARAON_WOMAN: 17,
			ANUBIS: 18,
			TUTENSHTAIN: 19,
			DEATH: 20,
			SWEET_DEATH: 21,
			BANSHEE: 22,
			AID: 23,
			SAILORMOON: 24,
			FAIRY: 25,
			ASSASSIN: 26,
			TUXEDOMASK: 27,
			HONEY_LEMON_WOMAN: 28,
			SWEET_TOOTH: 29,
			CHRONOS_MAN: 30,
			PERSIA_MAN: 31,
			LEPRECHAUN: 32,
			HATTER: 33,
			ELF: 34,
			WIZARD_MAN: 35,
			JUGGLER_MAN: 36,
			TOOTHLESS: 37,
			ZOMBIE: 38,
			SKELETON: 39,
			VAMPIRE: 40,
			CTHULHU_MAN: 41,
			SONIC: 42,
			AMYROSE: 43,
			ARMADILLO: 44,
			STORM: 45,
			HATSUNE: 46,
			LEN: 47,
			BUMBLEBEE: 48,
			ARCEE: 49,
			HIPSTER_WOMAN: 50,
			HIPPIE_MAN: 51,
			MOD: 52,
			PARTY: 53,
			CHAMPION: 54,
			WOLF: 55,
			VIKING: 56,
			NINJA: 57,
			FOOTPAD: 58,
			SAMURAI: 59,
			RAMBO: 60,
			WENDIGO: 61,
			RABBIT: 62,
			VADER: 63,
			CAPITAN_AMERICA: 64,
			SPIDER: 65,
			LOGAN: 66,
			FROST_2014: 67,
			SNOW_MAIDEN_2014: 68,
			DEER: 69,
			PARROT_MAN: 70,
			IRBIS: 71,
			BATMAN: 72,
			CATWOMAN_BATMAN: 73,
			CATWOMAN: 74,
			JOKER: 75,
			HARLEY_QUINN: 76,
			SPARTAN_MAN: 77,
			LEGION_RED: 78,
			NAPOLEON: 79,
			COP_MAN: 80,
			ALCHEMIST: 81,
			TOR: 82,
			LOKI: 83,
			SCRAT_METAL: 84,
			SCRAT_DRAGON: 85,
			SCRAT_JUGGLER: 86,
			SCRAT_VAMPYRE: 87,
			SCRAT_HATTER: 88,
			SCRAT_SKELETON: 89,
			SCRAT_PERSIA: 90,
			SCRAT_ROBOCOP: 91,
			SCRATTY_METAL: 92,
			SCRATTY_DRAGON: 93,
			SCRATTY_JUGGLER: 94,
			SCRATTY_VAMPYRE: 95,
			SCRATTY_HATTER: 96,
			SCRATTY_SKELETON: 97,
			SCRATTY_PERSIA: 98,
			SCRATTY_FAIRY: 99,
			GREEN_SHAMAN_MAN: 100,
			BLUE_SHAMAN_MAN: 101,
			PURPLE_SHAMAN_MAN: 102,
			SHAMAN_DARK_RED: 103,
			SHAMAN_DARK_PINK: 104,
			FLOWER_SHAMAN: 105,
			AIRBENDER_GREEN: 106,
			AIRBENDER_BLUE: 107,
			AIRBENDER_RED: 108,
			AIRBENDER_VIOLET: 109,
			PUPIL: 110,
			SCRAT: 111,
			SCRATTY: 112,
			FAN: 113,
			CRYSTAL_MAIDEN: 114,
			SANTA_ELF: 115,
			DOVAHKIIN: 116,
			DRAGON_ICE: 117,
			LICH_KING: 118,
			RAFAEL: 119,
			MC_TWIST: 120,
			AMUR_MAN: 121,
			AMUR_WOMAN: 122,
			AMUR_GOLDEN_MAN: 123,
			AMUR_GOLDEN_WOMAN: 124,
			DEADPOOL: 125,
			BUBBLEGUM: 126,
			SHAMAN_SPRING: 127,
			RAPUNZEL: 128,
			DRUID: 129,
			BEAR: 130,
			EVA: 131,
			STITCH: 132,
			FARMER: 133,
			HARLOCK: 134,
			MINION: 135,
			ORC: 136,
			CHAPLIN: 137,
			REAPER: 2147483647,
			HIPSTER_MAN_GLASSES: 0,
			HIPSTER_WOMAN_GLASSES: 1,
			MAD_GLASSES: 2,
			PUPIL_GLASS: 3,
			STORM_GLASSES: 4,
			THUNDER_GLASSES: 5,
			BATMAN_CLOAK: 6,
			FAIRY_WINGS: 7,
			SAILOR_MOON_WINGS: 8,
			SHADOW_CLOAK: 9,
			VAMPIRE_CLOAK: 10,
			ALCHEMIST_HAND: 11,
			ASSASSIN_DAGGER: 12,
			CAPTAIN_AMERICA_SHIELD: 13,
			CAT_HANDS: 14,
			CAT_WOMEN_WHIP: 15,
			FAIRY_STUFF: 16,
			HARD_SWEET: 17,
			LEGION_KNIFE: 18,
			LEPRECHAUN_HAND: 19,
			LOKI_HAND: 20,
			NAPOLEON_SWORD: 21,
			NEW_YEAR_STUFF: 22,
			NINJA_SWORD: 23,
			OLYMPUS_TORCH: 24,
			PERSIAN_SWORD: 25,
			PHARAON_MAN_HANDS: 26,
			PHARAON_WOMAN_HANDS: 27,
			PUMPKIN_HAND: 28,
			RAMBO_GUN: 29,
			SAILOR_MOON_WAND: 30,
			SPARTAN_SWORD: 31,
			STICK: 32,
			TOR_HAMMER: 33,
			TUXEDO_MASK_HAND: 34,
			VADER_SWORD: 35,
			VIKING_HANDS: 36,
			WAND: 37,
			WOLF_STAFF: 38,
			XMAS_MAN_STAFF: 39,
			ASSASSIN_TAIL: 40,
			BATMAN_TAIL: 41,
			BIG_LEGO: 42,
			CAT_WOMEN_TAIL: 43,
			CHAMPION_TAIL: 44,
			CHRONOS_TAIL: 45,
			CUBE: 46,
			CUTE_RABBIT_CARROT: 47,
			DISC: 48,
			EASTER_BASKET: 49,
			ELF_SWORD: 50,
			FAIRY_TAIL: 51,
			ILLUSIONIST_MAN_TAIL: 52,
			ILLUSIONIST_WOMAN_TAIL: 53,
			IRON_MAN_TAIL: 54,
			LEGO_SMALL: 55,
			LEPRECHAUN_TAIL: 56,
			MAY_RIBBON: 57,
			NAPOLEON_TAIL: 58,
			NEW_YEAR_TAIL: 59,
			NINJA_TAIL: 60,
			OLYMPUS_TAIL: 61,
			PENDANT_HIPPIE: 62,
			PERSIAN_TAIL: 63,
			PHARAON_MAN_TAIL: 64,
			PHARAON_WOMAN_TAIL: 65,
			PIRATE_TAIL: 66,
			POLICE_TAIL: 67,
			PUPIL_TAIL: 68,
			RAMBO_GRENADE: 69,
			RIO_MAN_TAIL: 70,
			SAILOR_MOON_TAIL: 71,
			SAMURAI_TAIL: 72,
			SNOW_MAIDEN_TAIL: 73,
			SPIDER_HALLOWEEN_TAIL: 74,
			SPIDER_TAIL: 75,
			SUPERMAN_TAIL: 76,
			SWEET_TEETH_TAIL: 77,
			TIN: 78,
			VAMPIRE_TAIL: 79,
			VENDIGO_TAIL: 80,
			VIKING_TAIL: 81,
			WIZARD_TAIL: 82,
			WOLF_TAIL: 83,
			XMAS_GIRL_TAIL: 84,
			CHAMPION_NECK: 85,
			DEER_NECK: 86,
			EASTER_STAR: 87,
			ICE_SHARD: 88,
			MEDAL_GOLD: 89,
			OLYMPIC_MEDAL: 90,
			PUPIL_NECK: 91,
			RIO_GIRL_NECK: 92,
			RIO_MAN_NECK: 93,
			SKULL_NECK: 94,
			ALCHEMIST_TAIL: 95,
			VADER_COAT: 96,
			CRYSTAL_MAIDEN_HANDS: 97,
			CRYSTAL_MAIDEN_CLOAK: 98,
			SANTA_ELF_TAIL: 99,
			LICH_KING_CLOAK: 100,
			LICH_KING_NECK: 101,
			LICH_KING_HANDS: 102,
			DOVAHKIIN_HANDS: 103,
			OLYMPIC_TORCH: 104,
			NEW_YEAR_ACCESSORY: 105,
			RAFAEL_HANDS: 106,
			MC_TWIST_TAIL: 107,
			AMUR_TAIL: 108,
			AMUR_HANDS: 109,
			AMUR_MAN_CLOAK: 110,
			AMUR_WOMAN_CLOAK: 111,
			AMUR_GOLDEN_CLOAK: 112,
			AMUR_HAIRBAND: 113,
			DEADPOOL_CLOAK: 114,
			DEADPOOL_HANDS: 115,
			RAPUNZEL_HANDS: 116,
			RAPUNZEL_HAIRBAND: 117,
			RAPUNZEL_TAIL: 118,
			DRUID_HANDS: 119,
			DRUID_CLOAK: 120,
			DRUID_TAIL: 121,
			BEAR_HANDS: 122,
			BEAR_NECK: 123,
			BEAR_CLOAK: 124,
			SPRING_HAIRBAND: 125,
			SPRING_MAN_GLASSES: 126,
			SPRING_WOMAN_GLASSES: 127,
			ROCK_WINGS: 128,
			ROCK_GLASSES: 129,
			ROCK_GUITAR: 130,
			ROCK_TAIL: 131,
			ROCK_HAIRBAND: 132,
			FARMER_HANDS: 133,
			FARMER_TAIL: 134,
			FARMER_HAIR: 135,
			HARLOCK_CLOAK: 136,
			HARLOCK_HANDS: 137,
			HARLOCK_TAIL: 138,
			MINION_GLASSES: 139,
			MINION_HANDS: 140,
			MINION_TAIL: 141,
			FAIRY_CAT_NECK: 142,
			FAIRY_CAT_TAIL: 143,
			FAIRY_CAT_HAIRBAND: 144,
			ELECTRO_CLOAK: 145,
			ELECTRO_GLASSES: 146,
			ELECTRO_TAIL: 147,
			ELECTRO_HAIRBAND: 148,
			SOLDIER_HAIRBAND: 149,
			ORC_NECK: 150,
			ORC_HANDS: 151,
			ORC_TAIL: 152,
			CHAPLIN_HAIRBAND: 153,
			CHAPLIN_HANDS: 154,
			SUMMER_HANDS: 155,
			SUMMER_TAIL: 156,
			SUMMER_NECK: 157,
			SUMMER_HAIRBAND: 158,
			FRUIT_GLASSES: 159,
			FRUIT_HANDS: 160,
			FRUIT_NECK: 161,
			FRUIT_TAIL: 162,
			FRUIT_HAIRBAND: 163,
			AQUA_CLOAK: 164,
			AQUA_GLASSES: 165,
			AQUA_HANDS: 166,
			AQUA_TAIL: 167,
			SCHOOL_BACK: 168,
			SCHOOL_GLASSES: 169,
			SCHOOL_HANDS: 170,
			SCHOOL_TAIL: 171
		},
		PowerManager: {
			TIME: 60
		},
		ProduceManager: {
			COUNT_GOLD: 510,
			FOR_DAYS: 30,
			COUNT_GOLD_IN_TIME: 17,
			COUNT_HOLIDAY_IN_TIME: 10,
			TIME: 0,
			BONUS: 1,
			GOLDEN_CUP: 0,
			HOLIDAY: 1,
			MAX_TYPE: 2
		},
		RatingManager: {
			RATING_START: 1438549200,
			RATING_TIME: 7*24*60*60,
			BONUS_RATE: 0.1,
			FIRST_SEASON: 0,
			CURRENT_SEASON: 1,
			CHANGE_SEASON: 2,
			MISS_SEASON: 3,
			JOIN: 0,
			LEAVE: 1,
			PLAYER_TYPE: 0,
			CLAN_TYPE: 1,
			MAX_TYPE: 2
		},
		SettingsStorage: {
			HOT_KEYS: 0,
			SETTINGS: 1,
			NOTIFICATIONS: 2,
			CHAT_SETTINGS: 3,
			DIALOGS_BUYING: 4,
		},
		ShamanTreeManager: {
			SHAMAN_BRANCH_PRICE: 100,
			SHAMAN_RESET_PRICE: 10,
			MENTOR: 0,
			LEADER: 1,
			CREATOR: 2,
			EMPTY: 3,
			SKILL_MAX_RATE: 6
		},
		VIPManager: {
			VIP_DAY: 0,
			VIP_WEEK: 1,
			VIP_MONTH: 2,
			VIP_HOUR: 3,
			VIP_PACK: 4
		}
	}
})