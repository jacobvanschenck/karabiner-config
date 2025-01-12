import {
	ifApp,
	ifVar,
	layer,
	map,
	mapDoubleTap,
	mapSimultaneous,
	type NumberKeyValue,
	rule,
	simlayer,
	toKey,
	withCondition,
	withMapper,
	writeToProfile,
} from "karabiner.ts";

// ! Change '--dry-run' to your Karabiner-Elements Profile name.
// (--dry-run print the config json into console)
// + Create a new profile if needed.
writeToProfile(
	"Home Row Mods",
	[
		rule("Hyper Key").manipulators([
			map("caps_lock").toHyper().toIfAlone("escape"),
		]),
		// In Karabiner-Elements a 'rule' is a group of manipulators.
		// layer() and simlayer() are extended rule().
		// Home row mods
		rule("Home row mods - shift, ctrl, opt, cmd").manipulators([
			//
			// Four - left hand
			mapSimultaneous(["a", "s", "d", "f"]).toIfHeldDown("l⇧", ["l⌘⌥⌃"]),
			//
			// Three - left hand
			mapSimultaneous(["a", "s", "d"]).toIfHeldDown("l⇧", ["l⌥⌃"]),
			mapSimultaneous(["a", "d", "f"]).toIfHeldDown("l⇧", ["l⌘⌥"]),
			mapSimultaneous(["s", "d", "f"]).toIfHeldDown("l⌃", ["l⌘⌥"]),
			//
			// Two - left hand
			mapSimultaneous(["a", "s"], { key_down_order: "strict" })
				.toIfAlone("a")
				.toIfAlone("s")
				.toIfHeldDown("l⇧", "l⌃"),
			mapSimultaneous(["s", "a"], { key_down_order: "strict" })
				.toIfAlone("s")
				.toIfAlone("a")
				.toIfHeldDown("l⇧", "l⌃"),
			mapSimultaneous(["a", "d"], { key_down_order: "strict" })
				.toIfAlone("a")
				.toIfAlone("d")
				.toIfHeldDown("l⇧", "l⌥"),
			mapSimultaneous(["d", "a"], { key_down_order: "strict" })
				.toIfAlone("d")
				.toIfAlone("a")
				.toIfHeldDown("l⇧", "l⌥"),
			mapSimultaneous(["a", "f"], { key_down_order: "strict" })
				.toIfAlone("a")
				.toIfAlone("f")
				.toIfHeldDown("l⇧", "l⌘"),
			mapSimultaneous(["f", "a"], { key_down_order: "strict" })
				.toIfAlone("f")
				.toIfAlone("a")
				.toIfHeldDown("l⇧", "l⌘"),
			mapSimultaneous(["s", "d"], { key_down_order: "strict" })
				.toIfAlone("s")
				.toIfAlone("d")
				.toIfHeldDown("l⌃", "l⌥"),
			mapSimultaneous(["d", "s"], { key_down_order: "strict" })
				.toIfAlone("d")
				.toIfAlone("s")
				.toIfHeldDown("l⌃", "l⌥"),
			mapSimultaneous(["s", "f"], { key_down_order: "strict" })
				.toIfAlone("s")
				.toIfAlone("f")
				.toIfHeldDown("l⌃", "l⌘"),
			mapSimultaneous(["f", "s"], { key_down_order: "strict" })
				.toIfAlone("f")
				.toIfAlone("s")
				.toIfHeldDown("l⌃", "l⌘"),
			mapSimultaneous(["d", "f"], { key_down_order: "strict" })
				.toIfAlone("d")
				.toIfAlone("f")
				.toIfHeldDown("l⌥", "l⌘"),
			mapSimultaneous(["f", "d"], { key_down_order: "strict" })
				.toIfAlone("f")
				.toIfAlone("d")
				.toIfHeldDown("l⌥", "l⌘"),
			//
			// One - left hand
			map("a")
				.to("l⇧")
				.toIfAlone("a"),
			map("s").to("l⌃").toIfAlone("s"),
			map("d").to("l⌥").toIfAlone("d"),
			map("f").to("l⌘").toIfAlone("f"),
			//
			//
			// Four - right hand
			mapSimultaneous(["j", "k", "l", ";"]).toIfHeldDown("r⇧", ["r⌘⌥⌃"]),
			//
			// Three - right hand
			mapSimultaneous([";", "l", "k"]).toIfHeldDown("r⇧", ["r⌥⌃"]),
			mapSimultaneous([";", "k", "j"]).toIfHeldDown("r⇧", ["r⌘⌥"]),
			mapSimultaneous(["l", "k", "j"]).toIfHeldDown("r⌃", ["r⌘⌥"]),
			//
			// Two - right hand
			mapSimultaneous([";", "l"], { key_down_order: "strict" })
				.toIfAlone(";")
				.toIfAlone("l")
				.toIfHeldDown("r⇧", "r⌃"),
			mapSimultaneous(["l", ";"], { key_down_order: "strict" })
				.toIfAlone("l")
				.toIfAlone(";")
				.toIfHeldDown("r⇧", "r⌃"),
			mapSimultaneous([";", "k"], { key_down_order: "strict" })
				.toIfAlone(";")
				.toIfAlone("k")
				.toIfHeldDown("r⇧", "r⌥"),
			mapSimultaneous(["k", ";"], { key_down_order: "strict" })
				.toIfAlone("k")
				.toIfAlone(";")
				.toIfHeldDown("r⇧", "r⌥"),
			mapSimultaneous([";", "j"], { key_down_order: "strict" })
				.toIfAlone(";")
				.toIfAlone("j")
				.toIfHeldDown("r⇧", "r⌘"),
			mapSimultaneous(["j", ";"], { key_down_order: "strict" })
				.toIfAlone("j")
				.toIfAlone(";")
				.toIfHeldDown("r⇧", "r⌘"),
			mapSimultaneous(["l", "k"], { key_down_order: "strict" })
				.toIfAlone("l")
				.toIfAlone("k")
				.toIfHeldDown("r⌃", "r⌥"),
			mapSimultaneous(["k", "l"], { key_down_order: "strict" })
				.toIfAlone("k")
				.toIfAlone("l")
				.toIfHeldDown("r⌃", "r⌥"),
			mapSimultaneous(["l", "j"], { key_down_order: "strict" })
				.toIfAlone("l")
				.toIfAlone("j")
				.toIfHeldDown("r⌃", "r⌘"),
			mapSimultaneous(["j", "l"], { key_down_order: "strict" })
				.toIfAlone("j")
				.toIfAlone("l")
				.toIfHeldDown("r⌃", "r⌘"),
			mapSimultaneous(["k", "j"], { key_down_order: "strict" })
				.toIfAlone("k")
				.toIfAlone("j")
				.toIfHeldDown("r⌥", "r⌘"),
			mapSimultaneous(["j", "k"], { key_down_order: "strict" })
				.toIfAlone("j")
				.toIfAlone("k")
				.toIfHeldDown("r⌥", "r⌘"),
			//
			// One - right hand
			map(";")
				.to("r⇧")
				.toIfAlone(";"),
			map("l").to("r⌃").toIfAlone("l"),
			map("k").to("r⌥").toIfAlone("k"),
			map("j").toIfHeldDown("r⌘").toIfAlone("j"),
		]),
	],
	{
		"basic.to_if_held_down_threshold_milliseconds": 120,
	},
);

/*
Karabiner-Elements profile parameters can also be set by the 3rd parameter
of writeToProfile('profileName', [ rules ], { params }). The default values are:

// Karabiner-Elements parameters
'basic.to_if_alone_timeout_milliseconds': 1000,
'basic.to_if_held_down_threshold_milliseconds': 500,
'basic.to_delayed_action_delay_milliseconds': 500,
'basic.simultaneous_threshold_milliseconds': 50,
'mouse_motion_to_scroll.speed': 100,

// karabiner.ts only parameters
//   for simlayer()
'simlayer.threshold_milliseconds': 200
//   for mapDoubleTap()
'double_tap.delay_milliseconds': 200,

 */
