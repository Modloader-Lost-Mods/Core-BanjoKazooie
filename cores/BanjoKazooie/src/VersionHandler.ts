import * as API from '../API/Imports';

export namespace VersionHandler {
	export function load_jp_1_0() {
		global.ModLoader[API.AddressType.BETA_MENU] = 0x383bc0;
		global.ModLoader[API.AddressType.CAMERA] = 0x37e458;
		global.ModLoader[API.AddressType.INVENTORY] = 0x386a70;
		global.ModLoader[API.AddressType.PLAYER] = 0x37cbe0;

		// Runtime Data
		global.ModLoader[API.AddressType.RT_ACTOR_ARRAY_PTR] = 0x36f260;
		global.ModLoader[API.AddressType.RT_COLLISION_PTR] = 0x00000; // Need found
		global.ModLoader[API.AddressType.RT_CUR_EXIT] = 0x37f406;
		global.ModLoader[API.AddressType.RT_CUR_LEVEL] = 0x00000; // Need found
		global.ModLoader[API.AddressType.RT_CUR_LEVEL_EVENTS] = 0x383301;
		global.ModLoader[API.AddressType.RT_CUR_LEVEL_LOOKUP] = 0x00000; // Need found
		global.ModLoader[API.AddressType.RT_CUR_PROFILE] = 0x00000; // Need found
		global.ModLoader[API.AddressType.RT_CUR_SCENE] = 0x37f405;
		global.ModLoader[API.AddressType.RT_CUR_SCENE_EVENTS] = 0x00000; // Need found
		global.ModLoader[API.AddressType.RT_IS_CUTSCENE] = 0x00000; // Need found
		global.ModLoader[API.AddressType.RT_IS_LOADING] = 0x00000; // Need found
		global.ModLoader[API.AddressType.RT_TRANSITION_STATE] = 0x00000; // Need found
		global.ModLoader[API.AddressType.RT_VOXEL_ARRAY_PTR] = 0x382ab0;
		global.ModLoader[API.AddressType.RT_VOXEL_COUNT_PTR] = 0x00000; // Need found

		// Save Data
		global.ModLoader[API.AddressType.SAVE_CHEAT_FLAGS] = 0x383d48;
		global.ModLoader[API.AddressType.SAVE_EEPROM] = 0x00000; // Need found
		global.ModLoader[API.AddressType.SAVE_GAME_FLAGS] = 0x383d18;
		global.ModLoader[API.AddressType.SAVE_HONEYCOMB_FLAGS] = 0x383e20;
		global.ModLoader[API.AddressType.SAVE_JIGGY_FLAGS] = 0x383e00;
		global.ModLoader[API.AddressType.SAVE_MOVE_FLAGS] = 0x37cea0;
		global.ModLoader[API.AddressType.SAVE_MUMBO_TOKEN_FLAGS] = 0x383e30;
	}

	export function load_pal_1_0() {
		global.ModLoader[API.AddressType.BETA_MENU] = 0x383a60;
		global.ModLoader[API.AddressType.CAMERA] = 0x37e328;
		global.ModLoader[API.AddressType.INVENTORY] = 0x386910;
		global.ModLoader[API.AddressType.PLAYER] = 0x37cab0;

		// Runtime Data
		global.ModLoader[API.AddressType.RT_ACTOR_ARRAY_PTR] = 0x36eae0;
		global.ModLoader[API.AddressType.RT_COLLISION_PTR] = 0x00000; // Need found
		global.ModLoader[API.AddressType.RT_CUR_EXIT] = 0x37f2c6;
		global.ModLoader[API.AddressType.RT_CUR_LEVEL] = 0x00000; // Need found
		global.ModLoader[API.AddressType.RT_CUR_LEVEL_EVENTS] = 0x383301;
		global.ModLoader[API.AddressType.RT_CUR_LEVEL_LOOKUP] = 0x00000; // Need found
		global.ModLoader[API.AddressType.RT_CUR_PROFILE] = 0x00000; // Need found
		global.ModLoader[API.AddressType.RT_CUR_SCENE] = 0x00000; // Need found
		global.ModLoader[API.AddressType.RT_CUR_SCENE_EVENTS] = 0x00000; // Need found
		global.ModLoader[API.AddressType.RT_IS_CUTSCENE] = 0x00000; // Need found
		global.ModLoader[API.AddressType.RT_IS_LOADING] = 0x00000; // Need found
		global.ModLoader[API.AddressType.RT_TRANSITION_STATE] = 0x00000; // Need found
		global.ModLoader[API.AddressType.RT_VOXEL_ARRAY_PTR] = 0x382970;
		global.ModLoader[API.AddressType.RT_VOXEL_COUNT_PTR] = 0x00000; // Need found

		// Save Data
		global.ModLoader[API.AddressType.SAVE_CHEAT_FLAGS] = 0x383bb8;
		global.ModLoader[API.AddressType.SAVE_EEPROM] = 0x00000; // Need found
		global.ModLoader[API.AddressType.SAVE_GAME_FLAGS] = 0x383b88;
		global.ModLoader[API.AddressType.SAVE_HONEYCOMB_FLAGS] = 0x383cc0;
		global.ModLoader[API.AddressType.SAVE_JIGGY_FLAGS] = 0x383ca0;
		global.ModLoader[API.AddressType.SAVE_MOVE_FLAGS] = 0x37cd70;
		global.ModLoader[API.AddressType.SAVE_MUMBO_TOKEN_FLAGS] = 0x383cd0;
	}

	export function load_usa_1_0() {
		global.ModLoader[API.AddressType.BETA_MENU] = 0x383080;
		global.ModLoader[API.AddressType.CAMERA] = 0x37d958;
		global.ModLoader[API.AddressType.INVENTORY] = 0x385f30;
		global.ModLoader[API.AddressType.PLAYER] = 0x37c0e0;

		// Runtime Data
		global.ModLoader[API.AddressType.RT_ACTOR_ARRAY_PTR] = 0x36e560;
		global.ModLoader[API.AddressType.RT_COLLISION_PTR] = 0x3820b8;
		global.ModLoader[API.AddressType.RT_CUR_EXIT] = 0x37e8f6;
		global.ModLoader[API.AddressType.RT_CUR_LEVEL] = 0x383301;
		global.ModLoader[API.AddressType.RT_CUR_LEVEL_EVENTS] = 0x383328;
		global.ModLoader[API.AddressType.RT_CUR_LEVEL_LOOKUP] = 0x36b818;
		global.ModLoader[API.AddressType.RT_CUR_PROFILE] = 0x365e00;
		global.ModLoader[API.AddressType.RT_CUR_SCENE] = 0x37e8f5;
		global.ModLoader[API.AddressType.RT_CUR_SCENE_EVENTS] = 0x367000;
		global.ModLoader[API.AddressType.RT_IS_CUTSCENE] = 0x367684;
		global.ModLoader[API.AddressType.RT_IS_LOADING] = 0x37e8f4;
		global.ModLoader[API.AddressType.RT_TRANSITION_STATE] = 0x382438;
		global.ModLoader[API.AddressType.RT_VOXEL_ARRAY_PTR] = 0x381fa0;
		global.ModLoader[API.AddressType.RT_VOXEL_COUNT_PTR] = 0x381fc8;

		// Save Data
		global.ModLoader[API.AddressType.SAVE_CHEAT_FLAGS] = 0x3831d8;
		global.ModLoader[API.AddressType.SAVE_EEPROM] = 0x383d20;
		global.ModLoader[API.AddressType.SAVE_GAME_FLAGS] = 0x3831a8;
		global.ModLoader[API.AddressType.SAVE_HONEYCOMB_FLAGS] = 0x3832e0;
		global.ModLoader[API.AddressType.SAVE_JIGGY_FLAGS] = 0x3832c0;
		global.ModLoader[API.AddressType.SAVE_MOVE_FLAGS] = 0x37c3a0;
		global.ModLoader[API.AddressType.SAVE_MUMBO_TOKEN_FLAGS] = 0x3832f0;
	}

	export function load_usa_1_1() {
		global.ModLoader[API.AddressType.BETA_MENU] = 0x3822a0;
		global.ModLoader[API.AddressType.CAMERA] = 0x37cb58;
		global.ModLoader[API.AddressType.INVENTORY] = 0x385150;
		global.ModLoader[API.AddressType.PLAYER] = 0x37b2e0;

		// Runtime Data
		global.ModLoader[API.AddressType.RT_ACTOR_ARRAY_PTR] = 0x36d760;
		global.ModLoader[API.AddressType.RT_COLLISION_PTR] = 0x00000; // Need found
		global.ModLoader[API.AddressType.RT_CUR_EXIT] = 0x37daf6;
		global.ModLoader[API.AddressType.RT_CUR_LEVEL] = 0x00000; // Need found
		global.ModLoader[API.AddressType.RT_CUR_LEVEL_EVENTS] = 0x383301;
		global.ModLoader[API.AddressType.RT_CUR_LEVEL_LOOKUP] = 0x00000; // Need found
		global.ModLoader[API.AddressType.RT_CUR_PROFILE] = 0x00000; // Need found
		global.ModLoader[API.AddressType.RT_CUR_SCENE] = 0x37daf5;
		global.ModLoader[API.AddressType.RT_CUR_SCENE_EVENTS] = 0x00000; // Need found
		global.ModLoader[API.AddressType.RT_IS_CUTSCENE] = 0x00000; // Need found
		global.ModLoader[API.AddressType.RT_IS_LOADING] = 0x00000; // Need found
		global.ModLoader[API.AddressType.RT_TRANSITION_STATE] = 0x00000; // Need found
		global.ModLoader[API.AddressType.RT_VOXEL_ARRAY_PTR] = 0x3811a0;
		global.ModLoader[API.AddressType.RT_VOXEL_COUNT_PTR] = 0x00000; // Need found

		// Save Data
		global.ModLoader[API.AddressType.SAVE_CHEAT_FLAGS] = 0x382428;
		global.ModLoader[API.AddressType.SAVE_EEPROM] = 0x00000; // Need found
		global.ModLoader[API.AddressType.SAVE_GAME_FLAGS] = 0x3823f8;
		global.ModLoader[API.AddressType.SAVE_HONEYCOMB_FLAGS] = 0x382500;
		global.ModLoader[API.AddressType.SAVE_JIGGY_FLAGS] = 0x3824e0;
		global.ModLoader[API.AddressType.SAVE_MOVE_FLAGS] = 0x37b5a0;
		global.ModLoader[API.AddressType.SAVE_MUMBO_TOKEN_FLAGS] = 0x382510;
	}
}